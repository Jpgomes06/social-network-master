const httpStatus = require('../utils/statusCodes');
const friendshipService = require('../services/friendshipServices');

class FriendshipController {
    async create(req, res) {
        const { principal_user_id, friend_id } = req.body;
        const friendship = await friendshipService.create(principal_user_id, friend_id);
        return res.status(httpStatus.CREATED).json({
            message: 'Friendship created successfully!',
            data: friendship
        });
    };
    async getAll(req, res) {
        const friendships = await friendshipService.getAll();
        return res.status(httpStatus.OK).json(friendships);
    };
    async getById(req, res){
        const { id } = req.params;
        const friendshipById = await friendshipService.getById(id);
        return res.status(httpStatus.OK).json(friendshipById);
    };
    async delete(req, res) {
        const { id } = req.params;
        await friendshipService.delete(id);
        return res.status(httpStatus.OK).json({
            details: "Friendship deleted successfully"
        });
    };
};

module.exports = new FriendshipController();
