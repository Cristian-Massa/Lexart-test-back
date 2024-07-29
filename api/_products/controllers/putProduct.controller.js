const {result} = require('../../../utils/productsToCharge/products.json')
const db = require('../../../dataBase/models/index');
const { where } = require('sequelize');

const putProduct = async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({});
    const {Product} = db.sequelize.models;
    const {
      id,
      name,
      stock,
      price,
      mark,
      model
    } = req.body
    console.log({
      
      id,
      name,
      stock,
      price,
      mark,
      model
    });
    await Product.update({
      name,
      stock,
      price,
      mark,
      model
    }, {where: {
      id: id
    }});
    res.status(200).json({ success: "Objeto modificado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = putProduct
