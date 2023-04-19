class UserMailer < ApplicationMailer
    def alert_admin
        mail(to: 'ak118193@gmail.com',
        subject: 'alert is there ')
    end
end
 