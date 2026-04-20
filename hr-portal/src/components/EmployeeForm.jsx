import { useState } from "react";
import API_BASE_URL from "../config/api";

function EmployeeForm({ onEmployeeCreated }) {
  const initialFormData = {
    full_name: "",
    email: "",
    salary: "",
    country: "",
    job_title: "",
    department: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/employees`,
        {
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
        }
      );

      if (response.ok) {
        setFormData(initialFormData);
        onEmployeeCreated();
      }
    } catch (error) {
      console.error("Error creating employee:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="full_name"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="salary"
        type="number"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <input
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />

      <input
        name="job_title"
        placeholder="Job Title"
        value={formData.job_title}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;