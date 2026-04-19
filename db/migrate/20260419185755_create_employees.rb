class CreateEmployees < ActiveRecord::Migration[7.1]
  def change
    create_table :employees do |t|
      t.string :full_name
      t.string :email
      t.string :job_title
      t.string :country
      t.integer :salary
      t.string :department
      t.boolean :active

      t.timestamps
    end
  end
end
