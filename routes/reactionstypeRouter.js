const express = require('express'); 
const router = express.Router();
const reactionstypeController = require('../controller/reactionstypeController');

router.post('/', reactionstypeController.create);
router.get('/', reactionstypeController.getAll);
router.delete('/:id', reactionstypeController.delete);

module.exports = router;
