const httpStatus = require('../utils/statusCodes');
const postService = require('../services/postService');

class PostController {
    async create(req, res) {
        const { description, user_id, target_id, type_id } = req.body;
        const post = await postService.create(description, user_id, target_id, type_id);
        return res.status(httpStatus.CREATED).json({
            message: 'Post created successfully!',
            data: post
        });
    };
    async getById(req, res) {
        const { id } = req.params;
        const postById = await postService.getById(id);
        return res.status(httpStatus.OK).json(postById);
    };
    async getAll(req, res) {
        const posts = await postService.getAll();
        return res.status(httpStatus.OK).json(posts);
    };
    async update(req, res) {
        const { id } = req.params;
        const { description, user_id, target_id, type_id } = req.body;
        await postService.update(id, description, user_id, target_id, type_id);
        return res.status(httpStatus.OK).json({
            details: "Post updated successfully"
        });
    };
    async delete(req, res) {
        const { id } = req.params;
        await postService.delete(id);
        return res.status(httpStatus.OK).json({
            details: "Post deleted successfully"
        });
    };
};

module.exports = new PostController();
