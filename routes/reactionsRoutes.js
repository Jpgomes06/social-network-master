const express = require('express');
const router = express.Router();
const ReactionsController = require('../controller/reactionsController');
const validateSchema = require('../middlewares/reactionValidation');
const { createReactionsSchema, updateReactionsSchema, getByidSchema } = require('../schemas/reactionsValidation');

router.post('/', validateSchema(createReactionsSchema), ReactionsController.create);
router.get('/', ReactionsController.getAll);
router.get('/:id', validateSchema(getByidSchema), ReactionsController.getById);
router.put('/:id', validateSchema(updateReactionsSchema), ReactionsController.update);
router.delete('/:id',validateSchema(getByidSchema), ReactionsController.delete);
 
module.exports = router;
