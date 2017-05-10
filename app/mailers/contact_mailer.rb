class ContactMailer < ApplicationMailer

	def new_request(contact_mailer)
		@contact_mailer = contact_mailer
		mail(to: 'jackseabolt@gmail.com', subject: 'Message from SeaboltDesign.com')
	end 

end
