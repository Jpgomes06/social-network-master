const express = require('express'); 
const router = express.Router();
const filetypeController = require('../controller/filetypeController');

router.post('/', filetypeController.create);
router.get('/', filetypeController.getAll);
router.delete('/:id', filetypeController.delete);

module.exports = router;
