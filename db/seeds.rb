puts 'seeding users'
u1 = User.create(username: "Babe", bio: "it me", password_digest: "beepboop")

puts 'seeding bands'
b1 = Band.create(band_name: "GAS", album: "Pop", genre: "Ambient", img: "https://f4.bcbits.com/img/a3083601247_10.jpg")
b2 = Band.create(band_name: "Gorillaz", album: "The Fall", genre: "Everything", img: "https://i.discogs.com/qT_YToXUAjhA6SATtg2ap072xB0XkiGwkaGC1LUMGA8/rs:fit/g:sm/q:90/h:543/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTU2/OTY5MDctMTQ4MDgw/OTI3NS00OTU5Lmpw/ZWc.jpeg")
b3 = Band.create(band_name: "Kudzu", album: "Defeated", genre: "Post-Punk", img: "https://e.snmc.io/i/600/s/e067e0556d7a3b44b8b8f9a58d1a08b6/6767346/kudzu-defeated-Cover-Art.jpg")
b4 = Band.create(band_name: "Mastodon", album: "Once More 'Round the Sun", genre: "Heavy Metal", img: "https://m.media-amazon.com/images/I/91Sol7lrRiL._SL1425_.jpg")
b5 = Band.create(band_name: "Rendez Vous", album: "Distance", genre: "Post-Punk", img: "https://f4.bcbits.com/img/a3592202202_10.jpg")
b6 = Band.create(band_name: "Retail", album: "Dead", genre: "Punk", img: "https://s3.amazonaws.com/assets.imposemagazine.com/wp-content/uploads/2016/11/a2738897911_10.jpg")
b7 = Band.create(band_name: "SHXCXCHCXSH", album: "Entering The S-Cloud", genre: "Ambient/Experimental", img: "https://lastfm.freetls.fastly.net/i/u/770x0/1d8ffff7ba7b1af51015ba28335f7c81.jpg")
b8 = Band.create(band_name: "Sweet Trip", album: "Velocity:Design:Comfort", genre: "Shoegaze", img: "https://cdn.shopify.com/s/files/1/0961/0594/products/DRL136_3000x3000_RGB.jpg?v=1574295316")
b9 = Band.create(band_name: "Warthog", album: "Warthog", genre: "Hardcore Punk", img: "https://f4.bcbits.com/img/a1029186125_10.jpg")



puts 'seeding reviews'
review1=Review.create(title: "Good Album", description: "I really enjoy this album", user_id: u1.id, band_id: b1.id)

puts 'done seeding!'