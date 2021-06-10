const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movieController');

router.get('/movie',MovieController.showAll);
router.get('/movie/:id',MovieController.showByID);
router.post('/movie/add',MovieController.add);
router.put('/movie/edit',MovieController.edit);
router.delete('/movie/delete',MovieController.delete);

module.exports = router