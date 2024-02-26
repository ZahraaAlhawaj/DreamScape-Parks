const { Schema } = require('mongoose')

const ticketSchema = new Schema(
  {
    personName: { type: String },
    totalCost: { type: Number },
    food: { type: Schema.Types.ObjectId, ref: 'Food' },
    ride: { type: Schema.Types.ObjectId, ref: 'Ride' }
  },
  {
    timestamps: true
  }
)

module.exports = ticketSchema
