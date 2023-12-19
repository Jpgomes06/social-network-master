const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');
const validateSchema  = require('../middlewares/userValidation');
const validateLogin  = require('../middlewares/validationLogin');
const { createUserSchema, updateUserSchema, getByIdSchema, loginSchema } = require('../schemas/userValidation');

router.post('/', validateSchema(createUserSchema), UserController.create);
router.post('/login', validateLogin(loginSchema), UserController.loginUser);
router.post('/refresh-token', UserController.createRefreshToken);
router.get('/get-all', UserController.getAll);
router.get('/:id', validateSchema(getByIdSchema), UserController.getById);
router.put('/:id',validateSchema(updateUserSchema), UserController.update);
router.delete('/:id', validateSchema(getByIdSchema),  UserController.delete);

module.exports = router;
