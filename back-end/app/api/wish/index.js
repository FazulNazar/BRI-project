const { Router } = require('express');
const { Wish, University,Student } = require('../../models');

const router = new Router();

function attachUniversityStudent(wish) {
  wish.university = University.getById(wish.universityId);
  wish.student = Student.getById(wish.studentID);
  return wish;
}

router.get('/', (req, res) => {
  try {
    res.status(200).json(Wish.get().map(wish => attachUniversityStudent(wish)))
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', (req, res) => {
  try {
    res.status(200).json(attachUniversityStudent(Wish.getById(req.params.id)));
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
    const wish = Wish.create(req.body);
    res.status(201).json(wish);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.put('/:id', (req, res) => {
  try {
    res.status(200).json(attachUniversityStudent(Wish.update(req.params.id, req.body)));
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
    res.status(204).json(Wish.delete(req.params.id));
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
