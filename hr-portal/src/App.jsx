import "./App.css";

function App() {
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
          <p>Employee list will appear here.</p>
        </section>

        <section id="employee-form">
          <h2>Add Employee</h2>
          <p>Employee form will appear here.</p>
        </section>

        <section id="analytics">
          <h2>Analytics</h2>
          <p>Salary insights will appear here.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
