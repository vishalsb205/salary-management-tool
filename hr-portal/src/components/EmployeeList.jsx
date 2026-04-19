import { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.full_name}</td>
            <td>{employee.email}</td>
            <td>{employee.salary}</td>
            <td>{employee.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
