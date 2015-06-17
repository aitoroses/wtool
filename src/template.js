var Handlebars = require('handlebars');
var fs = require('fs');

var template_path = __dirname + '/template/';

function compile(name) {
  var source = fs.readFileSync(template_path + name).toString('utf-8');
  var template = Handlebars.compile(source);
  return template;
}

module.exports = compile;
