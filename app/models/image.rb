class Image < ApplicationRecord
  belongs_to :contact, inverse_of: :images, optional: true
  belongs_to :animal, inverse_of: :images, optional: true

  has_attached_file \
    :image,
    styles: { thumb: ['500x500#', 'jpg'] },
    convert_options: {
      all: '-interlace Plane'
    },
    default_url: '/images/default_:style_photo.png'

  validates_attachment_presence :image
  validates_attachment_file_name :image, matches: [/png\Z/, /jpe?g\Z/, /gif\Z/]
end
