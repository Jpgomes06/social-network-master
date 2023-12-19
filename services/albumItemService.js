const Repository = require('../repositories/albumItemRepository');
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

class AlbumItemService {
    async create(post_id, album_id) {
        return await Repository.create(post_id, album_id);
    };
    async getAll() {
        return Repository.getAll();
    };
    async delete(id) {
        const albumItemById = await Repository.getById(id);
        if (!albumItemById) throw new ApiError(httpStatus.NOT_FOUND, 'Album item not found');
        return Repository.delete(id);
    };
};

module.exports = new AlbumItemService();
