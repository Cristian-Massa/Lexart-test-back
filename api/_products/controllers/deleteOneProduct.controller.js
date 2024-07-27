const { where } = require('sequelize');
const db = require('../../../dataBase/models/index')

const deleteOneProduct = async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    const {Product} = db.sequelize.models;
    const {id} = req.param
    await Product.destroy({where:
      {id: id},
    });
    res.status(200).json({ message: 'Se han borrado el producto' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteOneProduct