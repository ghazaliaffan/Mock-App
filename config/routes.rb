# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    root 'home#index'
    resources :users, only: [:index, :show, :edit, :update, :create, :destroy]
    resources :hello_world, only: :index
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
