const express = require('express');
const router = express.Router();
const commentsController = require('../controller/commentsController.js');
const { validation }  = require('../middlewares/commentsValidations.js');
const commentsSchema = require('../validation/commentsValidation.js')

router.post('/', validation(commentsSchema), commentsController.create);
router.get('/', commentsController.getAll);
router.get('/:id', commentsController.getByid);
router.put('/:id', validation(commentsSchema), commentsController.update);
router.delete('/:id', commentsController.delete);

module.exports = router;
