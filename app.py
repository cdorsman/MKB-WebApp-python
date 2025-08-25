from flask import Flask, render_template
import os
from opentelemetry import trace
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter
from opentelemetry.instrumentation.flask import FlaskInstrumentor

# Define service name for Azure Monitor
resource = Resource.create({"service.name": "flask-otel-app"})

# Configure tracer provider
provider = TracerProvider(resource=resource)
trace.set_tracer_provider(provider)
tracer = trace.get_tracer(__name__)

# Configure Azure Monitor exporter for Application Insights
conn_str: str = os.getenv('APPLICATION_INSIGHTS_CONN_STR', '')

if conn_str == '':
    raise ValueError("No Application Insights connection string provided.")

azure_monitor_exporter = AzureMonitorTraceExporter().from_connection_string(conn_str)
span_processor = BatchSpanProcessor(azure_monitor_exporter)
provider.add_span_processor(span_processor)

app = Flask(__name__)

FlaskInstrumentor().instrument_app(app)

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port)
