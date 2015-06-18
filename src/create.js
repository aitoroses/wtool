var template = require('./template');
var util = require('./util');
var path = require('path');
var fs = require('fs');
var inquirer = require('inquirer');

var files = {
  editorconfig: {
    template: 'editorconfig.hbs',
    path: '.editorconfig'
  },
  travis: {
    template: 'travis.hbs',
    path: '.travis.yml'
  },
  index: {
    template: 'index.hbs',
    path: 'index.html'
  },
  karma: {
    template: 'karma.conf.hbs',
    path: 'karma.conf.js'
  },
  package: {
    template: 'package.hbs',
    path: 'package.json'
  },
  test_webpack: {
    template: 'test.webpack.hbs',
    path: 'test.webpack.js'
  },
  webpack_config: {
    template: 'webpack.config.hbs',
    path: 'webpack.config.js'
  },
}




// Generate the files
function create() {

  var args = arguments;
  var name = args[0];
  var user = process.env['USER'];

  function writeTemplate(file, data) {
    var temp = template(file.template);
    util.saveContentToDisk( temp( data ), path.join(name, file.path) );
  }

  if (!name) {
    console.log("You must provide a name. See usage.")
    return
  }

  // Create the directory specified by name if it does not exist
  util.ensureDirectory(name)

  // EditorConfig
  writeTemplate(files.editorconfig)

  // Travis
  writeTemplate(files.travis)

  // Index
  writeTemplate(files.index, {
    title: name
  })

  // Karma
  writeTemplate(files.karma)

  // Package.json
  inquirer.prompt([{
    name: 'description',
    default: "",
    type: "string",
    message: "Enter a description for the project",
  },{
    name: 'version',
    default: "1.0.0",
    type: "string",
    message: "Enter a project version",
  },{
    name: 'repo',
    default: "",
    type: "string",
    message: "Type in the git repository",
  },{
    name: 'author',
    default: user,
    type: "string",
    message: "Who is the author of the project?",
  }], function( answers ) {

    writeTemplate(files.package, {
      name: name,
      version: answers.version,
      description: answers.description,
      repo: answers.repo,
      author: answers.author
    })

  });

  // Test webpack
  writeTemplate(files.test_webpack)

  // Webpack Config
  writeTemplate(files.webpack_config, {
    name: name
  })
}

module.exports = create;
