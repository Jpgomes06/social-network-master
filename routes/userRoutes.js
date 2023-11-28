// const express = require('express');
// const router = express.Router();
// const UserController = require('../controller/userController');
// const { validation }  = require('../middlewares/validationUser');
// const userSchema = require('../validation/userValidation')

// router.post('/', validation(userSchema), UserController.create);
// router.post('/login', UserController.login);
// router.post('/tokenRefresh', UserController.tokenRefresh);
// router.get('/', UserController.getAll);
// router.get('/:id', UserController.getByid);
// router.put('/:id', validation(userSchema), UserController.update);
// router.delete('/:id', UserController.delete);

// module.exports = router;

const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');
const { validation }  = require('../middlewares/validationUser');
const userSchema = require('../validation/userValidation')

router.post('/', validation(userSchema), UserController.create);
router.post('/login', UserController.login);
router.get('/tokenRefresh', UserController.tokenRefresh); // Movido para cima
router.get('/', UserController.getAll);
router.get('/:id', UserController.getByid);
router.put('/:id', validation(userSchema), UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;

