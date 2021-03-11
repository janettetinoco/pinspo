Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    
    resources :pins, only:[:create, :show, :index]
    resources :boards, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :board_pins, only:[:create, :show]
    
  end

end
