const express = require('express')
const router = express.Router()
const members = require('../members')
const Members = require('../model/members')

router.use(express.json());


const idFilter = req => member => member.id === parseInt(req.params.id);

router.use(express.json());

// Gets user
router.get('/', (req, res) => {
})

// Gets specific user
router.get('/:id', (req, res) => {
  res.status(200).json({message: 'hello new user...'})
})

//  ** not decided on this path yet - most likely new form to create user //
router.get('/new', (req, res) => {
  res.status(200).json({message: 'hello new user...'})
})

//  Create new user
router.post('/', async (req, res) => {
  
  console.log(cypto.randomUUID())
  const member = new Members({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    newUser: req.body.newUser
  });
  
  try {
    const existingMember = await Members.findOne({id: req.body.id});
    if (existingMember) {
      res.status(400).json({message: "A member with this ID already exists"});
      return;
    }
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

// Delete user
router.delete('/:id', (req, res) => {
  const found = members.some(idFilter(req));
  
  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => !idFilter(req)(member))
    });
  } else {
    res.status(400).json({msg: `No member with the id of ${req.params.id}`});
  }
})

module.exports = router
