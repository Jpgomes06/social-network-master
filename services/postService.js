const Repository = require('../repositories/postRepository')
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

class PostService {
    async create(description, user_id, target_id, type_id) {
        return Repository.create(description, user_id, target_id, type_id);
    };
    async getById(id) {
        const postbyId = await Repository.getById(id);
        if (!postbyId) throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
        return postbyId;
    };
    async getAll() {
        return Repository.getAll();
    };
    async update(id, description, user_id, target_id, type_id) {
        const postbyId = await Repository.getById(id);
        if (!postbyId) throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
        return Repository.update(id, description, user_id, target_id, type_id);
    };
    async delete(id) {
        const postbyId = await Repository.getById(id);
        if (!postbyId) throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
        return Repository.delete(id);
    };
};

module.exports = new PostService();
