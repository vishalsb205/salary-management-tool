module Api
  module V1
    class EmployeesController < ApplicationController
      def index
        render json: Employee.all
      end

      def create
        employee = Employee.create!(employee_params)
        render json: employee, status: :created
      end

      private

      def employee_params
        params.require(:employee).permit(:full_name, :email, :salary, :job_title, :department, :country, :active)
      end
    end
  end
end
