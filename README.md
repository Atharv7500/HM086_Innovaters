# SDG Collaboration Platform

## How to Run in VS Code

### 1. Open Project
Open the folder `d:\Innovaters\SDG_Collaboration_Platform` in VS Code.

### 2. Backend (Django)
1.  Open a new terminal in VS Code (`Ctrl+Shift+\``).
2.  Activate the virtual environment:
    ```powershell
    .\.venv\Scripts\Activate
    ```
3.  Navigate to the backend directory:
    ```powershell
    cd backend
    ```
4.  Run migrations (optional, to ensure DB is ready):
    ```powershell
    python manage.py migrate
    ```
5.  Start the server:
    ```powershell
    python manage.py runserver
    ```
    The backend will run at [http://127.0.0.1:8000](http://127.0.0.1:8000).

### 3. Frontend (Next.js)
1.  Open a **second** terminal instance (split terminal or new tab).
2.  Navigate to the frontend directory:
    ```powershell
    cd frontend
    ```
3.  Install dependencies (if not already done):
    ```powershell
    npm install
    ```
4.  Start the development server:
    ```powershell
    npm run dev
    ```
    The frontend will run at [http://localhost:3000](http://localhost:3000).

## Project Features
- **Dashboards**: Organization and Admin views.
- **Projects**: SDG-aligned project listings.
- **Impact**: Progress tracking and metrics.
- **Collaboration**: Partnership requests and messaging.
