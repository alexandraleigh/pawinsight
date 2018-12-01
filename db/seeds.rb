# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do
  Animal.create(name: Faker::Dog.name,
                breed: Faker::Dog.breed,
                species: "Dog",
                sex: Faker::Dog.gender,
                dob: Faker::Date.between(15.years.ago, Date.today),
                weight: Faker::Number.between(1, 150),
                color: Faker::Color.color_name,
                fixed: Faker::Boolean.boolean,
                good_with_kids: Faker::Boolean.boolean,
                good_with_dogs: Faker::Boolean.boolean,
                good_with_cats: Faker::Boolean.boolean,
                description: Faker::Lorem.paragraph)
end
