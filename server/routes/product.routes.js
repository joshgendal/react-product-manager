const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.post("/api/product", ProductController.createProduct);
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/product/:productId", ProductController.getProductById);
};
