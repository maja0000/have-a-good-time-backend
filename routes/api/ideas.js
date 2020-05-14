const express = require('express');
const router = express.Router();

// model
const Idea = require('../../model/Idea');

// get - display all ideas
router.get('/', (req, res) => {
  Idea.find()
    // .sort({ title: -1 })
    .then((ideas) => res.json(ideas));
});

// post - create a new idea
router.post('/', (req, res) => {
  const data = req.body;
  const newIdea = new Idea(data);
  newIdea.save().then((idea) => res.json(idea));
});

module.exports = router;
