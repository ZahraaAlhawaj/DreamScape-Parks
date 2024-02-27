const { Post, Food } = require('../models')

const GetFood = async (req, res) => {
  console.log(req)
}

const CreateFood = async (req, res) => {
  console.log(req)
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
