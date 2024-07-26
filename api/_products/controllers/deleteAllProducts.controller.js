const {Product} = require('../../../dataBase/models/product')

const deleteAllProducts = async (req, res) => {
  try {
    await Product.destroy({ where: {}, truncate: true });
    res.json({ message: 'All products deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = deleteAllProducts