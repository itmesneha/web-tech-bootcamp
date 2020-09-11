const express = require('express'),
      logger = require('morgan'),
       http = require('http'),
       chalk = require('chalk'),
       productsRoutes = require('./routes/productRoutes'),
       indexRoutes = require('./routes/indexRoutes');


//how to run an express app
const app = express();

// const products = [
//   {id: 101, name: 'banana', cost: 10, units: 5},
//   {id: 102, name: 'bananae', cost: 15, units: 6},
//   {id: 103, name: 'bananaee', cost: 20, units: 7},
// ];

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use('/', indexRoutes);
app.use('/products', productsRoutes);

// app.use(function(req, res, next) {
//
//   if(req.url === '/products'){
//     res.json(products);
//   }
//   else {
//     next();
//   }
//
//   // res.write('express app is running!');
//   // res.end();
// });

app.use(function(req, res, next) {
  res.status(404).end();
});

const server = http.createServer(app);

server.listen(8080);

server.on('listening', () => {
  console.log(chalk.yellow('server is runing!!'));
})
