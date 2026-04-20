import { useEffect, useMemo, useState } from "react";
import API_BASE_URL from "../config/api";

function AnalyticsDashboard() {
  const [country, setCountry] = useState("India");
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAnalytics() {
      setLoading(true);

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/v1/analytics?country=${country}`
        );

        const data = await response.json();
        setAnalytics(data);
      } catch (err) {
        console.error("Analytics fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
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

      {loading && <p>Loading analytics...</p>}

      {analytics && !loading && (
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