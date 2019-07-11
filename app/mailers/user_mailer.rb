class UserMailer < ApplicationMailer
  def welcome_email(user)
    mail(to: user.email,
      subject: "Test String!"
    )
  end
end
