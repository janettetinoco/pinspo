# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


User.delete_all
demo = User.create(username:'Demo', email:'demo@email.com', password:'1234567', age:1);
user1 = User.create(username:'Melissa', email:'Melissa@gmail.com', password:'1234567', age:23);
user2 = User.create(username:'Albert', email:'albert@gmail.com', password:'1234567', age:25);
user3 = User.create(username:'trey123', email:'trey123@gmail.com', password:'1234567', age:15);
user4 = User.create(username:'cindy15', email:'cindy12@gmail.com', password:'1234567', age:21);
user5 = User.create(username:'Tony1351', email:'tony@gmail.com', password:'1234567', age:26);



Board.delete_all
board1 = Board.create(title: "Decor", description: "for home", author_id: demo.id)
board2 = Board.create(title: "where to go", description: "", author_id: demo.id)
board3 = Board.create(title: "Weekend Activities", description: "", author_id: user5.id)
board4 = Board.create(title: "newest board", description: "", author_id: demo.id)
board5 = Board.create(title: "Birthday Party Ideas", description: "hawaiian theme", author_id: user1.id)
board6 = Board.create(title: "Baby Gifts", description: "", author_id: demo.id)
board7 = Board.create(title: "Spring Fashion", description: "", author_id: user1.id)
board8 = Board.create(title: "Places to Visit", description: "within the US", author_id: user5.id)
board9 = Board.create(title: "Baking", description: "low sugar", author_id: user3.id)
board10 = Board.create(title: "Fashion", description: "casual", author_id: user3.id)
board11 = Board.create(title: "Baking", description: "birthday cakes", author_id: user4.id)
board12 = Board.create(title: "Organization Ideas", description: "for closet in bedroom", author_id: user5.id)
board13 = Board.create(title: "Organization Ideas", description: "", author_id: demo.id)

Pin.delete_all
image1 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/TrVA7zqt9V1cc9nTX1gYEkfF')
image3 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/w3jRugVWyp29cKbNLYvr4ReU')
image4 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/8cGWTv5nYsQz6UijFMhAAHd4')
image6 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/icyNdXqMCUnmBnN6HvadascU')
image8 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/3KdH94pp3nJJdVGsfXarDNP8')
image10 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/hNqwN16aecx2va2xaCP1xasN')
image12 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/a3JZLNKfseAivxHDPfefzigy')
image13 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/closet_organization.jpg')
image14 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/home_interior.jpg')
image15 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/outfit_2.jpg')
image16 = open('https://pinspo-dev.s3-us-west-1.amazonaws.com/plant_wall.jpg')
image17= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/travel_idea.jpg')
image18= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/travel_pack.jpg')
image19= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding.jpg')


pin1 = Pin.create(title: "rainbow organization", author_id: user5.id, board_id: board12.id)
pin2 = Pin.create(title: "old car rides", author_id: user5.id, board_id: board3.id)
pin3 = Pin.create(title: "in the city", author_id: user1.id, board_id: board7.id)
pin4 = Pin.create(title: "Arizona Hot Air Ballons", author_id: demo.id, board_id: board2.id)
pin5 = Pin.create(title: "Wall Decor", author_id: demo.id, board_id: board1.id)
pin6 = Pin.create(title: "Desk Area decor", author_id: demo.id, board_id: board1.id)
pin7 = Pin.create(title: "Rainforest Living", author_id: demo.id, board_id: board1.id)
pin8 = Pin.create(title: "Organized Closet", author_id: demo.id, board_id: board13.id)
pin9 = Pin.create(title: "Living Room Decor", author_id: demo.id, board_id: board1.id)
pin10 = Pin.create(title: "Patio", author_id: demo.id, board_id: board1.id)
pin11 = Pin.create(title: "Airport Outfit", author_id: user3.id, board_id: board10.id)
pin12 = Pin.create(title: "Packing", author_id: demo.id, board_id: board2.id)
pin13 = Pin.create(title: "Arizona", author_id: demo.id, board_id: board2.id)
pin14 = Pin.create(title: "Outdoor wedding", author_id: demo.id, board_id: board4.id)


pin1.image.attach(io: image3, filename: 'closet_organization_2.jpg')
pin2.image.attach(io: image1, filename: 'car.jpg')
pin3.image.attach(io: image6, filename: 'outfit_1.jpg')
pin4.image.attach(io: image10, filename: 'travel_idea.jpg')
pin5.image.attach(io: image12, filename: 'wall_decor.png')
pin6.image.attach(io: image4, filename: 'desk_1.jpg')
pin7.image.attach(io: image8, filename: 'plant_wall_2.jpg')
pin8.image.attach(io: image13, filename: 'closet_organization.jpg')
pin9.image.attach(io: image14, filename: 'home_interior.jpg')
pin10.image.attach(io: image16, filename: 'plant_wall.jpg')
pin11.image.attach(io: image15, filename: 'outfit_2.jpg')
pin12.image.attach(io: image18, filename: 'travel_pack.jpg')
pin13.image.attach(io: image17, filename: 'travel_idea.jpg')
pin14.image.attach(io: image19, filename: 'wedding.jpg')