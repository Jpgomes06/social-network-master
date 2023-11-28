const express = require('express');
const router = express.Router();
const postController = require('../controller/postController.js');
const { validation }  = require('../middlewares/validationPost');
const postSchema = require('../validation/postValidation')

router.post('/', validation(postSchema), postController.create);
router.get('/', postController.getAll);
router.get('/:id', postController.getByid);
router.put('/:id', validation(postSchema), postController.update);
router.delete('/:id', postController.delete);

module.exports = router;
