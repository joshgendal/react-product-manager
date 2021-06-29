const Product = require("../models/product.model");

const createProduct = (req, res) => {
  const { title, description } = req.body;
  var { price } = req.body;
  price = Number(price);

  Product.create({
    title,
    price,
    description,
  })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

const getAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => {
      console.log(allProducts);
      res.json(allProducts);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createProduct,
  getAllProducts,
};
