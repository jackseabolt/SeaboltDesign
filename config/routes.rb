Rails.application.routes.draw do
  resources :blog_posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root 'pages#home'

PagesController.action_methods.each do |action|
    get "/#{action}", to: "pages##{action}", as: "#{action}_page"
end

get "/pages/web", to: "pages#web"
get "/pages/marketing", to: "pages#marketing"
get "/pages/mobile", to: "pages#mobile"

end
