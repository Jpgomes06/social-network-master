const httpStatus = require('../utils/statusCodes');
const AlbumService = require('../services/albumService');

class AlbumController {
    async create(req, res) {
        const { description, target_id } = req.body;
        const album = await AlbumService.createAlbum(description, target_id);
        return res.status(httpStatus.CREATED).json({
            message: 'Album created successfully!',
            data: album
        });
    };
    async getById(req, res) {
        const { id } = req.params;
        const albumById = await AlbumService.getById(id);
        return res.status(httpStatus.OK).json(albumById);
    };
    async getAll(req, res) {
        const albums = await AlbumService.getAll();
        return res.status(httpStatus.OK).json(albums);
    };
    async update(req, res) {
        const { id } = req.params;
        const { description, target_id } = req.body;
        await AlbumService.update(id, description, target_id);
        return res.status(httpStatus.OK).json({
            details: "Album updated successfully"
        });
    };
    async delete(req, res) {
        const { id } = req.params;
        await AlbumService.delete(id);
        return res.status(httpStatus.OK).json({
            details: "Album deleted successfully"
        });
    };
};

module.exports = new AlbumController();
