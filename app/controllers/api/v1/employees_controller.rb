module Api
  module V1
    class EmployeesController < ApplicationController
      def index
        render json: []
      end
    end
  end
end
