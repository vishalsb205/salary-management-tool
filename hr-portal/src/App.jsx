import { useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import AnalyticsDashboard from "./components/AnalyticsDashboard";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  function handleEmployeeCreated() {
    setRefreshKey((current) => current + 1);
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Salary Management Tool</h1>
        <nav className="app-nav">
          <a href="#employees">Employees</a>
          <a href="#employee-form">Add Employee</a>
          <a href="#analytics">Analytics</a>
        </nav>
      </header>

      <main className="app-content">
        <section id="employees">
          <h2>Employees</h2>
          <EmployeeList refreshKey={refreshKey} />
        </section>

        <section id="employee-form">
          <h2>Add Employee</h2>
          <EmployeeForm onEmployeeCreated={handleEmployeeCreated} />
        </section>

        <section id="analytics">
          <h2>Analytics</h2>
          <AnalyticsDashboard />
        </section>
      </main>
    </div>
  );
}

export default App;
