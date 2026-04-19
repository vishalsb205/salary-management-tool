module Api
  module V1
    class AnalyticsController < ApplicationController
      def show
        render json: Analytics::CountrySalarySummary.call(country: params[:country])
      end
    end
  end
end
