function EmployeeForm() {
  return (
    <form>
      <div>
        <label htmlFor="full_name">Full Name</label>
        <input id="full_name" name="full_name" type="text" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </div>

      <div>
        <label htmlFor="salary">Salary</label>
        <input id="salary" name="salary" type="number" />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input id="country" name="country" type="text" />
      </div>

      <div>
        <label htmlFor="job_title">Job Title</label>
        <input id="job_title" name="job_title" type="text" />
      </div>

      <button type="submit">Save Employee</button>
    </form>
  );
}

export default EmployeeForm;
