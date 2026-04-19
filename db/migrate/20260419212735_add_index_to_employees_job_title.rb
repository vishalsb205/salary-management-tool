class AddIndexToEmployeesJobTitle < ActiveRecord::Migration[7.1]
  def change
    add_index :employees, :job_title
  end
end
