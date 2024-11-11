### Notes App - Retainer 📝

A full-stack note-taking application built using Django for the backend and React for the frontend. This beginner-friendly project helps you learn how to create, view, update, delete, filter, and search notes in an interactive and functional web application. Perfect for newcomers to full-stack development!
Getting Started
#### Prerequisites

Python 3.x
Node.js & npm
Django and React libraries

#### Installation

Clone the repository:
git clone https://github.com/gray-learn/retainer
cd notes-app

Set up the backend (Django):
backend
python -m venv venv
source venv/bin/activate
# On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt
django-admin startproject backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
The backend is now running at http://127.0.0.1:8000/.
Set up the frontend (React):
cd ../frontend
npm install
npm start

#### Features

Create, view, update, delete, filter, and search notes
User authentication (registration, login, logout)
Responsive and intuitive user interface

#### Technologies Used

Backend: Django
Frontend: React
Database: SQLite (default with Django)
UI Library: Material-UI

Contributing
If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
License
This project is licensed under the MIT License.
