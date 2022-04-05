const express = require("express");
const productsAR = express.Router();
const productsAC = require("../../controllers/api/productsController");

productsAR.get("/products", productsAC.list);
//productsR.get("/products/detailsP/:model", productsAC.detailsP);

module.exports = productsAR;
