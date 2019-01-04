class Animal < ApplicationRecord
  belongs_to :foster, class_name: "Contact", foreign_key: "contact_id", optional: true
  has_many :images, dependent: :destroy, inverse_of: :animal
  accepts_nested_attributes_for :images, allow_destroy: true

  def as_json(_opts = {})
    {
      id: id,
      name: name,
      breed: breed,
      sex: sex,
      images: images.map do |x|
        {
          url: x.image.url,
          name: x.image_file_name,
          id: x.id
        }
      end
    }
  end
end
