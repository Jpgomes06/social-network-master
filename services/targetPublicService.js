const Repository = require('../repositories/targetPublicRepository');
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

class TargetPublicService {
    async create(type) {
        return Repository.create(type);
    };
    async getById(id) {
        if(!id) throw new ApiError(httpStatus.NOT_FOUND, 'Id not provid');
        const target_public = await Repository.getById(id);
        if (!target_public) throw new ApiError(httpStatus.NOT_FOUND, 'Target Public not found');
        return target_public;
    };
    async getAll() {
        return Repository.getAll();
    };
     async delete(id) {
        if(!id) throw new ApiError(httpStatus.NOT_FOUND, 'Id not provid');
        await this.getById(id);
        return Repository.delete(id);
    };
};

module.exports = new TargetPublicService();
