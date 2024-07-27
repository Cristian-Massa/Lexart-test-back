const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const token = req.cookies?.access_token;
  if (!token) {
    return res.status(401).json({error: "Necesitas iniciar secion"}); // Si no hay token, no autorizado
    }


  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.clearCookie("access_token")
      return res.status(403).json({error: "Tu token ya ha expirado necesitas iniciar secion de nuevo"}); // Si el token no es válido, prohibido
    }
    next();
  });
};

module.exports = authenticateToken;
