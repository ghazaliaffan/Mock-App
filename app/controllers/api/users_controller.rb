class Api::UsersController < Api::BaseController
  def index
    respond_with User.all
  end

  def create
    respond_with :api, User.create(user_params)
  end

  def destroy
    respond_with User.destroy(params[:id])
  end

  def show

  end

  def update
    user = User.find(params["id"])
    user.update_attributes(user_params)
    respond_with user, json: user
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :phone, :password, :admin)
  end
end
