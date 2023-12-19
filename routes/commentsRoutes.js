const express = require('express');
const router = express.Router();
const CommentsController = require('../controller/commentsController');
const validateSchema  = require('../middlewares/commentsValidation');
const { createCommentsSchema, updateCommentsSchema, getByIdSchema } = require('../schemas/commentsValidation');

router.post('/', validateSchema(createCommentsSchema), CommentsController.create);
router.get('/', CommentsController.getAll);
router.get('/:id', validateSchema(getByIdSchema), CommentsController.getById);
router.put('/:id', validateSchema(updateCommentsSchema), CommentsController.update);
router.delete('/:id', validateSchema(getByIdSchema), CommentsController.delete);

module.exports = router;
