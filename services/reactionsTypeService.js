const Repository = require('../repositories/reactionsTypeRepository');
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

class ReactionsTypeService {
    async create(description) {
        return await Repository.create(description);
    };
    async getAll() {
        return Repository.getAll();
    };
    async delete(id) {
        const reactionsTypeId = await Repository.getById(id);
        if (!reactionsTypeId) throw new ApiError(httpStatus.NOT_FOUND, 'Reaction type not found');
        return Repository.delete(id);
    };
};

module.exports = new ReactionsTypeService();
