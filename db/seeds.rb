puts 'seeding users'
userfirst = User.create(username: "Babe", bio: "it me", password_digest: "beepboop")

puts 'seeding bands'
bandfirst = Band.create(band_name: "Sweet Trip", album: "Velocity:Design:Comfort", genre: "shoegaze", img: "https://i.scdn.co/image/ab6761610000e5eb1c6ef535b34a0cfa5c5b3b65")
bandsecond = Band.create(band_name: "Retail", album: "Dead", genre: "punk", img: "https://s3.amazonaws.com/assets.imposemagazine.com/wp-content/uploads/2016/11/a2738897911_10.jpg")

puts 'seeding reviews'
review1=Review.create(title: "Good Album", description: "I really enjoy this album", user_id: userfirst.id, band_id: bandfirst.id)

puts 'done seeding!'