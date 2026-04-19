import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    salary: "",
    country: "",
    job_title: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <form>
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
