const { Post, Food } = require('../models')

const GetFood = async (req, res) => {
  try {
    const food = await Food.find({})
    res.send(food)
  } catch (error) {
    console.log(error)
  }
}

const CreateFood = async (req, res) => {
  try {
    const food = await Food.create(req.body)
    res.send(food)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  GetFood,
  CreateFood
}
