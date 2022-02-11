class CreateBands < ActiveRecord::Migration[7.0]
  def change
    create_table :bands do |t|
      t.string :band_name
      t.string :album
      t.string :genre
      t.string :img
      t.string :bio
      t.string :player
      t.string :player2
      t.string :player3

      t.timestamps
    end
  end
end
