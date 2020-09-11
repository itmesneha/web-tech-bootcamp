const express = require('express'),
      router = express.Router();

      let products = [
        {id: 101, name: 'banana', cost: 10, units: 5},
        {id: 102, name: 'bananae', cost: 15, units: 6},
        {id: 103, name: 'bananaee', cost: 20, units: 7},
      ];

router.get('/', function(req, res, next) {
  res.json(products);
});

router.get('/:id', function(req, res, next) {
  const pid = parseInt(req.params.id);
  const product = products.find(p => p.id === pid);
  if(product) {
    return res.json(product);
  }
  else {
    next();
  }
});

router.post('/', function(req,res,next) {
  const newProductId = products.reduce((result, product) => result > product.id ? result : product.id, 0) + 1;
  const newProduct = {...req.body, id: newProductId};
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// router.put('/:id', function(req, res, next) {
//   const pid = parseInt(req.params.id);
//   const existingProduct = products.find(p => p.id === pid);
//   if(existingProduct) {
//     const updatedProduct = req.body;
//     products = products.map(product => product.id === pid ? updatedProduct : product);
//     return res.json(updatedProduct);
//   }
//   else {
//     next();
//   }
// });

router.put('/:id', function(req, res, next){
    const pid = parseInt(req.params.id),
        existingProduct = products.find(p => p.id === pid);
    if (existingProduct) {
        const updatedProduct = req.body;
        products = products.map(product => product.id === pid ? updatedProduct : product);
        return res.json(updatedProduct);
    }
    next();
});

router.delete('/:id', function(req, res, next) {
  const pid = parseInt(req.params.id);
  const existingProduct = products.find(p => p.id === pid);
  if(existingProduct) {
    products = products.filter(product => product.id !== pid);
    return res.json({});
  }
  else {
    next();
  }
});



module.exports = router;
