const { Router } = require('express');
const { University } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(University.get()));

router.get('/:id', (req, res) => res.status(200)
  .json(University.getById(req.params.id)));

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

router.delete('/:id', (req, res) => res.status(204).json(University.delete(req.params.id)));
router.put('/:id', (req, res) => res.status(201).json(University.update(req.params.id, req.body)));

module.exports = router;
