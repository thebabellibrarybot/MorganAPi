const tombController = require('../controllers/tombController');

const router = require('express').Router();

router.get('/tomb/:id', tombController.getSingleTomb);
router.get('/alltombs', tombController.getAllTombs);

module.exports = router;