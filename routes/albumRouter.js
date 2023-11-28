const express = require('express');
const router = express.Router();
const albumController = require('../controller/albumController');
const { validation }  = require('../middlewares/validationAlbum');
const albumSchema = require('../validation/albumValidation');

router.post('/', validation(albumSchema), albumController.create);
router.get('/', albumController.getAll);
router.get('/:id', albumController.getById);
router.put('/:id', validation(albumSchema), albumController.update);
router.delete('/:id', albumController.delete);

module.exports = router;
 