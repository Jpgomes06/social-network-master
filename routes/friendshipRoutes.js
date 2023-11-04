const express = require('express');
const router = express.Router();
const friendshipController = require('../controller/friendshipController');
const { validation }  = require('../middlewares/validationFriendship');
const friendshipSchema = require('../validation/friendshipValidation');

router.post('/', validation(friendshipSchema), friendshipController.create);
router.get('/', friendshipController.getAll);
router.delete('/:id', friendshipController.delete);

module.exports = router;
