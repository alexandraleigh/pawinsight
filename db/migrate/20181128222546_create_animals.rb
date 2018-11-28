class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :breed
      t.date :dob
      t.integer :weight
      t.string :color
      t.boolean :good_with_kids
      t.boolean :good_with_dogs
      t.boolean :good_with_cats
      t.text :description
      t.boolean :fixed

      t.timestamps
    end
  end
end
