# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- @vitejs/plugin-react uses Oxc
- @vitejs/plugin-react-swc uses SWC

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performance.

## Expanding the ESLint configuration

For production apps, use TypeScript and eslint tooling.

---

# Salary Management Tool

A minimal salary management system for HR teams to manage employees and view salary insights.

## Tech Stack

### Backend
- Ruby on Rails (API mode)
- PostgreSQL
- RSpec

### Frontend
- React (Vite)
- JavaScript

---

## Features

### Employee Management
- CRUD employees
- full name, email, job title, country, salary, department, active status

### Salary Insights
- min / max / avg salary by country
- avg salary by job title

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

GET /api/v1/analytics?country=India
