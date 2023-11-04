const express = require('express'); 
const router = express.Router();
const albumitemController = require('../controller/albumitemController');

router.post('/', albumitemController.create);
router.get('/', albumitemController.getAll);
router.delete('/:id', albumitemController.delete);

module.exports = router;
