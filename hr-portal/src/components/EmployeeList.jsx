import { useEffect, useState } from "react";

function EmployeeList({ refreshKey, setRefreshKey }) {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState(null);

  const [editingEmployee, setEditingEmployee] = useState(null);
  const [form, setForm] = useState({});

  // FETCH EMPLOYEES
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/v1/employees?page=${page}&per_page=25`
    )
      .then((r) => r.json())
      .then((data) => {
        setEmployees(data.employees || data);
        setMeta(data.meta || null);
      });
  }, [refreshKey, page]);

  // DELETE
  function handleDelete(id) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (!confirmDelete) return;

  fetch(`http://localhost:3000/api/v1/employees/${id}`, {
    method: "DELETE",
  }).then(() => {
    setRefreshKey((k) => k + 1);
  });
}

  // OPEN EDIT MODAL
  function openEdit(emp) {
    setEditingEmployee(emp);

    setForm({
      full_name: emp.full_name || "",
      email: emp.email || "",
      salary: emp.salary || "",
      job_title: emp.job_title || "",
      department: emp.department || "",
      country: emp.country || "",
      active: emp.active || false,
    });
  }

  // CLOSE MODAL
  function closeModal() {
    setEditingEmployee(null);
    setForm({});
  }

  // UPDATE
  function handleUpdate(e) {
    e.preventDefault();

    fetch(
      `http://localhost:3000/api/v1/employees/${editingEmployee.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employee: form,
        }),
      }
    ).then(() => {
      closeModal();
      setRefreshKey((k) => k + 1);
    });
  }

  const totalPages = meta?.total_count
    ? Math.ceil(meta.total_count / 25)
    : null;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Country</th>
            <th>Job Title</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.full_name}</td>
              <td>{e.email}</td>
              <td>{e.salary}</td>
              <td>{e.country}</td>
              <td>{e.job_title}</td>
              <td className="actions">
                <button onClick={() => openEdit(e)}>Edit</button>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION (CENTERED FIX) */}
      <div className="pagination">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        <span>
          Page {page}
          {totalPages ? ` / ${totalPages}` : ""}
        </span>

        <button
          onClick={() => {
            if (!totalPages || page < totalPages) {
              setPage((p) => p + 1);
            }
          }}
          disabled={totalPages ? page >= totalPages : false}
        >
          Next
        </button>
      </div>

      {/* EDIT MODAL */}
      {editingEmployee && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Employee</h3>

            <form className="modal-form" onSubmit={handleUpdate}>
              <input
                value={form.full_name}
                onChange={(e) =>
                  setForm({ ...form, full_name: e.target.value })
                }
                placeholder="Full Name"
              />

              <input
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="Email"
              />

              <input
                value={form.salary}
                onChange={(e) =>
                  setForm({ ...form, salary: e.target.value })
                }
                placeholder="Salary"
              />

              <input
                value={form.country}
                onChange={(e) =>
                  setForm({ ...form, country: e.target.value })
                }
                placeholder="Country"
              />

              <input
                value={form.job_title}
                onChange={(e) =>
                  setForm({ ...form, job_title: e.target.value })
                }
                placeholder="Job Title"
              />

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeList;