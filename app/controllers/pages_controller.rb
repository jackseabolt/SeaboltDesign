class PagesController < ApplicationController
	helper_method :define_contact_form

	def home
	
	end

	def about
		
	end

	def contact

	end 

	def portfolio

	end

	def web

	end 

	def marketing

	end

	def mobile

	end 

	private 

		def define_contact_form
			ContactForm.new
		end

end
