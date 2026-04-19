require "rails_helper"

RSpec.describe "Api::V1::Employees", type: :request do
  describe "GET /api/v1/employees" do
    it "returns an empty list" do
      get "/api/v1/employees"

      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to eq([])
    end

    it "returns employees" do
      employee = Employee.create!(
        full_name: "Vishal Sharma",
        email: "vishal@example.com",
        salary: 75000
      )

      get "/api/v1/employees"

      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to eq(
        [
          {
            "id" => employee.id,
            "full_name" => "Vishal Sharma",
            "email" => "vishal@example.com",
            "salary" => 75000,
            "job_title" => nil,
            "department" => nil,
            "country" => nil,
            "active" => true,
            "created_at" => employee.created_at.as_json,
            "updated_at" => employee.updated_at.as_json
          }
        ]
      )
    end
  end
end
