const { Router } = require('express');
const { Wish, University } = require('../../models');

const router = new Router();

function attachUniversity(wish) {
  wish.university = University.getById(wish.universityId);
  return wish;
}

router.get('/', (req, res) => res.status(200).json(Wish.get().map(wish => attachUniversity(wish))));

router.get('/:id', (req, res) => res.status(200)
  .json(attachUniversity(Wish.getById(req.params.id))));

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

router.delete('/:id', (req, res) => res.status(204).json(Wish.delete(req.params.id)));
router.put('/:id', (req, res) => res.status(201).json(Wish.update(req.params.id, req.body)));

module.exports = router;
