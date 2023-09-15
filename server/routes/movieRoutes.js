const exprees = require('express');

const router = exprees.Router();
const movieController = require('../controllers/movieController');



// APP Routes

router.get('/api/movies/', movieController.listMovies);
router.post('/api/movies/', movieController.insertSingleMovie);
router.patch('/api/movies/:id', movieController.updateSingleMovie); 
router.delete('/api/movies/:id', movieController.deleteSingleMovie);
router.get('/api/movies/:id', movieController.getSingleMovie);










module.exports = router;




