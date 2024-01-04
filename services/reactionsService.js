const Repository = require('../repositories/reactionsRepository')
const Reactions = require("../db/models/reactions");
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

class ReactionsService {
    async create(user_id, reactions_type_id, post_id) {
        return Repository.create(user_id, reactions_type_id, post_id);
    };
    async getById(id) {
        const reactionById = await Repository.getById(id);
        if (!reactionById) throw new ApiError(httpStatus.NOT_FOUND,'Reaction not found');
        return reactionById;
    };
    async getAll() {
        return Repository.getAll();
    };
    async update(id, user_id, reactions_type_id, post_id) {
        const reactionById = await Repository.getById(id);
        if (!reactionById) throw new ApiError(httpStatus.NOT_FOUND,'Reaction not found');
        return Repository.update(id, user_id, reactions_type_id, post_id);
    };
    async delete(id) {
        const reactionById = await Repository.getById(id);
        if (!reactionById) throw new ApiError(httpStatus.NOT_FOUND,'Reaction not found');
        return Repository.delete(id);
    };
};

module.exports = new ReactionsService();
