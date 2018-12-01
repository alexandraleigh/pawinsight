class AddColumnsToAnimal < ActiveRecord::Migration[5.2]
  def change
    add_column :animals, :species, :string
    add_column :animals, :sex, :string
  end
end
