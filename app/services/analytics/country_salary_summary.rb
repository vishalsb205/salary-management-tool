module Analytics
  class CountrySalarySummary
    def self.call(country:)
      scope = Employee.where(country: country)

      {
        country: country,
        min_salary: scope.minimum(:salary),
        max_salary: scope.maximum(:salary),
        avg_salary: scope.average(:salary).to_f
      }
    end
  end
end
