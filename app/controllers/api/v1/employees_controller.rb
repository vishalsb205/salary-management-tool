module Api
  module V1
    class EmployeesController < ApplicationController
      def index
        employees = Employee.all

        if params[:page].present? || params[:per_page].present?
            page = params.fetch(:page, 1).to_i
            per_page = params.fetch(:per_page, 25).to_i

          paginated_employees = employees.offset((page - 1) * per_page).limit(per_page)

          render json: {
          employees: paginated_employees,
          meta: {
              page: page,
              per_page: per_page,
              total_count: employees.count
            }
          }
        else
          render json: employees
        end
      end

      def create
        employee = Employee.new(employee_params)

        if employee.save
          render json: employee, status: :created
        else
          render json: { errors: employee.errors }, status: :unprocessable_content
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
            render json: { errors: employee.errors }, status: :unprocessable_content
        end
      end

      def destroy
        employee = Employee.find(params[:id])
        employee.destroy
        head :no_content
      end


      private

      def employee_params
        params.require(:employee).permit(:full_name, :email, :salary, :job_title, :department, :country, :active)
      end
    end
  end
end
