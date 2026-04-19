require "rails_helper"

RSpec.describe Employee, type: :model do
  describe "validations" do
    it "is invalid without a full_name" do
      employee = Employee.new(
        job_title: "HR Manager",
        country: "India",
        salary: 75000,
        email: "hr@example.com"
      )

      expect(employee).not_to be_valid
      expect(employee.errors[:full_name]).to include("can't be blank")
    end
  end
end
