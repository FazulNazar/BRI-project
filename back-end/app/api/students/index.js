const { Router } = require('express');
const { Student } = require('../../models');

const router = new Router();

function getStudentSafely(studentId) {
  try {
    return Student.getById(studentId);
  } catch (err) {
    if (err.name === 'NotFoundError') {
      return null;
    }
    throw err;
  }
}

// function attachWishList(list) {
//   list.wishList = WishModel.getById(list.wishListId);
//   return list;
// }

const attachStudents = ticket => Object.assign({}, ticket, {
  students: ticket.studentIds.map(studentId => getStudentSafely(studentId)),
});

router.get('/', (req, res) => res.status(200)
  .json(Student.get()));

router.get('/:studentId', (req, res) => res.status(200)
  .json(Student.getById(req.params.studentId)));

router.post('/', (req, res) => {
  try {
    const student = Student.create(req.body);
    res.status(201)
      .json(student);
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

router.put('/:studentID', (req, res) => {
  try {
    res.status(200)
      .json(attachStudents(Student.update(req.params.studentID, req.body)));
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404)
        .end();
    } else if (err.name === 'ValidationError') {
      res.status(400)
        .json(err.extra);
    } else {
      res.status(500)
        .json(err);
    }
  }
});


router.delete('/:studentId', (req, res) => {
  try {
    Student.delete(req.params.studentId);
    res.status(204).end();
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else {
      res.status(500).json(err);
    }
  }
});

router.delete('/:studentId', (req, res) => res.status(204)
  .json(Student.delete(req.params.studentId)));
router.put('/:studentId', (req, res) => res.status(201)
  .json(Student.update(req.params.studentId, req.body)));

module.exports = router;
