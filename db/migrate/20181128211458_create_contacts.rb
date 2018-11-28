class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :phone
      t.string :notes
      t.boolean :foster
      t.boolean :adopter
      t.boolean :volunteer

      t.timestamps
    end
  end
end
