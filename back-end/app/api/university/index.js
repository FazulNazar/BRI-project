const { Router } = require('express');
const { University } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(University.get()));
router.post('/', (req, res) => {
  try {
    const student = University.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
