var fs = require('fs');
var path = require('path');

exports.saveContentToDisk = function (content, pathname) {
  var p = path.join(process.cwd(), pathname);
  fs.writeFileSync( p , content );
}
