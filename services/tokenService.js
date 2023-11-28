const jwt = require('jsonwebtoken');
const ApiError = require("../utils/ApiError");
const Token = require("../models/token");
const httpStatus = require("../utils/statusCodes");
const secret = 'mySecret1234';

class GenerateTokens {
    async generateAuthTokens(user) {
        try {
            const payload = {
                id: user.id,
                name: user.full_name
            };
            const token = jwt.sign(payload, secret, { expiresIn: '1s' });
            await Token.create({
                token: token,
                user_id: user.id                
            });
            console.log('Token gerado:', token);
            return token;
        } catch (error) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Erro ao gerar o token');
        }
    };
    async verifyToken(token) {
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Token inválido ou expirado');
        }
    };
    async verifyTokenAndRefresh(user) {
    try {       
        const newToken = jwt.sign(user, secret, { expiresIn: '20s' });        
        await Token.update( { usertoken: newToken } );
        return newToken;          
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Token expirado');
        } else {
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Erro na verificação ou atualização do token');
        }
    }
};

}

module.exports = new GenerateTokens();
