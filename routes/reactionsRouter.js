const express = require('express');
const router = express.Router();
const reactionsController = require('../controller/reactionsController.js');
const { validation }  = require('../middlewares/validationReactions.js');
const reactionsSchema = require('../validation/reactionsValidation.js')

router.post('/', validation(reactionsSchema), reactionsController.create);
router.get('/', reactionsController.getAll);
router.put('/:id', validation(reactionsSchema), reactionsController.update);
router.delete('/:id', reactionsController.delete);

module.exports = router;
