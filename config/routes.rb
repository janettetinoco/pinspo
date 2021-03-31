Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    
    resources :pins, only:[:create, :show, :index]
    resources :boards, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :board_pins, only:[:create, :show]
    resources :user_follows, only:[:create, :destroy, :show]
    delete '/board_pins/unpin', to: 'board_pins#unpin'
  end

end
