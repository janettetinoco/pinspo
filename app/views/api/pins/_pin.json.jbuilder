json.extract! pin, :id, :title, :description, :link, :author_id, :board_id, :author
json.photoURL url_for(pin.image)