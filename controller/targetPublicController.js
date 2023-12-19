const httpStatus = require('../utils/statusCodes');
const TargetPublicService = require('../services/targetPublicService');

class TargetPublicController {
    async create(req, res) {
        const { type } = req.body;
        const targetAudience = await TargetPublicService.create(type);
        return res.status(httpStatus.CREATED).json({
            message: 'Target-Audience created successfully!',
            data: targetAudience
        });
    };
    async getAll(req, res) {
        const targetAudience = await TargetPublicService.getAll();
        return res.status(httpStatus.OK).json(targetAudience);
    };
    async delete(req, res) {
        const { id } = req.params;
        await TargetPublicService.delete(id);
        return res.status(httpStatus.OK).json({
            details: "Target-Audience deleted successfully"
        });
    };
};

module.exports = new TargetPublicController();
