class CreateBands < ActiveRecord::Migration[7.0]
  def change
    create_table :bands do |t|
      t.string :band_name
      t.string :album
      t.string :genre

      t.timestamps
    end
  end
end
