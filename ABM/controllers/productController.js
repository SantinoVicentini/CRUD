const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/productos.json'));


let productController = {
    home: function(req,res,next){
        return res.render('inicio')
    },
    create: function(req,res,next){
        return res.render('create')
    },
    store: function(req,res,next){
        products.push(req.body)
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(__dirname + '/../data/productos.json', productsJSON);
        return res.send('Producto creado');
    },
    edit: function(req, res, next){
        let productId = req.params.id;
        let productFound;
        for(let i = 0; i < products.length; i++){
            if(products[i].id == productId){
                productFound = products[i];
                break;
            }
        }
        if(productFound){
            return res.render('edit', {productFound})
        }
        return res.send('no se encontro el producto ' + productId)
    },
    update: function(req,res,next){
        let productId = req.params.id;
        let editProduct = products.map(function(product){
            if(product.id == productId){
                let productoEditado = req.body;
                productoEditado.id = productId;
                return productoEditado;
            }
            return product;
        });
        editProductJSON = JSON.stringify(editProduct);
        fs.writeFileSync(__dirname + '/../data/productos.json', editProductJSON);
        return res.redirect('/edit/' + productId)
    },
    destroy: function(req,res,next){
        let productId = req.params.id;
        let productDestroy = products.filter(function(product){
            return product.id != productId;
        });
        let productFound;
        for(let i = 0; i < products.length; i++){
            if(products[i].id == productId){
                productFound = products[i];
                break;
            }
        }
        if(!productFound){
            return res.send('este producto no existe');
        }
        productDestroyJSON = JSON.stringify(productDestroy);
        fs.writeFileSync(__dirname + '/../data/productos.json', productDestroyJSON);
        return res.send('producto eliminado');
    },
    list: function(req,res,next){
        res.render('list', {products});
    }
 }
    


module.exports = productController;