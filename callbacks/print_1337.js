/*a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'
The last three ('ck' : 'x', 'er' : '0r', 'you' : 'j00') may be tough, depending on how you
implement your solution. ('er' : '0r' is almost guaranteed to be an issue, can you spot why?)
 Consider these stretch-on-stretch and don't get behind if they give you trouble. You can
 always return to this later.*/



var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  //console.log(toLowerCase(html));
  html = html
  .replace(/ck/g, 'x')
  .replace(/er/g, '0r')
  .replace(/you/g, 'j00')
  .replace(/[a]/g, '4')
  .replace(/[e]/g, '3')
  .replace(/[o]/g, '0')
  .replace(/[l]/g, '1')
  .replace(/[s]/g, '5')
  .replace(/[t]/g, '7');

  console.log(html);
}


getHTML(requestOptions, print1337);