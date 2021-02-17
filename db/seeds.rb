# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
demo = User.create(username:'Demo', email:'demo@email.com', password:'1234567', age:1);
user1 = User.create(username:'Melissa', email:'Melissa@gmail.com', password:'1234567', age:23);
user2 = User.create(username:'Albert', email:'albert@gmail.com', password:'1234567', age:25);
user3 = User.create(username:'trey123', email:'trey123@gmail.com', password:'1234567', age:15);
user4 = User.create(username:'cindy15', email:'cindy12@gmail.com', password:'1234567', age:21);
user5 = User.create(username:'Tony1351', email:'tony@gmail.com', password:'1234567', age:26);



Board.delete_all
board1 = Board.create(title: "food", description: "healthy breakfast", author_id: demo.id)
board2 = Board.create(title: "where to go", description: "", author_id: demo.id)
board3 = Board.create(title: "Weekend Activities", description: "", author_id: demo.id)
board4 = Board.create(title: "newest board", description: "", author_id: demo.id)
board5 = Board.create(title: "Birthday Party Ideas", description: "hawaiian theme", author_id: user1.id)
board6 = Board.create(title: "Baby Gifts", description: "", author_id: user1.id)
board7 = Board.create(ttitle: "Spring Fashion", description: "", author_id: user1.id)
board8 = Board.create(title: "Places to Visit", description: "within the US", author_id: user2.id)
board9 = Board.create(title: "Baking", description: "low sugar", author_id: user3.id)
board10 = Board.create(title: "Fashion", description: "casual", author_id: user3.id)
board11 = Board.create(title: "Baking", description: "birthday cakes", author_id: user4.id)
board12 = Board.create(title: "Organization Ideas", description: "for closet in bedroom", author_id: user5.id)