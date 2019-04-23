const { Router } = require('express');
const { University } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(University.get()));

router.get('/:universityID', (req, res) => res.status(200)
  .json(University.getById(req.params.universityID)));

router.post('/', (req, res) => {
  try {
    const university = University.create(req.body);
    res.status(201).json(university);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
