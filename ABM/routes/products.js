var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController')

router.get('/', productController.home);

router.get('/create', productController.create);
router.post('/create', productController.store);

router.get('/edit/:id', productController.edit);
router.post('/edit/:id', productController.update);

module.exports = router;
