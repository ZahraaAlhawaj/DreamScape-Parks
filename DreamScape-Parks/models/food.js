const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Food = new Schema({
  name: { type: String },
  price: { type: Number },
  pic: { type: String }
})

module.exports = mongoose.model('Food', Food)
