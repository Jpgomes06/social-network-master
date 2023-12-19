const Repository  = require('../repositories/fileTypeRepository');
const FileType = require("../models/file_type");
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

class FileTypeService {
    async create(type) {
        return Repository.create(type)
    };
    async getById(id){
        const fileTypeById = await Repository.getById(id);
        if (!fileTypeById) throw new ApiError(httpStatus.NOT_FOUND, 'File type not found!');
        return fileTypeById;
    };
    async getAll() {
        return Repository.getAll();
    };
    async delete(id) {
        await this.getById(id);
        return Repository.delete(id);
    };
};

module.exports = new FileTypeService();
