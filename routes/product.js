const express = require("express");
const router = express.Router();
const { uploadImage, create, remove, getAll, getByCategory } = require("../controllers/product");

const auth = require("../middlwares/auth");
const admin = require("../middlwares/admin");

router.post("/api/product", create);
router.delete("/api/product/:id", remove);
router.get("/api/products", getAll);
router.get("/api/products/category", getByCategory);
router.post("/api/product/upload/:id", uploadImage);

module.exports = router;
