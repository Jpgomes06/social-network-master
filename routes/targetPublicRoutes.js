const express = require('express');
const router = express.Router();
const TargetPublicController = require('../controller/targetPublicController');
const validateSchema = require('../middlewares/targetPublicValidation');
const { createTargetPublicSchema, getByIdSchema } = require('../schemas/targetPublicValidation');

router.post('/', validateSchema(createTargetPublicSchema), TargetPublicController.create);
router.get('/', TargetPublicController.getAll);
router.delete('/:id', validateSchema(getByIdSchema), TargetPublicController.delete);

module.exports = router;
