const mongoose = require('mongoose')

var spaceSchema = new mongoose.Schema({
    name: String,
    slug: String,
    ameneties: String,
    size: Number,
    address:{
      line: Array,
      area: String,
      pincode: Number,
      city: String,
      state: String,
      latitude: Number,
      longitude: Number
    },

    description: String,
    photos: Array,
    owner: Array,
    manager: Array,
    createdAt: Date,
    updatedAt: Date,

    timing:{
      monday:{start: Date, end: Date},
      tuesday:{start: Date, end: Date},
      wednesday:{start: Date, end: Date},
      thursday:{start: Date, end: Date},
      friday:{start: Date, end: Date},
      saturday:{start: Date, end: Date},
      unday:{start: Date, end: Date},
    },

    social:{
       website: String,
       facebook: String,
       twitter: String
    },

    createdBy: String,
    review: Array

})

const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;