const {Router} = require('express');
const TicketRouter = require('./students');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/students', TicketRouter);

module.exports = router;
