const db = require("../../../dataBase/models/index");
const { encrypter } = require("../../../utils/encryptor.util");
// Controlador para el registro de usuario
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    await db.sequelize.authenticate();
    await db.sequelize.sync({});
    const { User } = db.sequelize.models;

    const hash = await encrypter(password);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hash,
    });
    if (user.id) {
      return res.status(201).json({ message: "Usuario creado", user });
    }
    return res.status(400).json({ message: "No se pudo crear el usuario" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registerUser;
