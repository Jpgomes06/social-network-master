const express = require('express');
const router = express.Router();
const PostController = require('../controller/postController');
const  validateSchema   = require('../middlewares/postValidation');
const { createPostSchema, updatePostSchema, getByIdSchema } = require('../schemas/postValidation')

router.post('/', validateSchema(createPostSchema), PostController.create);
router.get('/', PostController.getAll);
router.get('/:id', validateSchema(getByIdSchema), PostController.getById);
router.put('/:id', validateSchema(updatePostSchema), PostController.update);
router.delete('/:id', validateSchema(getByIdSchema), PostController.delete);

module.exports = router;
 