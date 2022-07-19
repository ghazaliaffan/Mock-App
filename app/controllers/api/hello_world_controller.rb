# frozen_string_literal: true

module Api
  class HelloWorldController < BaseController
    def index
      render status: :ok, json: { message: 'Hello World' }
    end
  end
end
