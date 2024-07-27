const {result} = require('../../../utils/productsToCharge/products.json')
const db = require('../../../dataBase/models/index')

const createProduct = async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({});
    const {Product} = db.sequelize.models;
    const {
      name,
      stock,
      price,
      mark,
      model
    } = req.body
    await Product.create({
      name,
      stock,
      price,
      mark,
      model
    });
    res.status(201).json({ message: 'Todos los productos han sido cargados' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createProduct
