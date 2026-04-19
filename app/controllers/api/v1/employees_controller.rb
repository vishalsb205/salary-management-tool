module Api
  module V1
    class EmployeesController < ApplicationController
      def index
        render json: Employee.all
      end
    end
  end
end
