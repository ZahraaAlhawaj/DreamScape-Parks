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

const DeleteTickets = (req, res) => {
  console.log(req)
}

module.exports = {
  GetTickets,
  CreateTickets,
  DeleteTickets
}
