function EmployeeList() {
  const employees = [
    {
      id: 1,
      full_name: "Vishal Sharma",
      email: "vishal@example.com",
      salary: 75000,
      country: "India",
    },
    {
      id: 2,
      full_name: "Asha Patel",
      email: "asha@example.com",
      salary: 82000,
      country: "India",
    },
  ];

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
