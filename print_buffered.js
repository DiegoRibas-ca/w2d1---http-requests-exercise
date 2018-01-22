const https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    var allChunkJoin = '';
    response.setEncoding('utf8');

    response.on('data', function(data){
      allChunkJoin += data;
    });

    response.on('end', function(){
      console.log(allChunkJoin)
      console.log("All response in an unique output")
    });
  });

  /* Add your code here */

}

getAndPrintHTML();