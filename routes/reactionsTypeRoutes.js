const express = require('express');
const router = express.Router();
const ReactionsTypeController = require('../controller/reactionsTypeController');
const validateSchema = require('../middlewares/reationsTypeValidation');
const { createReactiontypeSchema, getByIdSchema } = require('../schemas/reactionsType');

router.post('/', validateSchema(createReactiontypeSchema), ReactionsTypeController.create);
router.get('/', ReactionsTypeController.getAll);
router.delete('/:id', validateSchema(getByIdSchema), ReactionsTypeController.delete);

module.exports = router;
