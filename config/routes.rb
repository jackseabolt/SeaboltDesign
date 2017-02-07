Rails.application.routes.draw do

	root 'pages#home'
	resources :contact_forms
	get "/pages/web", to: "pages#web"
	get "/pages/marketing", to: "pages#marketing"
	get "/pages/mobile", to: "pages#mobile"

	PagesController.action_methods.each do |action|
   		get "/#{action}", to: "pages##{action}", as: "#{action}_page"
	end

end
