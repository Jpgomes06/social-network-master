const Repository = require('../repositories/albumRepository');
const httpStatus = require("../utils/statusCodes");
const ApiError = require("../utils/ApiError");

class AlbumService {
    async create(description, target_id) {
        return await Repository.create(description, target_id);
    };
    async getById(id) {
        const albumById = await Repository.getById(id);
        if (!albumById) throw new ApiError(httpStatus.NOT_FOUND, 'Album not found!');
        return albumById;
    };
    async getAll() {
        return Repository.getAll();
    };
    async update(id, description, target_id) {
        const albumById = await Repository.getById(id);
        if (!albumById) throw new ApiError(httpStatus.NOT_FOUND, 'Album not found!');
        return Repository.update(id, description, target_id);
    };
    async delete(id) {
        const albumById = await Repository.getById(id);
        if (!albumById) throw new ApiError(httpStatus.NOT_FOUND, 'Album not found!');
        return Repository.delete(id);
    };
};

module.exports = new AlbumService();
