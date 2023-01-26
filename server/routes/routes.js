const express = require('express')
const router = express.Router()
const members = require('../members')


const idFilter = req => member => member.id === parseInt(req.params.id);

// Gets user
router.get('/',(req, res) => {
  res.status(200).json({message:'hello from the back, user list...'})
})

// Gets specific user
router.get('/:id',(req, res) => {
  res.status(200).json({message:'hello new user...'})
})

//  ** not decided on this path yet - most likely new form to create user //
router.get('/new',(req, res) => {
  res.status(200).json({message:'hello new user...'})
})

//  Create new user
router.post('/',(req, res) => {
  res.status(200).json({message:'Create new  user...'})
})

// Delete user
router.delete('/:id',(req, res) => {
  const found = members.some(idFilter(req));
  
  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => !idFilter(req)(member))
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
})

module.exports = router
