class AddIndexToEmployeesCountry < ActiveRecord::Migration[7.1]
  def change
    add_index :employees, :country
  end
end
