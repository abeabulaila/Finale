puts 'seeding users'
userfirst = User.create(username: "Babe", bio: "it me", password_digest: "beepboop")

puts 'seeding bands'
bandfirst = Band.create(band_name: "Sweet Trip", album: "Velocity:Design:Comfort", genre: "shoegaze")

puts 'seeding reviews'
review1=Review.create(title: "Good Album", description: "I really enjoy this album", user_id: userfirst.id, band_id: bandfirst.id)

puts 'done seeding!'