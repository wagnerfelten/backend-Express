const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class UseControllers {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExists){
      throw new AppError("Este e-maial já está em uso.")
    }

    return response.status(201).join();
  }
}

/*
    --- index - Get para listar vários registro
    --- show - Get para ixibir um registro especifico
    --- Create - Post para criar um registro
    --- Update - Put para atualizar um registro
    --- Delete - Delete para remover um elemento
*/

module.exports = UseControllers;
