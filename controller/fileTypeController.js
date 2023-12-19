const httpStatus = require('../utils/statusCodes');
const FileTypeService  = require('../services/fileTypeService');

class FileTypeController {
    async create(req, res) {
        const { type } = req.body;
        const fileType = await FileTypeService.create(type);
        return res.status(httpStatus.CREATED).json({
            message: 'File type created successfully!',
            data: fileType
        });
    };
    async getAll(req, res) {
        const fileTypes = await FileTypeService.getAll();
        return res.status(httpStatus.OK).json(fileTypes);
    };
    async delete(req, res) {
        const { id } = req.params;
        await FileTypeService.delete(id);
        return res.status(httpStatus.OK).json({
            details: "File type deleted successfully"
        });
    };
};

module.exports = new FileTypeController();
