class ContactMailer < ApplicationMailer

	def new_request(contact_mailer)
		@contact_mailer = contact_mailer
		mail(to: 'jackseabolt@gmail.com', subject: 'Message from JackSeabolt.com')
	end 

end
