const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Ticket = new Schema({
  personName: { type: String },
  totalCost: { type: Number },
  food: { type: Schema.Types.ObjectId, ref: 'Food' },
  ride: { type: Schema.Types.ObjectId, ref: 'Ride' }
})

module.exports = mongoose.model('Ticket', Ticket)
