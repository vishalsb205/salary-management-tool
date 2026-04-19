require "rails_helper"

RSpec.describe "Api::V1::Analytics", type: :request do
  describe "GET /api/v1/analytics" do
    it "returns salary summary for a country" do
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

      get "/api/v1/analytics", params: { country: "India" }

      expect(response).to have_http_status(:ok)

      body = JSON.parse(response.body)

      expect(body).to include(
        "country" => "India",
        "min_salary" => 50000,
        "max_salary" => 70000,
        "avg_salary" => 60000.0
      )
    end
  end
end
