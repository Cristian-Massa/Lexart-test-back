const db = require('../../../dataBase/models/index')

const getProductById = async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({});
    const {Product} = db.sequelize.models;
    const product = await Product.findByPk(req.query.id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProductById