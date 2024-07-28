const db = require("../../../dataBase/models/index");
const { encrypter } = require("../../../utils/encryptor.util");
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    await db.sequelize.authenticate();
    await db.sequelize.sync({});
    const { User } = db.sequelize.models;

    // Hash the password
    const hash = await encrypter(password);

    // Create the user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hash,
    });

    if (user && user.id) {
      // Generate a token with minimal payload
      const token = jwt.sign({
          id: user.id,
          email: user.email,  
          firstName: user.firstName,
          lastName: user.lastName
        }, process.env.JWT_SECRET, {
        algorithm: process.env.JWT_ALGORITHM || 'HS256',
        expiresIn: '1d'
      });

      // Set the token in a cookie
      res.cookie("access_token", token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production', // Only use secure cookies in production
        maxAge: 86400000,
        sameSite: 'Lax'
      });

      return res.status(201).json({ message: "Usuario creado: " + token });
    }

    return res.status(400).json({ message: "No se pudo crear el usuario" });
  } catch (error) {
    console.error('Error en el registro del usuario:', error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = registerUser;
