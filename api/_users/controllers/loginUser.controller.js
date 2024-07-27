const { where } = require('sequelize');
const jwt = require('jsonwebtoken')
const db = require('../../../dataBase/models/index')
const {compare} = require('../../../utils/encryptor.util')
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        await db.sequelize.authenticate();
        await db.sequelize.sync({});
        const {User} = db.sequelize.models
        const user = await User.findOne({where: {
            email: email
        }})
        console.log(user);
        if (user.id) {
            const result = compare(user.password, password)
            if(result){
                const token = jwt.sign(user, process.env.JWT_SECRET,{
                    algorithm: process.env.JWT_ALGORITHM,
                    expiresIn: 86400000
                })

                res.cookie("access_token", token, {
                    httpOnly: true,
                    secure: true,
                })
                return res.status(200).json({ message: 'Login exitoso', user });
            }else{
                return res.status(404).json({ message: 'Contraseña incorrecta'})
            }
        } else {
            return res.status(401).json({ message: 'El usuario no existe' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = loginUser