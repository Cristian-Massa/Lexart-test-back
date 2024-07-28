const { where } = require("sequelize");
const jwt = require("jsonwebtoken");
const db = require("../../../dataBase/models/index");
const { compare } = require("../../../utils/encryptor.util");
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    await db.sequelize.authenticate();
    await db.sequelize.sync({});
    const { User } = db.sequelize.models;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (user.id) {
      const result = compare(user.password, password);
      if (result) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          process.env.JWT_SECRET,
          {
            algorithm: process.env.JWT_ALGORITHM || "HS256",
            expiresIn: "1d",
          }
        );

        // Set the token in a cookie
        res.cookie("access_token", token, {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production", // Only use secure cookies in production
          maxAge: 86400000,
          sameSite: "Lax",
        });
        return res.status(200).json({ message: "Login exitoso:", token });
      } else {
        return res.status(404).json({ message: "Contraseña incorrecta" });
      }
    } else {
      return res.status(401).json({ message: "El usuario no existe" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = loginUser;
