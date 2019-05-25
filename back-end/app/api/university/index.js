const { Router } = require('express');
const { University } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  try {
    if (req.query.q) {
      res.status(200).json(University.search(req.query.q));
    } else {
      res.status(200).json(University.get());
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    res.status(200).json(University.getById(req.params.id));
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else {
      res.status(500).json(err);
    }
  }
});

router.post('/', (req, res) => {
  try {
    const university = University.create(req.body);
    res.status(201)
      .json(university);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400)
        .json(err.extra);
    } else {
      res.status(500)
        .json(err);
    }
  }
});

router.put('/:id', (req, res) => {
  try {
    res.status(200).json(University.update(req.params.id, req.body));
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.delete('/:id', (req, res) => {
  try {
    University.delete(req.params.id);
    res.status(204).end();
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
