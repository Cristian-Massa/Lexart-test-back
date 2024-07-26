
const { where } = require('sequelize');
const db = require('../../../dataBase/models/index')
// Controlador para obtener la información del usuario según su ID
const getUserById = async (req, res) => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync({})
        const {User} = db.sequelize.models
        const userId = parseInt(req.params.id);
        const user = await User.findOne({where: {id: userId}});
        
        if (user.id) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                createdAt: user.createdAt
            });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getUserById
