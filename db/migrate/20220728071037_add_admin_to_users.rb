class AddAdminToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :admin, :boolean, default: false
    add_column :users, :name, :string, required: true
    add_column :users, :phone, :string, required: true
  end
end
