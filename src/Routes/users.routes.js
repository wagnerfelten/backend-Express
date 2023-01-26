const { Router } = require("express");
const usersRoutes = Router();
const UserControllers = require('../controllers/UserController');


const myMiddleware = (request, response, next) => {
  console.log("Autorizado pelo Milldlewere!!!")

  if(!request.body.isAdmin){
    return response.json({
      message:"user not Authorized"
    });
  }

  next();
}

const userController = new UserControllers();

usersRoutes.post("/",myMiddleware, userController.create) 

  module.exports = usersRoutes;