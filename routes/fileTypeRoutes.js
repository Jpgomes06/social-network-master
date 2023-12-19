const express = require('express');
const router = express.Router();
const FileTypeController  = require('../controller/fileTypeController');
const validateSchema = require('../middlewares/fileTypeValidation');
const { createFileTypeSchema, getByIdSchema } = require('../schemas/fileTypeValidation')

router.post('/',validateSchema(createFileTypeSchema), FileTypeController.create);
router.get('/', FileTypeController.getAll);
router.delete('/:id', validateSchema(getByIdSchema), FileTypeController.delete);

module.exports = router;
