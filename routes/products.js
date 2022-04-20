const express = require("express");
const router = express.Router();

const productsget = require('../controllers/productController');
const productspost = require('../controllers/productPostController');    


router.get('/',productsget.start);
router.post('/createproduct',productspost.createProduct);
router.post('/createproductprueba',productspost.uploadphoto);
//router.post('/searchproduct',productspost.searchProduct);
router.get('/search',productsget.search);

router.post('/searchproduct',productsget.getProduct);



//   router.get(
//     "/product/:id"
//     LandingGetController.getLanding
//   );

module.exports = router;