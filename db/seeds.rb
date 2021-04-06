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
image20= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/pinterest-bathroom-designs-1.jpg')
image21= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Honey-Mustard-Pretzel-Chicken-and-Avocado-Bacon-Salad-1-700x1050.jpg')
image22= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Italian-Baked-Chicken-Recipe-6.jpg')
image23= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Lego-Friends-themed-birthday-Party-Anikas-DIY-Life-8-700.jpg')
image24= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/home-decor-black-inspiration-tatiana-shishkina-project-1.jpg')
image25= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/home-decor-instagram-accounts-8.jpg')
image26= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/european-fashion-for-men-sage.jpg')
image27= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/firecracker-chicken-1.jpg')
image28= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-3.jpg')
image29= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-4.jpg')
image30= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-5.jpg')
image31= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/classy-clutter-pantry-after.jpg')
image32= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-1.jpg')
image33= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-2.jpg')
image34= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Christmas_Tree_with_Burgundy__Copper_and_Platinum-12-879x1024.jpg')
image35= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/christmas-decoration-ideas-1598219821.jpg')
image36= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/circus-birthday-party-1561740510.jpg')
image37= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-6.jpg')
image38= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/cheesy-bacon-ranch-chicken-226.jpg')
image39= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/chicken-bites-and-asparagus-recipe.jpg')
image40= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-4.jpg')
image41= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-5.jpg')
image42= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-1.jpg')
image43= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-2.jpg')
image44= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-3.jpg')
image45= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/baby-1.jpg')
image46= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-4.jpg')
image47= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-6.jpg')
image48= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-2.png')
image49= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-3.jpg')
image50= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Sunshine-Birthday-Party-Ideas-Kenzie-7-Apr-2-2016-12-11-PM-560x893.jpg')
image51= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/tofu-pad-thai-1607721747.jpg')
image52= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-1.jpg')
image53= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Rolls-Royce-Vintage-Car-Wedding-Decor-Florida-Inspo-18-600x800.jpg')
image54= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/recipe-1.jpg')
image55= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/salad.jpg')
image56= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/pi-jungle-party-ideas-1.jpg')
image57= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/pic-goal-snow-Favim.com-6524350.jpg')
image58= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/plus-size-fashion-the-everygirl-1.jpg')
image59= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/pantryideas-1610653336.png')
image60= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/party-1.jpg')
image61= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Neutral%2BNursery%2BInspiration.jpg')
image62= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Pantry-Organization-683x1024.jpg')
image63= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/men-fash9.png')
image64= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/mens-fash4.jpg')
image65= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/mens-fash5.png')
image66= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/men-fash3.jpg')
image67= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/loverly-wedding-inspiration.jpg')
image68= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/man-cave-ideas-1582667003.jpg')
image69= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/men-fash1.jpg')
image70= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/men-fash2.jpg')
image71= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash3.jpg')
image72= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash8.jpg')
image73= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash-7.jpg')
image74= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash1.jpg')
image75= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash2.jpg')
image76= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash-4.png')
image77= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/where-to-put-a-man-cave-garage.jpg')



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

BoardPin.delete_all
board_pin1=BoardPin.create(board_id: pin1.board_id, pin_id: pin1.id, author_id:pin1.author_id);
board_pin2=BoardPin.create(board_id: pin2.board_id, pin_id: pin2.id, author_id:pin2.author_id);
board_pin3=BoardPin.create(board_id: pin3.board_id, pin_id: pin3.id, author_id:pin3.author_id);
board_pin4=BoardPin.create(board_id: pin4.board_id, pin_id: pin4.id, author_id:pin4.author_id);
board_pin5=BoardPin.create(board_id: pin5.board_id, pin_id: pin5.id, author_id:pin5.author_id);
board_pin6=BoardPin.create(board_id: pin6.board_id, pin_id: pin6.id, author_id:pin6.author_id);
board_pin7=BoardPin.create(board_id: pin7.board_id, pin_id: pin7.id, author_id:pin7.author_id);
board_pin8=BoardPin.create(board_id: pin8.board_id, pin_id: pin8.id, author_id:pin8.author_id);
board_pin9=BoardPin.create(board_id: pin9.board_id, pin_id: pin9.id, author_id:pin9.author_id);
board_pin10=BoardPin.create(board_id: pin10.board_id, pin_id: pin10.id, author_id:pin10.author_id);
board_pin11=BoardPin.create(board_id: pin11.board_id, pin_id: pin11.id, author_id:pin11.author_id);
board_pin12=BoardPin.create(board_id: pin12.board_id, pin_id: pin12.id, author_id:pin12.author_id);
board_pin13=BoardPin.create(board_id: pin13.board_id, pin_id: pin13.id, author_id:pin13.author_id);
board_pin14=BoardPin.create(board_id: pin14.board_id, pin_id: pin14.id, author_id:pin14.author_id);


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