const express = require('express');
const router = express.Router();
const AlbumController = require('../controller/albumController');
const validateSchema  = require('../middlewares/albumValidation');
const { createAlbumSchema, updateAlbumSchema, getByIdSchema } = require('../schemas/albumValidation');

router.post('/', validateSchema(createAlbumSchema), AlbumController.create);
router.get('/', AlbumController.getAll);
router.get('/:id', validateSchema(getByIdSchema), AlbumController.getById);
router.put('/:id', validateSchema(updateAlbumSchema), AlbumController.update);
router.delete('/:id', validateSchema(getByIdSchema), AlbumController.delete);

module.exports = router;
