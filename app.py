from flask import Flask
import os

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def hello():
        return 'Hello, Azure App Services!'

    return app

if __name__ == '__main__':
    app = create_app()
    port = int(os.environ.get('PORT', 443))
    app.run(host='0.0.0.0', port=port)
