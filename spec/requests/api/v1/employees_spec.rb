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

  describe "POST /api/v1/employees" do
    it "creates an employee" do
      expect do
        post "/api/v1/employees", params: {
          employee: {
            full_name: "Vishal Sharma",
            email: "vishal@example.com",
            salary: 75000
          }
        }
      end.to change(Employee, :count).by(1)

      expect(response).to have_http_status(:created)

      body = JSON.parse(response.body)

      expect(body["full_name"]).to eq("Vishal Sharma")
      expect(body["email"]).to eq("vishal@example.com")
      expect(body["salary"]).to eq(75000)
    end
  end
end
