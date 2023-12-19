const express = require('express');
const router = express.Router();
const AlbumItemController = require('../controller/albumItemController');
const validateSchema  = require('../middlewares/albumItemValidation')
const { createAlbumItemSchema, getByIdSchema } = require('../schemas/albumItemValidation')

router.post('/', validateSchema(createAlbumItemSchema), AlbumItemController.create);
router.get('/', AlbumItemController.getAll);
router.delete('/:id', validateSchema(getByIdSchema), AlbumItemController.delete);

module.exports = router;
