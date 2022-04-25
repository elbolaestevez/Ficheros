const express = require("express");
const router = express.Router();
require("dotenv").config();
const multer = require("multer");

const productsget = require("../controllers/productController");
const productspost = require("../controllers/productPostController");
const uploadImage = require("../services/firebase");
const storage = multer.memoryStorage({
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});
const upload = multer({ storage: storage });
router.get("/", productsget.start);
router.post(
  "/createproduct",
  [upload.single("imageupload"), uploadImage],
  productspost.createProduct
);

router.get("/search", productsget.search);

router.post("/searchproduct", productsget.getProduct);

module.exports = router;
