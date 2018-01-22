var https = require('https');

function getAndPrintHTMLChunks () {

//create object to be requested
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

//function to request
  https.get(requestOptions, function(response) {
//encoding type
    response.setEncoding('utf8')
//read data - make a callback to log
    response.on('data', function(data){
      console.log(`new line of chunk \n ${data} \n\n`);
    });

    response.on('end', function(){
      console.log('Renponse finished')
    });


  });
  /* Add your code here */

}

getAndPrintHTMLChunks();