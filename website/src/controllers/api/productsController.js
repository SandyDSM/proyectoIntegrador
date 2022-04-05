const path = require("path");
const { fileURLToPath } = require("url");
const db = require("../../database/models");

const Product = db.Product;
const Stock = db.Stock;

const productsAC = {
  list: (req, res) => {
    const obtenerProducts = Product.findAll({
      include: [{ association: "stock" }, { association: "type_products" }],
    });
    const obtenerStock = Stock.findAll({
      include: [
        { association: "sizes" },
        { association: "images" },
        { association: "products" },
      ],
    });
    Promise.all([obtenerProducts, obtenerStock]).then(function ([
      productos,
      inventario,
    ]) {
      const resProducts = {
        meta: {
          status: 200,
          total: inventario.length,
          url: "/api/products",
        },
        data: productos,
        inventario,
      };
      res.json(resProducts);
    });
  },
};

module.exports = productsAC;
