const seedProducts = async (req, res) => {
  try {
    const exampleProducts = [];
    for (let i = 0; i < 50; i++) {
      exampleProducts.push({
        name: `Product ${i + 1}`,
        description: `Description for product ${i + 1}`,
        price: (Math.random() * 100).toFixed(2),
        // Añade otros campos necesarios aquí
      });
    }
    await Product.bulkCreate(exampleProducts);
    res.status(201).json({ message: '50 example products created' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = seedProducts
