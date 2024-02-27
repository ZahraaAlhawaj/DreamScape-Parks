const { Schema } = require('mongoose')

const ticketSchema = new Schema(
  {
    personName: { type: String },
    email: { type: String },
    totalCost: { type: Number },

    food: [{ name: String, qty: Number }],
    ride: [{ type: Schema.Types.ObjectId, ref: 'Ride' }]
  },
  {
    timestamps: true
  }
)

module.exports = ticketSchema
