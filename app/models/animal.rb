class Animal < ApplicationRecord
  belongs_to :foster, class_name: "Contact", foreign_key: "contact_id"
end
