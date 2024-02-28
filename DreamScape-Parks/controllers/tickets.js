const { Post, Ticket } = require('../models')
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport(
  (mailData = {
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.mailDataUser,
      pass: process.env.mailDataPass
    }
  })
)

const GetTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({}).populate('ride')
    res.send(tickets)
  } catch (error) {
    console.log(error)
  }
}

const CreateTickets = async (req, res) => {
  try {
    const ticket = await Ticket.create({ ...req.body })
    const populatedTicket = await Ticket.findById(ticket._id).populate('ride')
    console.log('ticket', populatedTicket)
    let rideData = ''
    let foodData = ''
    populatedTicket.ride.forEach((ride) => {
      rideData += ride.name + '\n'
    })
    ticket.food.forEach((food) => {
      foodData += food.name + ' Qty:' + food.qty + '\n'
    })
    const message = {
      from: 'DreamScapeParks@gmail.com',
      to: req.body.email,
      subject: 'Ticket',
      text: `Name: ${req.body.personName} \n Rides:\n${rideData} \n Foods:\n${foodData} \nTotal Cost: ${ticket.totalCost}`
    }
    transport.sendMail(message, function (err, info) {
      // console.log(info)
    })

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
