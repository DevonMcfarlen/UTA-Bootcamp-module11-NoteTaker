const router = require('express').Router();

const notesRouter = require('./notes-routes');

router.use('/notes',notesRouter);

module.exports = router;
