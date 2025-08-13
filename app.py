from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return '<h1>Hello, MKB-bedrijf!</h1>'

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port)
