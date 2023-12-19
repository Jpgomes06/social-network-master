const httpStatus = require('../utils/statusCodes');
const AlbumItemService = require('../services/albumItemService');

class AlbumItemController {
    async create(req, res) {
        const { post_id, album_id } = req.body;
        const albumItem = await AlbumItemService.create(post_id, album_id);
        return res.status(httpStatus.CREATED).json({
            message: 'Album item created successfully!',
            data: albumItem
        });
    };
    async getAll(req, res) {
        const albumItems = await AlbumItemService.getAll();
        return res.status(httpStatus.OK).json(albumItems);
    };
    async delete(req, res) {
        const { id } = req.params;
        await AlbumItemService.delete(id);
        return res.status(httpStatus.OK).json({
            details: "Album item deleted successfully"
        });
    };
};

module.exports = new AlbumItemController();
