const https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function (response) {
    var allChunkJoin = '';
    response.setEncoding('utf8');

    response.on('data', function(data){
      allChunkJoin += data;
    });

    response.on('end', function(){
      callback(allChunkJoin);
      console.log("All response in an unique output");
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions ,printHTML);