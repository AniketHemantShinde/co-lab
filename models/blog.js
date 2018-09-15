const mongoose = require('mongoose')

var blogSchema = new mongoose.Schema({
   title: String,
   photos: String,
   author: String,
   description: String,
   createdAt: Date,
   updatedAt: Date,

   type:{
   	work: String,
    play: String,
    happening: String,
    all: String,
    spaces: String,
    faces: String,
    places: String

   }

})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;