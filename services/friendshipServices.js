const Repository = require('../repositories/friendshipRepository');
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");
const userService = require("./userServices");

class FriendshipService {
    async create(principal_user_id, friend_id) {
        return Repository.create(principal_user_id, friend_id);
    };
    async getAll() {
        return Repository.getAll();
    };
    async getById(id){
        const friendshipById = await Repository.getById(id);
        if (!friendshipById) throw new ApiError(httpStatus.NOT_FOUND, 'Friendship not found.');
        return friendshipById;
    };
    async delete(id) {
        await this.getById(id);
        return Repository.delete(id);
    };
};

module.exports = new FriendshipService();
