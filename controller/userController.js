const httpStatus = require('../utils/statusCodes');
const userService = require('../services/userService');
const auth = require('../services/authService');

class UserController {
  async create(req, res) {
    const { full_name, email, password } = req.body;
    const user = await userService.create(full_name, email, password);
    return res.status(httpStatus.CREATED).json({
      message: "User created successfully",      
      data: user
    });    
  };
  async login(req, res) {
    const { email, password } = req.body;
    await auth.loginUser(email, password);
    return res.status(httpStatus.OK).json({
      message: 'Login successfully!'
    })      
  };
  async getByid(req, res) {
    const { id } = req.params;    
    const user = await userService.getById(id);      
    return res.status(httpStatus.OK).json(user);
  };
  async getAll(req, res) {    
    const users = await userService.getUsers();      
    return res.status(httpStatus.OK).json(users);
  };
  async update(req, res) {
    const { id } = req.params;  
    const {  full_name, email } = req.body; 
    await userService.update(id, full_name, email);
    return res.status(httpStatus.OK).json({
      message: "User updated successfully"
    });  
  };
  async delete(req, res) {
    const { id } = req.params;
    await userService.delete(id);    
    return res.status(httpStatus.OK).json({
      message: "User deleted successfully"
    });
  };
};

module.exports = new UserController();
