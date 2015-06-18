var fs = require('fs');
var path = require('path');

exports.saveContentToDisk = function(content, pathname) {

  var p = path.join(process.cwd(), pathname);
  fs.writeFileSync(p , content);

}

exports.ensureDirectory =  function(name) {

  var exists,
    pathname = path.join(process.cwd(), name);

  try {

    var stat = fs.statSync(pathname);
    exists = stat.isDirectory();

  } catch(e) {

    exists =  false;
  }

  if (!exists) {
    // Create dir
    fs.mkdirSync(pathname)
  }

}


