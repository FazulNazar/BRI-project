const {Router} = require('express');
const StudentRouter = require('./students');
const UniversityRouter = require('./university');
const WishRouter = require('./wish');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/students', StudentRouter);
router.use('/university', UniversityRouter);
router.use('/wish-list', WishRouter);

module.exports = router;
