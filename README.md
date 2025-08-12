# Hello-factory Flask App

This is a minimal Flask application ready for deployment on Azure App Services.

## Running Locally

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
2. Run the app:
   ```
   python app.py
   ```

## Deploying to Azure App Services
- Ensure the `Procfile` is present for Gunicorn.
- Set the startup command to `gunicorn --bind=0.0.0.0 --timeout 600 app:create_app` if not auto-detected.

The app will be available at `/` and return a hello message.
