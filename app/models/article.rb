class Article < ApplicationRecord
  belongs_to :admin_user

  scope :published, -> { where.not(published_at: nil) }
  scope :unpublished, -> { where(published_at: nil) }
end
