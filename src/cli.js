var program = require('commander');
var package = require(__dirname + '../../package')
var path = require('path');

var create = require('./create');

program
  .version(package.version)
  .command('create [name]')
  .description("generate project files for [name]")
  .action(create)

program.parse(process.argv);
