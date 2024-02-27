const { Post, Ticket } = require('../models')

const GetTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({}).populate(['food', 'ride'])
    res.send(tickets)
  } catch (error) {
    console.log(error)
  }
}

const CreateTickets = async (req, res) => {
  try {
    const ticket = await Ticket.create({ ...req.body })
    res.send(ticket)
  } catch (error) {
    console.log(error)
  }
}

const DeleteTickets = async (req, res) => {
  try {
    await Ticket.deleteOne({ _id: req.params.ticket_id })
    res.send({ msg: 'Ticket Deleted' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  GetTickets,
  CreateTickets,
  DeleteTickets
}
