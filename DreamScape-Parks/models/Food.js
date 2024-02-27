const { Schema } = require('mongoose')

const foodSchema = new Schema(
  {
    name: { type: String },
    price: { type: Number },
    pic: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = foodSchema
