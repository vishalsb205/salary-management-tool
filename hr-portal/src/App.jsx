import { useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import AnalyticsDashboard from "./components/AnalyticsDashboard";

function App() {
  const [activeTab, setActiveTab] = useState("employees");
  const [refreshKey, setRefreshKey] = useState(0);

  function handleEmployeeCreated() {
    setRefreshKey((current) => current + 1);
    setActiveTab("employees"); // auto switch back
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Salary Management Tool</h1>

        <div className="app-tabs">
          <button
            className={activeTab === "employees" ? "active" : ""}
            onClick={() => setActiveTab("employees")}
          >
            Employees
          </button>

          <button
            className={activeTab === "add" ? "active" : ""}
            onClick={() => setActiveTab("add")}
          >
            Add Employee
          </button>

          <button
            className={activeTab === "analytics" ? "active" : ""}
            onClick={() => setActiveTab("analytics")}
          >
            Analytics
          </button>
        </div>
      </header>

      <main className="app-content">
        {activeTab === "employees" && (
          <section>
            <h2>Employees</h2>
            <EmployeeList refreshKey={refreshKey} />
          </section>
        )}

        {activeTab === "add" && (
          <section>
            <h2>Add Employee</h2>
            <EmployeeForm onEmployeeCreated={handleEmployeeCreated} />
          </section>
        )}

        {activeTab === "analytics" && (
          <section>
            <h2>Analytics</h2>
            <AnalyticsDashboard />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;