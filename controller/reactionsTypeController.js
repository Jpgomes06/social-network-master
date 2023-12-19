const httpStatus = require('../utils/statusCodes');
const ReactionsTypeService = require('../services/reactionsTypeService');

class ReactionsTypeController {
    async create(req, res) {
        const { description } = req.body;
        const reactionType = await ReactionsTypeService.create(description);
        return res.status(httpStatus.CREATED).json({
            message: 'Reaction type created successfully!',
            data: reactionType
        });
    };
    async getAll(req, res) {
        const reactionsType = await ReactionsTypeService.getAll();
        return res.status(httpStatus.OK).json(reactionsType);
    };
    async delete(req, res) {
        const { id } = req.params;
        await ReactionsTypeService.delete(id);
        return res.status(httpStatus.OK).json({
            details: "Reaction type deleted successfully"
        });
    };
};

module.exports = new ReactionsTypeController();
