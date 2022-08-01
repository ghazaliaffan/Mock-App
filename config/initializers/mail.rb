ActionMailer::Base.smtp_settings = {
  address: "smtp.mandrillapp.com",
  port: 587,
  enable_starttls_auto: true,
  authentication: "login",
  user_name: ENV['username'],
  password: ENV['password']

}

ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.default charset: "utf-8"
