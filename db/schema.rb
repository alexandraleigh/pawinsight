# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_09_041004) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "animals", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.date "dob"
    t.integer "weight"
    t.string "color"
    t.boolean "good_with_kids"
    t.boolean "good_with_dogs"
    t.boolean "good_with_cats"
    t.text "description"
    t.boolean "fixed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "contact_id"
    t.string "species"
    t.string "sex"
    t.index ["contact_id"], name: "index_animals_on_contact_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "phone"
    t.string "notes"
    t.boolean "foster"
    t.boolean "adopter"
    t.boolean "volunteer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.bigint "contact_id"
    t.bigint "animal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["animal_id"], name: "index_images_on_animal_id"
    t.index ["contact_id"], name: "index_images_on_contact_id"
  end

  add_foreign_key "animals", "contacts"
  add_foreign_key "images", "animals"
  add_foreign_key "images", "contacts"
end
