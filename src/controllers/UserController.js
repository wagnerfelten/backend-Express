class UseControllers {
  create(request, response) {
    const { name, email, password } = request.body;

    response.status(201).send(
      `Nome: ${name} <br /> email: ${email} <br /> senha: ${password}`
    );
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
