const https = require('https');
module.exports = function getHTML (options, callback) {
    /* Your code here */
  const https = require('https');

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

  var print = function printHTML (html) {
    console.log(html);
  }


};