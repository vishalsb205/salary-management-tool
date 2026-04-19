class CreateEmployees < ActiveRecord::Migration[7.1]
  def change
    create_table :employees do |t|
      t.string :full_name, null: false
      t.string :email, null: false
      t.string :job_title
      t.string :department
      t.string :country
      t.integer :salary, null: false
      t.boolean :active, null: false, default: true

      t.timestamps
    end
  end
end
