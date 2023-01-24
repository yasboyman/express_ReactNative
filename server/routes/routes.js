const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
  res.status(200).json({message:'hello from the back, user list...'})
})

router.get('/new',(req, res) => {
  res.status(200).json({message:'hello new user...'})
})

router.post('/',(req, res) => {
  res.status(200).json({message:'Create new  user...'})
})

router.get('/:id',(req, res) => {
  res.status(200).json({message:`Created new  user with id ... ${req.params.id}`})
})

module.exports = router
