import { useState } from "react";

function EmployeeForm({ onEmployeeCreated }) {
  const initialFormData = {
    full_name: "",
    email: "",
    salary: "",
    country: "",
    job_title: "",
  };

  const [formData, setFormData] = useState(initialFormData);


  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3000/api/v1/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employee: {
          ...formData,
          salary: Number(formData.salary),
        },
      }),
    }).then((response) => {
      if (response.ok) {
        setFormData(initialFormData);
        onEmployeeCreated();
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="full_name">Full Name</label>
        <input
          id="full_name"
          name="full_name"
          type="text"
          value={formData.full_name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          type="text"
          value={formData.country}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="job_title">Job Title</label>
        <input
          id="job_title"
          name="job_title"
          type="text"
          value={formData.job_title}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Save Employee</button>
    </form>
  );
}

export default EmployeeForm;
