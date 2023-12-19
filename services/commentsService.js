const Repository = require('../repositories/commentsRepository');
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

class CommentsService {
    async create(description, user_id, post_id) {
        return Repository.create(description, user_id, post_id);
    };
    async getById(id) {
        const commentById = await Repository.getById(id);
        if (!commentById) throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
        return commentById;
    };
    async getAll() {
        return Repository.getAll();
    };
    async update(id, description, user_id, post_id) {
        const commentById = await Repository.getById(id);
        if (!commentById) throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
        return Repository.update(id, description, user_id, post_id);
    };
    async delete(id) {
        const commentById = await Repository.getById(id);
        if (!commentById) throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
        return Repository.delete(id);
    };
}

module.exports = new CommentsService();
