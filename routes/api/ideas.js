const express = require('express');
const router = express.Router();

// model
const Idea = require('../../model/Idea');

// get - display all ideas
router.get('/', (req, res) => {
  Idea.find()
    .sort({ creation: -1 })
    .then((ideas) => res.json(ideas));
});

// post - create a new idea
router.post('/', (req, res) => {
  const data = req.body;
  const newIdea = new Idea(data);
  newIdea.save().then((idea) => res.json(idea));
});
// get by id

router.get('/:id', (req, res, next) => {
  Idea.findById(req.params.id)
    .then((idea) => res.json(idea))
    .catch(next);
});

// update
router.put('/:id', (req, res, next) => {
  Idea.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  })
    .then((idea) => res.json(idea))
    .catch(next);
});
//delete

router.delete('/:id', (req, res) => {
  Idea.findById(req.params.id)
    .then((idea) =>
      idea
        .remove()
        .then(() => res.json({ res: 'idea succesfully deleted :-)' }))
    )
    .catch((err) => res.status(404).json({ res: 'failed to delete idea :-(' }));
});

module.exports = router;
