const db = require("../../../dataBase/models/index");

const getAllProducts = async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({});
    const {Product} = db.sequelize.models;

    const limit = parseInt(req.query.offset) || 15;
    const offset = parseInt(req.query.offset) || 0;
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

module.exports = getAllProducts;
