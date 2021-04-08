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
board1 = Board.create(title: "Decor", description: "for home", author_id: demo.id)#
board2 = Board.create(title: "where to go", description: "", author_id: demo.id)
board4 = Board.create(title: "Wedding", description: "", author_id: demo.id)#
board6 = Board.create(title: "Mens fashion", description: "", author_id: demo.id)#
board13 = Board.create(title: "Organization Ideas", description: "", author_id: demo.id)#


board5 = Board.create(title: "Birthday Party Ideas", description: "Kids' Birthdays", author_id: user1.id)#
board7 = Board.create(title: "Spring Fashion", description: "", author_id: user1.id)#

board9 = Board.create(title: "Christmas", description: "low sugar", author_id: user3.id)#
board10 = Board.create(title: "Fashion", description: "", author_id: user3.id)#

board11 = Board.create(title: "Recipes", description: "Healthy and Not", author_id: user4.id)#

board3 = Board.create(title: "Cars", description: "", author_id: user5.id)#
board8 = Board.create(title: "Places to Visit", description: "within the US", author_id: user5.id)#
board12 = Board.create(title: "Organization Ideas", description: "for closet in bedroom", author_id: user5.id)#

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

#decor
image20= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/pinterest-bathroom-designs-1.jpg')
image21= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/home-decor-black-inspiration-tatiana-shishkina-project-1.jpg')
image22= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/home-decor-instagram-accounts-8.jpg')
image23= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-3.jpg')
image24= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-4.jpg')
image25= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-5.jpg')
image26= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-1.jpg')
image27= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/decor-2.jpg')

#recipes
image28= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Honey-Mustard-Pretzel-Chicken-and-Avocado-Bacon-Salad-1-700x1050.jpg')
image29= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Italian-Baked-Chicken-Recipe-6.jpg')
image30= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/firecracker-chicken-1.jpg')
image31= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/tofu-pad-thai-1607721747.jpg')
image32= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/recipe-1.jpg')
image33= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/salad.jpg')
image34= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/cheesy-bacon-ranch-chicken-226.jpg')
image35= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/chicken-bites-and-asparagus-recipe.jpg')

#party
image36= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Lego-Friends-themed-birthday-Party-Anikas-DIY-Life-8-700.jpg')
image37= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Sunshine-Birthday-Party-Ideas-Kenzie-7-Apr-2-2016-12-11-PM-560x893.jpg')
image38= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/circus-birthday-party-1561740510.jpg')
image39= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/pi-jungle-party-ideas-1.jpg')
image40= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/party-1.jpg')

#fashion
image41= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/european-fashion-for-men-sage.jpg')
image42= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/men-fash1.jpg')
image43= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/men-fash2.jpg')
image44= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/mens-fash4.jpg')
image45= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/mens-fash5.png')
image46= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/men-fash3.jpg')
image47= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/men-fash9.png')
image48= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash3.jpg')
image49= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash8.jpg')
image50= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash-7.jpg')
image51= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash1.jpg')
image52= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash2.jpg')
image53= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/women-fash-4.png')
image55= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/plus-size-fashion-the-everygirl-1.jpg')

#organization
image54= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/classy-clutter-pantry-after.jpg')
image56= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/pantryideas-1610653336.png')
image57= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Pantry-Organization-683x1024.jpg')

#wedding
image58= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-4.jpg')
image59= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-6.jpg')
image60= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-2.png')
image61= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-3.jpg')
image62= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/wedding-1.jpg')
image63= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/loverly-wedding-inspiration.jpg')
image64= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Rolls-Royce-Vintage-Car-Wedding-Decor-Florida-Inspo-18-600x800.jpg')

#car
image65= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-4.jpg')
image66= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-5.jpg')
image67= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-1.jpg')
image68= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-2.jpg')
image69= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-3.jpg')
image70= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/car-6.jpg')

# #baby
# image45= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/baby-1.jpg')
# image61= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Neutral%2BNursery%2BInspiration.jpg')

# #mancave
# image68= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/man-cave-ideas-1582667003.jpg')
# image77= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/where-to-put-a-man-cave-garage.jpg')

# #xmas
image72= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/Christmas_Tree_with_Burgundy__Copper_and_Platinum-12-879x1024.jpg')
image73= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/christmas-decoration-ideas-1598219821.jpg')

# #travel
image71= open('https://pinspo-dev.s3-us-west-1.amazonaws.com/pic-goal-snow-Favim.com-6524350.jpg')



pin1 = Pin.create(title: "rainbow organization", author_id: user5.id, board_id: board12.id)
pin2 = Pin.create(title: "old car rides", author_id: user5.id, board_id: board3.id)
pin3 = Pin.create(title: "Vintage Red", author_id: user5.id, board_id: board3.id)
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

pin15 = Pin.create(title:"Bathroom Abstract Wallpapr", author_id: demo.id, board_id: board1.id)
pin16 = Pin.create(title:"Black Room", author_id: demo.id, board_id: board1.id)
pin17 = Pin.create(title:"Zen Living", author_id: demo.id, board_id: board1.id)
pin18 = Pin.create(title:"Frames and Artwork", author_id: demo.id, board_id: board1.id)
pin19 = Pin.create(title:"Pink Living Room", author_id: demo.id, board_id: board1.id)
pin20 = Pin.create(title:"Boho Decor", author_id: demo.id, board_id: board1.id)
pin21 = Pin.create(title:"Black Accent Wall", author_id: demo.id, board_id: board1.id)
pin22 = Pin.create(title:"Cream Dream", author_id: demo.id, board_id: board1.id)
pin23 = Pin.create(title:"Chicken and Avocado Salad", author_id: user4.id, board_id: board11.id)
pin24 = Pin.create(title:"Baked Chicken", author_id: user4.id, board_id: board11.id)
pin25 = Pin.create(title:"Firecracker Chicken", author_id: user4.id, board_id: board11.id)
pin26 = Pin.create(title:"Tofu Pad Thai", author_id: user4.id, board_id: board11.id)
pin27 = Pin.create(title:"Fetuccini Carbonara", author_id: user4.id, board_id: board11.id)
pin28 = Pin.create(title:"Simple Salad", author_id: user4.id, board_id: board11.id)
pin29 = Pin.create(title:"Cheesy Bacon Ranch Chicken", author_id: user4.id, board_id: board11.id)
pin30 = Pin.create(title:"Chicken Bites and Asparagus", author_id: user4.id, board_id: board11.id)
pin31 = Pin.create(title:"Pastels Theme", author_id: user1.id, board_id: board5.id)
pin32 = Pin.create(title:"Sunshine Party", author_id: user1.id, board_id: board5.id)
pin33 = Pin.create(title:"Circus Party Theme", author_id: user1.id, board_id: board5.id)
pin34 = Pin.create(title:"Two Wild Party", author_id: user1.id, board_id: board5.id)
pin35 = Pin.create(title:"Candy Party Theme", author_id: user1.id, board_id: board5.id)
pin36 = Pin.create(title:"Casual Blazer Outfit", author_id: demo.id, board_id: board6.id)
pin37 = Pin.create(title:"Winter Casual Men's Outfit", author_id: demo.id, board_id: board6.id)
pin38 = Pin.create(title:"Spring Vacation Mens", author_id: demo.id, board_id: board6.id)
pin39 = Pin.create(title:"Casual and Cool", author_id: demo.id, board_id: board6.id)
pin40 = Pin.create(title:"All Black", author_id: demo.id, board_id: board6.id)
pin41 = Pin.create(title:"Neutral Bomber Outfit", author_id: demo.id, board_id: board6.id)
pin42 = Pin.create(title:"Striped Pants", author_id: demo.id, board_id: board6.id)
pin43 = Pin.create(title:"Animal Print Skirt Outfit", author_id: user1.id, board_id: board7.id)
pin44 = Pin.create(title:"Overalls Outfit", author_id: user1.id, board_id: board7.id)
pin45 = Pin.create(title:"Selena's Casual Outfit", author_id: user3.id, board_id: board10.id)
pin46 = Pin.create(title:"Safari Vibes", author_id: user1.id, board_id: board7.id)
pin47 = Pin.create(title:"Retro Pink outfit", author_id: user3.id, board_id: board10.id)
pin48 = Pin.create(title:"Boss", author_id: user3.id, board_id: board10.id)
pin49 = Pin.create(title:"Organized Pantry", author_id: demo.id, board_id: board13.id)
pin50 = Pin.create(title:"Fashion Week", author_id: user1.id, board_id: board7.id)
pin51 = Pin.create(title:"See-Through Pantry", author_id: demo.id, board_id: board13.id)
pin52 = Pin.create(title:"Colorful Pantry", author_id: user5.id, board_id: board12.id)
pin53 = Pin.create(title:"Wildflower Bouqet", author_id: demo.id, board_id: board4.id)
pin54 = Pin.create(title:"Barn Wedding", author_id: demo.id, board_id: board4.id)
pin55 = Pin.create(title:"Rose Gold Themed Wedding", author_id: demo.id, board_id: board4.id)
pin56 = Pin.create(title:"Outdoor Wedding", author_id: demo.id, board_id: board4.id)
pin57 = Pin.create(title:"Beach Reception", author_id: demo.id, board_id: board4.id)
pin58 = Pin.create(title:"Sunflower Fields Photography", author_id: demo.id, board_id: board4.id)
pin59 = Pin.create(title:"Vintage Car Wedding Photography", author_id: demo.id, board_id: board4.id)
pin60 = Pin.create(title:"In the Hills, Black Vintage", author_id: user5.id, board_id: board3.id)
pin61 = Pin.create(title:"Copper Accents", author_id: user5.id, board_id: board3.id)
pin62 = Pin.create(title:"A Car for a Pink Lady", author_id: user5.id, board_id: board3.id)
pin63 = Pin.create(title:"Sunset Drive", author_id: user5.id, board_id: board3.id)
pin64 = Pin.create(title:"Retro Buggy", author_id: user5.id, board_id: board3.id)
pin65 = Pin.create(title:"Golden Lambo", author_id: user5.id, board_id: board3.id)
pin66 = Pin.create(title:"Winter Getaway", author_id: user5.id, board_id: board8.id)
pin67 = Pin.create(title:"Rustic Christmas", author_id: user3.id, board_id: board9.id)
pin68 = Pin.create(title:"Plaid Plaid Plaid", author_id: user3.id, board_id: board9.id)




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
board_pin15 = BoardPin.create(board_id: pin15.board_id, pin_id: pin15.id, author_id: pin15.author_id)
board_pin16 = BoardPin.create(board_id: pin16.board_id, pin_id: pin16.id, author_id: pin16.author_id)
board_pin17 = BoardPin.create(board_id: pin17.board_id, pin_id: pin17.id, author_id: pin17.author_id)
board_pin18 = BoardPin.create(board_id: pin18.board_id, pin_id: pin18.id, author_id: pin18.author_id)
board_pin19 = BoardPin.create(board_id: pin19.board_id, pin_id: pin19.id, author_id: pin19.author_id)
board_pin20 = BoardPin.create(board_id: pin20.board_id, pin_id: pin20.id, author_id: pin20.author_id)
board_pin21 = BoardPin.create(board_id: pin21.board_id, pin_id: pin21.id, author_id: pin21.author_id)
board_pin22 = BoardPin.create(board_id: pin22.board_id, pin_id: pin22.id, author_id: pin22.author_id)
board_pin23 = BoardPin.create(board_id: pin23.board_id, pin_id: pin23.id, author_id: pin23.author_id)
board_pin24 = BoardPin.create(board_id: pin24.board_id, pin_id: pin24.id, author_id: pin24.author_id)
board_pin25 = BoardPin.create(board_id: pin25.board_id, pin_id: pin25.id, author_id: pin25.author_id)
board_pin26 = BoardPin.create(board_id: pin26.board_id, pin_id: pin26.id, author_id: pin26.author_id)
board_pin27 = BoardPin.create(board_id: pin27.board_id, pin_id: pin27.id, author_id: pin27.author_id)
board_pin28 = BoardPin.create(board_id: pin28.board_id, pin_id: pin28.id, author_id: pin28.author_id)
board_pin29 = BoardPin.create(board_id: pin29.board_id, pin_id: pin29.id, author_id: pin29.author_id)
board_pin30 = BoardPin.create(board_id: pin30.board_id, pin_id: pin30.id, author_id: pin30.author_id)
board_pin31 = BoardPin.create(board_id: pin31.board_id, pin_id: pin31.id, author_id: pin31.author_id)
board_pin32 = BoardPin.create(board_id: pin32.board_id, pin_id: pin32.id, author_id: pin32.author_id)
board_pin33 = BoardPin.create(board_id: pin33.board_id, pin_id: pin33.id, author_id: pin33.author_id)
board_pin34 = BoardPin.create(board_id: pin34.board_id, pin_id: pin34.id, author_id: pin34.author_id)
board_pin35 = BoardPin.create(board_id: pin35.board_id, pin_id: pin35.id, author_id: pin35.author_id)
board_pin36 = BoardPin.create(board_id: pin36.board_id, pin_id: pin36.id, author_id: pin36.author_id)
board_pin37 = BoardPin.create(board_id: pin37.board_id, pin_id: pin37.id, author_id: pin37.author_id)
board_pin38 = BoardPin.create(board_id: pin38.board_id, pin_id: pin38.id, author_id: pin38.author_id)
board_pin39 = BoardPin.create(board_id: pin39.board_id, pin_id: pin39.id, author_id: pin39.author_id)
board_pin40 = BoardPin.create(board_id: pin40.board_id, pin_id: pin40.id, author_id: pin40.author_id)
board_pin41 = BoardPin.create(board_id: pin41.board_id, pin_id: pin41.id, author_id: pin41.author_id)
board_pin42 = BoardPin.create(board_id: pin42.board_id, pin_id: pin42.id, author_id: pin42.author_id)
board_pin43 = BoardPin.create(board_id: pin43.board_id, pin_id: pin43.id, author_id: pin43.author_id)
board_pin44 = BoardPin.create(board_id: pin44.board_id, pin_id: pin44.id, author_id: pin44.author_id)
board_pin45 = BoardPin.create(board_id: pin45.board_id, pin_id: pin45.id, author_id: pin45.author_id)
board_pin46 = BoardPin.create(board_id: pin46.board_id, pin_id: pin46.id, author_id: pin46.author_id)
board_pin47 = BoardPin.create(board_id: pin47.board_id, pin_id: pin47.id, author_id: pin47.author_id)
board_pin48 = BoardPin.create(board_id: pin48.board_id, pin_id: pin48.id, author_id: pin48.author_id)
board_pin49 = BoardPin.create(board_id: pin49.board_id, pin_id: pin49.id, author_id: pin49.author_id)
board_pin50 = BoardPin.create(board_id: pin50.board_id, pin_id: pin50.id, author_id: pin50.author_id)
board_pin51 = BoardPin.create(board_id: pin51.board_id, pin_id: pin51.id, author_id: pin51.author_id)
board_pin52 = BoardPin.create(board_id: pin52.board_id, pin_id: pin52.id, author_id: pin52.author_id)
board_pin53 = BoardPin.create(board_id: pin53.board_id, pin_id: pin53.id, author_id: pin53.author_id)
board_pin54 = BoardPin.create(board_id: pin54.board_id, pin_id: pin54.id, author_id: pin54.author_id)
board_pin55 = BoardPin.create(board_id: pin55.board_id, pin_id: pin55.id, author_id: pin55.author_id)
board_pin56 = BoardPin.create(board_id: pin56.board_id, pin_id: pin56.id, author_id: pin56.author_id)
board_pin57 = BoardPin.create(board_id: pin57.board_id, pin_id: pin57.id, author_id: pin57.author_id)
board_pin58 = BoardPin.create(board_id: pin58.board_id, pin_id: pin58.id, author_id: pin58.author_id)
board_pin59 = BoardPin.create(board_id: pin59.board_id, pin_id: pin59.id, author_id: pin59.author_id)
board_pin60 = BoardPin.create(board_id: pin60.board_id, pin_id: pin60.id, author_id: pin60.author_id)
board_pin61 = BoardPin.create(board_id: pin61.board_id, pin_id: pin61.id, author_id: pin61.author_id)
board_pin62 = BoardPin.create(board_id: pin62.board_id, pin_id: pin62.id, author_id: pin62.author_id)
board_pin63 = BoardPin.create(board_id: pin63.board_id, pin_id: pin63.id, author_id: pin63.author_id)
board_pin64 = BoardPin.create(board_id: pin64.board_id, pin_id: pin64.id, author_id: pin64.author_id)
board_pin65 = BoardPin.create(board_id: pin65.board_id, pin_id: pin65.id, author_id: pin65.author_id)
board_pin66 = BoardPin.create(board_id: pin66.board_id, pin_id: pin66.id, author_id: pin66.author_id)
board_pin67 = BoardPin.create(board_id: pin67.board_id, pin_id: pin67.id, author_id: pin67.author_id)



pin1.image.attach(io: image3, filename: 'closet_organization_2.jpg')
pin7.image.attach(io: image1, filename: 'rainforest.jpg')
pin3.image.attach(io: image6, filename: 'outfit_1.jpg')
pin4.image.attach(io: image10, filename: 'travel_idea.jpg')
pin5.image.attach(io: image12, filename: 'wall_decor.png')
pin6.image.attach(io: image4, filename: 'desk_1.jpg')
pin2.image.attach(io: image8, filename: 'fash.jpg')
pin8.image.attach(io: image13, filename: 'closet_organization.jpg')
pin9.image.attach(io: image14, filename: 'home_interior.jpg')
pin10.image.attach(io: image16, filename: 'plant_wall.jpg')
pin11.image.attach(io: image15, filename: 'outfit_2.jpg')
pin12.image.attach(io: image18, filename: 'travel_pack.jpg')
pin13.image.attach(io: image17, filename: 'travel_idea.jpg')
pin14.image.attach(io: image19, filename: 'wedding.jpg')
pin15.image.attach(io:image20, filename: 'abstractwallpaperrestroom.jpg')
pin16.image.attach(io:image21, filename: 'blackroom.jpg')
pin17.image.attach(io:image22, filename: 'zenlivingroom.jpg')
pin18.image.attach(io:image23, filename: 'framesandart.jpg')
pin19.image.attach(io:image24, filename: 'pinklivingroom.jpg')
pin20.image.attach(io:image25, filename: 'bohodecor.jpg')
pin21.image.attach(io:image26, filename: 'blackaccentwall.jpg')
pin22.image.attach(io:image27, filename: 'creamdream.jpg')
pin23.image.attach(io:image28, filename: 'chickensalad.jpg')
pin24.image.attach(io:image29, filename: 'backedchicken.jpg')
pin25.image.attach(io:image30, filename: 'firecrackerchicken.jpg')
pin26.image.attach(io:image31, filename: 'tofupadthai.jpg')
pin27.image.attach(io:image32, filename: 'fettucinicarb.jpg')
pin28.image.attach(io:image33, filename: 'simplesalad.jpg')
pin29.image.attach(io:image34, filename: 'cheesebaconranchchicken.jpg')
pin30.image.attach(io:image35, filename: 'chickenbites.jpg')
pin31.image.attach(io:image36, filename: 'pastelsbirthday.jpg')
pin32.image.attach(io:image37, filename: 'sunshineparty.jpg')
pin33.image.attach(io:image38, filename: 'circuspartytheme.jpg')
pin34.image.attach(io:image39, filename: 'twowildparty.jpg')
pin35.image.attach(io:image40, filename: 'candyparty.jpg')
pin36.image.attach(io:image41, filename: 'casualblazermen.jpg')
pin37.image.attach(io:image42, filename: 'wintermens.jpg')
pin38.image.attach(io:image43, filename: 'springvacaymens.jpg')
pin39.image.attach(io:image44, filename: 'casualcoolmens.jpg')
pin40.image.attach(io:image45, filename: 'allblackmens.jpg')
pin41.image.attach(io:image46, filename: 'neutralbomber.jpg')
pin42.image.attach(io:image47, filename: 'stripedmenspants.jpg')
pin43.image.attach(io:image48, filename: 'animalprintskit.jpg')
pin44.image.attach(io:image49, filename: 'overallsoutfit.jpg')
pin45.image.attach(io:image50, filename: 'selenasoutfit.jpg')
pin46.image.attach(io:image51, filename: 'safarioutfit.jpg')
pin47.image.attach(io:image52, filename: 'retropinkskirt.jpg')
pin48.image.attach(io:image53, filename: 'bossgirl.jpg')
pin49.image.attach(io:image54, filename: 'orgpantry.jpg')
pin50.image.attach(io:image55, filename: 'fashionweek.jpg')
pin51.image.attach(io:image56, filename: 'seethroughpantry.jpg')
pin52.image.attach(io:image57, filename: 'colorfulpantry.jpg')
pin53.image.attach(io:image58, filename: 'wildflowerbouquet.jpg')
pin54.image.attach(io:image59, filename: 'barnwedding.jpg')
pin55.image.attach(io:image60, filename: 'rosegoldwedding.jpg')
pin56.image.attach(io:image61, filename: 'outdoorwedding.jpg')
pin57.image.attach(io:image62, filename: 'beachwedding.jpg')
pin58.image.attach(io:image63, filename: 'sunflowerwedding.jpg')
pin59.image.attach(io:image64, filename: 'vintagecarwedding.jpg')
pin60.image.attach(io:image65, filename: 'vintagecarwedding.jpg')
pin61.image.attach(io:image66, filename: 'vintagecarwedding.jpg')
pin62.image.attach(io:image67, filename: 'vintagecarwedding.jpg')
pin63.image.attach(io:image68, filename: 'vintagecarwedding.jpg')
pin64.image.attach(io:image69, filename: 'vintagecarwedding.jpg')
pin65.image.attach(io:image70, filename: 'vintagecarwedding.jpg')
pin66.image.attach(io:image71, filename: 'vintagecarwedding.jpg')
pin67.image.attach(io:image72, filename: 'vintagecarwedding.jpg')
pin68.image.attach(io:image73, filename: 'vintagecarwedding.jpg')
