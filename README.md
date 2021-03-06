# pinspo

## Live Link
---
[Here is a live link to this Pintererst clone website](https://pinspo.herokuapp.com/#/)
=======
Here is a live link to this Pinterest clone website, [Pinspo](https://pinspo.herokuapp.com/#/), hosted on Heroku.

### WebApp

This app is a clone to the popular site Pinterest, where users can share posts and keep a saved collection of visuals to inspire some new ideas. The users are shown images of related interests to keep for their collection. The website gives users an enjoyable experience by mainly providing visuals that are visually pleasing.

## Technologies
* React
* Redux
* Ruby on Rails
* PostgreSQL
* JBuilder
* AWS S3
* Active Storage
* CSS3

## Site
### Demo Login Feature
This feature allows new users to navigate the app as a registered user without having to login or sign up.

![demo-gif](https://github.com/janettetinoco/pinspo/blob/main/app/assets/images/demo.gif)


### Pins
This feature contains a file that is required an image and title, and an optional description and third party link. It is the core feature of the site that provides the images for users to share and collect, therefore, an image is always required to create a pin.
```ruby
def create
        if pin_params[:image] == "null"
            return render json: ["You need to provide an image"], status: 401
        end
        @pin = Pin.new(pin_params)


        if @pin.save
            BoardPin.create(pin_id: @pin.id, board_id: @pin.board_id)
            render 'api/pins/show'
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end
```

Users can add the Pin to their desired collection, also called a Board.



### Boards
This feature allows users to give their collections a specific category. Users are free to use and Title, Description and save an unlimited amount of pins.

