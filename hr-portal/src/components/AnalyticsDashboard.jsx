import { useEffect, useMemo, useState } from "react";

function AnalyticsDashboard() {
  const [country, setCountry] = useState("India");
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/analytics?country=${country}`)
      .then((response) => response.json())
      .then((data) => setAnalytics(data));
  }, [country]);

  const sortedJobStats = useMemo(() => {
    const jobStats = analytics?.average_salary_by_job_title || {};

    return Object.entries(jobStats).sort((a, b) => b[1] - a[1]);
  }, [analytics]);

  return (
    <div>
      <label htmlFor="analytics-country">Country</label>

      <select
        id="analytics-country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Germany">Germany</option>
        <option value="Singapore">Singapore</option>
      </select>

      {analytics && (
        <div className="analytics-block">
          <div className="analytics-stats">
            <p>Employee Count: {analytics.employee_count}</p>
            <p>Minimum Salary: {analytics.min_salary}</p>
            <p>Maximum Salary: {analytics.max_salary}</p>
            <p>Average Salary: {analytics.avg_salary}</p>
          </div>

          <div className="analytics-job">
            <h3>Average Salary by Job Title</h3>

            <div className="job-list">
              {sortedJobStats.map(([jobTitle, averageSalary]) => (
                <div key={jobTitle} className="job-row">
                  <span className="job-title">{jobTitle}</span>
                  <span className="job-value">
                    {Math.round(averageSalary)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnalyticsDashboard;