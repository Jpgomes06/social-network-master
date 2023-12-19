const httpStatus = require('../utils/statusCodes');
const commentsService = require('../services/commentsService');

class CommentsController {
    async create(req, res) {
        const { description, user_id, post_id } = req.body;
        const comment = await commentsService.create(description, user_id, post_id);
        return res.status(httpStatus.CREATED).json({
            message: 'Comment created successfully!',
            data: comment
        });
    };
    async getById(req, res) {
        const { id } = req.params;
        const commentById = await commentsService.getById(id);
        return res.status(httpStatus.OK).json(commentById);
    };
    async getAll(req, res) {
        const comments = await commentsService.getAll();
        return res.status(httpStatus.OK).json(comments);
    };
    async update(req, res) {
        const { id } = req.params;
        const { description, user_id, post_id } = req.body;
        await commentsService.update(id, description, user_id, post_id);
        return res.status(httpStatus.OK).json({
            details: "Comment updated successfully"
        });
    };
    async delete(req, res) {
        const { id } = req.params;
        await commentsService.delete(id);
        return res.status(httpStatus.OK).json({
            details: "Comment deleted successfully"
        });
    };
};

module.exports = new CommentsController();
