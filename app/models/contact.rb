class Contact < ApplicationRecord
  has_many :foster_animals, foreign_key: "contact_id", class_name: "Animal"
end
