const getAllProducts = async (req, res) => {
    try {
      const limit = 15;
      const offset = parseInt(req.query.offset) || 0;
      const products = await Product.findAndCountAll({ limit, offset });
      res.json({
        total: products.count,
        products: products.rows,
        offset,
        limit
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = getAllProducts