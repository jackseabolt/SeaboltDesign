class ContactFormsController < ApplicationController
	  def new
      @contact_form = ContactForm.new
    end

    def create
      puts contact_form_params
        @contact_form = ContactForm.new(contact_form_params)
        ContactMailer.new_request(@contact_form).deliver_now
        render js: "alert('Thank you for your message!');"
    end

    def contact_form_params
      params.require(:contact_form).permit(:name, :email, :message)
    end
end
