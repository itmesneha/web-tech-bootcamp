const fs = require('fs');

const fileName = './sample.txt';


  // const fileContents = fs.readFileSync(fileName, {encoding : 'utf8'}); //wait for you to read and then let me know
  const fileContents = fs.readFile(fileName, {encoding : 'utf8'}, function(err, fileContents) {
    if(err) {
      console.log('something went wrong!');
      console.log(err);
    }
    console.log(fileContents);
    console.log('thats all folks!');
  }); //async, pass callback function. error first callback pattern

  // console.log('thats all folks!'); //this gets executed after the operation is initiated, not completed for async
