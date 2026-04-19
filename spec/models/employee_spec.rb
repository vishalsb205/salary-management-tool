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

    it "is invalid without an email" do
      employee = Employee.new(
        full_name: "Vishal Sharma",
        job_title: "HR Manager",
        country: "India",
        salary: 75000
      )

      expect(employee).not_to be_valid
      expect(employee.errors[:email]).to include("can't be blank")
    end

    it "is invalid without a salary" do
      employee = Employee.new(
        full_name: "Vishal Sharma",
        email: "hr@example.com"
      )

      expect(employee).not_to be_valid
      expect(employee.errors[:salary]).to include("can't be blank")
    end

    it "is invalid with a duplicate email" do
      Employee.create!(
        full_name: "Existing Employee",
        email: "hr@example.com",
        salary: 75000
      )

      employee = Employee.new(
        full_name: "Vishal Sharma",
        email: "hr@example.com",
        salary: 80000
      )

      expect(employee).not_to be_valid
      expect(employee.errors[:email]).to include("has already been taken")
    end

    it "is invalid with a non-positive salary" do
      employee = Employee.new(
        full_name: "Vishal Sharma",
        email: "hr2@example.com",
        salary: 0
      )

      expect(employee).not_to be_valid
      expect(employee.errors[:salary]).to include("must be greater than 0")
    end

    it "is invalid with a duplicate email in a different case" do
      Employee.create!(
        full_name: "Existing Employee",
        email: "hr@example.com",
        salary: 75000
      )

      employee = Employee.new(
        full_name: "Vishal Sharma",
        email: "HR@EXAMPLE.COM",
        salary: 80000
      )

      expect(employee).not_to be_valid
      expect(employee.errors[:email]).to include("has already been taken")
    end

    it "is invalid with a malformed email" do
      employee = Employee.new(
        full_name: "Vishal Sharma",
        email: "not-an-email",
        salary: 75000
      )

      expect(employee).not_to be_valid
      expect(employee.errors[:email]).to include("is invalid")
    end
  end

  it "has a unique index on email" do
    indexes = ActiveRecord::Base.connection.indexes(:employees)
    email_index = indexes.find { |index| index.columns == ["email"] }

    expect(email_index).not_to be_nil
    expect(email_index.unique).to be(true)
  end

end
