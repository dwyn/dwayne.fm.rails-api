source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.1'
gem 'rails', '~> 5.2.3'
gem 'puma', '~> 3.12'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'devise'
gem 'activeadmin'
gem 'faker', :git => 'https://github.com/stympy/faker.git', :branch => 'master'
gem 'foreman'
# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'
gem 'pg'
gem 'dotenv-rails'
gem 'graphql'
gem "graphiql-rails"
gem "nokogiri", ">= 1.10.4" # I got some weird warning about Nokogiri https://github.com/dwyn/dwayne.fm.rails/network/alerts

gem 'capistrano', '~> 3.11'
gem 'capistrano-rails', '~> 1.4'
gem 'capistrano-passenger', '~> 0.2.0'
gem 'capistrano-rvm'

# group :development, :test do
# end

group :development do
  gem 'pry-rails'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  # Use postgres as the database for production
  gem 'pg'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
