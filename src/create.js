var template = require('./template');
var util = require('./util');

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

function writeTemplate(file, data) {
  var temp = template(file.template);
  util.saveContentToDisk( temp( data ), file.path );
}


// Generate the files
function create() {
  var args = arguments;

  var name = args[0];

  if (!name) {
    console.log("You must provide a name. See usage.")
  }

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
  writeTemplate(files.package, {
    name: name,
    version: "1.0.0",
    description: "",
    repo: "",
    author: process.env['USER'],
  })

  // Test webpack
  writeTemplate(files.test_webpack)

  // Webpack Config
  writeTemplate(files.webpack_config, {
    name: name
  })
}

module.exports = create;
