class AddDefaultToUsers < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :levels_completed, :integer, default: 0
  end
end
