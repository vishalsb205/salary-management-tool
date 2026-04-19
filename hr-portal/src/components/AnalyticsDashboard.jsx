import { useEffect, useState } from "react";

function AnalyticsDashboard() {
  const [country, setCountry] = useState("India");
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/analytics?country=${country}`)
      .then((response) => response.json())
      .then((data) => setAnalytics(data));
  }, [country]);

  return (
    <div>
      <label htmlFor="analytics-country">Country</label>
      <input
        id="analytics-country"
        type="text"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />

      {analytics && (
        <div>
            <p>Employee Count: {analytics.employee_count}</p>
            <p>Minimum Salary: {analytics.min_salary}</p>
            <p>Maximum Salary: {analytics.max_salary}</p>
            <p>Average Salary: {analytics.avg_salary}</p>

            <div>
            <h3>Average Salary by Job Title</h3>
            <ul>
                {Object.entries(analytics.average_salary_by_job_title || {}).map(
                ([jobTitle, averageSalary]) => (
                    <li key={jobTitle}>
                    {jobTitle}: {averageSalary}
                    </li>
                )
                )}
            </ul>
            </div>
        </div>
        )}
    </div>
  );
}

export default AnalyticsDashboard;
