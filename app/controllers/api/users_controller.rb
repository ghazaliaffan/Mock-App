class Api::UsersController < Api::BaseController
  before_action :find_user, only: [:show, :update]

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
    if user
      render json: "User Created!"
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    User.destroy(params[:id])
  end

  def show
    if user
      render json: user
    else
      render json: {
        error: "No such user",
        status: 400
      }, status: 400
    end
  end

  def update
    user.update_attributes(user_params)
    render json: user
  end

  private

  def find_user
    user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :name, :phone, :password, :admin)
  end
end
