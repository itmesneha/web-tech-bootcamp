const fs = require('fs');

const fileName = './sample.txt';

const stream = fs.createReadStream(fileName, {encoding : 'utf8'}); //returns a readable stream

//readable stream events - open, data, end, close, console.error

let readCount = 0;

stream.on('data', function(chunk) {
  console.log(chunk);
  ++readCount;
});

stream.on('end', function() {
  console.log('thats all folks!');
  console.log(`read count: ${readCount}`);
});

stream.on('err', function() {
  console.log('something went wrong!');
  console.log(err);
})
