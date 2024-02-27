const { Post, Ride } = require('../models')

const GetRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    res.send(rides)
  } catch (error) {
    console.log(error)
  }
}
const CreateRides = async (req, res) => {
  try {
    const ride = await Ride.create(req.body)
    res.send(ride)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  GetRides,
  CreateRides
}
