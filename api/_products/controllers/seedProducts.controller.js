const {result} = require('../../../utils/productsToCharge/products.json')
const db = require('../../../dataBase/models/index')

const seedProducts = async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({});
    const limit = parseInt(req.query.limit) || 15;
    const offset = parseInt(req.query.offset) || 0;
    const {Product} = db.sequelize.models;
    await Product.bulkCreate(result);
    const products = await Product.findAndCountAll({ limit, offset });
    res.status(200).json({
      total: products.count,
      products: products.rows,
      offset,
      limit,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = seedProducts
