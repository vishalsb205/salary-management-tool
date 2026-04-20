# Salary Management Tool

salary management system for HR teams to manage employees and analyze salary insights for 10,000+ employees.

## Tech Stack

### Backend
- Ruby on Rails (API mode)
- SQLite / PostgreSQL
- RSpec

### Frontend
- React (Vite)
- JavaScript

---

## Features

### Employee Management
- Create, Read, Update, Delete employees
- Fields: full name, email, job title, department, country, salary, active status
- Pagination support for large datasets

### Salary Insights
- Minimum / Maximum / Average salary by country
- Average salary by job title

---

## System Architecture

- React frontend (UI layer)
- Rails API backend
- REST APIs for communication
- JSON-based data exchange
- Stateless frontend-backend interaction

---

## Data Seeding

- Generates **10,000 employees**
- Full names generated using `first_names.txt` and `last_names.txt`
- Bulk insert used for performance optimization

---

## Backend Setup

bundle install  
bin/rails db:create db:migrate  
bin/rails server  

---

## Frontend Setup

cd hr-portal  
npm install  
npm run dev  

---

## Testing

bundle exec rspec

---

## API Endpoints

GET /api/v1/employees  
POST /api/v1/employees  
PATCH /api/v1/employees/:id  
DELETE /api/v1/employees/:id  

## Analytics

GET /api/v1/analytics?country=India

## Performance Considerations

- Pagination implemented for large datasets (10,000+ employees)
- Bulk insert used for seeding efficiency
- Indexed fields for faster analytics queries