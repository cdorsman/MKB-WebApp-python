from flask import Flask, render_template
import os
from config import Config
from opentelemetry import trace
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

from azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter

app = Flask(__name__)
tracer_provider = TracerProvider(
    resource=Resource.create({SERVICE_NAME: "MKB-WebApp"})
)
trace.set_tracer_provider(tracer_provider)

# Enable tracing for Flask library
FlaskInstrumentor().instrument_app(app)

# Enable tracing for requests library
RequestsInstrumentor().instrument

trace_exporter = AzureMonitorTraceExporter(
    connection_string=Config.CONNECTION_STRING
)

tracer_provider.add_span_processor(
    BatchSpanProcessor(trace_exporter)
)

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port)
