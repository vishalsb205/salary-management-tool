require "rails_helper"

RSpec.describe Analytics::CountrySalarySummary do
  describe ".call" do
    it "returns min, max, and average salary for a country" do
      Employee.create!(
        full_name: "Asha Sharma",
        email: "asha@example.com",
        salary: 50000,
        country: "India"
      )

      Employee.create!(
        full_name: "Ravi Kumar",
        email: "ravi@example.com",
        salary: 70000,
        country: "India"
      )

      Employee.create!(
        full_name: "John Smith",
        email: "john@example.com",
        salary: 90000,
        country: "USA"
      )

      result = described_class.call(country: "India")

      expect(result).to include(
        country: "India",
        min_salary: 50000,
        max_salary: 70000,
        avg_salary: 60000.0
      )
    end

    it "returns average salary by job title within a country" do
      Employee.create!(
        full_name: "Asha Sharma",
        email: "asha@example.com",
        salary: 50000,
        country: "India",
        job_title: "Engineer"
      )

      Employee.create!(
        full_name: "Ravi Kumar",
        email: "ravi@example.com",
        salary: 70000,
        country: "India",
        job_title: "Engineer"
      )

      Employee.create!(
        full_name: "Priya Singh",
        email: "priya@example.com",
        salary: 60000,
        country: "India",
        job_title: "HR Manager"
      )

      Employee.create!(
        full_name: "John Smith",
        email: "john@example.com",
        salary: 90000,
        country: "USA",
        job_title: "Engineer"
      )

      result = described_class.call(country: "India")

      expect(result[:average_salary_by_job_title]).to eq(
        {
        "Engineer" => 60000.0,
        "HR Manager" => 60000.0
        }
      )
    end

    it "returns employee count for the country" do
      Employee.create!(
        full_name: "Asha Sharma",
        email: "asha@example.com",
        salary: 50000,
        country: "India"
      )

      Employee.create!(
        full_name: "Ravi Kumar",
        email: "ravi@example.com",
        salary: 70000,
        country: "India"
      )

      Employee.create!(
        full_name: "John Smith",
        email: "john@example.com",
        salary: 90000,
        country: "USA"
      )

      result = described_class.call(country: "India")
      expect(result[:employee_count]).to eq(2)
    end
  end
end
