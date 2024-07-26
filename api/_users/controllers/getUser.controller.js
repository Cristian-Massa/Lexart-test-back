
const { where } = require('sequelize');
const db = require('../../../dataBase/models/index')
// Controlador para obtener la información del usuario según su ID
const getUserById = async (req, res) => {
    await db.sequelize.authenticate();
    await db.sequelize.sync({})
    const {User} = db.sequelize.models
    const userId = parseInt(req.params.id);
    const user = User.findOne({where: {id: userId}});
    
    if (user.id) {
        res.status(200).json({user});
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
};

module.exports = getUserById
