import { useEffect, useState } from "react";

function EmployeeList({ refreshKey }) {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:3000/api/v1/employees?page=${page}&per_page=25`
    )
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data.employees || data);
        setMeta(data.meta || null);
      });
  }, [refreshKey, page]);

  return (
    <div>
      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Country</th>
            <th>Job Title</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.full_name}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{employee.country}</td>
              <td>{employee.job_title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page}
          {meta?.total_count
            ? ` / ${Math.ceil(meta.total_count / 25)}`
            : ""}
        </span>

        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}

export default EmployeeList;