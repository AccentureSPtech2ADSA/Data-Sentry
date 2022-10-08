var database = require("../database/config");
const secret_key = process.env.SECRET_KEY_CRYPT;
async function insertUsuario({
  name = "",
  email = "",
  password = "",
  phone = "",
  manager = null,
  hospital = null,
}) {
  // query vai ser nosso comando sql -> para inserir -> insert into

  let query = `CALL sp_insereUser("${name}", "${email}", '${password}', '${phone}', ${hospital}, ${manager});`;

  if (database.isAmbienteProducao) {
    query = `sp_insereUser '${name}', '${email}', '${password}', '${phone}', ${manager}, ${hospital};`;
  }

  return await database.execute(query);
}
async function login({ email = "", password = "" }) {
  let query = `
  CALL sp_loginUser ('${email}', '${password}');
  `;
  if (database.isAmbienteProducao) {
    query = `EXEC sp_loginUser '${email}', '${password}';`;
  }
  // query mysql
  return await database.execute(query);
}
module.exports = {
  login,
  insertUsuario,
};
