# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :hello_world, only: :index
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
