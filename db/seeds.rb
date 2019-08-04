
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
User.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

20.times do 
  Article.create!(
    title: Faker::Games::Zelda.game,
    body: Faker::Hipster.paragraphs,
    description: Faker::Games::Zelda.item,
    user_id: 1,
    published_at: Time.zone.now
  )
end