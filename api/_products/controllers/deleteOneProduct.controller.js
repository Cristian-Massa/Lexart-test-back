const { where } = require('sequelize');
const db = require('../../../dataBase/models/index')

const deleteOneProduct = async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    const {Product} = db.sequelize.models;
    const limit = parseInt(req.query.limit) || 15;
    const offset = parseInt(req.query.offset) || 0;
    const id = parseInt(req.query.id) ||  undefined;
    await Product.destroy({where:
      {id: id},
    });
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

module.exports = deleteOneProduct