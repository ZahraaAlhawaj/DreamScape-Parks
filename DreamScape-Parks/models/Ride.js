const { Schema } = require('mongoose')

const rideSchema = new Schema(
  {
    name: { type: String },
    price: { type: Number },
    pic: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = rideSchema
