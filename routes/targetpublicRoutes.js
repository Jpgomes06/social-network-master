const express = require('express'); 
const router = express.Router();
const targetublicController = require('../controller/targetpublicController');

router.post('/', targetublicController.create);
router.get('/', targetublicController.getAll);
router.delete('/:id', targetublicController.delete);

module.exports = router;
