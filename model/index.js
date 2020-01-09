const mongoose=require('mongoose')
let albumsSchema={
    album_id: String,
    album_name: String,
    public_time: String,
    week: Number,
    price: Number,
    cover: String,
    singers: Array
}

mongoose.model("albums",albumsSchema)