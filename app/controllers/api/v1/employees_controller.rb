module Api
  module V1
    class EmployeesController < ApplicationController
      def index
        render json: Employee.all
      end

      def create
        employee = Employee.new(employee_params)

        if employee.save
          render json: employee, status: :created
        else
          render json: { errors: employee.errors }, status: :unprocessable_entity
        end
      end

      def show
        employee = Employee.find(params[:id])
        render json: employee
      end

      def update
        employee = Employee.find(params[:id])

        if employee.update(employee_params)
            render json: employee
        else
            render json: { errors: employee.errors }, status: :unprocessable_entity
        end
      end

      private

      def employee_params
        params.require(:employee).permit(:full_name, :email, :salary, :job_title, :department, :country, :active)
      end
    end
  end
end
