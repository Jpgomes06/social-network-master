const express = require('express');
const router = express.Router();
const FriendshipController = require('../controller/friendshipController');
const validateSchema = require('../middlewares/friendshipValidation');
const { createFriendshipSchema, getByIdSchema } = require('../schemas/friendshipValidation');

router.post('/', validateSchema(createFriendshipSchema), FriendshipController.create);
router.get('/', FriendshipController.getAll);
router.get('/:id', validateSchema(getByIdSchema), FriendshipController.getById);
router.delete('/:id', validateSchema(getByIdSchema), FriendshipController.delete);

module.exports = router;
