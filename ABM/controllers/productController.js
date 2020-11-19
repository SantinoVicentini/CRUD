const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/productos.json'));


let indexController = {
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
    }

}

module.exports = indexController;