# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Seeding employees..."

first_names = File.readlines(Rails.root.join("db/seeds/first_names.txt"), chomp: true).reject(&:blank?)
last_names  = File.readlines(Rails.root.join("db/seeds/last_names.txt"), chomp: true).reject(&:blank?)

jobs = ["Software Engineer", "QA Engineer", "Product Manager", "HR Manager", "Data Analyst"]
departments = ["Engineering", "QA", "Product", "HR", "Data"]
countries = ["India", "USA", "UK", "Germany", "Singapore"]

employees = []
used_emails = Set.new

while employees.size < 10000
  first = first_names.sample
  last  = last_names.sample

  next if first.blank? || last.blank?

  email = "#{first.downcase}.#{last.downcase}.#{rand(1000..9999)}@example.com"

  next if used_emails.include?(email)

  used_emails.add(email)

  employees << {
    full_name: "#{first} #{last}",
    email: email,
    job_title: jobs.sample,
    department: departments.sample,
    country: countries.sample,
    salary: rand(30_000..200_000),
    active: true,
    created_at: Time.current,
    updated_at: Time.current
  }
end

result = Employee.insert_all(employees)

puts "Inserted: #{employees.size}"