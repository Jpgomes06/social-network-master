const { User } = require('../db/models');
const httpStatus = require("../utils/statusCodes");
const ApiError = require("../utils/ApiError");

class Repository {
    async create(full_name, email, hashedPassword) {
        try {
            return await User.sequelize.transaction(async (t) => {
                return User.create(
                    {
                        full_name: full_name,
                        email: email,
                        password: hashedPassword
                    }, { transaction: t });
            });
        } catch (error) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating user');
        };
    };
    async getByEmail(email) {
        try {
            return User.findOne(
                { where: { email } }
            );
        } catch (error) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error);
        };
    };
    async getById(id){
        return User.findOne(
            {
                where: { id: id },
                attributes: ['id', 'full_name', 'email', 'is_active']
            }
        );
    };
    async getAll(){
        return findAll(
            { attributes: ['id', 'full_name', 'email', 'is_active'] }
        );
    };
    async update(id, full_name, email) {
        try {
            await sequelize(async (t) => {
                await update(
                    { full_name: full_name, email: email },
                    {
                        where: {id: id},
                        transaction: t
                    }
                );
            });
        } catch (error) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while updating user');
        };
    };

    async delete (id) {
        try {
            await sequelize.transaction(async (t) => {
                await update(
                    { is_active: false },
                    {
                        where: {id: id},
                        transaction: t
                    }
                );
            });
        } catch (error) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting user');
        };
    };
};

module.exports = new Repository();
