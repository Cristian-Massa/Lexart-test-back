const db = require('../../../dataBase/models/index')

const deleteAllProducts = async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    const {Product} = db.sequelize.models;
    await Product.truncate();
    res.status(200).json({ message: 'Se han borrado todos los productos' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteAllProducts