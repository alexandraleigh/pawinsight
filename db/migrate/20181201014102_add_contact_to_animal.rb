class AddContactToAnimal < ActiveRecord::Migration[5.2]
  def change
    add_reference :animals, :contact, foreign_key: true
  end
end
