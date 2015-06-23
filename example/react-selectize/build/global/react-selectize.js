(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "react"], factory);
	else if(typeof exports === 'object')
		exports["Selectize"] = factory(require("jquery"), require("react"));
	else
		root["Selectize"] = factory(root["jQuery"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	// Add selectize plugin
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	__webpack_require__(9);
	
	var Selectize = (function (_React$Component) {
	  function Selectize() {
	    _classCallCheck(this, Selectize);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Selectize, _React$Component);
	
	  _createClass(Selectize, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var _this = this;
	
	      var value = e.target.value;
	
	      // Invoke onChange
	      var item = this.props.options.filter(function (i) {
	        return i[_this.props.valueField] == e.target.value;
	      })[0];
	      if (this.props.onChange) this.props.onChange(value, item);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var sel = this.container = $('<select></select>');
	      $(_react2['default'].findDOMNode(this.refs.mountNode)).append(sel);
	      sel.selectize({
	        options: this.props.options,
	        optgroups: this.props.optgroups,
	        optgroupField: this.props.optgroupField,
	        optgroupLabelField: this.props.optgroupLabelField,
	        optgroupValueField: this.props.optgroupValueField,
	        labelField: this.props.labelField,
	        valueField: this.props.valueField,
	        searchField: this.props.searchField
	      });
	
	      this.selectize = sel[0].selectize;
	
	      if (this.props.disabled == true) {
	        this.selectize.disable();
	      }
	
	      // If existing value
	      if (this.props.value) {
	        this.selectize.setValue(this.props.value);
	      }
	
	      // Listen to events
	      sel.on('change', this.handleChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove listeners
	      var sel = this.container;
	      sel.off('change', this.handleChange);
	
	      // Remove component
	      $(_react2['default'].findDOMNode(this.refs.mountNode)).children().remove();
	    }
	  }, {
	    key: 'remount',
	    value: function remount() {
	      this.componentWillUnmount();
	      this.componentDidMount();
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(props) {
	      var _this2 = this;
	
	      // Reload options
	      if (props.options != this.props.options) {
	        this.selectize.load(function (cb) {
	          cb(props.options);
	        });
	      }
	
	      if (props.disabled == true) {
	        this.selectize.disable();
	      } else {
	        this.selectize.enable();
	      }
	
	      // If existing value
	      if (props.value != this.props.value) {
	        var oldValue = this.selectize.getValue();
	        if (oldValue != props.value) {
	          this.selectize.setValue(props.value);
	        }
	      }
	
	      // Will Remount ?
	      // This is a workaround because sometimes options does not get cleaned,
	      // this way they will but may not be the best performance
	      setTimeout(function () {
	        if (Object.keys(_this2.selectize.options).length != props.options.length) {
	          _this2.remount();
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { ref: 'mountNode' });
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      onChange: _react2['default'].PropTypes.func,
	      options: _react2['default'].PropTypes.array.isRequired,
	      optgroups: _react2['default'].PropTypes.array,
	      optgroupField: _react2['default'].PropTypes.string,
	      optgroupLabelField: _react2['default'].PropTypes.string,
	      optgroupValueField: _react2['default'].PropTypes.string,
	      labelField: _react2['default'].PropTypes.string,
	      valueField: _react2['default'].PropTypes.string,
	      searchField: _react2['default'].PropTypes.array,
	      disable: _react2['default'].PropTypes.bool,
	      value: _react2['default'].PropTypes.any
	    },
	    enumerable: true
	  }]);
	
	  return Selectize;
	})(_react2['default'].Component);
	
	exports['default'] = Selectize;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	if (!_jquery2["default"]) throw Error("jQuery hasn't been loaded");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;/**
	 * sifter.js
	 * Copyright (c) 2013 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */
	
	'use strict';
	
	(function (root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.Sifter = factory();
		}
	})(undefined, function () {
	
		/**
	  * Textually searches arrays and hashes of objects
	  * by property (or multiple properties). Designed
	  * specifically for autocomplete.
	  *
	  * @constructor
	  * @param {array|object} items
	  * @param {object} items
	  */
		var Sifter = function Sifter(items, settings) {
			this.items = items;
			this.settings = settings || { diacritics: true };
		};
	
		/**
	  * Splits a search string into an array of individual
	  * regexps to be used to match results.
	  *
	  * @param {string} query
	  * @returns {array}
	  */
		Sifter.prototype.tokenize = function (query) {
			query = trim(String(query || '').toLowerCase());
			if (!query || !query.length) return [];
	
			var i, n, regex, letter;
			var tokens = [];
			var words = query.split(/ +/);
	
			for (i = 0, n = words.length; i < n; i++) {
				regex = escape_regex(words[i]);
				if (this.settings.diacritics) {
					for (letter in DIACRITICS) {
						if (DIACRITICS.hasOwnProperty(letter)) {
							regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
						}
					}
				}
				tokens.push({
					string: words[i],
					regex: new RegExp(regex, 'i')
				});
			}
	
			return tokens;
		};
	
		/**
	  * Iterates over arrays and hashes.
	  *
	  * ```
	  * this.iterator(this.items, function(item, id) {
	  *    // invoked for each item
	  * });
	  * ```
	  *
	  * @param {array|object} object
	  */
		Sifter.prototype.iterator = function (object, callback) {
			var iterator;
			if (is_array(object)) {
				iterator = Array.prototype.forEach || function (callback) {
					for (var i = 0, n = this.length; i < n; i++) {
						callback(this[i], i, this);
					}
				};
			} else {
				iterator = function (callback) {
					for (var key in this) {
						if (this.hasOwnProperty(key)) {
							callback(this[key], key, this);
						}
					}
				};
			}
	
			iterator.apply(object, [callback]);
		};
	
		/**
	  * Returns a function to be used to score individual results.
	  *
	  * Good matches will have a higher score than poor matches.
	  * If an item is not a match, 0 will be returned by the function.
	  *
	  * @param {object|string} search
	  * @param {object} options (optional)
	  * @returns {function}
	  */
		Sifter.prototype.getScoreFunction = function (search, options) {
			var self, fields, tokens, token_count;
	
			self = this;
			search = self.prepareSearch(search, options);
			tokens = search.tokens;
			fields = search.options.fields;
			token_count = tokens.length;
	
			/**
	   * Calculates how close of a match the
	   * given value is against a search token.
	   *
	   * @param {mixed} value
	   * @param {object} token
	   * @return {number}
	   */
			var scoreValue = function scoreValue(value, token) {
				var score, pos;
	
				if (!value) return 0;
				value = String(value || '');
				pos = value.search(token.regex);
				if (pos === -1) return 0;
				score = token.string.length / value.length;
				if (pos === 0) score += 0.5;
				return score;
			};
	
			/**
	   * Calculates the score of an object
	   * against the search query.
	   *
	   * @param {object} token
	   * @param {object} data
	   * @return {number}
	   */
			var scoreObject = (function () {
				var field_count = fields.length;
				if (!field_count) {
					return function () {
						return 0;
					};
				}
				if (field_count === 1) {
					return function (token, data) {
						return scoreValue(data[fields[0]], token);
					};
				}
				return function (token, data) {
					for (var i = 0, sum = 0; i < field_count; i++) {
						sum += scoreValue(data[fields[i]], token);
					}
					return sum / field_count;
				};
			})();
	
			if (!token_count) {
				return function () {
					return 0;
				};
			}
			if (token_count === 1) {
				return function (data) {
					return scoreObject(tokens[0], data);
				};
			}
	
			if (search.options.conjunction === 'and') {
				return function (data) {
					var score;
					for (var i = 0, sum = 0; i < token_count; i++) {
						score = scoreObject(tokens[i], data);
						if (score <= 0) return 0;
						sum += score;
					}
					return sum / token_count;
				};
			} else {
				return function (data) {
					for (var i = 0, sum = 0; i < token_count; i++) {
						sum += scoreObject(tokens[i], data);
					}
					return sum / token_count;
				};
			}
		};
	
		/**
	  * Returns a function that can be used to compare two
	  * results, for sorting purposes. If no sorting should
	  * be performed, `null` will be returned.
	  *
	  * @param {string|object} search
	  * @param {object} options
	  * @return function(a,b)
	  */
		Sifter.prototype.getSortFunction = function (search, options) {
			var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;
	
			self = this;
			search = self.prepareSearch(search, options);
			sort = !search.query && options.sort_empty || options.sort;
	
			/**
	   * Fetches the specified sort field value
	   * from a search result item.
	   *
	   * @param  {string} name
	   * @param  {object} result
	   * @return {mixed}
	   */
			get_field = function (name, result) {
				if (name === '$score') return result.score;
				return self.items[result.id][name];
			};
	
			// parse options
			fields = [];
			if (sort) {
				for (i = 0, n = sort.length; i < n; i++) {
					if (search.query || sort[i].field !== '$score') {
						fields.push(sort[i]);
					}
				}
			}
	
			// the "$score" field is implied to be the primary
			// sort field, unless it's manually specified
			if (search.query) {
				implicit_score = true;
				for (i = 0, n = fields.length; i < n; i++) {
					if (fields[i].field === '$score') {
						implicit_score = false;
						break;
					}
				}
				if (implicit_score) {
					fields.unshift({ field: '$score', direction: 'desc' });
				}
			} else {
				for (i = 0, n = fields.length; i < n; i++) {
					if (fields[i].field === '$score') {
						fields.splice(i, 1);
						break;
					}
				}
			}
	
			multipliers = [];
			for (i = 0, n = fields.length; i < n; i++) {
				multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
			}
	
			// build function
			fields_count = fields.length;
			if (!fields_count) {
				return null;
			} else if (fields_count === 1) {
				field = fields[0].field;
				multiplier = multipliers[0];
				return function (a, b) {
					return multiplier * cmp(get_field(field, a), get_field(field, b));
				};
			} else {
				return function (a, b) {
					var i, result, a_value, b_value, field;
					for (i = 0; i < fields_count; i++) {
						field = fields[i].field;
						result = multipliers[i] * cmp(get_field(field, a), get_field(field, b));
						if (result) return result;
					}
					return 0;
				};
			}
		};
	
		/**
	  * Parses a search query and returns an object
	  * with tokens and fields ready to be populated
	  * with results.
	  *
	  * @param {string} query
	  * @param {object} options
	  * @returns {object}
	  */
		Sifter.prototype.prepareSearch = function (query, options) {
			if (typeof query === 'object') return query;
	
			options = extend({}, options);
	
			var option_fields = options.fields;
			var option_sort = options.sort;
			var option_sort_empty = options.sort_empty;
	
			if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
			if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
			if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];
	
			return {
				options: options,
				query: String(query || '').toLowerCase(),
				tokens: this.tokenize(query),
				total: 0,
				items: []
			};
		};
	
		/**
	  * Searches through all items and returns a sorted array of matches.
	  *
	  * The `options` parameter can contain:
	  *
	  *   - fields {string|array}
	  *   - sort {array}
	  *   - score {function}
	  *   - filter {bool}
	  *   - limit {integer}
	  *
	  * Returns an object containing:
	  *
	  *   - options {object}
	  *   - query {string}
	  *   - tokens {array}
	  *   - total {int}
	  *   - items {array}
	  *
	  * @param {string} query
	  * @param {object} options
	  * @returns {object}
	  */
		Sifter.prototype.search = function (query, options) {
			var self = this,
			    value,
			    score,
			    search,
			    calculateScore;
			var fn_sort;
			var fn_score;
	
			search = this.prepareSearch(query, options);
			options = search.options;
			query = search.query;
	
			// generate result scoring function
			fn_score = options.score || self.getScoreFunction(search);
	
			// perform search and sort
			if (query.length) {
				self.iterator(self.items, function (item, id) {
					score = fn_score(item);
					if (options.filter === false || score > 0) {
						search.items.push({ 'score': score, 'id': id });
					}
				});
			} else {
				self.iterator(self.items, function (item, id) {
					search.items.push({ 'score': 1, 'id': id });
				});
			}
	
			fn_sort = self.getSortFunction(search, options);
			if (fn_sort) search.items.sort(fn_sort);
	
			// apply limits
			search.total = search.items.length;
			if (typeof options.limit === 'number') {
				search.items = search.items.slice(0, options.limit);
			}
	
			return search;
		};
	
		// utilities
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
		var cmp = function cmp(a, b) {
			if (typeof a === 'number' && typeof b === 'number') {
				return a > b ? 1 : a < b ? -1 : 0;
			}
			a = asciifold(String(a || ''));
			b = asciifold(String(b || ''));
			if (a > b) return 1;
			if (b > a) return -1;
			return 0;
		};
	
		var extend = function extend(a, b) {
			var i, n, k, object;
			for (i = 1, n = arguments.length; i < n; i++) {
				object = arguments[i];
				if (!object) continue;
				for (k in object) {
					if (object.hasOwnProperty(k)) {
						a[k] = object[k];
					}
				}
			}
			return a;
		};
	
		var trim = function trim(str) {
			return (str + '').replace(/^\s+|\s+$|/g, '');
		};
	
		var escape_regex = function escape_regex(str) {
			return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
		};
	
		var is_array = Array.isArray || $ && $.isArray || function (object) {
			return Object.prototype.toString.call(object) === '[object Array]';
		};
	
		var DIACRITICS = {
			'a': '[aÀÁÂÃÄÅàáâãäåĀāąĄ]',
			'c': '[cÇçćĆčČ]',
			'd': '[dđĐďĎ]',
			'e': '[eÈÉÊËèéêëěĚĒēęĘ]',
			'i': '[iÌÍÎÏìíîïĪī]',
			'l': '[lłŁ]',
			'n': '[nÑñňŇńŃ]',
			'o': '[oÒÓÔÕÕÖØòóôõöøŌō]',
			'r': '[rřŘ]',
			's': '[sŠšśŚ]',
			't': '[tťŤ]',
			'u': '[uÙÚÛÜùúûüůŮŪū]',
			'y': '[yŸÿýÝ]',
			'z': '[zŽžżŻźŹ]'
		};
	
		var asciifold = (function () {
			var i, n, k, chunk;
			var foreignletters = '';
			var lookup = {};
			for (k in DIACRITICS) {
				if (DIACRITICS.hasOwnProperty(k)) {
					chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
					foreignletters += chunk;
					for (i = 0, n = chunk.length; i < n; i++) {
						lookup[chunk.charAt(i)] = k;
					}
				}
			}
			var regexp = new RegExp('[' + foreignletters + ']', 'g');
			return function (str) {
				return str.replace(regexp, function (foreignletter) {
					return lookup[foreignletter];
				}).toLowerCase();
			};
		})();
	
		// export
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
		return Sifter;
	});
	
	/**
	 * microplugin.js
	 * Copyright (c) 2013 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */
	
	(function (root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.MicroPlugin = factory();
		}
	})(undefined, function () {
		var MicroPlugin = {};
	
		MicroPlugin.mixin = function (Interface) {
			Interface.plugins = {};
	
			/**
	   * Initializes the listed plugins (with options).
	   * Acceptable formats:
	   *
	   * List (without options):
	   *   ['a', 'b', 'c']
	   *
	   * List (with options):
	   *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
	   *
	   * Hash (with options):
	   *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
	   *
	   * @param {mixed} plugins
	   */
			Interface.prototype.initializePlugins = function (plugins) {
				var i, n, key;
				var self = this;
				var queue = [];
	
				self.plugins = {
					names: [],
					settings: {},
					requested: {},
					loaded: {}
				};
	
				if (utils.isArray(plugins)) {
					for (i = 0, n = plugins.length; i < n; i++) {
						if (typeof plugins[i] === 'string') {
							queue.push(plugins[i]);
						} else {
							self.plugins.settings[plugins[i].name] = plugins[i].options;
							queue.push(plugins[i].name);
						}
					}
				} else if (plugins) {
					for (key in plugins) {
						if (plugins.hasOwnProperty(key)) {
							self.plugins.settings[key] = plugins[key];
							queue.push(key);
						}
					}
				}
	
				while (queue.length) {
					self.require(queue.shift());
				}
			};
	
			Interface.prototype.loadPlugin = function (name) {
				var self = this;
				var plugins = self.plugins;
				var plugin = Interface.plugins[name];
	
				if (!Interface.plugins.hasOwnProperty(name)) {
					throw new Error('Unable to find "' + name + '" plugin');
				}
	
				plugins.requested[name] = true;
				plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
				plugins.names.push(name);
			};
	
			/**
	   * Initializes a plugin.
	   *
	   * @param {string} name
	   */
			Interface.prototype.require = function (name) {
				var self = this;
				var plugins = self.plugins;
	
				if (!self.plugins.loaded.hasOwnProperty(name)) {
					if (plugins.requested[name]) {
						throw new Error('Plugin has circular dependency ("' + name + '")');
					}
					self.loadPlugin(name);
				}
	
				return plugins.loaded[name];
			};
	
			/**
	   * Registers a plugin.
	   *
	   * @param {string} name
	   * @param {function} fn
	   */
			Interface.define = function (name, fn) {
				Interface.plugins[name] = {
					'name': name,
					'fn': fn
				};
			};
		};
	
		var utils = {
			isArray: Array.isArray || function (vArg) {
				return Object.prototype.toString.call(vArg) === '[object Array]';
			}
		};
	
		return MicroPlugin;
	});
	
	/**
	 * selectize.js (v0.12.1)
	 * Copyright (c) 2013–2015 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */
	
	/*jshint curly:false */
	/*jshint browser:true */
	
	(function (root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_1__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
		} else {
			root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
		}
	})(undefined, function ($, Sifter, MicroPlugin) {
		'use strict';
	
		var highlight = function highlight($element, pattern) {
			if (typeof pattern === 'string' && !pattern.length) return;
			var regex = typeof pattern === 'string' ? new RegExp(pattern, 'i') : pattern;
	
			var highlight = function highlight(node) {
				var skip = 0;
				if (node.nodeType === 3) {
					var pos = node.data.search(regex);
					if (pos >= 0 && node.data.length > 0) {
						var match = node.data.match(regex);
						var spannode = document.createElement('span');
						spannode.className = 'highlight';
						var middlebit = node.splitText(pos);
						var endbit = middlebit.splitText(match[0].length);
						var middleclone = middlebit.cloneNode(true);
						spannode.appendChild(middleclone);
						middlebit.parentNode.replaceChild(spannode, middlebit);
						skip = 1;
					}
				} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
					for (var i = 0; i < node.childNodes.length; ++i) {
						i += highlight(node.childNodes[i]);
					}
				}
				return skip;
			};
	
			return $element.each(function () {
				highlight(this);
			});
		};
	
		var MicroEvent = function MicroEvent() {};
		MicroEvent.prototype = {
			on: function on(event, fct) {
				this._events = this._events || {};
				this._events[event] = this._events[event] || [];
				this._events[event].push(fct);
			},
			off: function off(event, fct) {
				var n = arguments.length;
				if (n === 0) return delete this._events;
				if (n === 1) return delete this._events[event];
	
				this._events = this._events || {};
				if (event in this._events === false) return;
				this._events[event].splice(this._events[event].indexOf(fct), 1);
			},
			trigger: function trigger(event /* , args... */) {
				this._events = this._events || {};
				if (event in this._events === false) return;
				for (var i = 0; i < this._events[event].length; i++) {
					this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
				}
			}
		};
	
		/**
	  * Mixin will delegate all MicroEvent.js function in the destination object.
	  *
	  * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	  *
	  * @param {object} the object which will support MicroEvent
	  */
		MicroEvent.mixin = function (destObject) {
			var props = ['on', 'off', 'trigger'];
			for (var i = 0; i < props.length; i++) {
				destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
			}
		};
	
		var IS_MAC = /Mac/.test(navigator.userAgent);
	
		var KEY_A = 65;
		var KEY_COMMA = 188;
		var KEY_RETURN = 13;
		var KEY_ESC = 27;
		var KEY_LEFT = 37;
		var KEY_UP = 38;
		var KEY_P = 80;
		var KEY_RIGHT = 39;
		var KEY_DOWN = 40;
		var KEY_N = 78;
		var KEY_BACKSPACE = 8;
		var KEY_DELETE = 46;
		var KEY_SHIFT = 16;
		var KEY_CMD = IS_MAC ? 91 : 17;
		var KEY_CTRL = IS_MAC ? 18 : 17;
		var KEY_TAB = 9;
	
		var TAG_SELECT = 1;
		var TAG_INPUT = 2;
	
		// for now, android support in general is too spotty to support validity
		var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('form').validity;
	
		var isset = function isset(object) {
			return typeof object !== 'undefined';
		};
	
		/**
	  * Converts a scalar to its best string representation
	  * for hash keys and HTML attribute values.
	  *
	  * Transformations:
	  *   'str'     -> 'str'
	  *   null      -> ''
	  *   undefined -> ''
	  *   true      -> '1'
	  *   false     -> '0'
	  *   0         -> '0'
	  *   1         -> '1'
	  *
	  * @param {string} value
	  * @returns {string|null}
	  */
		var hash_key = function hash_key(value) {
			if (typeof value === 'undefined' || value === null) return null;
			if (typeof value === 'boolean') return value ? '1' : '0';
			return value + '';
		};
	
		/**
	  * Escapes a string for use within HTML.
	  *
	  * @param {string} str
	  * @returns {string}
	  */
		var escape_html = function escape_html(str) {
			return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		};
	
		/**
	  * Escapes "$" characters in replacement strings.
	  *
	  * @param {string} str
	  * @returns {string}
	  */
		var escape_replace = function escape_replace(str) {
			return (str + '').replace(/\$/g, '$$$$');
		};
	
		var hook = {};
	
		/**
	  * Wraps `method` on `self` so that `fn`
	  * is invoked before the original method.
	  *
	  * @param {object} self
	  * @param {string} method
	  * @param {function} fn
	  */
		hook.before = function (self, method, fn) {
			var original = self[method];
			self[method] = function () {
				fn.apply(self, arguments);
				return original.apply(self, arguments);
			};
		};
	
		/**
	  * Wraps `method` on `self` so that `fn`
	  * is invoked after the original method.
	  *
	  * @param {object} self
	  * @param {string} method
	  * @param {function} fn
	  */
		hook.after = function (self, method, fn) {
			var original = self[method];
			self[method] = function () {
				var result = original.apply(self, arguments);
				fn.apply(self, arguments);
				return result;
			};
		};
	
		/**
	  * Wraps `fn` so that it can only be invoked once.
	  *
	  * @param {function} fn
	  * @returns {function}
	  */
		var once = function once(fn) {
			var called = false;
			return function () {
				if (called) return;
				called = true;
				fn.apply(this, arguments);
			};
		};
	
		/**
	  * Wraps `fn` so that it can only be called once
	  * every `delay` milliseconds (invoked on the falling edge).
	  *
	  * @param {function} fn
	  * @param {int} delay
	  * @returns {function}
	  */
		var debounce = function debounce(fn, delay) {
			var timeout;
			return function () {
				var self = this;
				var args = arguments;
				window.clearTimeout(timeout);
				timeout = window.setTimeout(function () {
					fn.apply(self, args);
				}, delay);
			};
		};
	
		/**
	  * Debounce all fired events types listed in `types`
	  * while executing the provided `fn`.
	  *
	  * @param {object} self
	  * @param {array} types
	  * @param {function} fn
	  */
		var debounce_events = function debounce_events(self, types, fn) {
			var type;
			var trigger = self.trigger;
			var event_args = {};
	
			// override trigger method
			self.trigger = function () {
				var type = arguments[0];
				if (types.indexOf(type) !== -1) {
					event_args[type] = arguments;
				} else {
					return trigger.apply(self, arguments);
				}
			};
	
			// invoke provided function
			fn.apply(self, []);
			self.trigger = trigger;
	
			// trigger queued events
			for (type in event_args) {
				if (event_args.hasOwnProperty(type)) {
					trigger.apply(self, event_args[type]);
				}
			}
		};
	
		/**
	  * A workaround for http://bugs.jquery.com/ticket/6696
	  *
	  * @param {object} $parent - Parent element to listen on.
	  * @param {string} event - Event name.
	  * @param {string} selector - Descendant selector to filter by.
	  * @param {function} fn - Event handler.
	  */
		var watchChildEvent = function watchChildEvent($parent, event, selector, fn) {
			$parent.on(event, selector, function (e) {
				var child = e.target;
				while (child && child.parentNode !== $parent[0]) {
					child = child.parentNode;
				}
				e.currentTarget = child;
				return fn.apply(this, [e]);
			});
		};
	
		/**
	  * Determines the current selection within a text input control.
	  * Returns an object containing:
	  *   - start
	  *   - length
	  *
	  * @param {object} input
	  * @returns {object}
	  */
		var getSelection = function getSelection(input) {
			var result = {};
			if ('selectionStart' in input) {
				result.start = input.selectionStart;
				result.length = input.selectionEnd - result.start;
			} else if (document.selection) {
				input.focus();
				var sel = document.selection.createRange();
				var selLen = document.selection.createRange().text.length;
				sel.moveStart('character', -input.value.length);
				result.start = sel.text.length - selLen;
				result.length = selLen;
			}
			return result;
		};
	
		/**
	  * Copies CSS properties from one element to another.
	  *
	  * @param {object} $from
	  * @param {object} $to
	  * @param {array} properties
	  */
		var transferStyles = function transferStyles($from, $to, properties) {
			var i,
			    n,
			    styles = {};
			if (properties) {
				for (i = 0, n = properties.length; i < n; i++) {
					styles[properties[i]] = $from.css(properties[i]);
				}
			} else {
				styles = $from.css();
			}
			$to.css(styles);
		};
	
		/**
	  * Measures the width of a string within a
	  * parent element (in pixels).
	  *
	  * @param {string} str
	  * @param {object} $parent
	  * @returns {int}
	  */
		var measureString = function measureString(str, $parent) {
			if (!str) {
				return 0;
			}
	
			var $test = $('<test>').css({
				position: 'absolute',
				top: -99999,
				left: -99999,
				width: 'auto',
				padding: 0,
				whiteSpace: 'pre'
			}).text(str).appendTo('body');
	
			transferStyles($parent, $test, ['letterSpacing', 'fontSize', 'fontFamily', 'fontWeight', 'textTransform']);
	
			var width = $test.width();
			$test.remove();
	
			return width;
		};
	
		/**
	  * Sets up an input to grow horizontally as the user
	  * types. If the value is changed manually, you can
	  * trigger the "update" handler to resize:
	  *
	  * $input.trigger('update');
	  *
	  * @param {object} $input
	  */
		var autoGrow = function autoGrow($input) {
			var currentWidth = null;
	
			var update = function update(e, options) {
				var value, keyCode, printable, placeholder, width;
				var shift, character, selection;
				e = e || window.event || {};
				options = options || {};
	
				if (e.metaKey || e.altKey) return;
				if (!options.force && $input.data('grow') === false) return;
	
				value = $input.val();
				if (e.type && e.type.toLowerCase() === 'keydown') {
					keyCode = e.keyCode;
					printable = keyCode >= 97 && keyCode <= 122 || keyCode >= 65 && keyCode <= 90 || keyCode >= 48 && keyCode <= 57 || // 0-9
					keyCode === 32 // space
					;
	
					if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
						selection = getSelection($input[0]);
						if (selection.length) {
							value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
						} else if (keyCode === KEY_BACKSPACE && selection.start) {
							value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
						} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
							value = value.substring(0, selection.start) + value.substring(selection.start + 1);
						}
					} else if (printable) {
						shift = e.shiftKey;
						character = String.fromCharCode(e.keyCode);
						if (shift) character = character.toUpperCase();else character = character.toLowerCase();
						value += character;
					}
				}
	
				placeholder = $input.attr('placeholder');
				if (!value && placeholder) {
					value = placeholder;
				}
	
				width = measureString(value, $input) + 4;
				if (width !== currentWidth) {
					currentWidth = width;
					$input.width(width);
					$input.triggerHandler('resize');
				}
			};
	
			$input.on('keydown keyup update blur', update);
			update();
		};
	
		var Selectize = function Selectize($input, settings) {
			var key,
			    i,
			    n,
			    dir,
			    input,
			    self = this;
			input = $input[0];
			input.selectize = self;
	
			// detect rtl environment
			var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
			dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
			dir = dir || $input.parents('[dir]:first').attr('dir') || '';
	
			// setup default state
			$.extend(self, {
				order: 0,
				settings: settings,
				$input: $input,
				tabIndex: $input.attr('tabindex') || '',
				tagType: input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
				rtl: /rtl/i.test(dir),
	
				eventNS: '.selectize' + ++Selectize.count,
				highlightedValue: null,
				isOpen: false,
				isDisabled: false,
				isRequired: $input.is('[required]'),
				isInvalid: false,
				isLocked: false,
				isFocused: false,
				isInputHidden: false,
				isSetup: false,
				isShiftDown: false,
				isCmdDown: false,
				isCtrlDown: false,
				ignoreFocus: false,
				ignoreBlur: false,
				ignoreHover: false,
				hasOptions: false,
				currentResults: null,
				lastValue: '',
				caretPos: 0,
				loading: 0,
				loadedSearches: {},
	
				$activeOption: null,
				$activeItems: [],
	
				optgroups: {},
				options: {},
				userOptions: {},
				items: [],
				renderCache: {},
				onSearchChange: settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
			});
	
			// search system
			self.sifter = new Sifter(this.options, { diacritics: settings.diacritics });
	
			// build options table
			if (self.settings.options) {
				for (i = 0, n = self.settings.options.length; i < n; i++) {
					self.registerOption(self.settings.options[i]);
				}
				delete self.settings.options;
			}
	
			// build optgroup table
			if (self.settings.optgroups) {
				for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
					self.registerOptionGroup(self.settings.optgroups[i]);
				}
				delete self.settings.optgroups;
			}
	
			// option-dependent defaults
			self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
			if (typeof self.settings.hideSelected !== 'boolean') {
				self.settings.hideSelected = self.settings.mode === 'multi';
			}
	
			self.initializePlugins(self.settings.plugins);
			self.setupCallbacks();
			self.setupTemplates();
			self.setup();
		};
	
		// mixins
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
		MicroEvent.mixin(Selectize);
		MicroPlugin.mixin(Selectize);
	
		// methods
		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
		$.extend(Selectize.prototype, {
	
			/**
	   * Creates all elements and sets up event bindings.
	   */
			setup: function setup() {
				var self = this;
				var settings = self.settings;
				var eventNS = self.eventNS;
				var $window = $(window);
				var $document = $(document);
				var $input = self.$input;
	
				var $wrapper;
				var $control;
				var $control_input;
				var $dropdown;
				var $dropdown_content;
				var $dropdown_parent;
				var inputMode;
				var timeout_blur;
				var timeout_focus;
				var classes;
				var classes_plugins;
	
				inputMode = self.settings.mode;
				classes = $input.attr('class') || '';
	
				$wrapper = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
				$control = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
				$control_input = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
				$dropdown_parent = $(settings.dropdownParent || $wrapper);
				$dropdown = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
				$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
	
				if (self.settings.copyClassesToDropdown) {
					$dropdown.addClass(classes);
				}
	
				$wrapper.css({
					width: $input[0].style.width
				});
	
				if (self.plugins.names.length) {
					classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
					$wrapper.addClass(classes_plugins);
					$dropdown.addClass(classes_plugins);
				}
	
				if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
					$input.attr('multiple', 'multiple');
				}
	
				if (self.settings.placeholder) {
					$control_input.attr('placeholder', settings.placeholder);
				}
	
				// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
				if (!self.settings.splitOn && self.settings.delimiter) {
					var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
					self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
				}
	
				if ($input.attr('autocorrect')) {
					$control_input.attr('autocorrect', $input.attr('autocorrect'));
				}
	
				if ($input.attr('autocapitalize')) {
					$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
				}
	
				self.$wrapper = $wrapper;
				self.$control = $control;
				self.$control_input = $control_input;
				self.$dropdown = $dropdown;
				self.$dropdown_content = $dropdown_content;
	
				$dropdown.on('mouseenter', '[data-selectable]', function () {
					return self.onOptionHover.apply(self, arguments);
				});
				$dropdown.on('mousedown click', '[data-selectable]', function () {
					return self.onOptionSelect.apply(self, arguments);
				});
				watchChildEvent($control, 'mousedown', '*:not(input)', function () {
					return self.onItemSelect.apply(self, arguments);
				});
				autoGrow($control_input);
	
				$control.on({
					mousedown: function mousedown() {
						return self.onMouseDown.apply(self, arguments);
					},
					click: function click() {
						return self.onClick.apply(self, arguments);
					}
				});
	
				$control_input.on({
					mousedown: function mousedown(e) {
						e.stopPropagation();
					},
					keydown: function keydown() {
						return self.onKeyDown.apply(self, arguments);
					},
					keyup: function keyup() {
						return self.onKeyUp.apply(self, arguments);
					},
					keypress: function keypress() {
						return self.onKeyPress.apply(self, arguments);
					},
					resize: function resize() {
						self.positionDropdown.apply(self, []);
					},
					blur: function blur() {
						return self.onBlur.apply(self, arguments);
					},
					focus: function focus() {
						self.ignoreBlur = false;return self.onFocus.apply(self, arguments);
					},
					paste: function paste() {
						return self.onPaste.apply(self, arguments);
					}
				});
	
				$document.on('keydown' + eventNS, function (e) {
					self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
					self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
					self.isShiftDown = e.shiftKey;
				});
	
				$document.on('keyup' + eventNS, function (e) {
					if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
					if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
					if (e.keyCode === KEY_CMD) self.isCmdDown = false;
				});
	
				$document.on('mousedown' + eventNS, function (e) {
					if (self.isFocused) {
						// prevent events on the dropdown scrollbar from causing the control to blur
						if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
							return false;
						}
						// blur on click outside
						if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
							self.blur(e.target);
						}
					}
				});
	
				$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function () {
					if (self.isOpen) {
						self.positionDropdown.apply(self, arguments);
					}
				});
				$window.on('mousemove' + eventNS, function () {
					self.ignoreHover = false;
				});
	
				// store original children and tab index so that they can be
				// restored when the destroy() method is called.
				this.revertSettings = {
					$children: $input.children().detach(),
					tabindex: $input.attr('tabindex')
				};
	
				$input.attr('tabindex', -1).hide().after(self.$wrapper);
	
				if ($.isArray(settings.items)) {
					self.setValue(settings.items);
					delete settings.items;
				}
	
				// feature detect for the validation API
				if (SUPPORTS_VALIDITY_API) {
					$input.on('invalid' + eventNS, function (e) {
						e.preventDefault();
						self.isInvalid = true;
						self.refreshState();
					});
				}
	
				self.updateOriginalInput();
				self.refreshItems();
				self.refreshState();
				self.updatePlaceholder();
				self.isSetup = true;
	
				if ($input.is(':disabled')) {
					self.disable();
				}
	
				self.on('change', this.onChange);
	
				$input.data('selectize', self);
				$input.addClass('selectized');
				self.trigger('initialize');
	
				// preload options
				if (settings.preload === true) {
					self.onSearchChange('');
				}
			},
	
			/**
	   * Sets up default rendering functions.
	   */
			setupTemplates: function setupTemplates() {
				var self = this;
				var field_label = self.settings.labelField;
				var field_optgroup = self.settings.optgroupLabelField;
	
				var templates = {
					'optgroup': function optgroup(data) {
						return '<div class="optgroup">' + data.html + '</div>';
					},
					'optgroup_header': function optgroup_header(data, escape) {
						return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
					},
					'option': function option(data, escape) {
						return '<div class="option">' + escape(data[field_label]) + '</div>';
					},
					'item': function item(data, escape) {
						return '<div class="item">' + escape(data[field_label]) + '</div>';
					},
					'option_create': function option_create(data, escape) {
						return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
					}
				};
	
				self.settings.render = $.extend({}, templates, self.settings.render);
			},
	
			/**
	   * Maps fired events to callbacks provided
	   * in the settings used when creating the control.
	   */
			setupCallbacks: function setupCallbacks() {
				var key,
				    fn,
				    callbacks = {
					'initialize': 'onInitialize',
					'change': 'onChange',
					'item_add': 'onItemAdd',
					'item_remove': 'onItemRemove',
					'clear': 'onClear',
					'option_add': 'onOptionAdd',
					'option_remove': 'onOptionRemove',
					'option_clear': 'onOptionClear',
					'optgroup_add': 'onOptionGroupAdd',
					'optgroup_remove': 'onOptionGroupRemove',
					'optgroup_clear': 'onOptionGroupClear',
					'dropdown_open': 'onDropdownOpen',
					'dropdown_close': 'onDropdownClose',
					'type': 'onType',
					'load': 'onLoad',
					'focus': 'onFocus',
					'blur': 'onBlur'
				};
	
				for (key in callbacks) {
					if (callbacks.hasOwnProperty(key)) {
						fn = this.settings[callbacks[key]];
						if (fn) this.on(key, fn);
					}
				}
			},
	
			/**
	   * Triggered when the main control element
	   * has a click event.
	   *
	   * @param {object} e
	   * @return {boolean}
	   */
			onClick: function onClick(e) {
				var self = this;
	
				// necessary for mobile webkit devices (manual focus triggering
				// is ignored unless invoked within a click event)
				if (!self.isFocused) {
					self.focus();
					e.preventDefault();
				}
			},
	
			/**
	   * Triggered when the main control element
	   * has a mouse down event.
	   *
	   * @param {object} e
	   * @return {boolean}
	   */
			onMouseDown: function onMouseDown(e) {
				var self = this;
				var defaultPrevented = e.isDefaultPrevented();
				var $target = $(e.target);
	
				if (self.isFocused) {
					// retain focus by preventing native handling. if the
					// event target is the input it should not be modified.
					// otherwise, text selection within the input won't work.
					if (e.target !== self.$control_input[0]) {
						if (self.settings.mode === 'single') {
							// toggle dropdown
							self.isOpen ? self.close() : self.open();
						} else if (!defaultPrevented) {
							self.setActiveItem(null);
						}
						return false;
					}
				} else {
					// give control focus
					if (!defaultPrevented) {
						window.setTimeout(function () {
							self.focus();
						}, 0);
					}
				}
			},
	
			/**
	   * Triggered when the value of the control has been changed.
	   * This should propagate the event to the original DOM
	   * input / select element.
	   */
			onChange: function onChange() {
				this.$input.trigger('change');
			},
	
			/**
	   * Triggered on <input> paste.
	   *
	   * @param {object} e
	   * @returns {boolean}
	   */
			onPaste: function onPaste(e) {
				var self = this;
				if (self.isFull() || self.isInputHidden || self.isLocked) {
					e.preventDefault();
				} else {
					// If a regex or string is included, this will split the pasted
					// input and create Items for each separate value
					if (self.settings.splitOn) {
						setTimeout(function () {
							var splitInput = $.trim(self.$control_input.val() || '').split(self.settings.splitOn);
							for (var i = 0, n = splitInput.length; i < n; i++) {
								self.createItem(splitInput[i]);
							}
						}, 0);
					}
				}
			},
	
			/**
	   * Triggered on <input> keypress.
	   *
	   * @param {object} e
	   * @returns {boolean}
	   */
			onKeyPress: function onKeyPress(e) {
				if (this.isLocked) return e && e.preventDefault();
				var character = String.fromCharCode(e.keyCode || e.which);
				if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
					this.createItem();
					e.preventDefault();
					return false;
				}
			},
	
			/**
	   * Triggered on <input> keydown.
	   *
	   * @param {object} e
	   * @returns {boolean}
	   */
			onKeyDown: function onKeyDown(e) {
				var isInput = e.target === this.$control_input[0];
				var self = this;
	
				if (self.isLocked) {
					if (e.keyCode !== KEY_TAB) {
						e.preventDefault();
					}
					return;
				}
	
				switch (e.keyCode) {
					case KEY_A:
						if (self.isCmdDown) {
							self.selectAll();
							return;
						}
						break;
					case KEY_ESC:
						if (self.isOpen) {
							e.preventDefault();
							e.stopPropagation();
							self.close();
						}
						return;
					case KEY_N:
						if (!e.ctrlKey || e.altKey) break;
					case KEY_DOWN:
						if (!self.isOpen && self.hasOptions) {
							self.open();
						} else if (self.$activeOption) {
							self.ignoreHover = true;
							var $next = self.getAdjacentOption(self.$activeOption, 1);
							if ($next.length) self.setActiveOption($next, true, true);
						}
						e.preventDefault();
						return;
					case KEY_P:
						if (!e.ctrlKey || e.altKey) break;
					case KEY_UP:
						if (self.$activeOption) {
							self.ignoreHover = true;
							var $prev = self.getAdjacentOption(self.$activeOption, -1);
							if ($prev.length) self.setActiveOption($prev, true, true);
						}
						e.preventDefault();
						return;
					case KEY_RETURN:
						if (self.isOpen && self.$activeOption) {
							self.onOptionSelect({ currentTarget: self.$activeOption });
							e.preventDefault();
						}
						return;
					case KEY_LEFT:
						self.advanceSelection(-1, e);
						return;
					case KEY_RIGHT:
						self.advanceSelection(1, e);
						return;
					case KEY_TAB:
						if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
							self.onOptionSelect({ currentTarget: self.$activeOption });
	
							// Default behaviour is to jump to the next field, we only want this
							// if the current field doesn't accept any more entries
							if (!self.isFull()) {
								e.preventDefault();
							}
						}
						if (self.settings.create && self.createItem()) {
							e.preventDefault();
						}
						return;
					case KEY_BACKSPACE:
					case KEY_DELETE:
						self.deleteSelection(e);
						return;
				}
	
				if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
					e.preventDefault();
					return;
				}
			},
	
			/**
	   * Triggered on <input> keyup.
	   *
	   * @param {object} e
	   * @returns {boolean}
	   */
			onKeyUp: function onKeyUp(e) {
				var self = this;
	
				if (self.isLocked) return e && e.preventDefault();
				var value = self.$control_input.val() || '';
				if (self.lastValue !== value) {
					self.lastValue = value;
					self.onSearchChange(value);
					self.refreshOptions();
					self.trigger('type', value);
				}
			},
	
			/**
	   * Invokes the user-provide option provider / loader.
	   *
	   * Note: this function is debounced in the Selectize
	   * constructor (by `settings.loadDelay` milliseconds)
	   *
	   * @param {string} value
	   */
			onSearchChange: function onSearchChange(value) {
				var self = this;
				var fn = self.settings.load;
				if (!fn) return;
				if (self.loadedSearches.hasOwnProperty(value)) return;
				self.loadedSearches[value] = true;
				self.load(function (callback) {
					fn.apply(self, [value, callback]);
				});
			},
	
			/**
	   * Triggered on <input> focus.
	   *
	   * @param {object} e (optional)
	   * @returns {boolean}
	   */
			onFocus: function onFocus(e) {
				var self = this;
				var wasFocused = self.isFocused;
	
				if (self.isDisabled) {
					self.blur();
					e && e.preventDefault();
					return false;
				}
	
				if (self.ignoreFocus) return;
				self.isFocused = true;
				if (self.settings.preload === 'focus') self.onSearchChange('');
	
				if (!wasFocused) self.trigger('focus');
	
				if (!self.$activeItems.length) {
					self.showInput();
					self.setActiveItem(null);
					self.refreshOptions(!!self.settings.openOnFocus);
				}
	
				self.refreshState();
			},
	
			/**
	   * Triggered on <input> blur.
	   *
	   * @param {object} e
	   * @param {Element} dest
	   */
			onBlur: function onBlur(e, dest) {
				var self = this;
				if (!self.isFocused) return;
				self.isFocused = false;
	
				if (self.ignoreFocus) {
					return;
				} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
					// necessary to prevent IE closing the dropdown when the scrollbar is clicked
					self.ignoreBlur = true;
					self.onFocus(e);
					return;
				}
	
				var deactivate = function deactivate() {
					self.close();
					self.setTextboxValue('');
					self.setActiveItem(null);
					self.setActiveOption(null);
					self.setCaret(self.items.length);
					self.refreshState();
	
					// IE11 bug: element still marked as active
					(dest || document.body).focus();
	
					self.ignoreFocus = false;
					self.trigger('blur');
				};
	
				self.ignoreFocus = true;
				if (self.settings.create && self.settings.createOnBlur) {
					self.createItem(null, false, deactivate);
				} else {
					deactivate();
				}
			},
	
			/**
	   * Triggered when the user rolls over
	   * an option in the autocomplete dropdown menu.
	   *
	   * @param {object} e
	   * @returns {boolean}
	   */
			onOptionHover: function onOptionHover(e) {
				if (this.ignoreHover) return;
				this.setActiveOption(e.currentTarget, false);
			},
	
			/**
	   * Triggered when the user clicks on an option
	   * in the autocomplete dropdown menu.
	   *
	   * @param {object} e
	   * @returns {boolean}
	   */
			onOptionSelect: function onOptionSelect(e) {
				var value,
				    $target,
				    $option,
				    self = this;
	
				if (e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
	
				$target = $(e.currentTarget);
				if ($target.hasClass('create')) {
					self.createItem(null, function () {
						if (self.settings.closeAfterSelect) {
							self.close();
						}
					});
				} else {
					value = $target.attr('data-value');
					if (typeof value !== 'undefined') {
						self.lastQuery = null;
						self.setTextboxValue('');
						self.addItem(value);
						if (self.settings.closeAfterSelect) {
							self.close();
						} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
							self.setActiveOption(self.getOption(value));
						}
					}
				}
			},
	
			/**
	   * Triggered when the user clicks on an item
	   * that has been selected.
	   *
	   * @param {object} e
	   * @returns {boolean}
	   */
			onItemSelect: function onItemSelect(e) {
				var self = this;
	
				if (self.isLocked) return;
				if (self.settings.mode === 'multi') {
					e.preventDefault();
					self.setActiveItem(e.currentTarget, e);
				}
			},
	
			/**
	   * Invokes the provided method that provides
	   * results to a callback---which are then added
	   * as options to the control.
	   *
	   * @param {function} fn
	   */
			load: function load(fn) {
				var self = this;
				var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);
	
				self.loading++;
				fn.apply(self, [function (results) {
					self.loading = Math.max(self.loading - 1, 0);
					if (results && results.length) {
						self.addOption(results);
						self.refreshOptions(self.isFocused && !self.isInputHidden);
					}
					if (!self.loading) {
						$wrapper.removeClass(self.settings.loadingClass);
					}
					self.trigger('load', results);
				}]);
			},
	
			/**
	   * Sets the input field of the control to the specified value.
	   *
	   * @param {string} value
	   */
			setTextboxValue: function setTextboxValue(value) {
				var $input = this.$control_input;
				var changed = $input.val() !== value;
				if (changed) {
					$input.val(value).triggerHandler('update');
					this.lastValue = value;
				}
			},
	
			/**
	   * Returns the value of the control. If multiple items
	   * can be selected (e.g. <select multiple>), this returns
	   * an array. If only one item can be selected, this
	   * returns a string.
	   *
	   * @returns {mixed}
	   */
			getValue: function getValue() {
				if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
					return this.items;
				} else {
					return this.items.join(this.settings.delimiter);
				}
			},
	
			/**
	   * Resets the selected items to the given value.
	   *
	   * @param {mixed} value
	   */
			setValue: function setValue(value, silent) {
				var events = silent ? [] : ['change'];
	
				debounce_events(this, events, function () {
					this.clear(silent);
					this.addItems(value, silent);
				});
			},
	
			/**
	   * Sets the selected item.
	   *
	   * @param {object} $item
	   * @param {object} e (optional)
	   */
			setActiveItem: function setActiveItem($item, e) {
				var self = this;
				var eventName;
				var i, idx, begin, end, item, swap;
				var $last;
	
				if (self.settings.mode === 'single') return;
				$item = $($item);
	
				// clear the active selection
				if (!$item.length) {
					$(self.$activeItems).removeClass('active');
					self.$activeItems = [];
					if (self.isFocused) {
						self.showInput();
					}
					return;
				}
	
				// modify selection
				eventName = e && e.type.toLowerCase();
	
				if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
					$last = self.$control.children('.active:last');
					begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
					end = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
					if (begin > end) {
						swap = begin;
						begin = end;
						end = swap;
					}
					for (i = begin; i <= end; i++) {
						item = self.$control[0].childNodes[i];
						if (self.$activeItems.indexOf(item) === -1) {
							$(item).addClass('active');
							self.$activeItems.push(item);
						}
					}
					e.preventDefault();
				} else if (eventName === 'mousedown' && self.isCtrlDown || eventName === 'keydown' && this.isShiftDown) {
					if ($item.hasClass('active')) {
						idx = self.$activeItems.indexOf($item[0]);
						self.$activeItems.splice(idx, 1);
						$item.removeClass('active');
					} else {
						self.$activeItems.push($item.addClass('active')[0]);
					}
				} else {
					$(self.$activeItems).removeClass('active');
					self.$activeItems = [$item.addClass('active')[0]];
				}
	
				// ensure control has focus
				self.hideInput();
				if (!this.isFocused) {
					self.focus();
				}
			},
	
			/**
	   * Sets the selected item in the dropdown menu
	   * of available options.
	   *
	   * @param {object} $object
	   * @param {boolean} scroll
	   * @param {boolean} animate
	   */
			setActiveOption: function setActiveOption($option, scroll, animate) {
				var height_menu, height_item, y;
				var scroll_top, scroll_bottom;
				var self = this;
	
				if (self.$activeOption) self.$activeOption.removeClass('active');
				self.$activeOption = null;
	
				$option = $($option);
				if (!$option.length) return;
	
				self.$activeOption = $option.addClass('active');
	
				if (scroll || !isset(scroll)) {
	
					height_menu = self.$dropdown_content.height();
					height_item = self.$activeOption.outerHeight(true);
					scroll = self.$dropdown_content.scrollTop() || 0;
					y = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
					scroll_top = y;
					scroll_bottom = y - height_menu + height_item;
	
					if (y + height_item > height_menu + scroll) {
						self.$dropdown_content.stop().animate({ scrollTop: scroll_bottom }, animate ? self.settings.scrollDuration : 0);
					} else if (y < scroll) {
						self.$dropdown_content.stop().animate({ scrollTop: scroll_top }, animate ? self.settings.scrollDuration : 0);
					}
				}
			},
	
			/**
	   * Selects all items (CTRL + A).
	   */
			selectAll: function selectAll() {
				var self = this;
				if (self.settings.mode === 'single') return;
	
				self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
				if (self.$activeItems.length) {
					self.hideInput();
					self.close();
				}
				self.focus();
			},
	
			/**
	   * Hides the input element out of view, while
	   * retaining its focus.
	   */
			hideInput: function hideInput() {
				var self = this;
	
				self.setTextboxValue('');
				self.$control_input.css({ opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000 });
				self.isInputHidden = true;
			},
	
			/**
	   * Restores input visibility.
	   */
			showInput: function showInput() {
				this.$control_input.css({ opacity: 1, position: 'relative', left: 0 });
				this.isInputHidden = false;
			},
	
			/**
	   * Gives the control focus.
	   */
			focus: function focus() {
				var self = this;
				if (self.isDisabled) return;
	
				self.ignoreFocus = true;
				self.$control_input[0].focus();
				window.setTimeout(function () {
					self.ignoreFocus = false;
					self.onFocus();
				}, 0);
			},
	
			/**
	   * Forces the control out of focus.
	   *
	   * @param {Element} dest
	   */
			blur: function blur(dest) {
				this.$control_input[0].blur();
				this.onBlur(null, dest);
			},
	
			/**
	   * Returns a function that scores an object
	   * to show how good of a match it is to the
	   * provided query.
	   *
	   * @param {string} query
	   * @param {object} options
	   * @return {function}
	   */
			getScoreFunction: function getScoreFunction(query) {
				return this.sifter.getScoreFunction(query, this.getSearchOptions());
			},
	
			/**
	   * Returns search options for sifter (the system
	   * for scoring and sorting results).
	   *
	   * @see https://github.com/brianreavis/sifter.js
	   * @return {object}
	   */
			getSearchOptions: function getSearchOptions() {
				var settings = this.settings;
				var sort = settings.sortField;
				if (typeof sort === 'string') {
					sort = [{ field: sort }];
				}
	
				return {
					fields: settings.searchField,
					conjunction: settings.searchConjunction,
					sort: sort
				};
			},
	
			/**
	   * Searches through available options and returns
	   * a sorted array of matches.
	   *
	   * Returns an object containing:
	   *
	   *   - query {string}
	   *   - tokens {array}
	   *   - total {int}
	   *   - items {array}
	   *
	   * @param {string} query
	   * @returns {object}
	   */
			search: function search(query) {
				var i, value, score, result, calculateScore;
				var self = this;
				var settings = self.settings;
				var options = this.getSearchOptions();
	
				// validate user-provided result scoring function
				if (settings.score) {
					calculateScore = self.settings.score.apply(this, [query]);
					if (typeof calculateScore !== 'function') {
						throw new Error('Selectize "score" setting must be a function that returns a function');
					}
				}
	
				// perform search
				if (query !== self.lastQuery) {
					self.lastQuery = query;
					result = self.sifter.search(query, $.extend(options, { score: calculateScore }));
					self.currentResults = result;
				} else {
					result = $.extend(true, {}, self.currentResults);
				}
	
				// filter out selected items
				if (settings.hideSelected) {
					for (i = result.items.length - 1; i >= 0; i--) {
						if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
							result.items.splice(i, 1);
						}
					}
				}
	
				return result;
			},
	
			/**
	   * Refreshes the list of available options shown
	   * in the autocomplete dropdown menu.
	   *
	   * @param {boolean} triggerDropdown
	   */
			refreshOptions: function refreshOptions(triggerDropdown) {
				var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
				var $active, $active_before, $create;
	
				if (typeof triggerDropdown === 'undefined') {
					triggerDropdown = true;
				}
	
				var self = this;
				var query = $.trim(self.$control_input.val());
				var results = self.search(query);
				var $dropdown_content = self.$dropdown_content;
				var active_before = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
	
				// build markup
				n = results.items.length;
				if (typeof self.settings.maxOptions === 'number') {
					n = Math.min(n, self.settings.maxOptions);
				}
	
				// render and group available options individually
				groups = {};
				groups_order = [];
	
				for (i = 0; i < n; i++) {
					option = self.options[results.items[i].id];
					option_html = self.render('option', option);
					optgroup = option[self.settings.optgroupField] || '';
					optgroups = $.isArray(optgroup) ? optgroup : [optgroup];
	
					for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
						optgroup = optgroups[j];
						if (!self.optgroups.hasOwnProperty(optgroup)) {
							optgroup = '';
						}
						if (!groups.hasOwnProperty(optgroup)) {
							groups[optgroup] = [];
							groups_order.push(optgroup);
						}
						groups[optgroup].push(option_html);
					}
				}
	
				// sort optgroups
				if (this.settings.lockOptgroupOrder) {
					groups_order.sort(function (a, b) {
						var a_order = self.optgroups[a].$order || 0;
						var b_order = self.optgroups[b].$order || 0;
						return a_order - b_order;
					});
				}
	
				// render optgroup headers & join groups
				html = [];
				for (i = 0, n = groups_order.length; i < n; i++) {
					optgroup = groups_order[i];
					if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].length) {
						// render the optgroup header and options within it,
						// then pass it to the wrapper template
						html_children = self.render('optgroup_header', self.optgroups[optgroup]) || '';
						html_children += groups[optgroup].join('');
						html.push(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
							html: html_children
						})));
					} else {
						html.push(groups[optgroup].join(''));
					}
				}
	
				$dropdown_content.html(html.join(''));
	
				// highlight matching terms inline
				if (self.settings.highlight && results.query.length && results.tokens.length) {
					for (i = 0, n = results.tokens.length; i < n; i++) {
						highlight($dropdown_content, results.tokens[i].regex);
					}
				}
	
				// add "selected" class to selected options
				if (!self.settings.hideSelected) {
					for (i = 0, n = self.items.length; i < n; i++) {
						self.getOption(self.items[i]).addClass('selected');
					}
				}
	
				// add create option
				has_create_option = self.canCreate(query);
				if (has_create_option) {
					$dropdown_content.prepend(self.render('option_create', { input: query }));
					$create = $($dropdown_content[0].childNodes[0]);
				}
	
				// activate
				self.hasOptions = results.items.length > 0 || has_create_option;
				if (self.hasOptions) {
					if (results.items.length > 0) {
						$active_before = active_before && self.getOption(active_before);
						if ($active_before && $active_before.length) {
							$active = $active_before;
						} else if (self.settings.mode === 'single' && self.items.length) {
							$active = self.getOption(self.items[0]);
						}
						if (!$active || !$active.length) {
							if ($create && !self.settings.addPrecedence) {
								$active = self.getAdjacentOption($create, 1);
							} else {
								$active = $dropdown_content.find('[data-selectable]:first');
							}
						}
					} else {
						$active = $create;
					}
					self.setActiveOption($active);
					if (triggerDropdown && !self.isOpen) {
						self.open();
					}
				} else {
					self.setActiveOption(null);
					if (triggerDropdown && self.isOpen) {
						self.close();
					}
				}
			},
	
			/**
	   * Adds an available option. If it already exists,
	   * nothing will happen. Note: this does not refresh
	   * the options list dropdown (use `refreshOptions`
	   * for that).
	   *
	   * Usage:
	   *
	   *   this.addOption(data)
	   *
	   * @param {object|array} data
	   */
			addOption: function addOption(data) {
				var i,
				    n,
				    value,
				    self = this;
	
				if ($.isArray(data)) {
					for (i = 0, n = data.length; i < n; i++) {
						self.addOption(data[i]);
					}
					return;
				}
	
				if (value = self.registerOption(data)) {
					self.userOptions[value] = true;
					self.lastQuery = null;
					self.trigger('option_add', value, data);
				}
			},
	
			/**
	   * Registers an option to the pool of options.
	   *
	   * @param {object} data
	   * @return {boolean|string}
	   */
			registerOption: function registerOption(data) {
				var key = hash_key(data[this.settings.valueField]);
				if (!key || this.options.hasOwnProperty(key)) return false;
				data.$order = data.$order || ++this.order;
				this.options[key] = data;
				return key;
			},
	
			/**
	   * Registers an option group to the pool of option groups.
	   *
	   * @param {object} data
	   * @return {boolean|string}
	   */
			registerOptionGroup: function registerOptionGroup(data) {
				var key = hash_key(data[this.settings.optgroupValueField]);
				if (!key) return false;
	
				data.$order = data.$order || ++this.order;
				this.optgroups[key] = data;
				return key;
			},
	
			/**
	   * Registers a new optgroup for options
	   * to be bucketed into.
	   *
	   * @param {string} id
	   * @param {object} data
	   */
			addOptionGroup: function addOptionGroup(id, data) {
				data[this.settings.optgroupValueField] = id;
				if (id = this.registerOptionGroup(data)) {
					this.trigger('optgroup_add', id, data);
				}
			},
	
			/**
	   * Removes an existing option group.
	   *
	   * @param {string} id
	   */
			removeOptionGroup: function removeOptionGroup(id) {
				if (this.optgroups.hasOwnProperty(id)) {
					delete this.optgroups[id];
					this.renderCache = {};
					this.trigger('optgroup_remove', id);
				}
			},
	
			/**
	   * Clears all existing option groups.
	   */
			clearOptionGroups: function clearOptionGroups() {
				this.optgroups = {};
				this.renderCache = {};
				this.trigger('optgroup_clear');
			},
	
			/**
	   * Updates an option available for selection. If
	   * it is visible in the selected items or options
	   * dropdown, it will be re-rendered automatically.
	   *
	   * @param {string} value
	   * @param {object} data
	   */
			updateOption: function updateOption(value, data) {
				var self = this;
				var $item, $item_new;
				var value_new, index_item, cache_items, cache_options, order_old;
	
				value = hash_key(value);
				value_new = hash_key(data[self.settings.valueField]);
	
				// sanity checks
				if (value === null) return;
				if (!self.options.hasOwnProperty(value)) return;
				if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
	
				order_old = self.options[value].$order;
	
				// update references
				if (value_new !== value) {
					delete self.options[value];
					index_item = self.items.indexOf(value);
					if (index_item !== -1) {
						self.items.splice(index_item, 1, value_new);
					}
				}
				data.$order = data.$order || order_old;
				self.options[value_new] = data;
	
				// invalidate render cache
				cache_items = self.renderCache['item'];
				cache_options = self.renderCache['option'];
	
				if (cache_items) {
					delete cache_items[value];
					delete cache_items[value_new];
				}
				if (cache_options) {
					delete cache_options[value];
					delete cache_options[value_new];
				}
	
				// update the item if it's selected
				if (self.items.indexOf(value_new) !== -1) {
					$item = self.getItem(value);
					$item_new = $(self.render('item', data));
					if ($item.hasClass('active')) $item_new.addClass('active');
					$item.replaceWith($item_new);
				}
	
				// invalidate last query because we might have updated the sortField
				self.lastQuery = null;
	
				// update dropdown contents
				if (self.isOpen) {
					self.refreshOptions(false);
				}
			},
	
			/**
	   * Removes a single option.
	   *
	   * @param {string} value
	   * @param {boolean} silent
	   */
			removeOption: function removeOption(value, silent) {
				var self = this;
				value = hash_key(value);
	
				var cache_items = self.renderCache['item'];
				var cache_options = self.renderCache['option'];
				if (cache_items) delete cache_items[value];
				if (cache_options) delete cache_options[value];
	
				delete self.userOptions[value];
				delete self.options[value];
				self.lastQuery = null;
				self.trigger('option_remove', value);
				self.removeItem(value, silent);
			},
	
			/**
	   * Clears all options.
	   */
			clearOptions: function clearOptions() {
				var self = this;
	
				self.loadedSearches = {};
				self.userOptions = {};
				self.renderCache = {};
				self.options = self.sifter.items = {};
				self.lastQuery = null;
				self.trigger('option_clear');
				self.clear();
			},
	
			/**
	   * Returns the jQuery element of the option
	   * matching the given value.
	   *
	   * @param {string} value
	   * @returns {object}
	   */
			getOption: function getOption(value) {
				return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
			},
	
			/**
	   * Returns the jQuery element of the next or
	   * previous selectable option.
	   *
	   * @param {object} $option
	   * @param {int} direction  can be 1 for next or -1 for previous
	   * @return {object}
	   */
			getAdjacentOption: function getAdjacentOption($option, direction) {
				var $options = this.$dropdown.find('[data-selectable]');
				var index = $options.index($option) + direction;
	
				return index >= 0 && index < $options.length ? $options.eq(index) : $();
			},
	
			/**
	   * Finds the first element with a "data-value" attribute
	   * that matches the given value.
	   *
	   * @param {mixed} value
	   * @param {object} $els
	   * @return {object}
	   */
			getElementWithValue: function getElementWithValue(value, $els) {
				value = hash_key(value);
	
				if (typeof value !== 'undefined' && value !== null) {
					for (var i = 0, n = $els.length; i < n; i++) {
						if ($els[i].getAttribute('data-value') === value) {
							return $($els[i]);
						}
					}
				}
	
				return $();
			},
	
			/**
	   * Returns the jQuery element of the item
	   * matching the given value.
	   *
	   * @param {string} value
	   * @returns {object}
	   */
			getItem: function getItem(value) {
				return this.getElementWithValue(value, this.$control.children());
			},
	
			/**
	   * "Selects" multiple items at once. Adds them to the list
	   * at the current caret position.
	   *
	   * @param {string} value
	   * @param {boolean} silent
	   */
			addItems: function addItems(values, silent) {
				var items = $.isArray(values) ? values : [values];
				for (var i = 0, n = items.length; i < n; i++) {
					this.isPending = i < n - 1;
					this.addItem(items[i], silent);
				}
			},
	
			/**
	   * "Selects" an item. Adds it to the list
	   * at the current caret position.
	   *
	   * @param {string} value
	   * @param {boolean} silent
	   */
			addItem: function addItem(value, silent) {
				var events = silent ? [] : ['change'];
	
				debounce_events(this, events, function () {
					var $item, $option, $options;
					var self = this;
					var inputMode = self.settings.mode;
					var i, active, value_next, wasFull;
					value = hash_key(value);
	
					if (self.items.indexOf(value) !== -1) {
						if (inputMode === 'single') self.close();
						return;
					}
	
					if (!self.options.hasOwnProperty(value)) return;
					if (inputMode === 'single') self.clear(silent);
					if (inputMode === 'multi' && self.isFull()) return;
	
					$item = $(self.render('item', self.options[value]));
					wasFull = self.isFull();
					self.items.splice(self.caretPos, 0, value);
					self.insertAtCaret($item);
					if (!self.isPending || !wasFull && self.isFull()) {
						self.refreshState();
					}
	
					if (self.isSetup) {
						$options = self.$dropdown_content.find('[data-selectable]');
	
						// update menu / remove the option (if this is not one item being added as part of series)
						if (!self.isPending) {
							$option = self.getOption(value);
							value_next = self.getAdjacentOption($option, 1).attr('data-value');
							self.refreshOptions(self.isFocused && inputMode !== 'single');
							if (value_next) {
								self.setActiveOption(self.getOption(value_next));
							}
						}
	
						// hide the menu if the maximum number of items have been selected or no options are left
						if (!$options.length || self.isFull()) {
							self.close();
						} else {
							self.positionDropdown();
						}
	
						self.updatePlaceholder();
						self.trigger('item_add', value, $item);
						self.updateOriginalInput({ silent: silent });
					}
				});
			},
	
			/**
	   * Removes the selected item matching
	   * the provided value.
	   *
	   * @param {string} value
	   */
			removeItem: function removeItem(value, silent) {
				var self = this;
				var $item, i, idx;
	
				$item = typeof value === 'object' ? value : self.getItem(value);
				value = hash_key($item.attr('data-value'));
				i = self.items.indexOf(value);
	
				if (i !== -1) {
					$item.remove();
					if ($item.hasClass('active')) {
						idx = self.$activeItems.indexOf($item[0]);
						self.$activeItems.splice(idx, 1);
					}
	
					self.items.splice(i, 1);
					self.lastQuery = null;
					if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
						self.removeOption(value, silent);
					}
	
					if (i < self.caretPos) {
						self.setCaret(self.caretPos - 1);
					}
	
					self.refreshState();
					self.updatePlaceholder();
					self.updateOriginalInput({ silent: silent });
					self.positionDropdown();
					self.trigger('item_remove', value, $item);
				}
			},
	
			/**
	   * Invokes the `create` method provided in the
	   * selectize options that should provide the data
	   * for the new item, given the user input.
	   *
	   * Once this completes, it will be added
	   * to the item list.
	   *
	   * @param {string} value
	   * @param {boolean} [triggerDropdown]
	   * @param {function} [callback]
	   * @return {boolean}
	   */
			createItem: function createItem(input, triggerDropdown) {
				var self = this;
				var caret = self.caretPos;
				input = input || $.trim(self.$control_input.val() || '');
	
				var callback = arguments[arguments.length - 1];
				if (typeof callback !== 'function') callback = function () {};
	
				if (typeof triggerDropdown !== 'boolean') {
					triggerDropdown = true;
				}
	
				if (!self.canCreate(input)) {
					callback();
					return false;
				}
	
				self.lock();
	
				var setup = typeof self.settings.create === 'function' ? this.settings.create : function (input) {
					var data = {};
					data[self.settings.labelField] = input;
					data[self.settings.valueField] = input;
					return data;
				};
	
				var create = once(function (data) {
					self.unlock();
	
					if (!data || typeof data !== 'object') return callback();
					var value = hash_key(data[self.settings.valueField]);
					if (typeof value !== 'string') return callback();
	
					self.setTextboxValue('');
					self.addOption(data);
					self.setCaret(caret);
					self.addItem(value);
					self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
					callback(data);
				});
	
				var output = setup.apply(this, [input, create]);
				if (typeof output !== 'undefined') {
					create(output);
				}
	
				return true;
			},
	
			/**
	   * Re-renders the selected item lists.
	   */
			refreshItems: function refreshItems() {
				this.lastQuery = null;
	
				if (this.isSetup) {
					this.addItem(this.items);
				}
	
				this.refreshState();
				this.updateOriginalInput();
			},
	
			/**
	   * Updates all state-dependent attributes
	   * and CSS classes.
	   */
			refreshState: function refreshState() {
				var invalid,
				    self = this;
				if (self.isRequired) {
					if (self.items.length) self.isInvalid = false;
					self.$control_input.prop('required', invalid);
				}
				self.refreshClasses();
			},
	
			/**
	   * Updates all state-dependent CSS classes.
	   */
			refreshClasses: function refreshClasses() {
				var self = this;
				var isFull = self.isFull();
				var isLocked = self.isLocked;
	
				self.$wrapper.toggleClass('rtl', self.rtl);
	
				self.$control.toggleClass('focus', self.isFocused).toggleClass('disabled', self.isDisabled).toggleClass('required', self.isRequired).toggleClass('invalid', self.isInvalid).toggleClass('locked', isLocked).toggleClass('full', isFull).toggleClass('not-full', !isFull).toggleClass('input-active', self.isFocused && !self.isInputHidden).toggleClass('dropdown-active', self.isOpen).toggleClass('has-options', !$.isEmptyObject(self.options)).toggleClass('has-items', self.items.length > 0);
	
				self.$control_input.data('grow', !isFull && !isLocked);
			},
	
			/**
	   * Determines whether or not more items can be added
	   * to the control without exceeding the user-defined maximum.
	   *
	   * @returns {boolean}
	   */
			isFull: function isFull() {
				return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
			},
	
			/**
	   * Refreshes the original <select> or <input>
	   * element to reflect the current state.
	   */
			updateOriginalInput: function updateOriginalInput(opts) {
				var i,
				    n,
				    options,
				    label,
				    self = this;
				opts = opts || {};
	
				if (self.tagType === TAG_SELECT) {
					options = [];
					for (i = 0, n = self.items.length; i < n; i++) {
						label = self.options[self.items[i]][self.settings.labelField] || '';
						options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
					}
					if (!options.length && !this.$input.attr('multiple')) {
						options.push('<option value="" selected="selected"></option>');
					}
					self.$input.html(options.join(''));
				} else {
					self.$input.val(self.getValue());
					self.$input.attr('value', self.$input.val());
				}
	
				if (self.isSetup) {
					if (!opts.silent) {
						self.trigger('change', self.$input.val());
					}
				}
			},
	
			/**
	   * Shows/hide the input placeholder depending
	   * on if there items in the list already.
	   */
			updatePlaceholder: function updatePlaceholder() {
				if (!this.settings.placeholder) return;
				var $input = this.$control_input;
	
				if (this.items.length) {
					$input.removeAttr('placeholder');
				} else {
					$input.attr('placeholder', this.settings.placeholder);
				}
				$input.triggerHandler('update', { force: true });
			},
	
			/**
	   * Shows the autocomplete dropdown containing
	   * the available options.
	   */
			open: function open() {
				var self = this;
	
				if (self.isLocked || self.isOpen || self.settings.mode === 'multi' && self.isFull()) return;
				self.focus();
				self.isOpen = true;
				self.refreshState();
				self.$dropdown.css({ visibility: 'hidden', display: 'block' });
				self.positionDropdown();
				self.$dropdown.css({ visibility: 'visible' });
				self.trigger('dropdown_open', self.$dropdown);
			},
	
			/**
	   * Closes the autocomplete dropdown menu.
	   */
			close: function close() {
				var self = this;
				var trigger = self.isOpen;
	
				if (self.settings.mode === 'single' && self.items.length) {
					self.hideInput();
				}
	
				self.isOpen = false;
				self.$dropdown.hide();
				self.setActiveOption(null);
				self.refreshState();
	
				if (trigger) self.trigger('dropdown_close', self.$dropdown);
			},
	
			/**
	   * Calculates and applies the appropriate
	   * position of the dropdown.
	   */
			positionDropdown: function positionDropdown() {
				var $control = this.$control;
				var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
				offset.top += $control.outerHeight(true);
	
				this.$dropdown.css({
					width: $control.outerWidth(),
					top: offset.top,
					left: offset.left
				});
			},
	
			/**
	   * Resets / clears all selected items
	   * from the control.
	   *
	   * @param {boolean} silent
	   */
			clear: function clear(silent) {
				var self = this;
	
				if (!self.items.length) return;
				self.$control.children(':not(input)').remove();
				self.items = [];
				self.lastQuery = null;
				self.setCaret(0);
				self.setActiveItem(null);
				self.updatePlaceholder();
				self.updateOriginalInput({ silent: silent });
				self.refreshState();
				self.showInput();
				self.trigger('clear');
			},
	
			/**
	   * A helper method for inserting an element
	   * at the current caret position.
	   *
	   * @param {object} $el
	   */
			insertAtCaret: function insertAtCaret($el) {
				var caret = Math.min(this.caretPos, this.items.length);
				if (caret === 0) {
					this.$control.prepend($el);
				} else {
					$(this.$control[0].childNodes[caret]).before($el);
				}
				this.setCaret(caret + 1);
			},
	
			/**
	   * Removes the current selected item(s).
	   *
	   * @param {object} e (optional)
	   * @returns {boolean}
	   */
			deleteSelection: function deleteSelection(e) {
				var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
				var self = this;
	
				direction = e && e.keyCode === KEY_BACKSPACE ? -1 : 1;
				selection = getSelection(self.$control_input[0]);
	
				if (self.$activeOption && !self.settings.hideSelected) {
					option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
				}
	
				// determine items that will be removed
				values = [];
	
				if (self.$activeItems.length) {
					$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
					caret = self.$control.children(':not(input)').index($tail);
					if (direction > 0) {
						caret++;
					}
	
					for (i = 0, n = self.$activeItems.length; i < n; i++) {
						values.push($(self.$activeItems[i]).attr('data-value'));
					}
					if (e) {
						e.preventDefault();
						e.stopPropagation();
					}
				} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
					if (direction < 0 && selection.start === 0 && selection.length === 0) {
						values.push(self.items[self.caretPos - 1]);
					} else if (direction > 0 && selection.start === self.$control_input.val().length) {
						values.push(self.items[self.caretPos]);
					}
				}
	
				// allow the callback to abort
				if (!values.length || typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false) {
					return false;
				}
	
				// perform removal
				if (typeof caret !== 'undefined') {
					self.setCaret(caret);
				}
				while (values.length) {
					self.removeItem(values.pop());
				}
	
				self.showInput();
				self.positionDropdown();
				self.refreshOptions(true);
	
				// select previous option
				if (option_select) {
					$option_select = self.getOption(option_select);
					if ($option_select.length) {
						self.setActiveOption($option_select);
					}
				}
	
				return true;
			},
	
			/**
	   * Selects the previous / next item (depending
	   * on the `direction` argument).
	   *
	   * > 0 - right
	   * < 0 - left
	   *
	   * @param {int} direction
	   * @param {object} e (optional)
	   */
			advanceSelection: function advanceSelection(direction, e) {
				var tail, selection, idx, valueLength, cursorAtEdge, $tail;
				var self = this;
	
				if (direction === 0) return;
				if (self.rtl) direction *= -1;
	
				tail = direction > 0 ? 'last' : 'first';
				selection = getSelection(self.$control_input[0]);
	
				if (self.isFocused && !self.isInputHidden) {
					valueLength = self.$control_input.val().length;
					cursorAtEdge = direction < 0 ? selection.start === 0 && selection.length === 0 : selection.start === valueLength;
	
					if (cursorAtEdge && !valueLength) {
						self.advanceCaret(direction, e);
					}
				} else {
					$tail = self.$control.children('.active:' + tail);
					if ($tail.length) {
						idx = self.$control.children(':not(input)').index($tail);
						self.setActiveItem(null);
						self.setCaret(direction > 0 ? idx + 1 : idx);
					}
				}
			},
	
			/**
	   * Moves the caret left / right.
	   *
	   * @param {int} direction
	   * @param {object} e (optional)
	   */
			advanceCaret: function advanceCaret(direction, e) {
				var self = this,
				    fn,
				    $adj;
	
				if (direction === 0) return;
	
				fn = direction > 0 ? 'next' : 'prev';
				if (self.isShiftDown) {
					$adj = self.$control_input[fn]();
					if ($adj.length) {
						self.hideInput();
						self.setActiveItem($adj);
						e && e.preventDefault();
					}
				} else {
					self.setCaret(self.caretPos + direction);
				}
			},
	
			/**
	   * Moves the caret to the specified index.
	   *
	   * @param {int} i
	   */
			setCaret: function setCaret(i) {
				var self = this;
	
				if (self.settings.mode === 'single') {
					i = self.items.length;
				} else {
					i = Math.max(0, Math.min(self.items.length, i));
				}
	
				if (!self.isPending) {
					// the input must be moved by leaving it in place and moving the
					// siblings, due to the fact that focus cannot be restored once lost
					// on mobile webkit devices
					var j, n, fn, $children, $child;
					$children = self.$control.children(':not(input)');
					for (j = 0, n = $children.length; j < n; j++) {
						$child = $($children[j]).detach();
						if (j < i) {
							self.$control_input.before($child);
						} else {
							self.$control.append($child);
						}
					}
				}
	
				self.caretPos = i;
			},
	
			/**
	   * Disables user input on the control. Used while
	   * items are being asynchronously created.
	   */
			lock: function lock() {
				this.close();
				this.isLocked = true;
				this.refreshState();
			},
	
			/**
	   * Re-enables user input on the control.
	   */
			unlock: function unlock() {
				this.isLocked = false;
				this.refreshState();
			},
	
			/**
	   * Disables user input on the control completely.
	   * While disabled, it cannot receive focus.
	   */
			disable: function disable() {
				var self = this;
				self.$input.prop('disabled', true);
				self.$control_input.prop('disabled', true).prop('tabindex', -1);
				self.isDisabled = true;
				self.lock();
			},
	
			/**
	   * Enables the control so that it can respond
	   * to focus and user input.
	   */
			enable: function enable() {
				var self = this;
				self.$input.prop('disabled', false);
				self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
				self.isDisabled = false;
				self.unlock();
			},
	
			/**
	   * Completely destroys the control and
	   * unbinds all event listeners so that it can
	   * be garbage collected.
	   */
			destroy: function destroy() {
				var self = this;
				var eventNS = self.eventNS;
				var revertSettings = self.revertSettings;
	
				self.trigger('destroy');
				self.off();
				self.$wrapper.remove();
				self.$dropdown.remove();
	
				self.$input.html('').append(revertSettings.$children).removeAttr('tabindex').removeClass('selectized').attr({ tabindex: revertSettings.tabindex }).show();
	
				self.$control_input.removeData('grow');
				self.$input.removeData('selectize');
	
				$(window).off(eventNS);
				$(document).off(eventNS);
				$(document.body).off(eventNS);
	
				delete self.$input[0].selectize;
			},
	
			/**
	   * A helper method for rendering "item" and
	   * "option" templates, given the data.
	   *
	   * @param {string} templateName
	   * @param {object} data
	   * @returns {string}
	   */
			render: function render(templateName, data) {
				var value, id, label;
				var html = '';
				var cache = false;
				var self = this;
				var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
	
				if (templateName === 'option' || templateName === 'item') {
					value = hash_key(data[self.settings.valueField]);
					cache = !!value;
				}
	
				// pull markup from cache if it exists
				if (cache) {
					if (!isset(self.renderCache[templateName])) {
						self.renderCache[templateName] = {};
					}
					if (self.renderCache[templateName].hasOwnProperty(value)) {
						return self.renderCache[templateName][value];
					}
				}
	
				// render markup
				html = self.settings.render[templateName].apply(this, [data, escape_html]);
	
				// add mandatory attributes
				if (templateName === 'option' || templateName === 'option_create') {
					html = html.replace(regex_tag, '<$1 data-selectable');
				}
				if (templateName === 'optgroup') {
					id = data[self.settings.optgroupValueField] || '';
					html = html.replace(regex_tag, '<$1 data-group="' + escape_replace(escape_html(id)) + '"');
				}
				if (templateName === 'option' || templateName === 'item') {
					html = html.replace(regex_tag, '<$1 data-value="' + escape_replace(escape_html(value || '')) + '"');
				}
	
				// update cache
				if (cache) {
					self.renderCache[templateName][value] = html;
				}
	
				return html;
			},
	
			/**
	   * Clears the render cache for a template. If
	   * no template is given, clears all render
	   * caches.
	   *
	   * @param {string} templateName
	   */
			clearCache: function clearCache(templateName) {
				var self = this;
				if (typeof templateName === 'undefined') {
					self.renderCache = {};
				} else {
					delete self.renderCache[templateName];
				}
			},
	
			/**
	   * Determines whether or not to display the
	   * create item prompt, given a user input.
	   *
	   * @param {string} input
	   * @return {boolean}
	   */
			canCreate: function canCreate(input) {
				var self = this;
				if (!self.settings.create) return false;
				var filter = self.settings.createFilter;
				return input.length && (typeof filter !== 'function' || filter.apply(self, [input])) && (typeof filter !== 'string' || new RegExp(filter).test(input)) && (!(filter instanceof RegExp) || filter.test(input));
			}
	
		});
	
		Selectize.count = 0;
		Selectize.defaults = {
			options: [],
			optgroups: [],
	
			plugins: [],
			delimiter: ',',
			splitOn: null, // regexp or string for splitting up values from a paste command
			persist: true,
			diacritics: true,
			create: false,
			createOnBlur: false,
			createFilter: null,
			highlight: true,
			openOnFocus: true,
			maxOptions: 1000,
			maxItems: null,
			hideSelected: null,
			addPrecedence: false,
			selectOnTab: false,
			preload: false,
			allowEmptyOption: false,
			closeAfterSelect: false,
	
			scrollDuration: 60,
			loadThrottle: 300,
			loadingClass: 'loading',
	
			dataAttr: 'data-data',
			optgroupField: 'optgroup',
			valueField: 'value',
			labelField: 'text',
			optgroupLabelField: 'label',
			optgroupValueField: 'value',
			lockOptgroupOrder: false,
	
			sortField: '$order',
			searchField: ['text'],
			searchConjunction: 'and',
	
			mode: null,
			wrapperClass: 'selectize-control',
			inputClass: 'selectize-input',
			dropdownClass: 'selectize-dropdown',
			dropdownContentClass: 'selectize-dropdown-content',
	
			dropdownParent: null,
	
			copyClassesToDropdown: true,
	
			/*
	  load                 : null, // function(query, callback) { ... }
	  score                : null, // function(search) { ... }
	  onInitialize         : null, // function() { ... }
	  onChange             : null, // function(value) { ... }
	  onItemAdd            : null, // function(value, $item) { ... }
	  onItemRemove         : null, // function(value) { ... }
	  onClear              : null, // function() { ... }
	  onOptionAdd          : null, // function(value, data) { ... }
	  onOptionRemove       : null, // function(value) { ... }
	  onOptionClear        : null, // function() { ... }
	  onOptionGroupAdd     : null, // function(id, data) { ... }
	  onOptionGroupRemove  : null, // function(id) { ... }
	  onOptionGroupClear   : null, // function() { ... }
	  onDropdownOpen       : null, // function($dropdown) { ... }
	  onDropdownClose      : null, // function($dropdown) { ... }
	  onType               : null, // function(str) { ... }
	  onDelete             : null, // function(values) { ... }
	  */
	
			render: {}
		};
	
		$.fn.selectize = function (settings_user) {
			var defaults = $.fn.selectize.defaults;
			var settings = $.extend({}, defaults, settings_user);
			var attr_data = settings.dataAttr;
			var field_label = settings.labelField;
			var field_value = settings.valueField;
			var field_optgroup = settings.optgroupField;
			var field_optgroup_label = settings.optgroupLabelField;
			var field_optgroup_value = settings.optgroupValueField;
	
			/**
	   * Initializes selectize from a <input type="text"> element.
	   *
	   * @param {object} $input
	   * @param {object} settings_element
	   */
			var init_textbox = function init_textbox($input, settings_element) {
				var i, n, values, option;
	
				var data_raw = $input.attr(attr_data);
	
				if (!data_raw) {
					var value = $.trim($input.val() || '');
					if (!settings.allowEmptyOption && !value.length) return;
					values = value.split(settings.delimiter);
					for (i = 0, n = values.length; i < n; i++) {
						option = {};
						option[field_label] = values[i];
						option[field_value] = values[i];
						settings_element.options.push(option);
					}
					settings_element.items = values;
				} else {
					settings_element.options = JSON.parse(data_raw);
					for (i = 0, n = settings_element.options.length; i < n; i++) {
						settings_element.items.push(settings_element.options[i][field_value]);
					}
				}
			};
	
			/**
	   * Initializes selectize from a <select> element.
	   *
	   * @param {object} $input
	   * @param {object} settings_element
	   */
			var init_select = function init_select($input, settings_element) {
				var i,
				    n,
				    tagName,
				    $children,
				    order = 0;
				var options = settings_element.options;
				var optionsMap = {};
	
				var readData = function readData($el) {
					var data = attr_data && $el.attr(attr_data);
					if (typeof data === 'string' && data.length) {
						return JSON.parse(data);
					}
					return null;
				};
	
				var addOption = function addOption($option, group) {
					$option = $($option);
	
					var value = hash_key($option.attr('value'));
					if (!value && !settings.allowEmptyOption) return;
	
					// if the option already exists, it's probably been
					// duplicated in another optgroup. in this case, push
					// the current group to the "optgroup" property on the
					// existing option so that it's rendered in both places.
					if (optionsMap.hasOwnProperty(value)) {
						if (group) {
							var arr = optionsMap[value][field_optgroup];
							if (!arr) {
								optionsMap[value][field_optgroup] = group;
							} else if (!$.isArray(arr)) {
								optionsMap[value][field_optgroup] = [arr, group];
							} else {
								arr.push(group);
							}
						}
						return;
					}
	
					var option = readData($option) || {};
					option[field_label] = option[field_label] || $option.text();
					option[field_value] = option[field_value] || value;
					option[field_optgroup] = option[field_optgroup] || group;
	
					optionsMap[value] = option;
					options.push(option);
	
					if ($option.is(':selected')) {
						settings_element.items.push(value);
					}
				};
	
				var addGroup = function addGroup($optgroup) {
					var i, n, id, optgroup, $options;
	
					$optgroup = $($optgroup);
					id = $optgroup.attr('label');
	
					if (id) {
						optgroup = readData($optgroup) || {};
						optgroup[field_optgroup_label] = id;
						optgroup[field_optgroup_value] = id;
						settings_element.optgroups.push(optgroup);
					}
	
					$options = $('option', $optgroup);
					for (i = 0, n = $options.length; i < n; i++) {
						addOption($options[i], id);
					}
				};
	
				settings_element.maxItems = $input.attr('multiple') ? null : 1;
	
				$children = $input.children();
				for (i = 0, n = $children.length; i < n; i++) {
					tagName = $children[i].tagName.toLowerCase();
					if (tagName === 'optgroup') {
						addGroup($children[i]);
					} else if (tagName === 'option') {
						addOption($children[i]);
					}
				}
			};
	
			return this.each(function () {
				if (this.selectize) return;
	
				var instance;
				var $input = $(this);
				var tag_name = this.tagName.toLowerCase();
				var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
				if (!placeholder && !settings.allowEmptyOption) {
					placeholder = $input.children('option[value=""]').text();
				}
	
				var settings_element = {
					'placeholder': placeholder,
					'options': [],
					'optgroups': [],
					'items': []
				};
	
				if (tag_name === 'select') {
					init_select($input, settings_element);
				} else {
					init_textbox($input, settings_element);
				}
	
				instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
			});
		};
	
		$.fn.selectize.defaults = Selectize.defaults;
		$.fn.selectize.support = {
			validity: SUPPORTS_VALIDITY_API
		};
	
		Selectize.define('drag_drop', function (options) {
			if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
			if (this.settings.mode !== 'multi') return;
			var self = this;
	
			self.lock = (function () {
				var original = self.lock;
				return function () {
					var sortable = self.$control.data('sortable');
					if (sortable) sortable.disable();
					return original.apply(self, arguments);
				};
			})();
	
			self.unlock = (function () {
				var original = self.unlock;
				return function () {
					var sortable = self.$control.data('sortable');
					if (sortable) sortable.enable();
					return original.apply(self, arguments);
				};
			})();
	
			self.setup = (function () {
				var original = self.setup;
				return function () {
					original.apply(this, arguments);
	
					var $control = self.$control.sortable({
						items: '[data-value]',
						forcePlaceholderSize: true,
						disabled: self.isLocked,
						start: function start(e, ui) {
							ui.placeholder.css('width', ui.helper.css('width'));
							$control.css({ overflow: 'visible' });
						},
						stop: function stop() {
							$control.css({ overflow: 'hidden' });
							var active = self.$activeItems ? self.$activeItems.slice() : null;
							var values = [];
							$control.children('[data-value]').each(function () {
								values.push($(this).attr('data-value'));
							});
							self.setValue(values);
							self.setActiveItem(active);
						}
					});
				};
			})();
		});
	
		Selectize.define('dropdown_header', function (options) {
			var self = this;
	
			options = $.extend({
				title: 'Untitled',
				headerClass: 'selectize-dropdown-header',
				titleRowClass: 'selectize-dropdown-header-title',
				labelClass: 'selectize-dropdown-header-label',
				closeClass: 'selectize-dropdown-header-close',
	
				html: function html(data) {
					return '<div class="' + data.headerClass + '">' + '<div class="' + data.titleRowClass + '">' + '<span class="' + data.labelClass + '">' + data.title + '</span>' + '<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' + '</div>' + '</div>';
				}
			}, options);
	
			self.setup = (function () {
				var original = self.setup;
				return function () {
					original.apply(self, arguments);
					self.$dropdown_header = $(options.html(options));
					self.$dropdown.prepend(self.$dropdown_header);
				};
			})();
		});
	
		Selectize.define('optgroup_columns', function (options) {
			var self = this;
	
			options = $.extend({
				equalizeWidth: true,
				equalizeHeight: true
			}, options);
	
			this.getAdjacentOption = function ($option, direction) {
				var $options = $option.closest('[data-group]').find('[data-selectable]');
				var index = $options.index($option) + direction;
	
				return index >= 0 && index < $options.length ? $options.eq(index) : $();
			};
	
			this.onKeyDown = (function () {
				var original = self.onKeyDown;
				return function (e) {
					var index, $option, $options, $optgroup;
	
					if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
						self.ignoreHover = true;
						$optgroup = this.$activeOption.closest('[data-group]');
						index = $optgroup.find('[data-selectable]').index(this.$activeOption);
	
						if (e.keyCode === KEY_LEFT) {
							$optgroup = $optgroup.prev('[data-group]');
						} else {
							$optgroup = $optgroup.next('[data-group]');
						}
	
						$options = $optgroup.find('[data-selectable]');
						$option = $options.eq(Math.min($options.length - 1, index));
						if ($option.length) {
							this.setActiveOption($option);
						}
						return;
					}
	
					return original.apply(this, arguments);
				};
			})();
	
			var getScrollbarWidth = function getScrollbarWidth() {
				var div;
				var width = getScrollbarWidth.width;
				var doc = document;
	
				if (typeof width === 'undefined') {
					div = doc.createElement('div');
					div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
					div = div.firstChild;
					doc.body.appendChild(div);
					width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
					doc.body.removeChild(div);
				}
				return width;
			};
	
			var equalizeSizes = function equalizeSizes() {
				var i, n, height_max, width, width_last, width_parent, $optgroups;
	
				$optgroups = $('[data-group]', self.$dropdown_content);
				n = $optgroups.length;
				if (!n || !self.$dropdown_content.width()) return;
	
				if (options.equalizeHeight) {
					height_max = 0;
					for (i = 0; i < n; i++) {
						height_max = Math.max(height_max, $optgroups.eq(i).height());
					}
					$optgroups.css({ height: height_max });
				}
	
				if (options.equalizeWidth) {
					width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
					width = Math.round(width_parent / n);
					$optgroups.css({ width: width });
					if (n > 1) {
						width_last = width_parent - width * (n - 1);
						$optgroups.eq(n - 1).css({ width: width_last });
					}
				}
			};
	
			if (options.equalizeHeight || options.equalizeWidth) {
				hook.after(this, 'positionDropdown', equalizeSizes);
				hook.after(this, 'refreshOptions', equalizeSizes);
			}
		});
	
		Selectize.define('remove_button', function (options) {
			if (this.settings.mode === 'single') return;
	
			options = $.extend({
				label: '&times;',
				title: 'Remove',
				className: 'remove',
				append: true
			}, options);
	
			var self = this;
			var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
			/**
	   * Appends an element as a child (with raw HTML).
	   *
	   * @param {string} html_container
	   * @param {string} html_element
	   * @return {string}
	   */
			var append = function append(html_container, html_element) {
				var pos = html_container.search(/(<\/[^>]+>\s*)$/);
				return html_container.substring(0, pos) + html_element + html_container.substring(pos);
			};
	
			this.setup = (function () {
				var original = self.setup;
				return function () {
					// override the item rendering method to add the button to each
					if (options.append) {
						var render_item = self.settings.render.item;
						self.settings.render.item = function (data) {
							return append(render_item.apply(this, arguments), html);
						};
					}
	
					original.apply(this, arguments);
	
					// add event listener
					this.$control.on('click', '.' + options.className, function (e) {
						e.preventDefault();
						if (self.isLocked) return;
	
						var $item = $(e.currentTarget).parent();
						self.setActiveItem($item);
						if (self.deleteSelection()) {
							self.setCaret(self.items.length);
						}
					});
				};
			})();
		});
	
		Selectize.define('restore_on_backspace', function (options) {
			var self = this;
	
			options.text = options.text || function (option) {
				return option[this.settings.labelField];
			};
	
			this.onKeyDown = (function () {
				var original = self.onKeyDown;
				return function (e) {
					var index, option;
					if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
						index = this.caretPos - 1;
						if (index >= 0 && index < this.items.length) {
							option = this.options[this.items[index]];
							if (this.deleteSelection(e)) {
								this.setTextboxValue(options.text.apply(this, [option]));
								this.refreshOptions(true);
							}
							e.preventDefault();
							return;
						}
					}
					return original.apply(this, arguments);
				};
			})();
		});
	
		return Selectize;
	});
	// a-z
	// A-Z

	/*
	item: null,
	optgroup: null,
	optgroup_header: null,
	option: null,
	option_create: null
	*/

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./selectize.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./selectize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * selectize.css (v0.12.1)\n * Copyright (c) 2013–2015 Brian Reavis & contributors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this\n * file except in compliance with the License. You may obtain a copy of the License at:\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF\n * ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n *\n * @author Brian Reavis <brian@thirdroute.com>\n */\n\n.selectize-control.plugin-drag_drop.multi > .selectize-input > div.ui-sortable-placeholder {\n  visibility: visible !important;\n  background: #f2f2f2 !important;\n  background: rgba(0, 0, 0, 0.06) !important;\n  border: 0 none !important;\n  -webkit-box-shadow: inset 0 0 12px 4px #ffffff;\n  box-shadow: inset 0 0 12px 4px #ffffff;\n}\n.selectize-control.plugin-drag_drop .ui-sortable-placeholder::after {\n  content: '!';\n  visibility: hidden;\n}\n.selectize-control.plugin-drag_drop .ui-sortable-helper {\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.selectize-dropdown-header {\n  position: relative;\n  padding: 5px 8px;\n  border-bottom: 1px solid #d0d0d0;\n  background: #f8f8f8;\n  -webkit-border-radius: 3px 3px 0 0;\n  -moz-border-radius: 3px 3px 0 0;\n  border-radius: 3px 3px 0 0;\n}\n.selectize-dropdown-header-close {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  color: #303030;\n  opacity: 0.4;\n  margin-top: -12px;\n  line-height: 20px;\n  font-size: 20px !important;\n}\n.selectize-dropdown-header-close:hover {\n  color: #000000;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup {\n  border-right: 1px solid #f2f2f2;\n  border-top: 0 none;\n  float: left;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup:last-child {\n  border-right: 0 none;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup:before {\n  display: none;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup-header {\n  border-top: 0 none;\n}\n.selectize-control.plugin-remove_button [data-value] {\n  position: relative;\n  padding-right: 24px !important;\n}\n.selectize-control.plugin-remove_button [data-value] .remove {\n  z-index: 1;\n  /* fixes ie bug (see #392) */\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 17px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 12px;\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n  display: inline-block;\n  padding: 2px 0 0 0;\n  border-left: 1px solid #d0d0d0;\n  -webkit-border-radius: 0 2px 2px 0;\n  -moz-border-radius: 0 2px 2px 0;\n  border-radius: 0 2px 2px 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.selectize-control.plugin-remove_button [data-value] .remove:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.selectize-control.plugin-remove_button [data-value].active .remove {\n  border-left-color: #cacaca;\n}\n.selectize-control.plugin-remove_button .disabled [data-value] .remove:hover {\n  background: none;\n}\n.selectize-control.plugin-remove_button .disabled [data-value] .remove {\n  border-left-color: #ffffff;\n}\n.selectize-control {\n  position: relative;\n}\n.selectize-dropdown,\n.selectize-input,\n.selectize-input input {\n  color: #303030;\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  -webkit-font-smoothing: inherit;\n}\n.selectize-input,\n.selectize-control.single .selectize-input.input-active {\n  background: #ffffff;\n  cursor: text;\n  display: inline-block;\n}\n.selectize-input {\n  border: 1px solid #d0d0d0;\n  padding: 8px 8px;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.selectize-control.multi .selectize-input.has-items {\n  padding: 6px 8px 3px;\n}\n.selectize-input.full {\n  background-color: #ffffff;\n}\n.selectize-input.disabled,\n.selectize-input.disabled * {\n  cursor: default !important;\n}\n.selectize-input.focus {\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.selectize-input.dropdown-active {\n  -webkit-border-radius: 3px 3px 0 0;\n  -moz-border-radius: 3px 3px 0 0;\n  border-radius: 3px 3px 0 0;\n}\n.selectize-input > * {\n  vertical-align: baseline;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.selectize-control.multi .selectize-input > div {\n  cursor: pointer;\n  margin: 0 3px 3px 0;\n  padding: 2px 6px;\n  background: #f2f2f2;\n  color: #303030;\n  border: 0 solid #d0d0d0;\n}\n.selectize-control.multi .selectize-input > div.active {\n  background: #e8e8e8;\n  color: #303030;\n  border: 0 solid #cacaca;\n}\n.selectize-control.multi .selectize-input.disabled > div,\n.selectize-control.multi .selectize-input.disabled > div.active {\n  color: #7d7d7d;\n  background: #ffffff;\n  border: 0 solid #ffffff;\n}\n.selectize-input > input {\n  display: inline-block !important;\n  padding: 0 !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  max-width: 100% !important;\n  margin: 0 2px 0 0 !important;\n  text-indent: 0 !important;\n  border: 0 none !important;\n  background: none !important;\n  line-height: inherit !important;\n  -webkit-user-select: auto !important;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.selectize-input > input::-ms-clear {\n  display: none;\n}\n.selectize-input > input:focus {\n  outline: none !important;\n}\n.selectize-input::after {\n  content: ' ';\n  display: block;\n  clear: left;\n}\n.selectize-input.dropdown-active::before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  background: #f0f0f0;\n  height: 1px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.selectize-dropdown {\n  position: absolute;\n  z-index: 10;\n  border: 1px solid #d0d0d0;\n  background: #ffffff;\n  margin: -1px 0 0 0;\n  border-top: 0 none;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 0 0 3px 3px;\n  -moz-border-radius: 0 0 3px 3px;\n  border-radius: 0 0 3px 3px;\n}\n.selectize-dropdown [data-selectable] {\n  cursor: pointer;\n  overflow: hidden;\n}\n.selectize-dropdown [data-selectable] .highlight {\n  background: rgba(125, 168, 208, 0.2);\n  -webkit-border-radius: 1px;\n  -moz-border-radius: 1px;\n  border-radius: 1px;\n}\n.selectize-dropdown [data-selectable],\n.selectize-dropdown .optgroup-header {\n  padding: 5px 8px;\n}\n.selectize-dropdown .optgroup:first-child .optgroup-header {\n  border-top: 0 none;\n}\n.selectize-dropdown .optgroup-header {\n  color: #303030;\n  background: #ffffff;\n  cursor: default;\n}\n.selectize-dropdown .active {\n  background-color: #f5fafd;\n  color: #495c68;\n}\n.selectize-dropdown .active.create {\n  color: #495c68;\n}\n.selectize-dropdown .create {\n  color: rgba(48, 48, 48, 0.5);\n}\n.selectize-dropdown-content {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 200px;\n}\n.selectize-control.single .selectize-input,\n.selectize-control.single .selectize-input input {\n  cursor: pointer;\n}\n.selectize-control.single .selectize-input.input-active,\n.selectize-control.single .selectize-input.input-active input {\n  cursor: text;\n}\n.selectize-control.single .selectize-input:after {\n  content: ' ';\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 5px 0 5px;\n  border-color: #808080 transparent transparent transparent;\n}\n.selectize-control.single .selectize-input.dropdown-active:after {\n  margin-top: -4px;\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent #808080 transparent;\n}\n.selectize-control.rtl.single .selectize-input:after {\n  left: 15px;\n  right: auto;\n}\n.selectize-control.rtl .selectize-input > input {\n  margin: 0 4px 0 -2px !important;\n}\n.selectize-control .selectize-input.disabled {\n  opacity: 0.5;\n  background-color: #fafafa;\n}\n", ""]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./selectize.bootstrap3.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./selectize.bootstrap3.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * selectize.bootstrap3.css (v0.12.1) - Bootstrap 3 Theme\n * Copyright (c) 2013–2015 Brian Reavis & contributors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this\n * file except in compliance with the License. You may obtain a copy of the License at:\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF\n * ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n *\n * @author Brian Reavis <brian@thirdroute.com>\n */\n.selectize-control.plugin-drag_drop.multi > .selectize-input > div.ui-sortable-placeholder {\n  visibility: visible !important;\n  background: #f2f2f2 !important;\n  background: rgba(0, 0, 0, 0.06) !important;\n  border: 0 none !important;\n  -webkit-box-shadow: inset 0 0 12px 4px #ffffff;\n  box-shadow: inset 0 0 12px 4px #ffffff;\n}\n.selectize-control.plugin-drag_drop .ui-sortable-placeholder::after {\n  content: '!';\n  visibility: hidden;\n}\n.selectize-control.plugin-drag_drop .ui-sortable-helper {\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.selectize-dropdown-header {\n  position: relative;\n  padding: 3px 12px;\n  border-bottom: 1px solid #d0d0d0;\n  background: #f8f8f8;\n  -webkit-border-radius: 4px 4px 0 0;\n  -moz-border-radius: 4px 4px 0 0;\n  border-radius: 4px 4px 0 0;\n}\n.selectize-dropdown-header-close {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  color: #333333;\n  opacity: 0.4;\n  margin-top: -12px;\n  line-height: 20px;\n  font-size: 20px !important;\n}\n.selectize-dropdown-header-close:hover {\n  color: #000000;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup {\n  border-right: 1px solid #f2f2f2;\n  border-top: 0 none;\n  float: left;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup:last-child {\n  border-right: 0 none;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup:before {\n  display: none;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup-header {\n  border-top: 0 none;\n}\n.selectize-control.plugin-remove_button [data-value] {\n  position: relative;\n  padding-right: 24px !important;\n}\n.selectize-control.plugin-remove_button [data-value] .remove {\n  z-index: 1;\n  /* fixes ie bug (see #392) */\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 17px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 12px;\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n  display: inline-block;\n  padding: 1px 0 0 0;\n  border-left: 1px solid rgba(0, 0, 0, 0);\n  -webkit-border-radius: 0 2px 2px 0;\n  -moz-border-radius: 0 2px 2px 0;\n  border-radius: 0 2px 2px 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.selectize-control.plugin-remove_button [data-value] .remove:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.selectize-control.plugin-remove_button [data-value].active .remove {\n  border-left-color: rgba(0, 0, 0, 0);\n}\n.selectize-control.plugin-remove_button .disabled [data-value] .remove:hover {\n  background: none;\n}\n.selectize-control.plugin-remove_button .disabled [data-value] .remove {\n  border-left-color: rgba(77, 77, 77, 0);\n}\n.selectize-control {\n  position: relative;\n}\n.selectize-dropdown,\n.selectize-input,\n.selectize-input input {\n  color: #333333;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 20px;\n  -webkit-font-smoothing: inherit;\n}\n.selectize-input,\n.selectize-control.single .selectize-input.input-active {\n  background: #ffffff;\n  cursor: text;\n  display: inline-block;\n}\n.selectize-input {\n  border: 1px solid #cccccc;\n  padding: 6px 12px;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n}\n.selectize-control.multi .selectize-input.has-items {\n  padding: 5px 12px 2px;\n}\n.selectize-input.full {\n  background-color: #ffffff;\n}\n.selectize-input.disabled,\n.selectize-input.disabled * {\n  cursor: default !important;\n}\n.selectize-input.focus {\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.selectize-input.dropdown-active {\n  -webkit-border-radius: 4px 4px 0 0;\n  -moz-border-radius: 4px 4px 0 0;\n  border-radius: 4px 4px 0 0;\n}\n.selectize-input > * {\n  vertical-align: baseline;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.selectize-control.multi .selectize-input > div {\n  cursor: pointer;\n  margin: 0 3px 3px 0;\n  padding: 1px 3px;\n  background: #efefef;\n  color: #333333;\n  border: 0 solid rgba(0, 0, 0, 0);\n}\n.selectize-control.multi .selectize-input > div.active {\n  background: #428bca;\n  color: #ffffff;\n  border: 0 solid rgba(0, 0, 0, 0);\n}\n.selectize-control.multi .selectize-input.disabled > div,\n.selectize-control.multi .selectize-input.disabled > div.active {\n  color: #808080;\n  background: #ffffff;\n  border: 0 solid rgba(77, 77, 77, 0);\n}\n.selectize-input > input {\n  display: inline-block !important;\n  padding: 0 !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  max-width: 100% !important;\n  margin: 0 !important;\n  text-indent: 0 !important;\n  border: 0 none !important;\n  background: none !important;\n  line-height: inherit !important;\n  -webkit-user-select: auto !important;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.selectize-input > input::-ms-clear {\n  display: none;\n}\n.selectize-input > input:focus {\n  outline: none !important;\n}\n.selectize-input::after {\n  content: ' ';\n  display: block;\n  clear: left;\n}\n.selectize-input.dropdown-active::before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  background: #ffffff;\n  height: 1px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.selectize-dropdown {\n  position: absolute;\n  z-index: 10;\n  border: 1px solid #d0d0d0;\n  background: #ffffff;\n  margin: -1px 0 0 0;\n  border-top: 0 none;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 0 0 4px 4px;\n  -moz-border-radius: 0 0 4px 4px;\n  border-radius: 0 0 4px 4px;\n}\n.selectize-dropdown [data-selectable] {\n  cursor: pointer;\n  overflow: hidden;\n}\n.selectize-dropdown [data-selectable] .highlight {\n  background: rgba(255, 237, 40, 0.4);\n  -webkit-border-radius: 1px;\n  -moz-border-radius: 1px;\n  border-radius: 1px;\n}\n.selectize-dropdown [data-selectable],\n.selectize-dropdown .optgroup-header {\n  padding: 3px 12px;\n}\n.selectize-dropdown .optgroup:first-child .optgroup-header {\n  border-top: 0 none;\n}\n.selectize-dropdown .optgroup-header {\n  color: #777777;\n  background: #ffffff;\n  cursor: default;\n}\n.selectize-dropdown .active {\n  background-color: #f5f5f5;\n  color: #262626;\n}\n.selectize-dropdown .active.create {\n  color: #262626;\n}\n.selectize-dropdown .create {\n  color: rgba(51, 51, 51, 0.5);\n}\n.selectize-dropdown-content {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 200px;\n}\n.selectize-control.single .selectize-input,\n.selectize-control.single .selectize-input input {\n  cursor: pointer;\n}\n.selectize-control.single .selectize-input.input-active,\n.selectize-control.single .selectize-input.input-active input {\n  cursor: text;\n}\n.selectize-control.single .selectize-input:after {\n  content: ' ';\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 17px;\n  margin-top: -3px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 5px 0 5px;\n  border-color: #333333 transparent transparent transparent;\n}\n.selectize-control.single .selectize-input.dropdown-active:after {\n  margin-top: -4px;\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent #333333 transparent;\n}\n.selectize-control.rtl.single .selectize-input:after {\n  left: 17px;\n  right: auto;\n}\n.selectize-control.rtl .selectize-input > input {\n  margin: 0 4px 0 -2px !important;\n}\n.selectize-control .selectize-input.disabled {\n  opacity: 0.5;\n  background-color: #ffffff;\n}\n.selectize-dropdown,\n.selectize-dropdown.form-control {\n  height: auto;\n  padding: 0;\n  margin: 2px 0 0 0;\n  z-index: 1000;\n  background: #ffffff;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n.selectize-dropdown .optgroup-header {\n  font-size: 12px;\n  line-height: 1.42857143;\n}\n.selectize-dropdown .optgroup:first-child:before {\n  display: none;\n}\n.selectize-dropdown .optgroup:before {\n  content: ' ';\n  display: block;\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n  margin-left: -12px;\n  margin-right: -12px;\n}\n.selectize-dropdown-content {\n  padding: 5px 0;\n}\n.selectize-dropdown-header {\n  padding: 6px 12px;\n}\n.selectize-input {\n  min-height: 34px;\n}\n.selectize-input.dropdown-active {\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n}\n.selectize-input.dropdown-active::before {\n  display: none;\n}\n.selectize-input.focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.has-error .selectize-input {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .selectize-input:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n.selectize-control.multi .selectize-input.has-items {\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.selectize-control.multi .selectize-input > div {\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.form-control.selectize-control {\n  padding: 0;\n  height: auto;\n  border: none;\n  background: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMzcyNDMyOThhOTAzNGRhODU1MSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vLy4vbGliL3NlbGVjdGl6ZS5qcy9kaXN0L2pzL3N0YW5kYWxvbmUvc2VsZWN0aXplLmpzIiwid2VicGFjazovLy8uL2xpYi9zZWxlY3RpemUuanMvZGlzdC9jc3Mvc2VsZWN0aXplLmNzcz9lM2Y3Iiwid2VicGFjazovLy8uL2xpYi9zZWxlY3RpemUuanMvZGlzdC9jc3Mvc2VsZWN0aXplLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2VsZWN0aXplLmpzL2Rpc3QvY3NzL3NlbGVjdGl6ZS5ib290c3RyYXAzLmNzcz9iYTkyIiwid2VicGFjazovLy8uL2xpYi9zZWxlY3RpemUuanMvZGlzdC9jc3Mvc2VsZWN0aXplLmJvb3RzdHJhcDMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7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RywwQkFBMEIsMEJBQTBCLGVBQWUsMkZBQTJGLG1GQUFtRixHQUFHLCtCQUErQiwwQkFBMEIsNkRBQTZELHFEQUFxRCxHQUFHLHFDQUFxQywwQkFBMEIsOEVBQThFLHNFQUFzRSxHQUFHLHVEQUF1RCxzQkFBc0IsdUJBQXVCLEdBQUcsbURBQW1ELCtCQUErQiw0QkFBNEIsdUJBQXVCLEdBQUcsbUNBQW1DLGVBQWUsaUJBQWlCLGlCQUFpQixxQkFBcUIsNkJBQTZCLHFCQUFxQiw2QkFBNkIsMEJBQTBCLHFCQUFxQixHQUFHOztBQUVyeFYiLCJmaWxlIjoicmVhY3Qtc2VsZWN0aXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU2VsZWN0aXplXCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNlbGVjdGl6ZVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzM3MjQzMjk4YTkwMzRkYTg1NTFcbiAqKi8iLCJpbXBvcnQgJy4vdmVyaWZ5JztcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBBZGQgc2VsZWN0aXplIHBsdWdpblxuaW1wb3J0ICcuLi9saWIvc2VsZWN0aXplLmpzL2Rpc3QvanMvc3RhbmRhbG9uZS9zZWxlY3RpemUnO1xuaW1wb3J0ICcuLi9saWIvc2VsZWN0aXplLmpzL2Rpc3QvY3NzL3NlbGVjdGl6ZS5jc3MnO1xuaW1wb3J0ICcuLi9saWIvc2VsZWN0aXplLmpzL2Rpc3QvY3NzL3NlbGVjdGl6ZS5ib290c3RyYXAzLmNzcyc7XG5cbmNsYXNzIFNlbGVjdGl6ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIG9wdGdyb3VwczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIG9wdGdyb3VwRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3B0Z3JvdXBMYWJlbEZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRcdG9wdGdyb3VwVmFsdWVGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbEZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBkaXNhYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcblxuICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8gSW52b2tlIG9uQ2hhbmdlXG4gICAgdmFyIGl0ZW0gPSB0aGlzLnByb3BzLm9wdGlvbnMuZmlsdGVyKChpKSA9PiBpW3RoaXMucHJvcHMudmFsdWVGaWVsZF0gPT0gZS50YXJnZXQudmFsdWUpWzBdO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLCBpdGVtKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBzZWwgPSB0aGlzLmNvbnRhaW5lciA9ICQoJzxzZWxlY3Q+PC9zZWxlY3Q+Jyk7XG4gICAgJChSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW91bnROb2RlKSkuYXBwZW5kKHNlbCk7XG4gICAgc2VsLnNlbGVjdGl6ZSh7XG4gICAgICBvcHRpb25zOiB0aGlzLnByb3BzLm9wdGlvbnMsXG5cdFx0XHRvcHRncm91cHM6IHRoaXMucHJvcHMub3B0Z3JvdXBzLFxuXHRcdFx0b3B0Z3JvdXBGaWVsZDogdGhpcy5wcm9wcy5vcHRncm91cEZpZWxkLFxuICAgICAgb3B0Z3JvdXBMYWJlbEZpZWxkOiB0aGlzLnByb3BzLm9wdGdyb3VwTGFiZWxGaWVsZCxcbiAgXHRcdG9wdGdyb3VwVmFsdWVGaWVsZDogdGhpcy5wcm9wcy5vcHRncm91cFZhbHVlRmllbGQsXG5cdFx0XHRsYWJlbEZpZWxkOiB0aGlzLnByb3BzLmxhYmVsRmllbGQsXG4gICAgICB2YWx1ZUZpZWxkOiB0aGlzLnByb3BzLnZhbHVlRmllbGQsXG5cdFx0XHRzZWFyY2hGaWVsZDogdGhpcy5wcm9wcy5zZWFyY2hGaWVsZFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RpemUgPSBzZWxbMF0uc2VsZWN0aXplO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RpemUuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIC8vIElmIGV4aXN0aW5nIHZhbHVlXG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0aXplLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byBldmVudHNcbiAgICBzZWwub24oJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVyc1xuICAgIHZhciBzZWwgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICBzZWwub2ZmKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSlcblxuICAgIC8vIFJlbW92ZSBjb21wb25lbnRcbiAgICAkKFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb3VudE5vZGUpKS5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShwcm9wcykge1xuXG4gICAgLy8gUmVsb2FkIG9wdGlvbnNcbiAgICBpZiAocHJvcHMub3B0aW9ucyAhPSB0aGlzLnByb3BzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc2VsZWN0aXplLmxvYWQoKGNiKSA9PiB7XG4gICAgICAgIGNiKHByb3BzLm9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGVkID09IHRydWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0aXplLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RpemUuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZXhpc3RpbmcgdmFsdWVcbiAgICBpZiAocHJvcHMudmFsdWUgIT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5zZWxlY3RpemUuZ2V0VmFsdWUoKTtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPSBwcm9wcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGl6ZS5zZXRWYWx1ZShwcm9wcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2lsbCBSZW1vdW50ID9cbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCBiZWNhdXNlIHNvbWV0aW1lcyBvcHRpb25zIGRvZXMgbm90IGdldCBjbGVhbmVkLFxuICAgIC8vIHRoaXMgd2F5IHRoZXkgd2lsbCBidXQgbWF5IG5vdCBiZSB0aGUgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0aXplLm9wdGlvbnMpLmxlbmd0aCAhPSBwcm9wcy5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJlbW91bnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHsgcmV0dXJuIDxkaXYgcmVmPVwibW91bnROb2RlXCI+PC9kaXY+IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5cbmlmICghalF1ZXJ5KSB0aHJvdyBFcnJvcihcImpRdWVyeSBoYXNuJ3QgYmVlbiBsb2FkZWRcIik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92ZXJpZnkuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogc2lmdGVyLmpzXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMgQnJpYW4gUmVhdmlzICYgY29udHJpYnV0b3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcbiAqIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuICogQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIEBhdXRob3IgQnJpYW4gUmVhdmlzIDxicmlhbkB0aGlyZHJvdXRlLmNvbT5cbiAqL1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKCdzaWZ0ZXInLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHRyb290LlNpZnRlciA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbigpIHtcblxuXHQvKipcblx0ICogVGV4dHVhbGx5IHNlYXJjaGVzIGFycmF5cyBhbmQgaGFzaGVzIG9mIG9iamVjdHNcblx0ICogYnkgcHJvcGVydHkgKG9yIG11bHRpcGxlIHByb3BlcnRpZXMpLiBEZXNpZ25lZFxuXHQgKiBzcGVjaWZpY2FsbHkgZm9yIGF1dG9jb21wbGV0ZS5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7YXJyYXl8b2JqZWN0fSBpdGVtc1xuXHQgKiBAcGFyYW0ge29iamVjdH0gaXRlbXNcblx0ICovXG5cdHZhciBTaWZ0ZXIgPSBmdW5jdGlvbihpdGVtcywgc2V0dGluZ3MpIHtcblx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzIHx8IHtkaWFjcml0aWNzOiB0cnVlfTtcblx0fTtcblxuXHQvKipcblx0ICogU3BsaXRzIGEgc2VhcmNoIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIGluZGl2aWR1YWxcblx0ICogcmVnZXhwcyB0byBiZSB1c2VkIHRvIG1hdGNoIHJlc3VsdHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuXHQgKiBAcmV0dXJucyB7YXJyYXl9XG5cdCAqL1xuXHRTaWZ0ZXIucHJvdG90eXBlLnRva2VuaXplID0gZnVuY3Rpb24ocXVlcnkpIHtcblx0XHRxdWVyeSA9IHRyaW0oU3RyaW5nKHF1ZXJ5IHx8ICcnKS50b0xvd2VyQ2FzZSgpKTtcblx0XHRpZiAoIXF1ZXJ5IHx8ICFxdWVyeS5sZW5ndGgpIHJldHVybiBbXTtcblxuXHRcdHZhciBpLCBuLCByZWdleCwgbGV0dGVyO1xuXHRcdHZhciB0b2tlbnMgPSBbXTtcblx0XHR2YXIgd29yZHMgPSBxdWVyeS5zcGxpdCgvICsvKTtcblxuXHRcdGZvciAoaSA9IDAsIG4gPSB3b3Jkcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdHJlZ2V4ID0gZXNjYXBlX3JlZ2V4KHdvcmRzW2ldKTtcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmRpYWNyaXRpY3MpIHtcblx0XHRcdFx0Zm9yIChsZXR0ZXIgaW4gRElBQ1JJVElDUykge1xuXHRcdFx0XHRcdGlmIChESUFDUklUSUNTLmhhc093blByb3BlcnR5KGxldHRlcikpIHtcblx0XHRcdFx0XHRcdHJlZ2V4ID0gcmVnZXgucmVwbGFjZShuZXcgUmVnRXhwKGxldHRlciwgJ2cnKSwgRElBQ1JJVElDU1tsZXR0ZXJdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0c3RyaW5nIDogd29yZHNbaV0sXG5cdFx0XHRcdHJlZ2V4ICA6IG5ldyBSZWdFeHAocmVnZXgsICdpJylcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbnM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEl0ZXJhdGVzIG92ZXIgYXJyYXlzIGFuZCBoYXNoZXMuXG5cdCAqXG5cdCAqIGBgYFxuXHQgKiB0aGlzLml0ZXJhdG9yKHRoaXMuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGlkKSB7XG5cdCAqICAgIC8vIGludm9rZWQgZm9yIGVhY2ggaXRlbVxuXHQgKiB9KTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIEBwYXJhbSB7YXJyYXl8b2JqZWN0fSBvYmplY3Rcblx0ICovXG5cdFNpZnRlci5wcm90b3R5cGUuaXRlcmF0b3IgPSBmdW5jdGlvbihvYmplY3QsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGl0ZXJhdG9yO1xuXHRcdGlmIChpc19hcnJheShvYmplY3QpKSB7XG5cdFx0XHRpdGVyYXRvciA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBuID0gdGhpcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHRjYWxsYmFjayh0aGlzW2ldLCBpLCB0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXRlcmF0b3IgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcykge1xuXHRcdFx0XHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKHRoaXNba2V5XSwga2V5LCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aXRlcmF0b3IuYXBwbHkob2JqZWN0LCBbY2FsbGJhY2tdKTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgdG8gc2NvcmUgaW5kaXZpZHVhbCByZXN1bHRzLlxuXHQgKlxuXHQgKiBHb29kIG1hdGNoZXMgd2lsbCBoYXZlIGEgaGlnaGVyIHNjb3JlIHRoYW4gcG9vciBtYXRjaGVzLlxuXHQgKiBJZiBhbiBpdGVtIGlzIG5vdCBhIG1hdGNoLCAwIHdpbGwgYmUgcmV0dXJuZWQgYnkgdGhlIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd9IHNlYXJjaFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAob3B0aW9uYWwpXG5cdCAqIEByZXR1cm5zIHtmdW5jdGlvbn1cblx0ICovXG5cdFNpZnRlci5wcm90b3R5cGUuZ2V0U2NvcmVGdW5jdGlvbiA9IGZ1bmN0aW9uKHNlYXJjaCwgb3B0aW9ucykge1xuXHRcdHZhciBzZWxmLCBmaWVsZHMsIHRva2VucywgdG9rZW5fY291bnQ7XG5cblx0XHRzZWxmICAgICAgICA9IHRoaXM7XG5cdFx0c2VhcmNoICAgICAgPSBzZWxmLnByZXBhcmVTZWFyY2goc2VhcmNoLCBvcHRpb25zKTtcblx0XHR0b2tlbnMgICAgICA9IHNlYXJjaC50b2tlbnM7XG5cdFx0ZmllbGRzICAgICAgPSBzZWFyY2gub3B0aW9ucy5maWVsZHM7XG5cdFx0dG9rZW5fY291bnQgPSB0b2tlbnMubGVuZ3RoO1xuXG5cdFx0LyoqXG5cdFx0ICogQ2FsY3VsYXRlcyBob3cgY2xvc2Ugb2YgYSBtYXRjaCB0aGVcblx0XHQgKiBnaXZlbiB2YWx1ZSBpcyBhZ2FpbnN0IGEgc2VhcmNoIHRva2VuLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gdmFsdWVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gdG9rZW5cblx0XHQgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dmFyIHNjb3JlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgdG9rZW4pIHtcblx0XHRcdHZhciBzY29yZSwgcG9zO1xuXG5cdFx0XHRpZiAoIXZhbHVlKSByZXR1cm4gMDtcblx0XHRcdHZhbHVlID0gU3RyaW5nKHZhbHVlIHx8ICcnKTtcblx0XHRcdHBvcyA9IHZhbHVlLnNlYXJjaCh0b2tlbi5yZWdleCk7XG5cdFx0XHRpZiAocG9zID09PSAtMSkgcmV0dXJuIDA7XG5cdFx0XHRzY29yZSA9IHRva2VuLnN0cmluZy5sZW5ndGggLyB2YWx1ZS5sZW5ndGg7XG5cdFx0XHRpZiAocG9zID09PSAwKSBzY29yZSArPSAwLjU7XG5cdFx0XHRyZXR1cm4gc2NvcmU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIENhbGN1bGF0ZXMgdGhlIHNjb3JlIG9mIGFuIG9iamVjdFxuXHRcdCAqIGFnYWluc3QgdGhlIHNlYXJjaCBxdWVyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSB0b2tlblxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdFx0ICogQHJldHVybiB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHZhciBzY29yZU9iamVjdCA9IChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBmaWVsZF9jb3VudCA9IGZpZWxkcy5sZW5ndGg7XG5cdFx0XHRpZiAoIWZpZWxkX2NvdW50KSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmllbGRfY291bnQgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHRva2VuLCBkYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNjb3JlVmFsdWUoZGF0YVtmaWVsZHNbMF1dLCB0b2tlbik7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24odG9rZW4sIGRhdGEpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIHN1bSA9IDA7IGkgPCBmaWVsZF9jb3VudDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtICs9IHNjb3JlVmFsdWUoZGF0YVtmaWVsZHNbaV1dLCB0b2tlbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHN1bSAvIGZpZWxkX2NvdW50O1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXG5cdFx0aWYgKCF0b2tlbl9jb3VudCkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblx0XHR9XG5cdFx0aWYgKHRva2VuX2NvdW50ID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRyZXR1cm4gc2NvcmVPYmplY3QodG9rZW5zWzBdLCBkYXRhKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKHNlYXJjaC5vcHRpb25zLmNvbmp1bmN0aW9uID09PSAnYW5kJykge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0dmFyIHNjb3JlO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgc3VtID0gMDsgaSA8IHRva2VuX2NvdW50OyBpKyspIHtcblx0XHRcdFx0XHRzY29yZSA9IHNjb3JlT2JqZWN0KHRva2Vuc1tpXSwgZGF0YSk7XG5cdFx0XHRcdFx0aWYgKHNjb3JlIDw9IDApIHJldHVybiAwO1xuXHRcdFx0XHRcdHN1bSArPSBzY29yZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc3VtIC8gdG9rZW5fY291bnQ7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgc3VtID0gMDsgaSA8IHRva2VuX2NvdW50OyBpKyspIHtcblx0XHRcdFx0XHRzdW0gKz0gc2NvcmVPYmplY3QodG9rZW5zW2ldLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc3VtIC8gdG9rZW5fY291bnQ7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB0d29cblx0ICogcmVzdWx0cywgZm9yIHNvcnRpbmcgcHVycG9zZXMuIElmIG5vIHNvcnRpbmcgc2hvdWxkXG5cdCAqIGJlIHBlcmZvcm1lZCwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gc2VhcmNoXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqIEByZXR1cm4gZnVuY3Rpb24oYSxiKVxuXHQgKi9cblx0U2lmdGVyLnByb3RvdHlwZS5nZXRTb3J0RnVuY3Rpb24gPSBmdW5jdGlvbihzZWFyY2gsIG9wdGlvbnMpIHtcblx0XHR2YXIgaSwgbiwgc2VsZiwgZmllbGQsIGZpZWxkcywgZmllbGRzX2NvdW50LCBtdWx0aXBsaWVyLCBtdWx0aXBsaWVycywgZ2V0X2ZpZWxkLCBpbXBsaWNpdF9zY29yZSwgc29ydDtcblxuXHRcdHNlbGYgICA9IHRoaXM7XG5cdFx0c2VhcmNoID0gc2VsZi5wcmVwYXJlU2VhcmNoKHNlYXJjaCwgb3B0aW9ucyk7XG5cdFx0c29ydCAgID0gKCFzZWFyY2gucXVlcnkgJiYgb3B0aW9ucy5zb3J0X2VtcHR5KSB8fCBvcHRpb25zLnNvcnQ7XG5cblx0XHQvKipcblx0XHQgKiBGZXRjaGVzIHRoZSBzcGVjaWZpZWQgc29ydCBmaWVsZCB2YWx1ZVxuXHRcdCAqIGZyb20gYSBzZWFyY2ggcmVzdWx0IGl0ZW0uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3VsdFxuXHRcdCAqIEByZXR1cm4ge21peGVkfVxuXHRcdCAqL1xuXHRcdGdldF9maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHJlc3VsdCkge1xuXHRcdFx0aWYgKG5hbWUgPT09ICckc2NvcmUnKSByZXR1cm4gcmVzdWx0LnNjb3JlO1xuXHRcdFx0cmV0dXJuIHNlbGYuaXRlbXNbcmVzdWx0LmlkXVtuYW1lXTtcblx0XHR9O1xuXG5cdFx0Ly8gcGFyc2Ugb3B0aW9uc1xuXHRcdGZpZWxkcyA9IFtdO1xuXHRcdGlmIChzb3J0KSB7XG5cdFx0XHRmb3IgKGkgPSAwLCBuID0gc29ydC5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0aWYgKHNlYXJjaC5xdWVyeSB8fCBzb3J0W2ldLmZpZWxkICE9PSAnJHNjb3JlJykge1xuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKHNvcnRbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gdGhlIFwiJHNjb3JlXCIgZmllbGQgaXMgaW1wbGllZCB0byBiZSB0aGUgcHJpbWFyeVxuXHRcdC8vIHNvcnQgZmllbGQsIHVubGVzcyBpdCdzIG1hbnVhbGx5IHNwZWNpZmllZFxuXHRcdGlmIChzZWFyY2gucXVlcnkpIHtcblx0XHRcdGltcGxpY2l0X3Njb3JlID0gdHJ1ZTtcblx0XHRcdGZvciAoaSA9IDAsIG4gPSBmaWVsZHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdGlmIChmaWVsZHNbaV0uZmllbGQgPT09ICckc2NvcmUnKSB7XG5cdFx0XHRcdFx0aW1wbGljaXRfc2NvcmUgPSBmYWxzZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGltcGxpY2l0X3Njb3JlKSB7XG5cdFx0XHRcdGZpZWxkcy51bnNoaWZ0KHtmaWVsZDogJyRzY29yZScsIGRpcmVjdGlvbjogJ2Rlc2MnfSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDAsIG4gPSBmaWVsZHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdGlmIChmaWVsZHNbaV0uZmllbGQgPT09ICckc2NvcmUnKSB7XG5cdFx0XHRcdFx0ZmllbGRzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG11bHRpcGxpZXJzID0gW107XG5cdFx0Zm9yIChpID0gMCwgbiA9IGZpZWxkcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdG11bHRpcGxpZXJzLnB1c2goZmllbGRzW2ldLmRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gLTEgOiAxKTtcblx0XHR9XG5cblx0XHQvLyBidWlsZCBmdW5jdGlvblxuXHRcdGZpZWxkc19jb3VudCA9IGZpZWxkcy5sZW5ndGg7XG5cdFx0aWYgKCFmaWVsZHNfY291bnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZWxzZSBpZiAoZmllbGRzX2NvdW50ID09PSAxKSB7XG5cdFx0XHRmaWVsZCA9IGZpZWxkc1swXS5maWVsZDtcblx0XHRcdG11bHRpcGxpZXIgPSBtdWx0aXBsaWVyc1swXTtcblx0XHRcdHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdHJldHVybiBtdWx0aXBsaWVyICogY21wKFxuXHRcdFx0XHRcdGdldF9maWVsZChmaWVsZCwgYSksXG5cdFx0XHRcdFx0Z2V0X2ZpZWxkKGZpZWxkLCBiKVxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0dmFyIGksIHJlc3VsdCwgYV92YWx1ZSwgYl92YWx1ZSwgZmllbGQ7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBmaWVsZHNfY291bnQ7IGkrKykge1xuXHRcdFx0XHRcdGZpZWxkID0gZmllbGRzW2ldLmZpZWxkO1xuXHRcdFx0XHRcdHJlc3VsdCA9IG11bHRpcGxpZXJzW2ldICogY21wKFxuXHRcdFx0XHRcdFx0Z2V0X2ZpZWxkKGZpZWxkLCBhKSxcblx0XHRcdFx0XHRcdGdldF9maWVsZChmaWVsZCwgYilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUGFyc2VzIGEgc2VhcmNoIHF1ZXJ5IGFuZCByZXR1cm5zIGFuIG9iamVjdFxuXHQgKiB3aXRoIHRva2VucyBhbmQgZmllbGRzIHJlYWR5IHRvIGJlIHBvcHVsYXRlZFxuXHQgKiB3aXRoIHJlc3VsdHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJucyB7b2JqZWN0fVxuXHQgKi9cblx0U2lmdGVyLnByb3RvdHlwZS5wcmVwYXJlU2VhcmNoID0gZnVuY3Rpb24ocXVlcnksIG9wdGlvbnMpIHtcblx0XHRpZiAodHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0JykgcmV0dXJuIHF1ZXJ5O1xuXG5cdFx0b3B0aW9ucyA9IGV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cblx0XHR2YXIgb3B0aW9uX2ZpZWxkcyAgICAgPSBvcHRpb25zLmZpZWxkcztcblx0XHR2YXIgb3B0aW9uX3NvcnQgICAgICAgPSBvcHRpb25zLnNvcnQ7XG5cdFx0dmFyIG9wdGlvbl9zb3J0X2VtcHR5ID0gb3B0aW9ucy5zb3J0X2VtcHR5O1xuXG5cdFx0aWYgKG9wdGlvbl9maWVsZHMgJiYgIWlzX2FycmF5KG9wdGlvbl9maWVsZHMpKSBvcHRpb25zLmZpZWxkcyA9IFtvcHRpb25fZmllbGRzXTtcblx0XHRpZiAob3B0aW9uX3NvcnQgJiYgIWlzX2FycmF5KG9wdGlvbl9zb3J0KSkgb3B0aW9ucy5zb3J0ID0gW29wdGlvbl9zb3J0XTtcblx0XHRpZiAob3B0aW9uX3NvcnRfZW1wdHkgJiYgIWlzX2FycmF5KG9wdGlvbl9zb3J0X2VtcHR5KSkgb3B0aW9ucy5zb3J0X2VtcHR5ID0gW29wdGlvbl9zb3J0X2VtcHR5XTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRvcHRpb25zIDogb3B0aW9ucyxcblx0XHRcdHF1ZXJ5ICAgOiBTdHJpbmcocXVlcnkgfHwgJycpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHR0b2tlbnMgIDogdGhpcy50b2tlbml6ZShxdWVyeSksXG5cdFx0XHR0b3RhbCAgIDogMCxcblx0XHRcdGl0ZW1zICAgOiBbXVxuXHRcdH07XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlYXJjaGVzIHRocm91Z2ggYWxsIGl0ZW1zIGFuZCByZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIG1hdGNoZXMuXG5cdCAqXG5cdCAqIFRoZSBgb3B0aW9uc2AgcGFyYW1ldGVyIGNhbiBjb250YWluOlxuXHQgKlxuXHQgKiAgIC0gZmllbGRzIHtzdHJpbmd8YXJyYXl9XG5cdCAqICAgLSBzb3J0IHthcnJheX1cblx0ICogICAtIHNjb3JlIHtmdW5jdGlvbn1cblx0ICogICAtIGZpbHRlciB7Ym9vbH1cblx0ICogICAtIGxpbWl0IHtpbnRlZ2VyfVxuXHQgKlxuXHQgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nOlxuXHQgKlxuXHQgKiAgIC0gb3B0aW9ucyB7b2JqZWN0fVxuXHQgKiAgIC0gcXVlcnkge3N0cmluZ31cblx0ICogICAtIHRva2VucyB7YXJyYXl9XG5cdCAqICAgLSB0b3RhbCB7aW50fVxuXHQgKiAgIC0gaXRlbXMge2FycmF5fVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybnMge29iamVjdH1cblx0ICovXG5cdFNpZnRlci5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24ocXVlcnksIG9wdGlvbnMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMsIHZhbHVlLCBzY29yZSwgc2VhcmNoLCBjYWxjdWxhdGVTY29yZTtcblx0XHR2YXIgZm5fc29ydDtcblx0XHR2YXIgZm5fc2NvcmU7XG5cblx0XHRzZWFyY2ggID0gdGhpcy5wcmVwYXJlU2VhcmNoKHF1ZXJ5LCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gc2VhcmNoLm9wdGlvbnM7XG5cdFx0cXVlcnkgICA9IHNlYXJjaC5xdWVyeTtcblxuXHRcdC8vIGdlbmVyYXRlIHJlc3VsdCBzY29yaW5nIGZ1bmN0aW9uXG5cdFx0Zm5fc2NvcmUgPSBvcHRpb25zLnNjb3JlIHx8IHNlbGYuZ2V0U2NvcmVGdW5jdGlvbihzZWFyY2gpO1xuXG5cdFx0Ly8gcGVyZm9ybSBzZWFyY2ggYW5kIHNvcnRcblx0XHRpZiAocXVlcnkubGVuZ3RoKSB7XG5cdFx0XHRzZWxmLml0ZXJhdG9yKHNlbGYuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGlkKSB7XG5cdFx0XHRcdHNjb3JlID0gZm5fc2NvcmUoaXRlbSk7XG5cdFx0XHRcdGlmIChvcHRpb25zLmZpbHRlciA9PT0gZmFsc2UgfHwgc2NvcmUgPiAwKSB7XG5cdFx0XHRcdFx0c2VhcmNoLml0ZW1zLnB1c2goeydzY29yZSc6IHNjb3JlLCAnaWQnOiBpZH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VsZi5pdGVyYXRvcihzZWxmLml0ZW1zLCBmdW5jdGlvbihpdGVtLCBpZCkge1xuXHRcdFx0XHRzZWFyY2guaXRlbXMucHVzaCh7J3Njb3JlJzogMSwgJ2lkJzogaWR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZuX3NvcnQgPSBzZWxmLmdldFNvcnRGdW5jdGlvbihzZWFyY2gsIG9wdGlvbnMpO1xuXHRcdGlmIChmbl9zb3J0KSBzZWFyY2guaXRlbXMuc29ydChmbl9zb3J0KTtcblxuXHRcdC8vIGFwcGx5IGxpbWl0c1xuXHRcdHNlYXJjaC50b3RhbCA9IHNlYXJjaC5pdGVtcy5sZW5ndGg7XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLmxpbWl0ID09PSAnbnVtYmVyJykge1xuXHRcdFx0c2VhcmNoLml0ZW1zID0gc2VhcmNoLml0ZW1zLnNsaWNlKDAsIG9wdGlvbnMubGltaXQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZWFyY2g7XG5cdH07XG5cblx0Ly8gdXRpbGl0aWVzXG5cdC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cblxuXHR2YXIgY21wID0gZnVuY3Rpb24oYSwgYikge1xuXHRcdGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKTtcblx0XHR9XG5cdFx0YSA9IGFzY2lpZm9sZChTdHJpbmcoYSB8fCAnJykpO1xuXHRcdGIgPSBhc2NpaWZvbGQoU3RyaW5nKGIgfHwgJycpKTtcblx0XHRpZiAoYSA+IGIpIHJldHVybiAxO1xuXHRcdGlmIChiID4gYSkgcmV0dXJuIC0xO1xuXHRcdHJldHVybiAwO1xuXHR9O1xuXG5cdHZhciBleHRlbmQgPSBmdW5jdGlvbihhLCBiKSB7XG5cdFx0dmFyIGksIG4sIGssIG9iamVjdDtcblx0XHRmb3IgKGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0b2JqZWN0ID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFvYmplY3QpIGNvbnRpbnVlO1xuXHRcdFx0Zm9yIChrIGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGspKSB7XG5cdFx0XHRcdFx0YVtrXSA9IG9iamVjdFtrXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYTtcblx0fTtcblxuXHR2YXIgdHJpbSA9IGZ1bmN0aW9uKHN0cikge1xuXHRcdHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoL15cXHMrfFxccyskfC9nLCAnJyk7XG5cdH07XG5cblx0dmFyIGVzY2FwZV9yZWdleCA9IGZ1bmN0aW9uKHN0cikge1xuXHRcdHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG5cdH07XG5cblx0dmFyIGlzX2FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCAoJCAmJiAkLmlzQXJyYXkpIHx8IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0fTtcblxuXHR2YXIgRElBQ1JJVElDUyA9IHtcblx0XHQnYSc6ICdbYcOAw4HDgsODw4TDhcOgw6HDosOjw6TDpcSAxIHEhcSEXScsXG5cdFx0J2MnOiAnW2PDh8OnxIfEhsSNxIxdJyxcblx0XHQnZCc6ICdbZMSRxJDEj8SOXScsXG5cdFx0J2UnOiAnW2XDiMOJw4rDi8Oow6nDqsOrxJvEmsSSxJPEmcSYXScsXG5cdFx0J2knOiAnW2nDjMONw47Dj8Osw63DrsOvxKrEq10nLFxuXHRcdCdsJzogJ1tsxYLFgV0nLFxuXHRcdCduJzogJ1tuw5HDscWIxYfFhMWDXScsXG5cdFx0J28nOiAnW2/DksOTw5TDlcOVw5bDmMOyw7PDtMO1w7bDuMWMxY1dJyxcblx0XHQncic6ICdbcsWZxZhdJyxcblx0XHQncyc6ICdbc8WgxaHFm8WaXScsXG5cdFx0J3QnOiAnW3TFpcWkXScsXG5cdFx0J3UnOiAnW3XDmcOaw5vDnMO5w7rDu8O8xa/FrsWqxatdJyxcblx0XHQneSc6ICdbecW4w7/DvcOdXScsXG5cdFx0J3onOiAnW3rFvcW+xbzFu8W6xbldJ1xuXHR9O1xuXG5cdHZhciBhc2NpaWZvbGQgPSAoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGksIG4sIGssIGNodW5rO1xuXHRcdHZhciBmb3JlaWdubGV0dGVycyA9ICcnO1xuXHRcdHZhciBsb29rdXAgPSB7fTtcblx0XHRmb3IgKGsgaW4gRElBQ1JJVElDUykge1xuXHRcdFx0aWYgKERJQUNSSVRJQ1MuaGFzT3duUHJvcGVydHkoaykpIHtcblx0XHRcdFx0Y2h1bmsgPSBESUFDUklUSUNTW2tdLnN1YnN0cmluZygyLCBESUFDUklUSUNTW2tdLmxlbmd0aCAtIDEpO1xuXHRcdFx0XHRmb3JlaWdubGV0dGVycyArPSBjaHVuaztcblx0XHRcdFx0Zm9yIChpID0gMCwgbiA9IGNodW5rLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdGxvb2t1cFtjaHVuay5jaGFyQXQoaSldID0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnWycgKyAgZm9yZWlnbmxldHRlcnMgKyAnXScsICdnJyk7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4cCwgZnVuY3Rpb24oZm9yZWlnbmxldHRlcikge1xuXHRcdFx0XHRyZXR1cm4gbG9va3VwW2ZvcmVpZ25sZXR0ZXJdO1xuXHRcdFx0fSkudG9Mb3dlckNhc2UoKTtcblx0XHR9O1xuXHR9KSgpO1xuXG5cblx0Ly8gZXhwb3J0XG5cdC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cblxuXHRyZXR1cm4gU2lmdGVyO1xufSkpO1xuXG5cblxuLyoqXG4gKiBtaWNyb3BsdWdpbi5qc1xuICogQ29weXJpZ2h0IChjKSAyMDEzIEJyaWFuIFJlYXZpcyAmIGNvbnRyaWJ1dG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4gKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0ZcbiAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBAYXV0aG9yIEJyaWFuIFJlYXZpcyA8YnJpYW5AdGhpcmRyb3V0ZS5jb20+XG4gKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZSgnbWljcm9wbHVnaW4nLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHRyb290Lk1pY3JvUGx1Z2luID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXHR2YXIgTWljcm9QbHVnaW4gPSB7fTtcblxuXHRNaWNyb1BsdWdpbi5taXhpbiA9IGZ1bmN0aW9uKEludGVyZmFjZSkge1xuXHRcdEludGVyZmFjZS5wbHVnaW5zID0ge307XG5cblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplcyB0aGUgbGlzdGVkIHBsdWdpbnMgKHdpdGggb3B0aW9ucykuXG5cdFx0ICogQWNjZXB0YWJsZSBmb3JtYXRzOlxuXHRcdCAqXG5cdFx0ICogTGlzdCAod2l0aG91dCBvcHRpb25zKTpcblx0XHQgKiAgIFsnYScsICdiJywgJ2MnXVxuXHRcdCAqXG5cdFx0ICogTGlzdCAod2l0aCBvcHRpb25zKTpcblx0XHQgKiAgIFt7J25hbWUnOiAnYScsIG9wdGlvbnM6IHt9fSwgeyduYW1lJzogJ2InLCBvcHRpb25zOiB7fX1dXG5cdFx0ICpcblx0XHQgKiBIYXNoICh3aXRoIG9wdGlvbnMpOlxuXHRcdCAqICAgeydhJzogeyAuLi4gfSwgJ2InOiB7IC4uLiB9LCAnYyc6IHsgLi4uIH19XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge21peGVkfSBwbHVnaW5zXG5cdFx0ICovXG5cdFx0SW50ZXJmYWNlLnByb3RvdHlwZS5pbml0aWFsaXplUGx1Z2lucyA9IGZ1bmN0aW9uKHBsdWdpbnMpIHtcblx0XHRcdHZhciBpLCBuLCBrZXk7XG5cdFx0XHR2YXIgc2VsZiAgPSB0aGlzO1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cblx0XHRcdHNlbGYucGx1Z2lucyA9IHtcblx0XHRcdFx0bmFtZXMgICAgIDogW10sXG5cdFx0XHRcdHNldHRpbmdzICA6IHt9LFxuXHRcdFx0XHRyZXF1ZXN0ZWQgOiB7fSxcblx0XHRcdFx0bG9hZGVkICAgIDoge31cblx0XHRcdH07XG5cblx0XHRcdGlmICh1dGlscy5pc0FycmF5KHBsdWdpbnMpKSB7XG5cdFx0XHRcdGZvciAoaSA9IDAsIG4gPSBwbHVnaW5zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcGx1Z2luc1tpXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHF1ZXVlLnB1c2gocGx1Z2luc1tpXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYucGx1Z2lucy5zZXR0aW5nc1twbHVnaW5zW2ldLm5hbWVdID0gcGx1Z2luc1tpXS5vcHRpb25zO1xuXHRcdFx0XHRcdFx0cXVldWUucHVzaChwbHVnaW5zW2ldLm5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChwbHVnaW5zKSB7XG5cdFx0XHRcdGZvciAoa2V5IGluIHBsdWdpbnMpIHtcblx0XHRcdFx0XHRpZiAocGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnBsdWdpbnMuc2V0dGluZ3Nba2V5XSA9IHBsdWdpbnNba2V5XTtcblx0XHRcdFx0XHRcdHF1ZXVlLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0XHRzZWxmLnJlcXVpcmUocXVldWUuc2hpZnQoKSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdEludGVyZmFjZS5wcm90b3R5cGUubG9hZFBsdWdpbiA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRcdHZhciBzZWxmICAgID0gdGhpcztcblx0XHRcdHZhciBwbHVnaW5zID0gc2VsZi5wbHVnaW5zO1xuXHRcdFx0dmFyIHBsdWdpbiAgPSBJbnRlcmZhY2UucGx1Z2luc1tuYW1lXTtcblxuXHRcdFx0aWYgKCFJbnRlcmZhY2UucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIFwiJyArICBuYW1lICsgJ1wiIHBsdWdpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHRwbHVnaW5zLnJlcXVlc3RlZFtuYW1lXSA9IHRydWU7XG5cdFx0XHRwbHVnaW5zLmxvYWRlZFtuYW1lXSA9IHBsdWdpbi5mbi5hcHBseShzZWxmLCBbc2VsZi5wbHVnaW5zLnNldHRpbmdzW25hbWVdIHx8IHt9XSk7XG5cdFx0XHRwbHVnaW5zLm5hbWVzLnB1c2gobmFtZSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemVzIGEgcGx1Z2luLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0XHQgKi9cblx0XHRJbnRlcmZhY2UucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgcGx1Z2lucyA9IHNlbGYucGx1Z2lucztcblxuXHRcdFx0aWYgKCFzZWxmLnBsdWdpbnMubG9hZGVkLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0XHRcdGlmIChwbHVnaW5zLnJlcXVlc3RlZFtuYW1lXSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignUGx1Z2luIGhhcyBjaXJjdWxhciBkZXBlbmRlbmN5IChcIicgKyBuYW1lICsgJ1wiKScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYubG9hZFBsdWdpbihuYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHBsdWdpbnMubG9hZGVkW25hbWVdO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZWdpc3RlcnMgYSBwbHVnaW4uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG5cdFx0ICovXG5cdFx0SW50ZXJmYWNlLmRlZmluZSA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG5cdFx0XHRJbnRlcmZhY2UucGx1Z2luc1tuYW1lXSA9IHtcblx0XHRcdFx0J25hbWUnIDogbmFtZSxcblx0XHRcdFx0J2ZuJyAgIDogZm5cblx0XHRcdH07XG5cdFx0fTtcblx0fTtcblxuXHR2YXIgdXRpbHMgPSB7XG5cdFx0aXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2QXJnKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZBcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gTWljcm9QbHVnaW47XG59KSk7XG5cbi8qKlxuICogc2VsZWN0aXplLmpzICh2MC4xMi4xKVxuICogQ29weXJpZ2h0IChjKSAyMDEz4oCTMjAxNSBCcmlhbiBSZWF2aXMgJiBjb250cmlidXRvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuICogZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GXG4gKiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogQGF1dGhvciBCcmlhbiBSZWF2aXMgPGJyaWFuQHRoaXJkcm91dGUuY29tPlxuICovXG5cbi8qanNoaW50IGN1cmx5OmZhbHNlICovXG4vKmpzaGludCBicm93c2VyOnRydWUgKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZSgnc2VsZWN0aXplJywgWydqcXVlcnknLCdzaWZ0ZXInLCdtaWNyb3BsdWdpbiddLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ3NpZnRlcicpLCByZXF1aXJlKCdtaWNyb3BsdWdpbicpKTtcblx0fSBlbHNlIHtcblx0XHRyb290LlNlbGVjdGl6ZSA9IGZhY3Rvcnkocm9vdC5qUXVlcnksIHJvb3QuU2lmdGVyLCByb290Lk1pY3JvUGx1Z2luKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbigkLCBTaWZ0ZXIsIE1pY3JvUGx1Z2luKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGlnaGxpZ2h0ID0gZnVuY3Rpb24oJGVsZW1lbnQsIHBhdHRlcm4pIHtcblx0XHRpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnICYmICFwYXR0ZXJuLmxlbmd0aCkgcmV0dXJuO1xuXHRcdHZhciByZWdleCA9ICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpID8gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnaScpIDogcGF0dGVybjtcblx0XG5cdFx0dmFyIGhpZ2hsaWdodCA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRcdHZhciBza2lwID0gMDtcblx0XHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRcdHZhciBwb3MgPSBub2RlLmRhdGEuc2VhcmNoKHJlZ2V4KTtcblx0XHRcdFx0aWYgKHBvcyA+PSAwICYmIG5vZGUuZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dmFyIG1hdGNoID0gbm9kZS5kYXRhLm1hdGNoKHJlZ2V4KTtcblx0XHRcdFx0XHR2YXIgc3Bhbm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0c3Bhbm5vZGUuY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCc7XG5cdFx0XHRcdFx0dmFyIG1pZGRsZWJpdCA9IG5vZGUuc3BsaXRUZXh0KHBvcyk7XG5cdFx0XHRcdFx0dmFyIGVuZGJpdCA9IG1pZGRsZWJpdC5zcGxpdFRleHQobWF0Y2hbMF0ubGVuZ3RoKTtcblx0XHRcdFx0XHR2YXIgbWlkZGxlY2xvbmUgPSBtaWRkbGViaXQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0XHRcdHNwYW5ub2RlLmFwcGVuZENoaWxkKG1pZGRsZWNsb25lKTtcblx0XHRcdFx0XHRtaWRkbGViaXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc3Bhbm5vZGUsIG1pZGRsZWJpdCk7XG5cdFx0XHRcdFx0c2tpcCA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBub2RlLmNoaWxkTm9kZXMgJiYgIS8oc2NyaXB0fHN0eWxlKS9pLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdGkgKz0gaGlnaGxpZ2h0KG5vZGUuY2hpbGROb2Rlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBza2lwO1xuXHRcdH07XG5cdFxuXHRcdHJldHVybiAkZWxlbWVudC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aGlnaGxpZ2h0KHRoaXMpO1xuXHRcdH0pO1xuXHR9O1xuXHRcblx0dmFyIE1pY3JvRXZlbnQgPSBmdW5jdGlvbigpIHt9O1xuXHRNaWNyb0V2ZW50LnByb3RvdHlwZSA9IHtcblx0XHRvbjogZnVuY3Rpb24oZXZlbnQsIGZjdCl7XG5cdFx0XHR0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG5cdFx0XHR0aGlzLl9ldmVudHNbZXZlbnRdID0gdGhpcy5fZXZlbnRzW2V2ZW50XSB8fCBbXTtcblx0XHRcdHRoaXMuX2V2ZW50c1tldmVudF0ucHVzaChmY3QpO1xuXHRcdH0sXG5cdFx0b2ZmOiBmdW5jdGlvbihldmVudCwgZmN0KXtcblx0XHRcdHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdGlmIChuID09PSAwKSByZXR1cm4gZGVsZXRlIHRoaXMuX2V2ZW50cztcblx0XHRcdGlmIChuID09PSAxKSByZXR1cm4gZGVsZXRlIHRoaXMuX2V2ZW50c1tldmVudF07XG5cdFxuXHRcdFx0dGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuXHRcdFx0aWYgKGV2ZW50IGluIHRoaXMuX2V2ZW50cyA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdHRoaXMuX2V2ZW50c1tldmVudF0uc3BsaWNlKHRoaXMuX2V2ZW50c1tldmVudF0uaW5kZXhPZihmY3QpLCAxKTtcblx0XHR9LFxuXHRcdHRyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50IC8qICwgYXJncy4uLiAqLyl7XG5cdFx0XHR0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG5cdFx0XHRpZiAoZXZlbnQgaW4gdGhpcy5fZXZlbnRzID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9ldmVudHNbZXZlbnRdLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0dGhpcy5fZXZlbnRzW2V2ZW50XVtpXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdFxuXHQvKipcblx0ICogTWl4aW4gd2lsbCBkZWxlZ2F0ZSBhbGwgTWljcm9FdmVudC5qcyBmdW5jdGlvbiBpbiB0aGUgZGVzdGluYXRpb24gb2JqZWN0LlxuXHQgKlxuXHQgKiAtIE1pY3JvRXZlbnQubWl4aW4oRm9vYmFyKSB3aWxsIG1ha2UgRm9vYmFyIGFibGUgdG8gdXNlIE1pY3JvRXZlbnRcblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IHRoZSBvYmplY3Qgd2hpY2ggd2lsbCBzdXBwb3J0IE1pY3JvRXZlbnRcblx0ICovXG5cdE1pY3JvRXZlbnQubWl4aW4gPSBmdW5jdGlvbihkZXN0T2JqZWN0KXtcblx0XHR2YXIgcHJvcHMgPSBbJ29uJywgJ29mZicsICd0cmlnZ2VyJ107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRkZXN0T2JqZWN0LnByb3RvdHlwZVtwcm9wc1tpXV0gPSBNaWNyb0V2ZW50LnByb3RvdHlwZVtwcm9wc1tpXV07XG5cdFx0fVxuXHR9O1xuXHRcblx0dmFyIElTX01BQyAgICAgICAgPSAvTWFjLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXHRcblx0dmFyIEtFWV9BICAgICAgICAgPSA2NTtcblx0dmFyIEtFWV9DT01NQSAgICAgPSAxODg7XG5cdHZhciBLRVlfUkVUVVJOICAgID0gMTM7XG5cdHZhciBLRVlfRVNDICAgICAgID0gMjc7XG5cdHZhciBLRVlfTEVGVCAgICAgID0gMzc7XG5cdHZhciBLRVlfVVAgICAgICAgID0gMzg7XG5cdHZhciBLRVlfUCAgICAgICAgID0gODA7XG5cdHZhciBLRVlfUklHSFQgICAgID0gMzk7XG5cdHZhciBLRVlfRE9XTiAgICAgID0gNDA7XG5cdHZhciBLRVlfTiAgICAgICAgID0gNzg7XG5cdHZhciBLRVlfQkFDS1NQQUNFID0gODtcblx0dmFyIEtFWV9ERUxFVEUgICAgPSA0Njtcblx0dmFyIEtFWV9TSElGVCAgICAgPSAxNjtcblx0dmFyIEtFWV9DTUQgICAgICAgPSBJU19NQUMgPyA5MSA6IDE3O1xuXHR2YXIgS0VZX0NUUkwgICAgICA9IElTX01BQyA/IDE4IDogMTc7XG5cdHZhciBLRVlfVEFCICAgICAgID0gOTtcblx0XG5cdHZhciBUQUdfU0VMRUNUICAgID0gMTtcblx0dmFyIFRBR19JTlBVVCAgICAgPSAyO1xuXHRcblx0Ly8gZm9yIG5vdywgYW5kcm9pZCBzdXBwb3J0IGluIGdlbmVyYWwgaXMgdG9vIHNwb3R0eSB0byBzdXBwb3J0IHZhbGlkaXR5XG5cdHZhciBTVVBQT1JUU19WQUxJRElUWV9BUEkgPSAhL2FuZHJvaWQvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKS52YWxpZGl0eTtcblx0XG5cdHZhciBpc3NldCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRcdHJldHVybiB0eXBlb2Ygb2JqZWN0ICE9PSAndW5kZWZpbmVkJztcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHNjYWxhciB0byBpdHMgYmVzdCBzdHJpbmcgcmVwcmVzZW50YXRpb25cblx0ICogZm9yIGhhc2gga2V5cyBhbmQgSFRNTCBhdHRyaWJ1dGUgdmFsdWVzLlxuXHQgKlxuXHQgKiBUcmFuc2Zvcm1hdGlvbnM6XG5cdCAqICAgJ3N0cicgICAgIC0+ICdzdHInXG5cdCAqICAgbnVsbCAgICAgIC0+ICcnXG5cdCAqICAgdW5kZWZpbmVkIC0+ICcnXG5cdCAqICAgdHJ1ZSAgICAgIC0+ICcxJ1xuXHQgKiAgIGZhbHNlICAgICAtPiAnMCdcblx0ICogICAwICAgICAgICAgLT4gJzAnXG5cdCAqICAgMSAgICAgICAgIC0+ICcxJ1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0ICogQHJldHVybnMge3N0cmluZ3xudWxsfVxuXHQgKi9cblx0dmFyIGhhc2hfa2V5ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gdmFsdWUgPyAnMScgOiAnMCc7XG5cdFx0cmV0dXJuIHZhbHVlICsgJyc7XG5cdH07XG5cdFxuXHQvKipcblx0ICogRXNjYXBlcyBhIHN0cmluZyBmb3IgdXNlIHdpdGhpbiBIVE1MLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgZXNjYXBlX2h0bWwgPSBmdW5jdGlvbihzdHIpIHtcblx0XHRyZXR1cm4gKHN0ciArICcnKVxuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdH07XG5cdFxuXHQvKipcblx0ICogRXNjYXBlcyBcIiRcIiBjaGFyYWN0ZXJzIGluIHJlcGxhY2VtZW50IHN0cmluZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHZhciBlc2NhcGVfcmVwbGFjZSA9IGZ1bmN0aW9uKHN0cikge1xuXHRcdHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpO1xuXHR9O1xuXHRcblx0dmFyIGhvb2sgPSB7fTtcblx0XG5cdC8qKlxuXHQgKiBXcmFwcyBgbWV0aG9kYCBvbiBgc2VsZmAgc28gdGhhdCBgZm5gXG5cdCAqIGlzIGludm9rZWQgYmVmb3JlIHRoZSBvcmlnaW5hbCBtZXRob2QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzZWxmXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2Rcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cblx0ICovXG5cdGhvb2suYmVmb3JlID0gZnVuY3Rpb24oc2VsZiwgbWV0aG9kLCBmbikge1xuXHRcdHZhciBvcmlnaW5hbCA9IHNlbGZbbWV0aG9kXTtcblx0XHRzZWxmW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdGZuLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gb3JpZ2luYWwuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHR9O1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIFdyYXBzIGBtZXRob2RgIG9uIGBzZWxmYCBzbyB0aGF0IGBmbmBcblx0ICogaXMgaW52b2tlZCBhZnRlciB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gc2VsZlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG5cdCAqL1xuXHRob29rLmFmdGVyID0gZnVuY3Rpb24oc2VsZiwgbWV0aG9kLCBmbikge1xuXHRcdHZhciBvcmlnaW5hbCA9IHNlbGZbbWV0aG9kXTtcblx0XHRzZWxmW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuXHRcdFx0Zm4uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBXcmFwcyBgZm5gIHNvIHRoYXQgaXQgY2FuIG9ubHkgYmUgaW52b2tlZCBvbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG5cdCAqL1xuXHR2YXIgb25jZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIGNhbGxlZCA9IGZhbHNlO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChjYWxsZWQpIHJldHVybjtcblx0XHRcdGNhbGxlZCA9IHRydWU7XG5cdFx0XHRmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH07XG5cdH07XG5cdFxuXHQvKipcblx0ICogV3JhcHMgYGZuYCBzbyB0aGF0IGl0IGNhbiBvbmx5IGJlIGNhbGxlZCBvbmNlXG5cdCAqIGV2ZXJ5IGBkZWxheWAgbWlsbGlzZWNvbmRzIChpbnZva2VkIG9uIHRoZSBmYWxsaW5nIGVkZ2UpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuXHQgKiBAcGFyYW0ge2ludH0gZGVsYXlcblx0ICogQHJldHVybnMge2Z1bmN0aW9ufVxuXHQgKi9cblx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG5cdFx0dmFyIHRpbWVvdXQ7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0dGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHRcdH0sIGRlbGF5KTtcblx0XHR9O1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIGFsbCBmaXJlZCBldmVudHMgdHlwZXMgbGlzdGVkIGluIGB0eXBlc2Bcblx0ICogd2hpbGUgZXhlY3V0aW5nIHRoZSBwcm92aWRlZCBgZm5gLlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gc2VsZlxuXHQgKiBAcGFyYW0ge2FycmF5fSB0eXBlc1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuXHQgKi9cblx0dmFyIGRlYm91bmNlX2V2ZW50cyA9IGZ1bmN0aW9uKHNlbGYsIHR5cGVzLCBmbikge1xuXHRcdHZhciB0eXBlO1xuXHRcdHZhciB0cmlnZ2VyID0gc2VsZi50cmlnZ2VyO1xuXHRcdHZhciBldmVudF9hcmdzID0ge307XG5cdFxuXHRcdC8vIG92ZXJyaWRlIHRyaWdnZXIgbWV0aG9kXG5cdFx0c2VsZi50cmlnZ2VyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IGFyZ3VtZW50c1swXTtcblx0XHRcdGlmICh0eXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuXHRcdFx0XHRldmVudF9hcmdzW3R5cGVdID0gYXJndW1lbnRzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRyaWdnZXIuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcblx0XHQvLyBpbnZva2UgcHJvdmlkZWQgZnVuY3Rpb25cblx0XHRmbi5hcHBseShzZWxmLCBbXSk7XG5cdFx0c2VsZi50cmlnZ2VyID0gdHJpZ2dlcjtcblx0XG5cdFx0Ly8gdHJpZ2dlciBxdWV1ZWQgZXZlbnRzXG5cdFx0Zm9yICh0eXBlIGluIGV2ZW50X2FyZ3MpIHtcblx0XHRcdGlmIChldmVudF9hcmdzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG5cdFx0XHRcdHRyaWdnZXIuYXBwbHkoc2VsZiwgZXZlbnRfYXJnc1t0eXBlXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRcblx0LyoqXG5cdCAqIEEgd29ya2Fyb3VuZCBmb3IgaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvNjY5NlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gJHBhcmVudCAtIFBhcmVudCBlbGVtZW50IHRvIGxpc3RlbiBvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gRXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRGVzY2VuZGFudCBzZWxlY3RvciB0byBmaWx0ZXIgYnkuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gRXZlbnQgaGFuZGxlci5cblx0ICovXG5cdHZhciB3YXRjaENoaWxkRXZlbnQgPSBmdW5jdGlvbigkcGFyZW50LCBldmVudCwgc2VsZWN0b3IsIGZuKSB7XG5cdFx0JHBhcmVudC5vbihldmVudCwgc2VsZWN0b3IsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBjaGlsZCA9IGUudGFyZ2V0O1xuXHRcdFx0d2hpbGUgKGNoaWxkICYmIGNoaWxkLnBhcmVudE5vZGUgIT09ICRwYXJlbnRbMF0pIHtcblx0XHRcdFx0Y2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdFx0ZS5jdXJyZW50VGFyZ2V0ID0gY2hpbGQ7XG5cdFx0XHRyZXR1cm4gZm4uYXBwbHkodGhpcywgW2VdKTtcblx0XHR9KTtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB3aXRoaW4gYSB0ZXh0IGlucHV0IGNvbnRyb2wuXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmc6XG5cdCAqICAgLSBzdGFydFxuXHQgKiAgIC0gbGVuZ3RoXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fVxuXHQgKi9cblx0dmFyIGdldFNlbGVjdGlvbiA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGlmICgnc2VsZWN0aW9uU3RhcnQnIGluIGlucHV0KSB7XG5cdFx0XHRyZXN1bHQuc3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcblx0XHRcdHJlc3VsdC5sZW5ndGggPSBpbnB1dC5zZWxlY3Rpb25FbmQgLSByZXN1bHQuc3RhcnQ7XG5cdFx0fSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcblx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0XHR2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG5cdFx0XHR2YXIgc2VsTGVuID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dC5sZW5ndGg7XG5cdFx0XHRzZWwubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcblx0XHRcdHJlc3VsdC5zdGFydCA9IHNlbC50ZXh0Lmxlbmd0aCAtIHNlbExlbjtcblx0XHRcdHJlc3VsdC5sZW5ndGggPSBzZWxMZW47XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdFxuXHQvKipcblx0ICogQ29waWVzIENTUyBwcm9wZXJ0aWVzIGZyb20gb25lIGVsZW1lbnQgdG8gYW5vdGhlci5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9ICRmcm9tXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSAkdG9cblx0ICogQHBhcmFtIHthcnJheX0gcHJvcGVydGllc1xuXHQgKi9cblx0dmFyIHRyYW5zZmVyU3R5bGVzID0gZnVuY3Rpb24oJGZyb20sICR0bywgcHJvcGVydGllcykge1xuXHRcdHZhciBpLCBuLCBzdHlsZXMgPSB7fTtcblx0XHRpZiAocHJvcGVydGllcykge1xuXHRcdFx0Zm9yIChpID0gMCwgbiA9IHByb3BlcnRpZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdHN0eWxlc1twcm9wZXJ0aWVzW2ldXSA9ICRmcm9tLmNzcyhwcm9wZXJ0aWVzW2ldKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVzID0gJGZyb20uY3NzKCk7XG5cdFx0fVxuXHRcdCR0by5jc3Moc3R5bGVzKTtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBNZWFzdXJlcyB0aGUgd2lkdGggb2YgYSBzdHJpbmcgd2l0aGluIGFcblx0ICogcGFyZW50IGVsZW1lbnQgKGluIHBpeGVscykuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICogQHBhcmFtIHtvYmplY3R9ICRwYXJlbnRcblx0ICogQHJldHVybnMge2ludH1cblx0ICovXG5cdHZhciBtZWFzdXJlU3RyaW5nID0gZnVuY3Rpb24oc3RyLCAkcGFyZW50KSB7XG5cdFx0aWYgKCFzdHIpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XG5cdFx0dmFyICR0ZXN0ID0gJCgnPHRlc3Q+JykuY3NzKHtcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0dG9wOiAtOTk5OTksXG5cdFx0XHRsZWZ0OiAtOTk5OTksXG5cdFx0XHR3aWR0aDogJ2F1dG8nLFxuXHRcdFx0cGFkZGluZzogMCxcblx0XHRcdHdoaXRlU3BhY2U6ICdwcmUnXG5cdFx0fSkudGV4dChzdHIpLmFwcGVuZFRvKCdib2R5Jyk7XG5cdFxuXHRcdHRyYW5zZmVyU3R5bGVzKCRwYXJlbnQsICR0ZXN0LCBbXG5cdFx0XHQnbGV0dGVyU3BhY2luZycsXG5cdFx0XHQnZm9udFNpemUnLFxuXHRcdFx0J2ZvbnRGYW1pbHknLFxuXHRcdFx0J2ZvbnRXZWlnaHQnLFxuXHRcdFx0J3RleHRUcmFuc2Zvcm0nXG5cdFx0XSk7XG5cdFxuXHRcdHZhciB3aWR0aCA9ICR0ZXN0LndpZHRoKCk7XG5cdFx0JHRlc3QucmVtb3ZlKCk7XG5cdFxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBTZXRzIHVwIGFuIGlucHV0IHRvIGdyb3cgaG9yaXpvbnRhbGx5IGFzIHRoZSB1c2VyXG5cdCAqIHR5cGVzLiBJZiB0aGUgdmFsdWUgaXMgY2hhbmdlZCBtYW51YWxseSwgeW91IGNhblxuXHQgKiB0cmlnZ2VyIHRoZSBcInVwZGF0ZVwiIGhhbmRsZXIgdG8gcmVzaXplOlxuXHQgKlxuXHQgKiAkaW5wdXQudHJpZ2dlcigndXBkYXRlJyk7XG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSAkaW5wdXRcblx0ICovXG5cdHZhciBhdXRvR3JvdyA9IGZ1bmN0aW9uKCRpbnB1dCkge1xuXHRcdHZhciBjdXJyZW50V2lkdGggPSBudWxsO1xuXHRcblx0XHR2YXIgdXBkYXRlID0gZnVuY3Rpb24oZSwgb3B0aW9ucykge1xuXHRcdFx0dmFyIHZhbHVlLCBrZXlDb2RlLCBwcmludGFibGUsIHBsYWNlaG9sZGVyLCB3aWR0aDtcblx0XHRcdHZhciBzaGlmdCwgY2hhcmFjdGVyLCBzZWxlY3Rpb247XG5cdFx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQgfHwge307XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XG5cdFx0XHRpZiAoZS5tZXRhS2V5IHx8IGUuYWx0S2V5KSByZXR1cm47XG5cdFx0XHRpZiAoIW9wdGlvbnMuZm9yY2UgJiYgJGlucHV0LmRhdGEoJ2dyb3cnKSA9PT0gZmFsc2UpIHJldHVybjtcblx0XG5cdFx0XHR2YWx1ZSA9ICRpbnB1dC52YWwoKTtcblx0XHRcdGlmIChlLnR5cGUgJiYgZS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdrZXlkb3duJykge1xuXHRcdFx0XHRrZXlDb2RlID0gZS5rZXlDb2RlO1xuXHRcdFx0XHRwcmludGFibGUgPSAoXG5cdFx0XHRcdFx0KGtleUNvZGUgPj0gOTcgJiYga2V5Q29kZSA8PSAxMjIpIHx8IC8vIGEtelxuXHRcdFx0XHRcdChrZXlDb2RlID49IDY1ICYmIGtleUNvZGUgPD0gOTApICB8fCAvLyBBLVpcblx0XHRcdFx0XHQoa2V5Q29kZSA+PSA0OCAmJiBrZXlDb2RlIDw9IDU3KSAgfHwgLy8gMC05XG5cdFx0XHRcdFx0a2V5Q29kZSA9PT0gMzIgLy8gc3BhY2Vcblx0XHRcdFx0KTtcblx0XG5cdFx0XHRcdGlmIChrZXlDb2RlID09PSBLRVlfREVMRVRFIHx8IGtleUNvZGUgPT09IEtFWV9CQUNLU1BBQ0UpIHtcblx0XHRcdFx0XHRzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oJGlucHV0WzBdKTtcblx0XHRcdFx0XHRpZiAoc2VsZWN0aW9uLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLnN0YXJ0KSArIHZhbHVlLnN1YnN0cmluZyhzZWxlY3Rpb24uc3RhcnQgKyBzZWxlY3Rpb24ubGVuZ3RoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleUNvZGUgPT09IEtFWV9CQUNLU1BBQ0UgJiYgc2VsZWN0aW9uLnN0YXJ0KSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uc3RhcnQgLSAxKSArIHZhbHVlLnN1YnN0cmluZyhzZWxlY3Rpb24uc3RhcnQgKyAxKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleUNvZGUgPT09IEtFWV9ERUxFVEUgJiYgdHlwZW9mIHNlbGVjdGlvbi5zdGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5zdGFydCkgKyB2YWx1ZS5zdWJzdHJpbmcoc2VsZWN0aW9uLnN0YXJ0ICsgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHByaW50YWJsZSkge1xuXHRcdFx0XHRcdHNoaWZ0ID0gZS5zaGlmdEtleTtcblx0XHRcdFx0XHRjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSk7XG5cdFx0XHRcdFx0aWYgKHNoaWZ0KSBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0XHRlbHNlIGNoYXJhY3RlciA9IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdHZhbHVlICs9IGNoYXJhY3Rlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdHBsYWNlaG9sZGVyID0gJGlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJyk7XG5cdFx0XHRpZiAoIXZhbHVlICYmIHBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdHZhbHVlID0gcGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cdFxuXHRcdFx0d2lkdGggPSBtZWFzdXJlU3RyaW5nKHZhbHVlLCAkaW5wdXQpICsgNDtcblx0XHRcdGlmICh3aWR0aCAhPT0gY3VycmVudFdpZHRoKSB7XG5cdFx0XHRcdGN1cnJlbnRXaWR0aCA9IHdpZHRoO1xuXHRcdFx0XHQkaW5wdXQud2lkdGgod2lkdGgpO1xuXHRcdFx0XHQkaW5wdXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZScpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFxuXHRcdCRpbnB1dC5vbigna2V5ZG93biBrZXl1cCB1cGRhdGUgYmx1cicsIHVwZGF0ZSk7XG5cdFx0dXBkYXRlKCk7XG5cdH07XG5cdFxuXHR2YXIgU2VsZWN0aXplID0gZnVuY3Rpb24oJGlucHV0LCBzZXR0aW5ncykge1xuXHRcdHZhciBrZXksIGksIG4sIGRpciwgaW5wdXQsIHNlbGYgPSB0aGlzO1xuXHRcdGlucHV0ID0gJGlucHV0WzBdO1xuXHRcdGlucHV0LnNlbGVjdGl6ZSA9IHNlbGY7XG5cdFxuXHRcdC8vIGRldGVjdCBydGwgZW52aXJvbm1lbnRcblx0XHR2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGlucHV0LCBudWxsKTtcblx0XHRkaXIgPSBjb21wdXRlZFN0eWxlID8gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA6IGlucHV0LmN1cnJlbnRTdHlsZSAmJiBpbnB1dC5jdXJyZW50U3R5bGUuZGlyZWN0aW9uO1xuXHRcdGRpciA9IGRpciB8fCAkaW5wdXQucGFyZW50cygnW2Rpcl06Zmlyc3QnKS5hdHRyKCdkaXInKSB8fCAnJztcblx0XG5cdFx0Ly8gc2V0dXAgZGVmYXVsdCBzdGF0ZVxuXHRcdCQuZXh0ZW5kKHNlbGYsIHtcblx0XHRcdG9yZGVyICAgICAgICAgICAgOiAwLFxuXHRcdFx0c2V0dGluZ3MgICAgICAgICA6IHNldHRpbmdzLFxuXHRcdFx0JGlucHV0ICAgICAgICAgICA6ICRpbnB1dCxcblx0XHRcdHRhYkluZGV4ICAgICAgICAgOiAkaW5wdXQuYXR0cigndGFiaW5kZXgnKSB8fCAnJyxcblx0XHRcdHRhZ1R5cGUgICAgICAgICAgOiBpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnID8gVEFHX1NFTEVDVCA6IFRBR19JTlBVVCxcblx0XHRcdHJ0bCAgICAgICAgICAgICAgOiAvcnRsL2kudGVzdChkaXIpLFxuXHRcblx0XHRcdGV2ZW50TlMgICAgICAgICAgOiAnLnNlbGVjdGl6ZScgKyAoKytTZWxlY3RpemUuY291bnQpLFxuXHRcdFx0aGlnaGxpZ2h0ZWRWYWx1ZSA6IG51bGwsXG5cdFx0XHRpc09wZW4gICAgICAgICAgIDogZmFsc2UsXG5cdFx0XHRpc0Rpc2FibGVkICAgICAgIDogZmFsc2UsXG5cdFx0XHRpc1JlcXVpcmVkICAgICAgIDogJGlucHV0LmlzKCdbcmVxdWlyZWRdJyksXG5cdFx0XHRpc0ludmFsaWQgICAgICAgIDogZmFsc2UsXG5cdFx0XHRpc0xvY2tlZCAgICAgICAgIDogZmFsc2UsXG5cdFx0XHRpc0ZvY3VzZWQgICAgICAgIDogZmFsc2UsXG5cdFx0XHRpc0lucHV0SGlkZGVuICAgIDogZmFsc2UsXG5cdFx0XHRpc1NldHVwICAgICAgICAgIDogZmFsc2UsXG5cdFx0XHRpc1NoaWZ0RG93biAgICAgIDogZmFsc2UsXG5cdFx0XHRpc0NtZERvd24gICAgICAgIDogZmFsc2UsXG5cdFx0XHRpc0N0cmxEb3duICAgICAgIDogZmFsc2UsXG5cdFx0XHRpZ25vcmVGb2N1cyAgICAgIDogZmFsc2UsXG5cdFx0XHRpZ25vcmVCbHVyICAgICAgIDogZmFsc2UsXG5cdFx0XHRpZ25vcmVIb3ZlciAgICAgIDogZmFsc2UsXG5cdFx0XHRoYXNPcHRpb25zICAgICAgIDogZmFsc2UsXG5cdFx0XHRjdXJyZW50UmVzdWx0cyAgIDogbnVsbCxcblx0XHRcdGxhc3RWYWx1ZSAgICAgICAgOiAnJyxcblx0XHRcdGNhcmV0UG9zICAgICAgICAgOiAwLFxuXHRcdFx0bG9hZGluZyAgICAgICAgICA6IDAsXG5cdFx0XHRsb2FkZWRTZWFyY2hlcyAgIDoge30sXG5cdFxuXHRcdFx0JGFjdGl2ZU9wdGlvbiAgICA6IG51bGwsXG5cdFx0XHQkYWN0aXZlSXRlbXMgICAgIDogW10sXG5cdFxuXHRcdFx0b3B0Z3JvdXBzICAgICAgICA6IHt9LFxuXHRcdFx0b3B0aW9ucyAgICAgICAgICA6IHt9LFxuXHRcdFx0dXNlck9wdGlvbnMgICAgICA6IHt9LFxuXHRcdFx0aXRlbXMgICAgICAgICAgICA6IFtdLFxuXHRcdFx0cmVuZGVyQ2FjaGUgICAgICA6IHt9LFxuXHRcdFx0b25TZWFyY2hDaGFuZ2UgICA6IHNldHRpbmdzLmxvYWRUaHJvdHRsZSA9PT0gbnVsbCA/IHNlbGYub25TZWFyY2hDaGFuZ2UgOiBkZWJvdW5jZShzZWxmLm9uU2VhcmNoQ2hhbmdlLCBzZXR0aW5ncy5sb2FkVGhyb3R0bGUpXG5cdFx0fSk7XG5cdFxuXHRcdC8vIHNlYXJjaCBzeXN0ZW1cblx0XHRzZWxmLnNpZnRlciA9IG5ldyBTaWZ0ZXIodGhpcy5vcHRpb25zLCB7ZGlhY3JpdGljczogc2V0dGluZ3MuZGlhY3JpdGljc30pO1xuXHRcblx0XHQvLyBidWlsZCBvcHRpb25zIHRhYmxlXG5cdFx0aWYgKHNlbGYuc2V0dGluZ3Mub3B0aW9ucykge1xuXHRcdFx0Zm9yIChpID0gMCwgbiA9IHNlbGYuc2V0dGluZ3Mub3B0aW9ucy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0c2VsZi5yZWdpc3Rlck9wdGlvbihzZWxmLnNldHRpbmdzLm9wdGlvbnNbaV0pO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNlbGYuc2V0dGluZ3Mub3B0aW9ucztcblx0XHR9XG5cdFxuXHRcdC8vIGJ1aWxkIG9wdGdyb3VwIHRhYmxlXG5cdFx0aWYgKHNlbGYuc2V0dGluZ3Mub3B0Z3JvdXBzKSB7XG5cdFx0XHRmb3IgKGkgPSAwLCBuID0gc2VsZi5zZXR0aW5ncy5vcHRncm91cHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdHNlbGYucmVnaXN0ZXJPcHRpb25Hcm91cChzZWxmLnNldHRpbmdzLm9wdGdyb3Vwc1tpXSk7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgc2VsZi5zZXR0aW5ncy5vcHRncm91cHM7XG5cdFx0fVxuXHRcblx0XHQvLyBvcHRpb24tZGVwZW5kZW50IGRlZmF1bHRzXG5cdFx0c2VsZi5zZXR0aW5ncy5tb2RlID0gc2VsZi5zZXR0aW5ncy5tb2RlIHx8IChzZWxmLnNldHRpbmdzLm1heEl0ZW1zID09PSAxID8gJ3NpbmdsZScgOiAnbXVsdGknKTtcblx0XHRpZiAodHlwZW9mIHNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkICE9PSAnYm9vbGVhbicpIHtcblx0XHRcdHNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkID0gc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnbXVsdGknO1xuXHRcdH1cblx0XG5cdFx0c2VsZi5pbml0aWFsaXplUGx1Z2lucyhzZWxmLnNldHRpbmdzLnBsdWdpbnMpO1xuXHRcdHNlbGYuc2V0dXBDYWxsYmFja3MoKTtcblx0XHRzZWxmLnNldHVwVGVtcGxhdGVzKCk7XG5cdFx0c2VsZi5zZXR1cCgpO1xuXHR9O1xuXHRcblx0Ly8gbWl4aW5zXG5cdC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXG5cdFxuXHRNaWNyb0V2ZW50Lm1peGluKFNlbGVjdGl6ZSk7XG5cdE1pY3JvUGx1Z2luLm1peGluKFNlbGVjdGl6ZSk7XG5cdFxuXHQvLyBtZXRob2RzXG5cdC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXG5cdFxuXHQkLmV4dGVuZChTZWxlY3RpemUucHJvdG90eXBlLCB7XG5cdFxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYWxsIGVsZW1lbnRzIGFuZCBzZXRzIHVwIGV2ZW50IGJpbmRpbmdzLlxuXHRcdCAqL1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmICAgICAgPSB0aGlzO1xuXHRcdFx0dmFyIHNldHRpbmdzICA9IHNlbGYuc2V0dGluZ3M7XG5cdFx0XHR2YXIgZXZlbnROUyAgID0gc2VsZi5ldmVudE5TO1xuXHRcdFx0dmFyICR3aW5kb3cgICA9ICQod2luZG93KTtcblx0XHRcdHZhciAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblx0XHRcdHZhciAkaW5wdXQgICAgPSBzZWxmLiRpbnB1dDtcblx0XG5cdFx0XHR2YXIgJHdyYXBwZXI7XG5cdFx0XHR2YXIgJGNvbnRyb2w7XG5cdFx0XHR2YXIgJGNvbnRyb2xfaW5wdXQ7XG5cdFx0XHR2YXIgJGRyb3Bkb3duO1xuXHRcdFx0dmFyICRkcm9wZG93bl9jb250ZW50O1xuXHRcdFx0dmFyICRkcm9wZG93bl9wYXJlbnQ7XG5cdFx0XHR2YXIgaW5wdXRNb2RlO1xuXHRcdFx0dmFyIHRpbWVvdXRfYmx1cjtcblx0XHRcdHZhciB0aW1lb3V0X2ZvY3VzO1xuXHRcdFx0dmFyIGNsYXNzZXM7XG5cdFx0XHR2YXIgY2xhc3Nlc19wbHVnaW5zO1xuXHRcblx0XHRcdGlucHV0TW9kZSAgICAgICAgID0gc2VsZi5zZXR0aW5ncy5tb2RlO1xuXHRcdFx0Y2xhc3NlcyAgICAgICAgICAgPSAkaW5wdXQuYXR0cignY2xhc3MnKSB8fCAnJztcblx0XG5cdFx0XHQkd3JhcHBlciAgICAgICAgICA9ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3Mud3JhcHBlckNsYXNzKS5hZGRDbGFzcyhjbGFzc2VzKS5hZGRDbGFzcyhpbnB1dE1vZGUpO1xuXHRcdFx0JGNvbnRyb2wgICAgICAgICAgPSAkKCc8ZGl2PicpLmFkZENsYXNzKHNldHRpbmdzLmlucHV0Q2xhc3MpLmFkZENsYXNzKCdpdGVtcycpLmFwcGVuZFRvKCR3cmFwcGVyKTtcblx0XHRcdCRjb250cm9sX2lucHV0ICAgID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz4nKS5hcHBlbmRUbygkY29udHJvbCkuYXR0cigndGFiaW5kZXgnLCAkaW5wdXQuaXMoJzpkaXNhYmxlZCcpID8gJy0xJyA6IHNlbGYudGFiSW5kZXgpO1xuXHRcdFx0JGRyb3Bkb3duX3BhcmVudCAgPSAkKHNldHRpbmdzLmRyb3Bkb3duUGFyZW50IHx8ICR3cmFwcGVyKTtcblx0XHRcdCRkcm9wZG93biAgICAgICAgID0gJCgnPGRpdj4nKS5hZGRDbGFzcyhzZXR0aW5ncy5kcm9wZG93bkNsYXNzKS5hZGRDbGFzcyhpbnB1dE1vZGUpLmhpZGUoKS5hcHBlbmRUbygkZHJvcGRvd25fcGFyZW50KTtcblx0XHRcdCRkcm9wZG93bl9jb250ZW50ID0gJCgnPGRpdj4nKS5hZGRDbGFzcyhzZXR0aW5ncy5kcm9wZG93bkNvbnRlbnRDbGFzcykuYXBwZW5kVG8oJGRyb3Bkb3duKTtcblx0XG5cdFx0XHRpZihzZWxmLnNldHRpbmdzLmNvcHlDbGFzc2VzVG9Ecm9wZG93bikge1xuXHRcdFx0XHQkZHJvcGRvd24uYWRkQ2xhc3MoY2xhc3Nlcyk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0JHdyYXBwZXIuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICRpbnB1dFswXS5zdHlsZS53aWR0aFxuXHRcdFx0fSk7XG5cdFxuXHRcdFx0aWYgKHNlbGYucGx1Z2lucy5uYW1lcy5sZW5ndGgpIHtcblx0XHRcdFx0Y2xhc3Nlc19wbHVnaW5zID0gJ3BsdWdpbi0nICsgc2VsZi5wbHVnaW5zLm5hbWVzLmpvaW4oJyBwbHVnaW4tJyk7XG5cdFx0XHRcdCR3cmFwcGVyLmFkZENsYXNzKGNsYXNzZXNfcGx1Z2lucyk7XG5cdFx0XHRcdCRkcm9wZG93bi5hZGRDbGFzcyhjbGFzc2VzX3BsdWdpbnMpO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmICgoc2V0dGluZ3MubWF4SXRlbXMgPT09IG51bGwgfHwgc2V0dGluZ3MubWF4SXRlbXMgPiAxKSAmJiBzZWxmLnRhZ1R5cGUgPT09IFRBR19TRUxFQ1QpIHtcblx0XHRcdFx0JGlucHV0LmF0dHIoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0JGNvbnRyb2xfaW5wdXQuYXR0cigncGxhY2Vob2xkZXInLCBzZXR0aW5ncy5wbGFjZWhvbGRlcik7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gaWYgc3BsaXRPbiB3YXMgbm90IHBhc3NlZCBpbiwgY29uc3RydWN0IGl0IGZyb20gdGhlIGRlbGltaXRlciB0byBhbGxvdyBwYXN0aW5nIHVuaXZlcnNhbGx5XG5cdFx0XHRpZiAoIXNlbGYuc2V0dGluZ3Muc3BsaXRPbiAmJiBzZWxmLnNldHRpbmdzLmRlbGltaXRlcikge1xuXHRcdFx0XHR2YXIgZGVsaW1pdGVyRXNjYXBlZCA9IHNlbGYuc2V0dGluZ3MuZGVsaW1pdGVyLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXHRcdFx0XHRzZWxmLnNldHRpbmdzLnNwbGl0T24gPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZGVsaW1pdGVyRXNjYXBlZCArICcrXFxcXHMqJyk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0aWYgKCRpbnB1dC5hdHRyKCdhdXRvY29ycmVjdCcpKSB7XG5cdFx0XHRcdCRjb250cm9sX2lucHV0LmF0dHIoJ2F1dG9jb3JyZWN0JywgJGlucHV0LmF0dHIoJ2F1dG9jb3JyZWN0JykpO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmICgkaW5wdXQuYXR0cignYXV0b2NhcGl0YWxpemUnKSkge1xuXHRcdFx0XHQkY29udHJvbF9pbnB1dC5hdHRyKCdhdXRvY2FwaXRhbGl6ZScsICRpbnB1dC5hdHRyKCdhdXRvY2FwaXRhbGl6ZScpKTtcblx0XHRcdH1cblx0XG5cdFx0XHRzZWxmLiR3cmFwcGVyICAgICAgICAgID0gJHdyYXBwZXI7XG5cdFx0XHRzZWxmLiRjb250cm9sICAgICAgICAgID0gJGNvbnRyb2w7XG5cdFx0XHRzZWxmLiRjb250cm9sX2lucHV0ICAgID0gJGNvbnRyb2xfaW5wdXQ7XG5cdFx0XHRzZWxmLiRkcm9wZG93biAgICAgICAgID0gJGRyb3Bkb3duO1xuXHRcdFx0c2VsZi4kZHJvcGRvd25fY29udGVudCA9ICRkcm9wZG93bl9jb250ZW50O1xuXHRcblx0XHRcdCRkcm9wZG93bi5vbignbW91c2VlbnRlcicsICdbZGF0YS1zZWxlY3RhYmxlXScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5vbk9wdGlvbkhvdmVyLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH0pO1xuXHRcdFx0JGRyb3Bkb3duLm9uKCdtb3VzZWRvd24gY2xpY2snLCAnW2RhdGEtc2VsZWN0YWJsZV0nLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYub25PcHRpb25TZWxlY3QuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTsgfSk7XG5cdFx0XHR3YXRjaENoaWxkRXZlbnQoJGNvbnRyb2wsICdtb3VzZWRvd24nLCAnKjpub3QoaW5wdXQpJywgZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmLm9uSXRlbVNlbGVjdC5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9KTtcblx0XHRcdGF1dG9Hcm93KCRjb250cm9sX2lucHV0KTtcblx0XG5cdFx0XHQkY29udHJvbC5vbih7XG5cdFx0XHRcdG1vdXNlZG93biA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5vbk1vdXNlRG93bi5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9LFxuXHRcdFx0XHRjbGljayAgICAgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYub25DbGljay5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9XG5cdFx0XHR9KTtcblx0XG5cdFx0XHQkY29udHJvbF9pbnB1dC5vbih7XG5cdFx0XHRcdG1vdXNlZG93biA6IGZ1bmN0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSxcblx0XHRcdFx0a2V5ZG93biAgIDogZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmLm9uS2V5RG93bi5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9LFxuXHRcdFx0XHRrZXl1cCAgICAgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYub25LZXlVcC5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9LFxuXHRcdFx0XHRrZXlwcmVzcyAgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYub25LZXlQcmVzcy5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9LFxuXHRcdFx0XHRyZXNpemUgICAgOiBmdW5jdGlvbigpIHsgc2VsZi5wb3NpdGlvbkRyb3Bkb3duLmFwcGx5KHNlbGYsIFtdKTsgfSxcblx0XHRcdFx0Ymx1ciAgICAgIDogZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmLm9uQmx1ci5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9LFxuXHRcdFx0XHRmb2N1cyAgICAgOiBmdW5jdGlvbigpIHsgc2VsZi5pZ25vcmVCbHVyID0gZmFsc2U7IHJldHVybiBzZWxmLm9uRm9jdXMuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTsgfSxcblx0XHRcdFx0cGFzdGUgICAgIDogZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmLm9uUGFzdGUuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTsgfVxuXHRcdFx0fSk7XG5cdFxuXHRcdFx0JGRvY3VtZW50Lm9uKCdrZXlkb3duJyArIGV2ZW50TlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0c2VsZi5pc0NtZERvd24gPSBlW0lTX01BQyA/ICdtZXRhS2V5JyA6ICdjdHJsS2V5J107XG5cdFx0XHRcdHNlbGYuaXNDdHJsRG93biA9IGVbSVNfTUFDID8gJ2FsdEtleScgOiAnY3RybEtleSddO1xuXHRcdFx0XHRzZWxmLmlzU2hpZnREb3duID0gZS5zaGlmdEtleTtcblx0XHRcdH0pO1xuXHRcblx0XHRcdCRkb2N1bWVudC5vbigna2V5dXAnICsgZXZlbnROUywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSBLRVlfQ1RSTCkgc2VsZi5pc0N0cmxEb3duID0gZmFsc2U7XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IEtFWV9TSElGVCkgc2VsZi5pc1NoaWZ0RG93biA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSBLRVlfQ01EKSBzZWxmLmlzQ21kRG93biA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFxuXHRcdFx0JGRvY3VtZW50Lm9uKCdtb3VzZWRvd24nICsgZXZlbnROUywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoc2VsZi5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0XHQvLyBwcmV2ZW50IGV2ZW50cyBvbiB0aGUgZHJvcGRvd24gc2Nyb2xsYmFyIGZyb20gY2F1c2luZyB0aGUgY29udHJvbCB0byBibHVyXG5cdFx0XHRcdFx0aWYgKGUudGFyZ2V0ID09PSBzZWxmLiRkcm9wZG93blswXSB8fCBlLnRhcmdldC5wYXJlbnROb2RlID09PSBzZWxmLiRkcm9wZG93blswXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBibHVyIG9uIGNsaWNrIG91dHNpZGVcblx0XHRcdFx0XHRpZiAoIXNlbGYuJGNvbnRyb2wuaGFzKGUudGFyZ2V0KS5sZW5ndGggJiYgZS50YXJnZXQgIT09IHNlbGYuJGNvbnRyb2xbMF0pIHtcblx0XHRcdFx0XHRcdHNlbGYuYmx1cihlLnRhcmdldCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XG5cdFx0XHQkd2luZG93Lm9uKFsnc2Nyb2xsJyArIGV2ZW50TlMsICdyZXNpemUnICsgZXZlbnROU10uam9pbignICcpLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHNlbGYuaXNPcGVuKSB7XG5cdFx0XHRcdFx0c2VsZi5wb3NpdGlvbkRyb3Bkb3duLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0JHdpbmRvdy5vbignbW91c2Vtb3ZlJyArIGV2ZW50TlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmlnbm9yZUhvdmVyID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XG5cdFx0XHQvLyBzdG9yZSBvcmlnaW5hbCBjaGlsZHJlbiBhbmQgdGFiIGluZGV4IHNvIHRoYXQgdGhleSBjYW4gYmVcblx0XHRcdC8vIHJlc3RvcmVkIHdoZW4gdGhlIGRlc3Ryb3koKSBtZXRob2QgaXMgY2FsbGVkLlxuXHRcdFx0dGhpcy5yZXZlcnRTZXR0aW5ncyA9IHtcblx0XHRcdFx0JGNoaWxkcmVuIDogJGlucHV0LmNoaWxkcmVuKCkuZGV0YWNoKCksXG5cdFx0XHRcdHRhYmluZGV4ICA6ICRpbnB1dC5hdHRyKCd0YWJpbmRleCcpXG5cdFx0XHR9O1xuXHRcblx0XHRcdCRpbnB1dC5hdHRyKCd0YWJpbmRleCcsIC0xKS5oaWRlKCkuYWZ0ZXIoc2VsZi4kd3JhcHBlcik7XG5cdFxuXHRcdFx0aWYgKCQuaXNBcnJheShzZXR0aW5ncy5pdGVtcykpIHtcblx0XHRcdFx0c2VsZi5zZXRWYWx1ZShzZXR0aW5ncy5pdGVtcyk7XG5cdFx0XHRcdGRlbGV0ZSBzZXR0aW5ncy5pdGVtcztcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBmZWF0dXJlIGRldGVjdCBmb3IgdGhlIHZhbGlkYXRpb24gQVBJXG5cdFx0XHRpZiAoU1VQUE9SVFNfVkFMSURJVFlfQVBJKSB7XG5cdFx0XHRcdCRpbnB1dC5vbignaW52YWxpZCcgKyBldmVudE5TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNlbGYuaXNJbnZhbGlkID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XG5cdFx0XHRzZWxmLnVwZGF0ZU9yaWdpbmFsSW5wdXQoKTtcblx0XHRcdHNlbGYucmVmcmVzaEl0ZW1zKCk7XG5cdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdFx0c2VsZi51cGRhdGVQbGFjZWhvbGRlcigpO1xuXHRcdFx0c2VsZi5pc1NldHVwID0gdHJ1ZTtcblx0XG5cdFx0XHRpZiAoJGlucHV0LmlzKCc6ZGlzYWJsZWQnKSkge1xuXHRcdFx0XHRzZWxmLmRpc2FibGUoKTtcblx0XHRcdH1cblx0XG5cdFx0XHRzZWxmLm9uKCdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlKTtcblx0XG5cdFx0XHQkaW5wdXQuZGF0YSgnc2VsZWN0aXplJywgc2VsZik7XG5cdFx0XHQkaW5wdXQuYWRkQ2xhc3MoJ3NlbGVjdGl6ZWQnKTtcblx0XHRcdHNlbGYudHJpZ2dlcignaW5pdGlhbGl6ZScpO1xuXHRcblx0XHRcdC8vIHByZWxvYWQgb3B0aW9uc1xuXHRcdFx0aWYgKHNldHRpbmdzLnByZWxvYWQgPT09IHRydWUpIHtcblx0XHRcdFx0c2VsZi5vblNlYXJjaENoYW5nZSgnJyk7XG5cdFx0XHR9XG5cdFxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdXAgZGVmYXVsdCByZW5kZXJpbmcgZnVuY3Rpb25zLlxuXHRcdCAqL1xuXHRcdHNldHVwVGVtcGxhdGVzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciBmaWVsZF9sYWJlbCA9IHNlbGYuc2V0dGluZ3MubGFiZWxGaWVsZDtcblx0XHRcdHZhciBmaWVsZF9vcHRncm91cCA9IHNlbGYuc2V0dGluZ3Mub3B0Z3JvdXBMYWJlbEZpZWxkO1xuXHRcblx0XHRcdHZhciB0ZW1wbGF0ZXMgPSB7XG5cdFx0XHRcdCdvcHRncm91cCc6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgY2xhc3M9XCJvcHRncm91cFwiPicgKyBkYXRhLmh0bWwgKyAnPC9kaXY+Jztcblx0XHRcdFx0fSxcblx0XHRcdFx0J29wdGdyb3VwX2hlYWRlcic6IGZ1bmN0aW9uKGRhdGEsIGVzY2FwZSkge1xuXHRcdFx0XHRcdHJldHVybiAnPGRpdiBjbGFzcz1cIm9wdGdyb3VwLWhlYWRlclwiPicgKyBlc2NhcGUoZGF0YVtmaWVsZF9vcHRncm91cF0pICsgJzwvZGl2Pic7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdvcHRpb24nOiBmdW5jdGlvbihkYXRhLCBlc2NhcGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgY2xhc3M9XCJvcHRpb25cIj4nICsgZXNjYXBlKGRhdGFbZmllbGRfbGFiZWxdKSArICc8L2Rpdj4nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaXRlbSc6IGZ1bmN0aW9uKGRhdGEsIGVzY2FwZSkge1xuXHRcdFx0XHRcdHJldHVybiAnPGRpdiBjbGFzcz1cIml0ZW1cIj4nICsgZXNjYXBlKGRhdGFbZmllbGRfbGFiZWxdKSArICc8L2Rpdj4nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnb3B0aW9uX2NyZWF0ZSc6IGZ1bmN0aW9uKGRhdGEsIGVzY2FwZSkge1xuXHRcdFx0XHRcdHJldHVybiAnPGRpdiBjbGFzcz1cImNyZWF0ZVwiPkFkZCA8c3Ryb25nPicgKyBlc2NhcGUoZGF0YS5pbnB1dCkgKyAnPC9zdHJvbmc+JmhlbGxpcDs8L2Rpdj4nO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcblx0XHRcdHNlbGYuc2V0dGluZ3MucmVuZGVyID0gJC5leHRlbmQoe30sIHRlbXBsYXRlcywgc2VsZi5zZXR0aW5ncy5yZW5kZXIpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIE1hcHMgZmlyZWQgZXZlbnRzIHRvIGNhbGxiYWNrcyBwcm92aWRlZFxuXHRcdCAqIGluIHRoZSBzZXR0aW5ncyB1c2VkIHdoZW4gY3JlYXRpbmcgdGhlIGNvbnRyb2wuXG5cdFx0ICovXG5cdFx0c2V0dXBDYWxsYmFja3M6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGtleSwgZm4sIGNhbGxiYWNrcyA9IHtcblx0XHRcdFx0J2luaXRpYWxpemUnICAgICAgOiAnb25Jbml0aWFsaXplJyxcblx0XHRcdFx0J2NoYW5nZScgICAgICAgICAgOiAnb25DaGFuZ2UnLFxuXHRcdFx0XHQnaXRlbV9hZGQnICAgICAgICA6ICdvbkl0ZW1BZGQnLFxuXHRcdFx0XHQnaXRlbV9yZW1vdmUnICAgICA6ICdvbkl0ZW1SZW1vdmUnLFxuXHRcdFx0XHQnY2xlYXInICAgICAgICAgICA6ICdvbkNsZWFyJyxcblx0XHRcdFx0J29wdGlvbl9hZGQnICAgICAgOiAnb25PcHRpb25BZGQnLFxuXHRcdFx0XHQnb3B0aW9uX3JlbW92ZScgICA6ICdvbk9wdGlvblJlbW92ZScsXG5cdFx0XHRcdCdvcHRpb25fY2xlYXInICAgIDogJ29uT3B0aW9uQ2xlYXInLFxuXHRcdFx0XHQnb3B0Z3JvdXBfYWRkJyAgICA6ICdvbk9wdGlvbkdyb3VwQWRkJyxcblx0XHRcdFx0J29wdGdyb3VwX3JlbW92ZScgOiAnb25PcHRpb25Hcm91cFJlbW92ZScsXG5cdFx0XHRcdCdvcHRncm91cF9jbGVhcicgIDogJ29uT3B0aW9uR3JvdXBDbGVhcicsXG5cdFx0XHRcdCdkcm9wZG93bl9vcGVuJyAgIDogJ29uRHJvcGRvd25PcGVuJyxcblx0XHRcdFx0J2Ryb3Bkb3duX2Nsb3NlJyAgOiAnb25Ecm9wZG93bkNsb3NlJyxcblx0XHRcdFx0J3R5cGUnICAgICAgICAgICAgOiAnb25UeXBlJyxcblx0XHRcdFx0J2xvYWQnICAgICAgICAgICAgOiAnb25Mb2FkJyxcblx0XHRcdFx0J2ZvY3VzJyAgICAgICAgICAgOiAnb25Gb2N1cycsXG5cdFx0XHRcdCdibHVyJyAgICAgICAgICAgIDogJ29uQmx1cidcblx0XHRcdH07XG5cdFxuXHRcdFx0Zm9yIChrZXkgaW4gY2FsbGJhY2tzKSB7XG5cdFx0XHRcdGlmIChjYWxsYmFja3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdGZuID0gdGhpcy5zZXR0aW5nc1tjYWxsYmFja3Nba2V5XV07XG5cdFx0XHRcdFx0aWYgKGZuKSB0aGlzLm9uKGtleSwgZm4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcmVkIHdoZW4gdGhlIG1haW4gY29udHJvbCBlbGVtZW50XG5cdFx0ICogaGFzIGEgY2xpY2sgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZVxuXHRcdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0b25DbGljazogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRcdC8vIG5lY2Vzc2FyeSBmb3IgbW9iaWxlIHdlYmtpdCBkZXZpY2VzIChtYW51YWwgZm9jdXMgdHJpZ2dlcmluZ1xuXHRcdFx0Ly8gaXMgaWdub3JlZCB1bmxlc3MgaW52b2tlZCB3aXRoaW4gYSBjbGljayBldmVudClcblx0XHRcdGlmICghc2VsZi5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0c2VsZi5mb2N1cygpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcmVkIHdoZW4gdGhlIG1haW4gY29udHJvbCBlbGVtZW50XG5cdFx0ICogaGFzIGEgbW91c2UgZG93biBldmVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlXG5cdFx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRvbk1vdXNlRG93bjogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIGRlZmF1bHRQcmV2ZW50ZWQgPSBlLmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuXHRcdFx0dmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcblx0XG5cdFx0XHRpZiAoc2VsZi5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0Ly8gcmV0YWluIGZvY3VzIGJ5IHByZXZlbnRpbmcgbmF0aXZlIGhhbmRsaW5nLiBpZiB0aGVcblx0XHRcdFx0Ly8gZXZlbnQgdGFyZ2V0IGlzIHRoZSBpbnB1dCBpdCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuXHRcdFx0XHQvLyBvdGhlcndpc2UsIHRleHQgc2VsZWN0aW9uIHdpdGhpbiB0aGUgaW5wdXQgd29uJ3Qgd29yay5cblx0XHRcdFx0aWYgKGUudGFyZ2V0ICE9PSBzZWxmLiRjb250cm9sX2lucHV0WzBdKSB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ3NpbmdsZScpIHtcblx0XHRcdFx0XHRcdC8vIHRvZ2dsZSBkcm9wZG93blxuXHRcdFx0XHRcdFx0c2VsZi5pc09wZW4gPyBzZWxmLmNsb3NlKCkgOiBzZWxmLm9wZW4oKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gZ2l2ZSBjb250cm9sIGZvY3VzXG5cdFx0XHRcdGlmICghZGVmYXVsdFByZXZlbnRlZCkge1xuXHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0c2VsZi5mb2N1cygpO1xuXHRcdFx0XHRcdH0sIDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGhhcyBiZWVuIGNoYW5nZWQuXG5cdFx0ICogVGhpcyBzaG91bGQgcHJvcGFnYXRlIHRoZSBldmVudCB0byB0aGUgb3JpZ2luYWwgRE9NXG5cdFx0ICogaW5wdXQgLyBzZWxlY3QgZWxlbWVudC5cblx0XHQgKi9cblx0XHRvbkNoYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLiRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyZWQgb24gPGlucHV0PiBwYXN0ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0b25QYXN0ZTogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0aWYgKHNlbGYuaXNGdWxsKCkgfHwgc2VsZi5pc0lucHV0SGlkZGVuIHx8IHNlbGYuaXNMb2NrZWQpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgYSByZWdleCBvciBzdHJpbmcgaXMgaW5jbHVkZWQsIHRoaXMgd2lsbCBzcGxpdCB0aGUgcGFzdGVkXG5cdFx0XHRcdC8vIGlucHV0IGFuZCBjcmVhdGUgSXRlbXMgZm9yIGVhY2ggc2VwYXJhdGUgdmFsdWVcblx0XHRcdFx0aWYgKHNlbGYuc2V0dGluZ3Muc3BsaXRPbikge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR2YXIgc3BsaXRJbnB1dCA9ICQudHJpbShzZWxmLiRjb250cm9sX2lucHV0LnZhbCgpIHx8ICcnKS5zcGxpdChzZWxmLnNldHRpbmdzLnNwbGl0T24pO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSBzcGxpdElucHV0Lmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdFx0XHRzZWxmLmNyZWF0ZUl0ZW0oc3BsaXRJbnB1dFtpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyZWQgb24gPGlucHV0PiBrZXlwcmVzcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0b25LZXlQcmVzczogZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNMb2NrZWQpIHJldHVybiBlICYmIGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSB8fCBlLndoaWNoKTtcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmNyZWF0ZSAmJiB0aGlzLnNldHRpbmdzLm1vZGUgPT09ICdtdWx0aScgJiYgY2hhcmFjdGVyID09PSB0aGlzLnNldHRpbmdzLmRlbGltaXRlcikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUl0ZW0oKTtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcmVkIG9uIDxpbnB1dD4ga2V5ZG93bi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0b25LZXlEb3duOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgaXNJbnB1dCA9IGUudGFyZ2V0ID09PSB0aGlzLiRjb250cm9sX2lucHV0WzBdO1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRcdGlmIChzZWxmLmlzTG9ja2VkKSB7XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgIT09IEtFWV9UQUIpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcblx0XHRcdHN3aXRjaCAoZS5rZXlDb2RlKSB7XG5cdFx0XHRcdGNhc2UgS0VZX0E6XG5cdFx0XHRcdFx0aWYgKHNlbGYuaXNDbWREb3duKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBLRVlfRVNDOlxuXHRcdFx0XHRcdGlmIChzZWxmLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRjYXNlIEtFWV9OOlxuXHRcdFx0XHRcdGlmICghZS5jdHJsS2V5IHx8IGUuYWx0S2V5KSBicmVhaztcblx0XHRcdFx0Y2FzZSBLRVlfRE9XTjpcblx0XHRcdFx0XHRpZiAoIXNlbGYuaXNPcGVuICYmIHNlbGYuaGFzT3B0aW9ucykge1xuXHRcdFx0XHRcdFx0c2VsZi5vcGVuKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLiRhY3RpdmVPcHRpb24pIHtcblx0XHRcdFx0XHRcdHNlbGYuaWdub3JlSG92ZXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dmFyICRuZXh0ID0gc2VsZi5nZXRBZGphY2VudE9wdGlvbihzZWxmLiRhY3RpdmVPcHRpb24sIDEpO1xuXHRcdFx0XHRcdFx0aWYgKCRuZXh0Lmxlbmd0aCkgc2VsZi5zZXRBY3RpdmVPcHRpb24oJG5leHQsIHRydWUsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRjYXNlIEtFWV9QOlxuXHRcdFx0XHRcdGlmICghZS5jdHJsS2V5IHx8IGUuYWx0S2V5KSBicmVhaztcblx0XHRcdFx0Y2FzZSBLRVlfVVA6XG5cdFx0XHRcdFx0aWYgKHNlbGYuJGFjdGl2ZU9wdGlvbikge1xuXHRcdFx0XHRcdFx0c2VsZi5pZ25vcmVIb3ZlciA9IHRydWU7XG5cdFx0XHRcdFx0XHR2YXIgJHByZXYgPSBzZWxmLmdldEFkamFjZW50T3B0aW9uKHNlbGYuJGFjdGl2ZU9wdGlvbiwgLTEpO1xuXHRcdFx0XHRcdFx0aWYgKCRwcmV2Lmxlbmd0aCkgc2VsZi5zZXRBY3RpdmVPcHRpb24oJHByZXYsIHRydWUsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRjYXNlIEtFWV9SRVRVUk46XG5cdFx0XHRcdFx0aWYgKHNlbGYuaXNPcGVuICYmIHNlbGYuJGFjdGl2ZU9wdGlvbikge1xuXHRcdFx0XHRcdFx0c2VsZi5vbk9wdGlvblNlbGVjdCh7Y3VycmVudFRhcmdldDogc2VsZi4kYWN0aXZlT3B0aW9ufSk7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0Y2FzZSBLRVlfTEVGVDpcblx0XHRcdFx0XHRzZWxmLmFkdmFuY2VTZWxlY3Rpb24oLTEsIGUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0Y2FzZSBLRVlfUklHSFQ6XG5cdFx0XHRcdFx0c2VsZi5hZHZhbmNlU2VsZWN0aW9uKDEsIGUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0Y2FzZSBLRVlfVEFCOlxuXHRcdFx0XHRcdGlmIChzZWxmLnNldHRpbmdzLnNlbGVjdE9uVGFiICYmIHNlbGYuaXNPcGVuICYmIHNlbGYuJGFjdGl2ZU9wdGlvbikge1xuXHRcdFx0XHRcdFx0c2VsZi5vbk9wdGlvblNlbGVjdCh7Y3VycmVudFRhcmdldDogc2VsZi4kYWN0aXZlT3B0aW9ufSk7XG5cdFxuXHRcdFx0XHRcdFx0Ly8gRGVmYXVsdCBiZWhhdmlvdXIgaXMgdG8ganVtcCB0byB0aGUgbmV4dCBmaWVsZCwgd2Ugb25seSB3YW50IHRoaXNcblx0XHRcdFx0XHRcdC8vIGlmIHRoZSBjdXJyZW50IGZpZWxkIGRvZXNuJ3QgYWNjZXB0IGFueSBtb3JlIGVudHJpZXNcblx0XHRcdFx0XHRcdGlmICghc2VsZi5pc0Z1bGwoKSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLnNldHRpbmdzLmNyZWF0ZSAmJiBzZWxmLmNyZWF0ZUl0ZW0oKSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdGNhc2UgS0VZX0JBQ0tTUEFDRTpcblx0XHRcdFx0Y2FzZSBLRVlfREVMRVRFOlxuXHRcdFx0XHRcdHNlbGYuZGVsZXRlU2VsZWN0aW9uKGUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XG5cdFx0XHRpZiAoKHNlbGYuaXNGdWxsKCkgfHwgc2VsZi5pc0lucHV0SGlkZGVuKSAmJiAhKElTX01BQyA/IGUubWV0YUtleSA6IGUuY3RybEtleSkpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcmVkIG9uIDxpbnB1dD4ga2V5dXAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdG9uS2V5VXA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRpZiAoc2VsZi5pc0xvY2tlZCkgcmV0dXJuIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dmFyIHZhbHVlID0gc2VsZi4kY29udHJvbF9pbnB1dC52YWwoKSB8fCAnJztcblx0XHRcdGlmIChzZWxmLmxhc3RWYWx1ZSAhPT0gdmFsdWUpIHtcblx0XHRcdFx0c2VsZi5sYXN0VmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0c2VsZi5vblNlYXJjaENoYW5nZSh2YWx1ZSk7XG5cdFx0XHRcdHNlbGYucmVmcmVzaE9wdGlvbnMoKTtcblx0XHRcdFx0c2VsZi50cmlnZ2VyKCd0eXBlJywgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIEludm9rZXMgdGhlIHVzZXItcHJvdmlkZSBvcHRpb24gcHJvdmlkZXIgLyBsb2FkZXIuXG5cdFx0ICpcblx0XHQgKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIGlzIGRlYm91bmNlZCBpbiB0aGUgU2VsZWN0aXplXG5cdFx0ICogY29uc3RydWN0b3IgKGJ5IGBzZXR0aW5ncy5sb2FkRGVsYXlgIG1pbGxpc2Vjb25kcylcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHRcdCAqL1xuXHRcdG9uU2VhcmNoQ2hhbmdlOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIGZuID0gc2VsZi5zZXR0aW5ncy5sb2FkO1xuXHRcdFx0aWYgKCFmbikgcmV0dXJuO1xuXHRcdFx0aWYgKHNlbGYubG9hZGVkU2VhcmNoZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSByZXR1cm47XG5cdFx0XHRzZWxmLmxvYWRlZFNlYXJjaGVzW3ZhbHVlXSA9IHRydWU7XG5cdFx0XHRzZWxmLmxvYWQoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdFx0Zm4uYXBwbHkoc2VsZiwgW3ZhbHVlLCBjYWxsYmFja10pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcmVkIG9uIDxpbnB1dD4gZm9jdXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZSAob3B0aW9uYWwpXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0b25Gb2N1czogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIHdhc0ZvY3VzZWQgPSBzZWxmLmlzRm9jdXNlZDtcblx0XG5cdFx0XHRpZiAoc2VsZi5pc0Rpc2FibGVkKSB7XG5cdFx0XHRcdHNlbGYuYmx1cigpO1xuXHRcdFx0XHRlICYmIGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChzZWxmLmlnbm9yZUZvY3VzKSByZXR1cm47XG5cdFx0XHRzZWxmLmlzRm9jdXNlZCA9IHRydWU7XG5cdFx0XHRpZiAoc2VsZi5zZXR0aW5ncy5wcmVsb2FkID09PSAnZm9jdXMnKSBzZWxmLm9uU2VhcmNoQ2hhbmdlKCcnKTtcblx0XG5cdFx0XHRpZiAoIXdhc0ZvY3VzZWQpIHNlbGYudHJpZ2dlcignZm9jdXMnKTtcblx0XG5cdFx0XHRpZiAoIXNlbGYuJGFjdGl2ZUl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRzZWxmLnNob3dJbnB1dCgpO1xuXHRcdFx0XHRzZWxmLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG5cdFx0XHRcdHNlbGYucmVmcmVzaE9wdGlvbnMoISFzZWxmLnNldHRpbmdzLm9wZW5PbkZvY3VzKTtcblx0XHRcdH1cblx0XG5cdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXJlZCBvbiA8aW5wdXQ+IGJsdXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZVxuXHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZGVzdFxuXHRcdCAqL1xuXHRcdG9uQmx1cjogZnVuY3Rpb24oZSwgZGVzdCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0aWYgKCFzZWxmLmlzRm9jdXNlZCkgcmV0dXJuO1xuXHRcdFx0c2VsZi5pc0ZvY3VzZWQgPSBmYWxzZTtcblx0XG5cdFx0XHRpZiAoc2VsZi5pZ25vcmVGb2N1cykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGVsc2UgaWYgKCFzZWxmLmlnbm9yZUJsdXIgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gc2VsZi4kZHJvcGRvd25fY29udGVudFswXSkge1xuXHRcdFx0XHQvLyBuZWNlc3NhcnkgdG8gcHJldmVudCBJRSBjbG9zaW5nIHRoZSBkcm9wZG93biB3aGVuIHRoZSBzY3JvbGxiYXIgaXMgY2xpY2tlZFxuXHRcdFx0XHRzZWxmLmlnbm9yZUJsdXIgPSB0cnVlO1xuXHRcdFx0XHRzZWxmLm9uRm9jdXMoZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XG5cdFx0XHR2YXIgZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHRcdHNlbGYuc2V0VGV4dGJveFZhbHVlKCcnKTtcblx0XHRcdFx0c2VsZi5zZXRBY3RpdmVJdGVtKG51bGwpO1xuXHRcdFx0XHRzZWxmLnNldEFjdGl2ZU9wdGlvbihudWxsKTtcblx0XHRcdFx0c2VsZi5zZXRDYXJldChzZWxmLml0ZW1zLmxlbmd0aCk7XG5cdFx0XHRcdHNlbGYucmVmcmVzaFN0YXRlKCk7XG5cdFxuXHRcdFx0XHQvLyBJRTExIGJ1ZzogZWxlbWVudCBzdGlsbCBtYXJrZWQgYXMgYWN0aXZlXG5cdFx0XHRcdChkZXN0IHx8IGRvY3VtZW50LmJvZHkpLmZvY3VzKCk7XG5cdFxuXHRcdFx0XHRzZWxmLmlnbm9yZUZvY3VzID0gZmFsc2U7XG5cdFx0XHRcdHNlbGYudHJpZ2dlcignYmx1cicpO1xuXHRcdFx0fTtcblx0XG5cdFx0XHRzZWxmLmlnbm9yZUZvY3VzID0gdHJ1ZTtcblx0XHRcdGlmIChzZWxmLnNldHRpbmdzLmNyZWF0ZSAmJiBzZWxmLnNldHRpbmdzLmNyZWF0ZU9uQmx1cikge1xuXHRcdFx0XHRzZWxmLmNyZWF0ZUl0ZW0obnVsbCwgZmFsc2UsIGRlYWN0aXZhdGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVhY3RpdmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHJvbGxzIG92ZXJcblx0XHQgKiBhbiBvcHRpb24gaW4gdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93biBtZW51LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGVcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRvbk9wdGlvbkhvdmVyOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAodGhpcy5pZ25vcmVIb3ZlcikgcmV0dXJuO1xuXHRcdFx0dGhpcy5zZXRBY3RpdmVPcHRpb24oZS5jdXJyZW50VGFyZ2V0LCBmYWxzZSk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGFuIG9wdGlvblxuXHRcdCAqIGluIHRoZSBhdXRvY29tcGxldGUgZHJvcGRvd24gbWVudS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0b25PcHRpb25TZWxlY3Q6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciB2YWx1ZSwgJHRhcmdldCwgJG9wdGlvbiwgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0aWYgKGUucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcblx0XHRcdCR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cdFx0XHRpZiAoJHRhcmdldC5oYXNDbGFzcygnY3JlYXRlJykpIHtcblx0XHRcdFx0c2VsZi5jcmVhdGVJdGVtKG51bGwsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmIChzZWxmLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3QpIHtcblx0XHRcdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUgPSAkdGFyZ2V0LmF0dHIoJ2RhdGEtdmFsdWUnKTtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cdFx0XHRcdFx0c2VsZi5zZXRUZXh0Ym94VmFsdWUoJycpO1xuXHRcdFx0XHRcdHNlbGYuYWRkSXRlbSh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MuY2xvc2VBZnRlclNlbGVjdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIXNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkICYmIGUudHlwZSAmJiAvbW91c2UvLnRlc3QoZS50eXBlKSkge1xuXHRcdFx0XHRcdFx0c2VsZi5zZXRBY3RpdmVPcHRpb24oc2VsZi5nZXRPcHRpb24odmFsdWUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYW4gaXRlbVxuXHRcdCAqIHRoYXQgaGFzIGJlZW4gc2VsZWN0ZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdG9uSXRlbVNlbGVjdDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRcdGlmIChzZWxmLmlzTG9ja2VkKSByZXR1cm47XG5cdFx0XHRpZiAoc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnbXVsdGknKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0c2VsZi5zZXRBY3RpdmVJdGVtKGUuY3VycmVudFRhcmdldCwgZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogSW52b2tlcyB0aGUgcHJvdmlkZWQgbWV0aG9kIHRoYXQgcHJvdmlkZXNcblx0XHQgKiByZXN1bHRzIHRvIGEgY2FsbGJhY2stLS13aGljaCBhcmUgdGhlbiBhZGRlZFxuXHRcdCAqIGFzIG9wdGlvbnMgdG8gdGhlIGNvbnRyb2wuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuXHRcdCAqL1xuXHRcdGxvYWQ6IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgJHdyYXBwZXIgPSBzZWxmLiR3cmFwcGVyLmFkZENsYXNzKHNlbGYuc2V0dGluZ3MubG9hZGluZ0NsYXNzKTtcblx0XG5cdFx0XHRzZWxmLmxvYWRpbmcrKztcblx0XHRcdGZuLmFwcGx5KHNlbGYsIFtmdW5jdGlvbihyZXN1bHRzKSB7XG5cdFx0XHRcdHNlbGYubG9hZGluZyA9IE1hdGgubWF4KHNlbGYubG9hZGluZyAtIDEsIDApO1xuXHRcdFx0XHRpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbGYuYWRkT3B0aW9uKHJlc3VsdHMpO1xuXHRcdFx0XHRcdHNlbGYucmVmcmVzaE9wdGlvbnMoc2VsZi5pc0ZvY3VzZWQgJiYgIXNlbGYuaXNJbnB1dEhpZGRlbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzZWxmLmxvYWRpbmcpIHtcblx0XHRcdFx0XHQkd3JhcHBlci5yZW1vdmVDbGFzcyhzZWxmLnNldHRpbmdzLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi50cmlnZ2VyKCdsb2FkJywgcmVzdWx0cyk7XG5cdFx0XHR9XSk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgaW5wdXQgZmllbGQgb2YgdGhlIGNvbnRyb2wgdG8gdGhlIHNwZWNpZmllZCB2YWx1ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHRcdCAqL1xuXHRcdHNldFRleHRib3hWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciAkaW5wdXQgPSB0aGlzLiRjb250cm9sX2lucHV0O1xuXHRcdFx0dmFyIGNoYW5nZWQgPSAkaW5wdXQudmFsKCkgIT09IHZhbHVlO1xuXHRcdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdFx0JGlucHV0LnZhbCh2YWx1ZSkudHJpZ2dlckhhbmRsZXIoJ3VwZGF0ZScpO1xuXHRcdFx0XHR0aGlzLmxhc3RWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiBJZiBtdWx0aXBsZSBpdGVtc1xuXHRcdCAqIGNhbiBiZSBzZWxlY3RlZCAoZS5nLiA8c2VsZWN0IG11bHRpcGxlPiksIHRoaXMgcmV0dXJuc1xuXHRcdCAqIGFuIGFycmF5LiBJZiBvbmx5IG9uZSBpdGVtIGNhbiBiZSBzZWxlY3RlZCwgdGhpc1xuXHRcdCAqIHJldHVybnMgYSBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7bWl4ZWR9XG5cdFx0ICovXG5cdFx0Z2V0VmFsdWU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMudGFnVHlwZSA9PT0gVEFHX1NFTEVDVCAmJiB0aGlzLiRpbnB1dC5hdHRyKCdtdWx0aXBsZScpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLml0ZW1zO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXRlbXMuam9pbih0aGlzLnNldHRpbmdzLmRlbGltaXRlcik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmVzZXRzIHRoZSBzZWxlY3RlZCBpdGVtcyB0byB0aGUgZ2l2ZW4gdmFsdWUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge21peGVkfSB2YWx1ZVxuXHRcdCAqL1xuXHRcdHNldFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgc2lsZW50KSB7XG5cdFx0XHR2YXIgZXZlbnRzID0gc2lsZW50ID8gW10gOiBbJ2NoYW5nZSddO1xuXHRcblx0XHRcdGRlYm91bmNlX2V2ZW50cyh0aGlzLCBldmVudHMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLmNsZWFyKHNpbGVudCk7XG5cdFx0XHRcdHRoaXMuYWRkSXRlbXModmFsdWUsIHNpbGVudCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzZWxlY3RlZCBpdGVtLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9ICRpdGVtXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGUgKG9wdGlvbmFsKVxuXHRcdCAqL1xuXHRcdHNldEFjdGl2ZUl0ZW06IGZ1bmN0aW9uKCRpdGVtLCBlKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgZXZlbnROYW1lO1xuXHRcdFx0dmFyIGksIGlkeCwgYmVnaW4sIGVuZCwgaXRlbSwgc3dhcDtcblx0XHRcdHZhciAkbGFzdDtcblx0XG5cdFx0XHRpZiAoc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnc2luZ2xlJykgcmV0dXJuO1xuXHRcdFx0JGl0ZW0gPSAkKCRpdGVtKTtcblx0XG5cdFx0XHQvLyBjbGVhciB0aGUgYWN0aXZlIHNlbGVjdGlvblxuXHRcdFx0aWYgKCEkaXRlbS5sZW5ndGgpIHtcblx0XHRcdFx0JChzZWxmLiRhY3RpdmVJdGVtcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRzZWxmLiRhY3RpdmVJdGVtcyA9IFtdO1xuXHRcdFx0XHRpZiAoc2VsZi5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0XHRzZWxmLnNob3dJbnB1dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBtb2RpZnkgc2VsZWN0aW9uXG5cdFx0XHRldmVudE5hbWUgPSBlICYmIGUudHlwZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0XHRcdGlmIChldmVudE5hbWUgPT09ICdtb3VzZWRvd24nICYmIHNlbGYuaXNTaGlmdERvd24gJiYgc2VsZi4kYWN0aXZlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdCRsYXN0ID0gc2VsZi4kY29udHJvbC5jaGlsZHJlbignLmFjdGl2ZTpsYXN0Jyk7XG5cdFx0XHRcdGJlZ2luID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuYXBwbHkoc2VsZi4kY29udHJvbFswXS5jaGlsZE5vZGVzLCBbJGxhc3RbMF1dKTtcblx0XHRcdFx0ZW5kICAgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5hcHBseShzZWxmLiRjb250cm9sWzBdLmNoaWxkTm9kZXMsIFskaXRlbVswXV0pO1xuXHRcdFx0XHRpZiAoYmVnaW4gPiBlbmQpIHtcblx0XHRcdFx0XHRzd2FwICA9IGJlZ2luO1xuXHRcdFx0XHRcdGJlZ2luID0gZW5kO1xuXHRcdFx0XHRcdGVuZCAgID0gc3dhcDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSBiZWdpbjsgaSA8PSBlbmQ7IGkrKykge1xuXHRcdFx0XHRcdGl0ZW0gPSBzZWxmLiRjb250cm9sWzBdLmNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdFx0aWYgKHNlbGYuJGFjdGl2ZUl0ZW1zLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHQkKGl0ZW0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdHNlbGYuJGFjdGl2ZUl0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0gZWxzZSBpZiAoKGV2ZW50TmFtZSA9PT0gJ21vdXNlZG93bicgJiYgc2VsZi5pc0N0cmxEb3duKSB8fCAoZXZlbnROYW1lID09PSAna2V5ZG93bicgJiYgdGhpcy5pc1NoaWZ0RG93bikpIHtcblx0XHRcdFx0aWYgKCRpdGVtLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuXHRcdFx0XHRcdGlkeCA9IHNlbGYuJGFjdGl2ZUl0ZW1zLmluZGV4T2YoJGl0ZW1bMF0pO1xuXHRcdFx0XHRcdHNlbGYuJGFjdGl2ZUl0ZW1zLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdCRpdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWxmLiRhY3RpdmVJdGVtcy5wdXNoKCRpdGVtLmFkZENsYXNzKCdhY3RpdmUnKVswXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoc2VsZi4kYWN0aXZlSXRlbXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0c2VsZi4kYWN0aXZlSXRlbXMgPSBbJGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpWzBdXTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBlbnN1cmUgY29udHJvbCBoYXMgZm9jdXNcblx0XHRcdHNlbGYuaGlkZUlucHV0KCk7XG5cdFx0XHRpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdHNlbGYuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIHRoZSBkcm9wZG93biBtZW51XG5cdFx0ICogb2YgYXZhaWxhYmxlIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJG9iamVjdFxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gc2Nyb2xsXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBhbmltYXRlXG5cdFx0ICovXG5cdFx0c2V0QWN0aXZlT3B0aW9uOiBmdW5jdGlvbigkb3B0aW9uLCBzY3JvbGwsIGFuaW1hdGUpIHtcblx0XHRcdHZhciBoZWlnaHRfbWVudSwgaGVpZ2h0X2l0ZW0sIHk7XG5cdFx0XHR2YXIgc2Nyb2xsX3RvcCwgc2Nyb2xsX2JvdHRvbTtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRpZiAoc2VsZi4kYWN0aXZlT3B0aW9uKSBzZWxmLiRhY3RpdmVPcHRpb24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0c2VsZi4kYWN0aXZlT3B0aW9uID0gbnVsbDtcblx0XG5cdFx0XHQkb3B0aW9uID0gJCgkb3B0aW9uKTtcblx0XHRcdGlmICghJG9wdGlvbi5sZW5ndGgpIHJldHVybjtcblx0XG5cdFx0XHRzZWxmLiRhY3RpdmVPcHRpb24gPSAkb3B0aW9uLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XG5cdFx0XHRpZiAoc2Nyb2xsIHx8ICFpc3NldChzY3JvbGwpKSB7XG5cdFxuXHRcdFx0XHRoZWlnaHRfbWVudSAgID0gc2VsZi4kZHJvcGRvd25fY29udGVudC5oZWlnaHQoKTtcblx0XHRcdFx0aGVpZ2h0X2l0ZW0gICA9IHNlbGYuJGFjdGl2ZU9wdGlvbi5vdXRlckhlaWdodCh0cnVlKTtcblx0XHRcdFx0c2Nyb2xsICAgICAgICA9IHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQuc2Nyb2xsVG9wKCkgfHwgMDtcblx0XHRcdFx0eSAgICAgICAgICAgICA9IHNlbGYuJGFjdGl2ZU9wdGlvbi5vZmZzZXQoKS50b3AgLSBzZWxmLiRkcm9wZG93bl9jb250ZW50Lm9mZnNldCgpLnRvcCArIHNjcm9sbDtcblx0XHRcdFx0c2Nyb2xsX3RvcCAgICA9IHk7XG5cdFx0XHRcdHNjcm9sbF9ib3R0b20gPSB5IC0gaGVpZ2h0X21lbnUgKyBoZWlnaHRfaXRlbTtcblx0XG5cdFx0XHRcdGlmICh5ICsgaGVpZ2h0X2l0ZW0gPiBoZWlnaHRfbWVudSArIHNjcm9sbCkge1xuXHRcdFx0XHRcdHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2Nyb2xsX2JvdHRvbX0sIGFuaW1hdGUgPyBzZWxmLnNldHRpbmdzLnNjcm9sbER1cmF0aW9uIDogMCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoeSA8IHNjcm9sbCkge1xuXHRcdFx0XHRcdHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2Nyb2xsX3RvcH0sIGFuaW1hdGUgPyBzZWxmLnNldHRpbmdzLnNjcm9sbER1cmF0aW9uIDogMCk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogU2VsZWN0cyBhbGwgaXRlbXMgKENUUkwgKyBBKS5cblx0XHQgKi9cblx0XHRzZWxlY3RBbGw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ3NpbmdsZScpIHJldHVybjtcblx0XG5cdFx0XHRzZWxmLiRhY3RpdmVJdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzZWxmLiRjb250cm9sLmNoaWxkcmVuKCc6bm90KGlucHV0KScpLmFkZENsYXNzKCdhY3RpdmUnKSk7XG5cdFx0XHRpZiAoc2VsZi4kYWN0aXZlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdHNlbGYuaGlkZUlucHV0KCk7XG5cdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdH1cblx0XHRcdHNlbGYuZm9jdXMoKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBIaWRlcyB0aGUgaW5wdXQgZWxlbWVudCBvdXQgb2Ygdmlldywgd2hpbGVcblx0XHQgKiByZXRhaW5pbmcgaXRzIGZvY3VzLlxuXHRcdCAqL1xuXHRcdGhpZGVJbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0c2VsZi5zZXRUZXh0Ym94VmFsdWUoJycpO1xuXHRcdFx0c2VsZi4kY29udHJvbF9pbnB1dC5jc3Moe29wYWNpdHk6IDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiBzZWxmLnJ0bCA/IDEwMDAwIDogLTEwMDAwfSk7XG5cdFx0XHRzZWxmLmlzSW5wdXRIaWRkZW4gPSB0cnVlO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlc3RvcmVzIGlucHV0IHZpc2liaWxpdHkuXG5cdFx0ICovXG5cdFx0c2hvd0lucHV0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuJGNvbnRyb2xfaW5wdXQuY3NzKHtvcGFjaXR5OiAxLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogMH0pO1xuXHRcdFx0dGhpcy5pc0lucHV0SGlkZGVuID0gZmFsc2U7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgdGhlIGNvbnRyb2wgZm9jdXMuXG5cdFx0ICovXG5cdFx0Zm9jdXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0aWYgKHNlbGYuaXNEaXNhYmxlZCkgcmV0dXJuO1xuXHRcblx0XHRcdHNlbGYuaWdub3JlRm9jdXMgPSB0cnVlO1xuXHRcdFx0c2VsZi4kY29udHJvbF9pbnB1dFswXS5mb2N1cygpO1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuaWdub3JlRm9jdXMgPSBmYWxzZTtcblx0XHRcdFx0c2VsZi5vbkZvY3VzKCk7XG5cdFx0XHR9LCAwKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBGb3JjZXMgdGhlIGNvbnRyb2wgb3V0IG9mIGZvY3VzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBkZXN0XG5cdFx0ICovXG5cdFx0Ymx1cjogZnVuY3Rpb24oZGVzdCkge1xuXHRcdFx0dGhpcy4kY29udHJvbF9pbnB1dFswXS5ibHVyKCk7XG5cdFx0XHR0aGlzLm9uQmx1cihudWxsLCBkZXN0KTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBzY29yZXMgYW4gb2JqZWN0XG5cdFx0ICogdG8gc2hvdyBob3cgZ29vZCBvZiBhIG1hdGNoIGl0IGlzIHRvIHRoZVxuXHRcdCAqIHByb3ZpZGVkIHF1ZXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5XG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0XHQgKiBAcmV0dXJuIHtmdW5jdGlvbn1cblx0XHQgKi9cblx0XHRnZXRTY29yZUZ1bmN0aW9uOiBmdW5jdGlvbihxdWVyeSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2lmdGVyLmdldFNjb3JlRnVuY3Rpb24ocXVlcnksIHRoaXMuZ2V0U2VhcmNoT3B0aW9ucygpKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHNlYXJjaCBvcHRpb25zIGZvciBzaWZ0ZXIgKHRoZSBzeXN0ZW1cblx0XHQgKiBmb3Igc2NvcmluZyBhbmQgc29ydGluZyByZXN1bHRzKS5cblx0XHQgKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JyaWFucmVhdmlzL3NpZnRlci5qc1xuXHRcdCAqIEByZXR1cm4ge29iamVjdH1cblx0XHQgKi9cblx0XHRnZXRTZWFyY2hPcHRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3M7XG5cdFx0XHR2YXIgc29ydCA9IHNldHRpbmdzLnNvcnRGaWVsZDtcblx0XHRcdGlmICh0eXBlb2Ygc29ydCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0c29ydCA9IFt7ZmllbGQ6IHNvcnR9XTtcblx0XHRcdH1cblx0XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmaWVsZHMgICAgICA6IHNldHRpbmdzLnNlYXJjaEZpZWxkLFxuXHRcdFx0XHRjb25qdW5jdGlvbiA6IHNldHRpbmdzLnNlYXJjaENvbmp1bmN0aW9uLFxuXHRcdFx0XHRzb3J0ICAgICAgICA6IHNvcnRcblx0XHRcdH07XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogU2VhcmNoZXMgdGhyb3VnaCBhdmFpbGFibGUgb3B0aW9ucyBhbmQgcmV0dXJuc1xuXHRcdCAqIGEgc29ydGVkIGFycmF5IG9mIG1hdGNoZXMuXG5cdFx0ICpcblx0XHQgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nOlxuXHRcdCAqXG5cdFx0ICogICAtIHF1ZXJ5IHtzdHJpbmd9XG5cdFx0ICogICAtIHRva2VucyB7YXJyYXl9XG5cdFx0ICogICAtIHRvdGFsIHtpbnR9XG5cdFx0ICogICAtIGl0ZW1zIHthcnJheX1cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdFx0ICovXG5cdFx0c2VhcmNoOiBmdW5jdGlvbihxdWVyeSkge1xuXHRcdFx0dmFyIGksIHZhbHVlLCBzY29yZSwgcmVzdWx0LCBjYWxjdWxhdGVTY29yZTtcblx0XHRcdHZhciBzZWxmICAgICA9IHRoaXM7XG5cdFx0XHR2YXIgc2V0dGluZ3MgPSBzZWxmLnNldHRpbmdzO1xuXHRcdFx0dmFyIG9wdGlvbnMgID0gdGhpcy5nZXRTZWFyY2hPcHRpb25zKCk7XG5cdFxuXHRcdFx0Ly8gdmFsaWRhdGUgdXNlci1wcm92aWRlZCByZXN1bHQgc2NvcmluZyBmdW5jdGlvblxuXHRcdFx0aWYgKHNldHRpbmdzLnNjb3JlKSB7XG5cdFx0XHRcdGNhbGN1bGF0ZVNjb3JlID0gc2VsZi5zZXR0aW5ncy5zY29yZS5hcHBseSh0aGlzLCBbcXVlcnldKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYWxjdWxhdGVTY29yZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignU2VsZWN0aXplIFwic2NvcmVcIiBzZXR0aW5nIG11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gcGVyZm9ybSBzZWFyY2hcblx0XHRcdGlmIChxdWVyeSAhPT0gc2VsZi5sYXN0UXVlcnkpIHtcblx0XHRcdFx0c2VsZi5sYXN0UXVlcnkgPSBxdWVyeTtcblx0XHRcdFx0cmVzdWx0ID0gc2VsZi5zaWZ0ZXIuc2VhcmNoKHF1ZXJ5LCAkLmV4dGVuZChvcHRpb25zLCB7c2NvcmU6IGNhbGN1bGF0ZVNjb3JlfSkpO1xuXHRcdFx0XHRzZWxmLmN1cnJlbnRSZXN1bHRzID0gcmVzdWx0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0gJC5leHRlbmQodHJ1ZSwge30sIHNlbGYuY3VycmVudFJlc3VsdHMpO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGZpbHRlciBvdXQgc2VsZWN0ZWQgaXRlbXNcblx0XHRcdGlmIChzZXR0aW5ncy5oaWRlU2VsZWN0ZWQpIHtcblx0XHRcdFx0Zm9yIChpID0gcmVzdWx0Lml0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaXRlbXMuaW5kZXhPZihoYXNoX2tleShyZXN1bHQuaXRlbXNbaV0uaWQpKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5pdGVtcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZWZyZXNoZXMgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbnMgc2hvd25cblx0XHQgKiBpbiB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIG1lbnUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IHRyaWdnZXJEcm9wZG93blxuXHRcdCAqL1xuXHRcdHJlZnJlc2hPcHRpb25zOiBmdW5jdGlvbih0cmlnZ2VyRHJvcGRvd24pIHtcblx0XHRcdHZhciBpLCBqLCBrLCBuLCBncm91cHMsIGdyb3Vwc19vcmRlciwgb3B0aW9uLCBvcHRpb25faHRtbCwgb3B0Z3JvdXAsIG9wdGdyb3VwcywgaHRtbCwgaHRtbF9jaGlsZHJlbiwgaGFzX2NyZWF0ZV9vcHRpb247XG5cdFx0XHR2YXIgJGFjdGl2ZSwgJGFjdGl2ZV9iZWZvcmUsICRjcmVhdGU7XG5cdFxuXHRcdFx0aWYgKHR5cGVvZiB0cmlnZ2VyRHJvcGRvd24gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRyaWdnZXJEcm9wZG93biA9IHRydWU7XG5cdFx0XHR9XG5cdFxuXHRcdFx0dmFyIHNlbGYgICAgICAgICAgICAgID0gdGhpcztcblx0XHRcdHZhciBxdWVyeSAgICAgICAgICAgICA9ICQudHJpbShzZWxmLiRjb250cm9sX2lucHV0LnZhbCgpKTtcblx0XHRcdHZhciByZXN1bHRzICAgICAgICAgICA9IHNlbGYuc2VhcmNoKHF1ZXJ5KTtcblx0XHRcdHZhciAkZHJvcGRvd25fY29udGVudCA9IHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQ7XG5cdFx0XHR2YXIgYWN0aXZlX2JlZm9yZSAgICAgPSBzZWxmLiRhY3RpdmVPcHRpb24gJiYgaGFzaF9rZXkoc2VsZi4kYWN0aXZlT3B0aW9uLmF0dHIoJ2RhdGEtdmFsdWUnKSk7XG5cdFxuXHRcdFx0Ly8gYnVpbGQgbWFya3VwXG5cdFx0XHRuID0gcmVzdWx0cy5pdGVtcy5sZW5ndGg7XG5cdFx0XHRpZiAodHlwZW9mIHNlbGYuc2V0dGluZ3MubWF4T3B0aW9ucyA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0biA9IE1hdGgubWluKG4sIHNlbGYuc2V0dGluZ3MubWF4T3B0aW9ucyk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gcmVuZGVyIGFuZCBncm91cCBhdmFpbGFibGUgb3B0aW9ucyBpbmRpdmlkdWFsbHlcblx0XHRcdGdyb3VwcyA9IHt9O1xuXHRcdFx0Z3JvdXBzX29yZGVyID0gW107XG5cdFxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRvcHRpb24gICAgICA9IHNlbGYub3B0aW9uc1tyZXN1bHRzLml0ZW1zW2ldLmlkXTtcblx0XHRcdFx0b3B0aW9uX2h0bWwgPSBzZWxmLnJlbmRlcignb3B0aW9uJywgb3B0aW9uKTtcblx0XHRcdFx0b3B0Z3JvdXAgICAgPSBvcHRpb25bc2VsZi5zZXR0aW5ncy5vcHRncm91cEZpZWxkXSB8fCAnJztcblx0XHRcdFx0b3B0Z3JvdXBzICAgPSAkLmlzQXJyYXkob3B0Z3JvdXApID8gb3B0Z3JvdXAgOiBbb3B0Z3JvdXBdO1xuXHRcblx0XHRcdFx0Zm9yIChqID0gMCwgayA9IG9wdGdyb3VwcyAmJiBvcHRncm91cHMubGVuZ3RoOyBqIDwgazsgaisrKSB7XG5cdFx0XHRcdFx0b3B0Z3JvdXAgPSBvcHRncm91cHNbal07XG5cdFx0XHRcdFx0aWYgKCFzZWxmLm9wdGdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShvcHRncm91cCkpIHtcblx0XHRcdFx0XHRcdG9wdGdyb3VwID0gJyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghZ3JvdXBzLmhhc093blByb3BlcnR5KG9wdGdyb3VwKSkge1xuXHRcdFx0XHRcdFx0Z3JvdXBzW29wdGdyb3VwXSA9IFtdO1xuXHRcdFx0XHRcdFx0Z3JvdXBzX29yZGVyLnB1c2gob3B0Z3JvdXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRncm91cHNbb3B0Z3JvdXBdLnB1c2gob3B0aW9uX2h0bWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gc29ydCBvcHRncm91cHNcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmxvY2tPcHRncm91cE9yZGVyKSB7XG5cdFx0XHRcdGdyb3Vwc19vcmRlci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0XHR2YXIgYV9vcmRlciA9IHNlbGYub3B0Z3JvdXBzW2FdLiRvcmRlciB8fCAwO1xuXHRcdFx0XHRcdHZhciBiX29yZGVyID0gc2VsZi5vcHRncm91cHNbYl0uJG9yZGVyIHx8IDA7XG5cdFx0XHRcdFx0cmV0dXJuIGFfb3JkZXIgLSBiX29yZGVyO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyByZW5kZXIgb3B0Z3JvdXAgaGVhZGVycyAmIGpvaW4gZ3JvdXBzXG5cdFx0XHRodG1sID0gW107XG5cdFx0XHRmb3IgKGkgPSAwLCBuID0gZ3JvdXBzX29yZGVyLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRvcHRncm91cCA9IGdyb3Vwc19vcmRlcltpXTtcblx0XHRcdFx0aWYgKHNlbGYub3B0Z3JvdXBzLmhhc093blByb3BlcnR5KG9wdGdyb3VwKSAmJiBncm91cHNbb3B0Z3JvdXBdLmxlbmd0aCkge1xuXHRcdFx0XHRcdC8vIHJlbmRlciB0aGUgb3B0Z3JvdXAgaGVhZGVyIGFuZCBvcHRpb25zIHdpdGhpbiBpdCxcblx0XHRcdFx0XHQvLyB0aGVuIHBhc3MgaXQgdG8gdGhlIHdyYXBwZXIgdGVtcGxhdGVcblx0XHRcdFx0XHRodG1sX2NoaWxkcmVuID0gc2VsZi5yZW5kZXIoJ29wdGdyb3VwX2hlYWRlcicsIHNlbGYub3B0Z3JvdXBzW29wdGdyb3VwXSkgfHwgJyc7XG5cdFx0XHRcdFx0aHRtbF9jaGlsZHJlbiArPSBncm91cHNbb3B0Z3JvdXBdLmpvaW4oJycpO1xuXHRcdFx0XHRcdGh0bWwucHVzaChzZWxmLnJlbmRlcignb3B0Z3JvdXAnLCAkLmV4dGVuZCh7fSwgc2VsZi5vcHRncm91cHNbb3B0Z3JvdXBdLCB7XG5cdFx0XHRcdFx0XHRodG1sOiBodG1sX2NoaWxkcmVuXG5cdFx0XHRcdFx0fSkpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRodG1sLnB1c2goZ3JvdXBzW29wdGdyb3VwXS5qb2luKCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHQkZHJvcGRvd25fY29udGVudC5odG1sKGh0bWwuam9pbignJykpO1xuXHRcblx0XHRcdC8vIGhpZ2hsaWdodCBtYXRjaGluZyB0ZXJtcyBpbmxpbmVcblx0XHRcdGlmIChzZWxmLnNldHRpbmdzLmhpZ2hsaWdodCAmJiByZXN1bHRzLnF1ZXJ5Lmxlbmd0aCAmJiByZXN1bHRzLnRva2Vucy5sZW5ndGgpIHtcblx0XHRcdFx0Zm9yIChpID0gMCwgbiA9IHJlc3VsdHMudG9rZW5zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdGhpZ2hsaWdodCgkZHJvcGRvd25fY29udGVudCwgcmVzdWx0cy50b2tlbnNbaV0ucmVnZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gYWRkIFwic2VsZWN0ZWRcIiBjbGFzcyB0byBzZWxlY3RlZCBvcHRpb25zXG5cdFx0XHRpZiAoIXNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkKSB7XG5cdFx0XHRcdGZvciAoaSA9IDAsIG4gPSBzZWxmLml0ZW1zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdHNlbGYuZ2V0T3B0aW9uKHNlbGYuaXRlbXNbaV0pLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gYWRkIGNyZWF0ZSBvcHRpb25cblx0XHRcdGhhc19jcmVhdGVfb3B0aW9uID0gc2VsZi5jYW5DcmVhdGUocXVlcnkpO1xuXHRcdFx0aWYgKGhhc19jcmVhdGVfb3B0aW9uKSB7XG5cdFx0XHRcdCRkcm9wZG93bl9jb250ZW50LnByZXBlbmQoc2VsZi5yZW5kZXIoJ29wdGlvbl9jcmVhdGUnLCB7aW5wdXQ6IHF1ZXJ5fSkpO1xuXHRcdFx0XHQkY3JlYXRlID0gJCgkZHJvcGRvd25fY29udGVudFswXS5jaGlsZE5vZGVzWzBdKTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBhY3RpdmF0ZVxuXHRcdFx0c2VsZi5oYXNPcHRpb25zID0gcmVzdWx0cy5pdGVtcy5sZW5ndGggPiAwIHx8IGhhc19jcmVhdGVfb3B0aW9uO1xuXHRcdFx0aWYgKHNlbGYuaGFzT3B0aW9ucykge1xuXHRcdFx0XHRpZiAocmVzdWx0cy5pdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0JGFjdGl2ZV9iZWZvcmUgPSBhY3RpdmVfYmVmb3JlICYmIHNlbGYuZ2V0T3B0aW9uKGFjdGl2ZV9iZWZvcmUpO1xuXHRcdFx0XHRcdGlmICgkYWN0aXZlX2JlZm9yZSAmJiAkYWN0aXZlX2JlZm9yZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCRhY3RpdmUgPSAkYWN0aXZlX2JlZm9yZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ3NpbmdsZScgJiYgc2VsZi5pdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCRhY3RpdmUgPSBzZWxmLmdldE9wdGlvbihzZWxmLml0ZW1zWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCEkYWN0aXZlIHx8ICEkYWN0aXZlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKCRjcmVhdGUgJiYgIXNlbGYuc2V0dGluZ3MuYWRkUHJlY2VkZW5jZSkge1xuXHRcdFx0XHRcdFx0XHQkYWN0aXZlID0gc2VsZi5nZXRBZGphY2VudE9wdGlvbigkY3JlYXRlLCAxKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCRhY3RpdmUgPSAkZHJvcGRvd25fY29udGVudC5maW5kKCdbZGF0YS1zZWxlY3RhYmxlXTpmaXJzdCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkYWN0aXZlID0gJGNyZWF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLnNldEFjdGl2ZU9wdGlvbigkYWN0aXZlKTtcblx0XHRcdFx0aWYgKHRyaWdnZXJEcm9wZG93biAmJiAhc2VsZi5pc09wZW4pIHsgc2VsZi5vcGVuKCk7IH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuc2V0QWN0aXZlT3B0aW9uKG51bGwpO1xuXHRcdFx0XHRpZiAodHJpZ2dlckRyb3Bkb3duICYmIHNlbGYuaXNPcGVuKSB7IHNlbGYuY2xvc2UoKTsgfVxuXHRcdFx0fVxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYW4gYXZhaWxhYmxlIG9wdGlvbi4gSWYgaXQgYWxyZWFkeSBleGlzdHMsXG5cdFx0ICogbm90aGluZyB3aWxsIGhhcHBlbi4gTm90ZTogdGhpcyBkb2VzIG5vdCByZWZyZXNoXG5cdFx0ICogdGhlIG9wdGlvbnMgbGlzdCBkcm9wZG93biAodXNlIGByZWZyZXNoT3B0aW9uc2Bcblx0XHQgKiBmb3IgdGhhdCkuXG5cdFx0ICpcblx0XHQgKiBVc2FnZTpcblx0XHQgKlxuXHRcdCAqICAgdGhpcy5hZGRPcHRpb24oZGF0YSlcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBkYXRhXG5cdFx0ICovXG5cdFx0YWRkT3B0aW9uOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgaSwgbiwgdmFsdWUsIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdFx0Zm9yIChpID0gMCwgbiA9IGRhdGEubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRPcHRpb24oZGF0YVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmICh2YWx1ZSA9IHNlbGYucmVnaXN0ZXJPcHRpb24oZGF0YSkpIHtcblx0XHRcdFx0c2VsZi51c2VyT3B0aW9uc1t2YWx1ZV0gPSB0cnVlO1xuXHRcdFx0XHRzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cdFx0XHRcdHNlbGYudHJpZ2dlcignb3B0aW9uX2FkZCcsIHZhbHVlLCBkYXRhKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlcnMgYW4gb3B0aW9uIHRvIHRoZSBwb29sIG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHRcdCAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHJlZ2lzdGVyT3B0aW9uOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIga2V5ID0gaGFzaF9rZXkoZGF0YVt0aGlzLnNldHRpbmdzLnZhbHVlRmllbGRdKTtcblx0XHRcdGlmICgha2V5IHx8IHRoaXMub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRkYXRhLiRvcmRlciA9IGRhdGEuJG9yZGVyIHx8ICsrdGhpcy5vcmRlcjtcblx0XHRcdHRoaXMub3B0aW9uc1trZXldID0gZGF0YTtcblx0XHRcdHJldHVybiBrZXk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXJzIGFuIG9wdGlvbiBncm91cCB0byB0aGUgcG9vbCBvZiBvcHRpb24gZ3JvdXBzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cblx0XHQgKi9cblx0XHRyZWdpc3Rlck9wdGlvbkdyb3VwOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIga2V5ID0gaGFzaF9rZXkoZGF0YVt0aGlzLnNldHRpbmdzLm9wdGdyb3VwVmFsdWVGaWVsZF0pO1xuXHRcdFx0aWYgKCFrZXkpIHJldHVybiBmYWxzZTtcblx0XG5cdFx0XHRkYXRhLiRvcmRlciA9IGRhdGEuJG9yZGVyIHx8ICsrdGhpcy5vcmRlcjtcblx0XHRcdHRoaXMub3B0Z3JvdXBzW2tleV0gPSBkYXRhO1xuXHRcdFx0cmV0dXJuIGtleTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlcnMgYSBuZXcgb3B0Z3JvdXAgZm9yIG9wdGlvbnNcblx0XHQgKiB0byBiZSBidWNrZXRlZCBpbnRvLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlkXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0XHQgKi9cblx0XHRhZGRPcHRpb25Hcm91cDogZnVuY3Rpb24oaWQsIGRhdGEpIHtcblx0XHRcdGRhdGFbdGhpcy5zZXR0aW5ncy5vcHRncm91cFZhbHVlRmllbGRdID0gaWQ7XG5cdFx0XHRpZiAoaWQgPSB0aGlzLnJlZ2lzdGVyT3B0aW9uR3JvdXAoZGF0YSkpIHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCdvcHRncm91cF9hZGQnLCBpZCwgZGF0YSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBhbiBleGlzdGluZyBvcHRpb24gZ3JvdXAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaWRcblx0XHQgKi9cblx0XHRyZW1vdmVPcHRpb25Hcm91cDogZnVuY3Rpb24oaWQpIHtcblx0XHRcdGlmICh0aGlzLm9wdGdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcblx0XHRcdFx0ZGVsZXRlIHRoaXMub3B0Z3JvdXBzW2lkXTtcblx0XHRcdFx0dGhpcy5yZW5kZXJDYWNoZSA9IHt9O1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ29wdGdyb3VwX3JlbW92ZScsIGlkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBDbGVhcnMgYWxsIGV4aXN0aW5nIG9wdGlvbiBncm91cHMuXG5cdFx0ICovXG5cdFx0Y2xlYXJPcHRpb25Hcm91cHM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5vcHRncm91cHMgPSB7fTtcblx0XHRcdHRoaXMucmVuZGVyQ2FjaGUgPSB7fTtcblx0XHRcdHRoaXMudHJpZ2dlcignb3B0Z3JvdXBfY2xlYXInKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBVcGRhdGVzIGFuIG9wdGlvbiBhdmFpbGFibGUgZm9yIHNlbGVjdGlvbi4gSWZcblx0XHQgKiBpdCBpcyB2aXNpYmxlIGluIHRoZSBzZWxlY3RlZCBpdGVtcyBvciBvcHRpb25zXG5cdFx0ICogZHJvcGRvd24sIGl0IHdpbGwgYmUgcmUtcmVuZGVyZWQgYXV0b21hdGljYWxseS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdFx0ICovXG5cdFx0dXBkYXRlT3B0aW9uOiBmdW5jdGlvbih2YWx1ZSwgZGF0YSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyICRpdGVtLCAkaXRlbV9uZXc7XG5cdFx0XHR2YXIgdmFsdWVfbmV3LCBpbmRleF9pdGVtLCBjYWNoZV9pdGVtcywgY2FjaGVfb3B0aW9ucywgb3JkZXJfb2xkO1xuXHRcblx0XHRcdHZhbHVlICAgICA9IGhhc2hfa2V5KHZhbHVlKTtcblx0XHRcdHZhbHVlX25ldyA9IGhhc2hfa2V5KGRhdGFbc2VsZi5zZXR0aW5ncy52YWx1ZUZpZWxkXSk7XG5cdFxuXHRcdFx0Ly8gc2FuaXR5IGNoZWNrc1xuXHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG5cdFx0XHRpZiAoIXNlbGYub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHJldHVybjtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWVfbmV3ICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSBtdXN0IGJlIHNldCBpbiBvcHRpb24gZGF0YScpO1xuXHRcblx0XHRcdG9yZGVyX29sZCA9IHNlbGYub3B0aW9uc1t2YWx1ZV0uJG9yZGVyO1xuXHRcblx0XHRcdC8vIHVwZGF0ZSByZWZlcmVuY2VzXG5cdFx0XHRpZiAodmFsdWVfbmV3ICE9PSB2YWx1ZSkge1xuXHRcdFx0XHRkZWxldGUgc2VsZi5vcHRpb25zW3ZhbHVlXTtcblx0XHRcdFx0aW5kZXhfaXRlbSA9IHNlbGYuaXRlbXMuaW5kZXhPZih2YWx1ZSk7XG5cdFx0XHRcdGlmIChpbmRleF9pdGVtICE9PSAtMSkge1xuXHRcdFx0XHRcdHNlbGYuaXRlbXMuc3BsaWNlKGluZGV4X2l0ZW0sIDEsIHZhbHVlX25ldyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRhdGEuJG9yZGVyID0gZGF0YS4kb3JkZXIgfHwgb3JkZXJfb2xkO1xuXHRcdFx0c2VsZi5vcHRpb25zW3ZhbHVlX25ld10gPSBkYXRhO1xuXHRcblx0XHRcdC8vIGludmFsaWRhdGUgcmVuZGVyIGNhY2hlXG5cdFx0XHRjYWNoZV9pdGVtcyA9IHNlbGYucmVuZGVyQ2FjaGVbJ2l0ZW0nXTtcblx0XHRcdGNhY2hlX29wdGlvbnMgPSBzZWxmLnJlbmRlckNhY2hlWydvcHRpb24nXTtcblx0XG5cdFx0XHRpZiAoY2FjaGVfaXRlbXMpIHtcblx0XHRcdFx0ZGVsZXRlIGNhY2hlX2l0ZW1zW3ZhbHVlXTtcblx0XHRcdFx0ZGVsZXRlIGNhY2hlX2l0ZW1zW3ZhbHVlX25ld107XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FjaGVfb3B0aW9ucykge1xuXHRcdFx0XHRkZWxldGUgY2FjaGVfb3B0aW9uc1t2YWx1ZV07XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZV9vcHRpb25zW3ZhbHVlX25ld107XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gdXBkYXRlIHRoZSBpdGVtIGlmIGl0J3Mgc2VsZWN0ZWRcblx0XHRcdGlmIChzZWxmLml0ZW1zLmluZGV4T2YodmFsdWVfbmV3KSAhPT0gLTEpIHtcblx0XHRcdFx0JGl0ZW0gPSBzZWxmLmdldEl0ZW0odmFsdWUpO1xuXHRcdFx0XHQkaXRlbV9uZXcgPSAkKHNlbGYucmVuZGVyKCdpdGVtJywgZGF0YSkpO1xuXHRcdFx0XHRpZiAoJGl0ZW0uaGFzQ2xhc3MoJ2FjdGl2ZScpKSAkaXRlbV9uZXcuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHQkaXRlbS5yZXBsYWNlV2l0aCgkaXRlbV9uZXcpO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGludmFsaWRhdGUgbGFzdCBxdWVyeSBiZWNhdXNlIHdlIG1pZ2h0IGhhdmUgdXBkYXRlZCB0aGUgc29ydEZpZWxkXG5cdFx0XHRzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cdFxuXHRcdFx0Ly8gdXBkYXRlIGRyb3Bkb3duIGNvbnRlbnRzXG5cdFx0XHRpZiAoc2VsZi5pc09wZW4pIHtcblx0XHRcdFx0c2VsZi5yZWZyZXNoT3B0aW9ucyhmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBhIHNpbmdsZSBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudFxuXHRcdCAqL1xuXHRcdHJlbW92ZU9wdGlvbjogZnVuY3Rpb24odmFsdWUsIHNpbGVudCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFsdWUgPSBoYXNoX2tleSh2YWx1ZSk7XG5cdFxuXHRcdFx0dmFyIGNhY2hlX2l0ZW1zID0gc2VsZi5yZW5kZXJDYWNoZVsnaXRlbSddO1xuXHRcdFx0dmFyIGNhY2hlX29wdGlvbnMgPSBzZWxmLnJlbmRlckNhY2hlWydvcHRpb24nXTtcblx0XHRcdGlmIChjYWNoZV9pdGVtcykgZGVsZXRlIGNhY2hlX2l0ZW1zW3ZhbHVlXTtcblx0XHRcdGlmIChjYWNoZV9vcHRpb25zKSBkZWxldGUgY2FjaGVfb3B0aW9uc1t2YWx1ZV07XG5cdFxuXHRcdFx0ZGVsZXRlIHNlbGYudXNlck9wdGlvbnNbdmFsdWVdO1xuXHRcdFx0ZGVsZXRlIHNlbGYub3B0aW9uc1t2YWx1ZV07XG5cdFx0XHRzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cdFx0XHRzZWxmLnRyaWdnZXIoJ29wdGlvbl9yZW1vdmUnLCB2YWx1ZSk7XG5cdFx0XHRzZWxmLnJlbW92ZUl0ZW0odmFsdWUsIHNpbGVudCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogQ2xlYXJzIGFsbCBvcHRpb25zLlxuXHRcdCAqL1xuXHRcdGNsZWFyT3B0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0c2VsZi5sb2FkZWRTZWFyY2hlcyA9IHt9O1xuXHRcdFx0c2VsZi51c2VyT3B0aW9ucyA9IHt9O1xuXHRcdFx0c2VsZi5yZW5kZXJDYWNoZSA9IHt9O1xuXHRcdFx0c2VsZi5vcHRpb25zID0gc2VsZi5zaWZ0ZXIuaXRlbXMgPSB7fTtcblx0XHRcdHNlbGYubGFzdFF1ZXJ5ID0gbnVsbDtcblx0XHRcdHNlbGYudHJpZ2dlcignb3B0aW9uX2NsZWFyJyk7XG5cdFx0XHRzZWxmLmNsZWFyKCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgalF1ZXJ5IGVsZW1lbnQgb2YgdGhlIG9wdGlvblxuXHRcdCAqIG1hdGNoaW5nIHRoZSBnaXZlbiB2YWx1ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdFx0ICovXG5cdFx0Z2V0T3B0aW9uOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0RWxlbWVudFdpdGhWYWx1ZSh2YWx1ZSwgdGhpcy4kZHJvcGRvd25fY29udGVudC5maW5kKCdbZGF0YS1zZWxlY3RhYmxlXScpKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBqUXVlcnkgZWxlbWVudCBvZiB0aGUgbmV4dCBvclxuXHRcdCAqIHByZXZpb3VzIHNlbGVjdGFibGUgb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9ICRvcHRpb25cblx0XHQgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uICBjYW4gYmUgMSBmb3IgbmV4dCBvciAtMSBmb3IgcHJldmlvdXNcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9XG5cdFx0ICovXG5cdFx0Z2V0QWRqYWNlbnRPcHRpb246IGZ1bmN0aW9uKCRvcHRpb24sIGRpcmVjdGlvbikge1xuXHRcdFx0dmFyICRvcHRpb25zID0gdGhpcy4kZHJvcGRvd24uZmluZCgnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblx0XHRcdHZhciBpbmRleCAgICA9ICRvcHRpb25zLmluZGV4KCRvcHRpb24pICsgZGlyZWN0aW9uO1xuXHRcblx0XHRcdHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgJG9wdGlvbnMubGVuZ3RoID8gJG9wdGlvbnMuZXEoaW5kZXgpIDogJCgpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIEZpbmRzIHRoZSBmaXJzdCBlbGVtZW50IHdpdGggYSBcImRhdGEtdmFsdWVcIiBhdHRyaWJ1dGVcblx0XHQgKiB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHZhbHVlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gdmFsdWVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJGVsc1xuXHRcdCAqIEByZXR1cm4ge29iamVjdH1cblx0XHQgKi9cblx0XHRnZXRFbGVtZW50V2l0aFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgJGVscykge1xuXHRcdFx0dmFsdWUgPSBoYXNoX2tleSh2YWx1ZSk7XG5cdFxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSAkZWxzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdGlmICgkZWxzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpID09PSB2YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQoJGVsc1tpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0cmV0dXJuICQoKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBqUXVlcnkgZWxlbWVudCBvZiB0aGUgaXRlbVxuXHRcdCAqIG1hdGNoaW5nIHRoZSBnaXZlbiB2YWx1ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdFx0ICovXG5cdFx0Z2V0SXRlbTogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldEVsZW1lbnRXaXRoVmFsdWUodmFsdWUsIHRoaXMuJGNvbnRyb2wuY2hpbGRyZW4oKSk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogXCJTZWxlY3RzXCIgbXVsdGlwbGUgaXRlbXMgYXQgb25jZS4gQWRkcyB0aGVtIHRvIHRoZSBsaXN0XG5cdFx0ICogYXQgdGhlIGN1cnJlbnQgY2FyZXQgcG9zaXRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudFxuXHRcdCAqL1xuXHRcdGFkZEl0ZW1zOiBmdW5jdGlvbih2YWx1ZXMsIHNpbGVudCkge1xuXHRcdFx0dmFyIGl0ZW1zID0gJC5pc0FycmF5KHZhbHVlcykgPyB2YWx1ZXMgOiBbdmFsdWVzXTtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBuID0gaXRlbXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuaXNQZW5kaW5nID0gKGkgPCBuIC0gMSk7XG5cdFx0XHRcdHRoaXMuYWRkSXRlbShpdGVtc1tpXSwgc2lsZW50KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBcIlNlbGVjdHNcIiBhbiBpdGVtLiBBZGRzIGl0IHRvIHRoZSBsaXN0XG5cdFx0ICogYXQgdGhlIGN1cnJlbnQgY2FyZXQgcG9zaXRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudFxuXHRcdCAqL1xuXHRcdGFkZEl0ZW06IGZ1bmN0aW9uKHZhbHVlLCBzaWxlbnQpIHtcblx0XHRcdHZhciBldmVudHMgPSBzaWxlbnQgPyBbXSA6IFsnY2hhbmdlJ107XG5cdFxuXHRcdFx0ZGVib3VuY2VfZXZlbnRzKHRoaXMsIGV2ZW50cywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciAkaXRlbSwgJG9wdGlvbiwgJG9wdGlvbnM7XG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFx0dmFyIGlucHV0TW9kZSA9IHNlbGYuc2V0dGluZ3MubW9kZTtcblx0XHRcdFx0dmFyIGksIGFjdGl2ZSwgdmFsdWVfbmV4dCwgd2FzRnVsbDtcblx0XHRcdFx0dmFsdWUgPSBoYXNoX2tleSh2YWx1ZSk7XG5cdFxuXHRcdFx0XHRpZiAoc2VsZi5pdGVtcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRpZiAoaW5wdXRNb2RlID09PSAnc2luZ2xlJykgc2VsZi5jbG9zZSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0aWYgKCFzZWxmLm9wdGlvbnMuaGFzT3duUHJvcGVydHkodmFsdWUpKSByZXR1cm47XG5cdFx0XHRcdGlmIChpbnB1dE1vZGUgPT09ICdzaW5nbGUnKSBzZWxmLmNsZWFyKHNpbGVudCk7XG5cdFx0XHRcdGlmIChpbnB1dE1vZGUgPT09ICdtdWx0aScgJiYgc2VsZi5pc0Z1bGwoKSkgcmV0dXJuO1xuXHRcblx0XHRcdFx0JGl0ZW0gPSAkKHNlbGYucmVuZGVyKCdpdGVtJywgc2VsZi5vcHRpb25zW3ZhbHVlXSkpO1xuXHRcdFx0XHR3YXNGdWxsID0gc2VsZi5pc0Z1bGwoKTtcblx0XHRcdFx0c2VsZi5pdGVtcy5zcGxpY2Uoc2VsZi5jYXJldFBvcywgMCwgdmFsdWUpO1xuXHRcdFx0XHRzZWxmLmluc2VydEF0Q2FyZXQoJGl0ZW0pO1xuXHRcdFx0XHRpZiAoIXNlbGYuaXNQZW5kaW5nIHx8ICghd2FzRnVsbCAmJiBzZWxmLmlzRnVsbCgpKSkge1xuXHRcdFx0XHRcdHNlbGYucmVmcmVzaFN0YXRlKCk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGlmIChzZWxmLmlzU2V0dXApIHtcblx0XHRcdFx0XHQkb3B0aW9ucyA9IHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQuZmluZCgnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblx0XG5cdFx0XHRcdFx0Ly8gdXBkYXRlIG1lbnUgLyByZW1vdmUgdGhlIG9wdGlvbiAoaWYgdGhpcyBpcyBub3Qgb25lIGl0ZW0gYmVpbmcgYWRkZWQgYXMgcGFydCBvZiBzZXJpZXMpXG5cdFx0XHRcdFx0aWYgKCFzZWxmLmlzUGVuZGluZykge1xuXHRcdFx0XHRcdFx0JG9wdGlvbiA9IHNlbGYuZ2V0T3B0aW9uKHZhbHVlKTtcblx0XHRcdFx0XHRcdHZhbHVlX25leHQgPSBzZWxmLmdldEFkamFjZW50T3B0aW9uKCRvcHRpb24sIDEpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcblx0XHRcdFx0XHRcdHNlbGYucmVmcmVzaE9wdGlvbnMoc2VsZi5pc0ZvY3VzZWQgJiYgaW5wdXRNb2RlICE9PSAnc2luZ2xlJyk7XG5cdFx0XHRcdFx0XHRpZiAodmFsdWVfbmV4dCkge1xuXHRcdFx0XHRcdFx0XHRzZWxmLnNldEFjdGl2ZU9wdGlvbihzZWxmLmdldE9wdGlvbih2YWx1ZV9uZXh0KSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHQvLyBoaWRlIHRoZSBtZW51IGlmIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBoYXZlIGJlZW4gc2VsZWN0ZWQgb3Igbm8gb3B0aW9ucyBhcmUgbGVmdFxuXHRcdFx0XHRcdGlmICghJG9wdGlvbnMubGVuZ3RoIHx8IHNlbGYuaXNGdWxsKCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi5wb3NpdGlvbkRyb3Bkb3duKCk7XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRzZWxmLnVwZGF0ZVBsYWNlaG9sZGVyKCk7XG5cdFx0XHRcdFx0c2VsZi50cmlnZ2VyKCdpdGVtX2FkZCcsIHZhbHVlLCAkaXRlbSk7XG5cdFx0XHRcdFx0c2VsZi51cGRhdGVPcmlnaW5hbElucHV0KHtzaWxlbnQ6IHNpbGVudH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIHRoZSBzZWxlY3RlZCBpdGVtIG1hdGNoaW5nXG5cdFx0ICogdGhlIHByb3ZpZGVkIHZhbHVlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdFx0ICovXG5cdFx0cmVtb3ZlSXRlbTogZnVuY3Rpb24odmFsdWUsIHNpbGVudCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyICRpdGVtLCBpLCBpZHg7XG5cdFxuXHRcdFx0JGl0ZW0gPSAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgPyB2YWx1ZSA6IHNlbGYuZ2V0SXRlbSh2YWx1ZSk7XG5cdFx0XHR2YWx1ZSA9IGhhc2hfa2V5KCRpdGVtLmF0dHIoJ2RhdGEtdmFsdWUnKSk7XG5cdFx0XHRpID0gc2VsZi5pdGVtcy5pbmRleE9mKHZhbHVlKTtcblx0XG5cdFx0XHRpZiAoaSAhPT0gLTEpIHtcblx0XHRcdFx0JGl0ZW0ucmVtb3ZlKCk7XG5cdFx0XHRcdGlmICgkaXRlbS5oYXNDbGFzcygnYWN0aXZlJykpIHtcblx0XHRcdFx0XHRpZHggPSBzZWxmLiRhY3RpdmVJdGVtcy5pbmRleE9mKCRpdGVtWzBdKTtcblx0XHRcdFx0XHRzZWxmLiRhY3RpdmVJdGVtcy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0c2VsZi5pdGVtcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHNlbGYubGFzdFF1ZXJ5ID0gbnVsbDtcblx0XHRcdFx0aWYgKCFzZWxmLnNldHRpbmdzLnBlcnNpc3QgJiYgc2VsZi51c2VyT3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRzZWxmLnJlbW92ZU9wdGlvbih2YWx1ZSwgc2lsZW50KTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0aWYgKGkgPCBzZWxmLmNhcmV0UG9zKSB7XG5cdFx0XHRcdFx0c2VsZi5zZXRDYXJldChzZWxmLmNhcmV0UG9zIC0gMSk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHNlbGYucmVmcmVzaFN0YXRlKCk7XG5cdFx0XHRcdHNlbGYudXBkYXRlUGxhY2Vob2xkZXIoKTtcblx0XHRcdFx0c2VsZi51cGRhdGVPcmlnaW5hbElucHV0KHtzaWxlbnQ6IHNpbGVudH0pO1xuXHRcdFx0XHRzZWxmLnBvc2l0aW9uRHJvcGRvd24oKTtcblx0XHRcdFx0c2VsZi50cmlnZ2VyKCdpdGVtX3JlbW92ZScsIHZhbHVlLCAkaXRlbSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogSW52b2tlcyB0aGUgYGNyZWF0ZWAgbWV0aG9kIHByb3ZpZGVkIGluIHRoZVxuXHRcdCAqIHNlbGVjdGl6ZSBvcHRpb25zIHRoYXQgc2hvdWxkIHByb3ZpZGUgdGhlIGRhdGFcblx0XHQgKiBmb3IgdGhlIG5ldyBpdGVtLCBnaXZlbiB0aGUgdXNlciBpbnB1dC5cblx0XHQgKlxuXHRcdCAqIE9uY2UgdGhpcyBjb21wbGV0ZXMsIGl0IHdpbGwgYmUgYWRkZWRcblx0XHQgKiB0byB0aGUgaXRlbSBsaXN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbdHJpZ2dlckRyb3Bkb3duXVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cblx0XHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNyZWF0ZUl0ZW06IGZ1bmN0aW9uKGlucHV0LCB0cmlnZ2VyRHJvcGRvd24pIHtcblx0XHRcdHZhciBzZWxmICA9IHRoaXM7XG5cdFx0XHR2YXIgY2FyZXQgPSBzZWxmLmNhcmV0UG9zO1xuXHRcdFx0aW5wdXQgPSBpbnB1dCB8fCAkLnRyaW0oc2VsZi4kY29udHJvbF9pbnB1dC52YWwoKSB8fCAnJyk7XG5cdFxuXHRcdFx0dmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gZnVuY3Rpb24oKSB7fTtcblx0XG5cdFx0XHRpZiAodHlwZW9mIHRyaWdnZXJEcm9wZG93biAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRyaWdnZXJEcm9wZG93biA9IHRydWU7XG5cdFx0XHR9XG5cdFxuXHRcdFx0aWYgKCFzZWxmLmNhbkNyZWF0ZShpbnB1dCkpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcblx0XHRcdHNlbGYubG9jaygpO1xuXHRcblx0XHRcdHZhciBzZXR1cCA9ICh0eXBlb2Ygc2VsZi5zZXR0aW5ncy5jcmVhdGUgPT09ICdmdW5jdGlvbicpID8gdGhpcy5zZXR0aW5ncy5jcmVhdGUgOiBmdW5jdGlvbihpbnB1dCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0XHRkYXRhW3NlbGYuc2V0dGluZ3MubGFiZWxGaWVsZF0gPSBpbnB1dDtcblx0XHRcdFx0ZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdID0gaW5wdXQ7XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fTtcblx0XG5cdFx0XHR2YXIgY3JlYXRlID0gb25jZShmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdHNlbGYudW5sb2NrKCk7XG5cdFxuXHRcdFx0XHRpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSByZXR1cm4gY2FsbGJhY2soKTtcblx0XHRcdFx0dmFyIHZhbHVlID0gaGFzaF9rZXkoZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdKTtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiBjYWxsYmFjaygpO1xuXHRcblx0XHRcdFx0c2VsZi5zZXRUZXh0Ym94VmFsdWUoJycpO1xuXHRcdFx0XHRzZWxmLmFkZE9wdGlvbihkYXRhKTtcblx0XHRcdFx0c2VsZi5zZXRDYXJldChjYXJldCk7XG5cdFx0XHRcdHNlbGYuYWRkSXRlbSh2YWx1ZSk7XG5cdFx0XHRcdHNlbGYucmVmcmVzaE9wdGlvbnModHJpZ2dlckRyb3Bkb3duICYmIHNlbGYuc2V0dGluZ3MubW9kZSAhPT0gJ3NpbmdsZScpO1xuXHRcdFx0XHRjYWxsYmFjayhkYXRhKTtcblx0XHRcdH0pO1xuXHRcblx0XHRcdHZhciBvdXRwdXQgPSBzZXR1cC5hcHBseSh0aGlzLCBbaW5wdXQsIGNyZWF0ZV0pO1xuXHRcdFx0aWYgKHR5cGVvZiBvdXRwdXQgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGNyZWF0ZShvdXRwdXQpO1xuXHRcdFx0fVxuXHRcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlLXJlbmRlcnMgdGhlIHNlbGVjdGVkIGl0ZW0gbGlzdHMuXG5cdFx0ICovXG5cdFx0cmVmcmVzaEl0ZW1zOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMubGFzdFF1ZXJ5ID0gbnVsbDtcblx0XG5cdFx0XHRpZiAodGhpcy5pc1NldHVwKSB7XG5cdFx0XHRcdHRoaXMuYWRkSXRlbSh0aGlzLml0ZW1zKTtcblx0XHRcdH1cblx0XG5cdFx0XHR0aGlzLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdFx0dGhpcy51cGRhdGVPcmlnaW5hbElucHV0KCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyBhbGwgc3RhdGUtZGVwZW5kZW50IGF0dHJpYnV0ZXNcblx0XHQgKiBhbmQgQ1NTIGNsYXNzZXMuXG5cdFx0ICovXG5cdFx0cmVmcmVzaFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbnZhbGlkLCBzZWxmID0gdGhpcztcblx0XHRcdGlmIChzZWxmLmlzUmVxdWlyZWQpIHtcblx0XHRcdFx0aWYgKHNlbGYuaXRlbXMubGVuZ3RoKSBzZWxmLmlzSW52YWxpZCA9IGZhbHNlO1xuXHRcdFx0XHRzZWxmLiRjb250cm9sX2lucHV0LnByb3AoJ3JlcXVpcmVkJywgaW52YWxpZCk7XG5cdFx0XHR9XG5cdFx0XHRzZWxmLnJlZnJlc2hDbGFzc2VzKCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyBhbGwgc3RhdGUtZGVwZW5kZW50IENTUyBjbGFzc2VzLlxuXHRcdCAqL1xuXHRcdHJlZnJlc2hDbGFzc2VzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmICAgICA9IHRoaXM7XG5cdFx0XHR2YXIgaXNGdWxsICAgPSBzZWxmLmlzRnVsbCgpO1xuXHRcdFx0dmFyIGlzTG9ja2VkID0gc2VsZi5pc0xvY2tlZDtcblx0XG5cdFx0XHRzZWxmLiR3cmFwcGVyXG5cdFx0XHRcdC50b2dnbGVDbGFzcygncnRsJywgc2VsZi5ydGwpO1xuXHRcblx0XHRcdHNlbGYuJGNvbnRyb2xcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdmb2N1cycsIHNlbGYuaXNGb2N1c2VkKVxuXHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgc2VsZi5pc0Rpc2FibGVkKVxuXHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgc2VsZi5pc1JlcXVpcmVkKVxuXHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2ludmFsaWQnLCBzZWxmLmlzSW52YWxpZClcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdsb2NrZWQnLCBpc0xvY2tlZClcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdmdWxsJywgaXNGdWxsKS50b2dnbGVDbGFzcygnbm90LWZ1bGwnLCAhaXNGdWxsKVxuXHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2lucHV0LWFjdGl2ZScsIHNlbGYuaXNGb2N1c2VkICYmICFzZWxmLmlzSW5wdXRIaWRkZW4pXG5cdFx0XHRcdC50b2dnbGVDbGFzcygnZHJvcGRvd24tYWN0aXZlJywgc2VsZi5pc09wZW4pXG5cdFx0XHRcdC50b2dnbGVDbGFzcygnaGFzLW9wdGlvbnMnLCAhJC5pc0VtcHR5T2JqZWN0KHNlbGYub3B0aW9ucykpXG5cdFx0XHRcdC50b2dnbGVDbGFzcygnaGFzLWl0ZW1zJywgc2VsZi5pdGVtcy5sZW5ndGggPiAwKTtcblx0XG5cdFx0XHRzZWxmLiRjb250cm9sX2lucHV0LmRhdGEoJ2dyb3cnLCAhaXNGdWxsICYmICFpc0xvY2tlZCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCBtb3JlIGl0ZW1zIGNhbiBiZSBhZGRlZFxuXHRcdCAqIHRvIHRoZSBjb250cm9sIHdpdGhvdXQgZXhjZWVkaW5nIHRoZSB1c2VyLWRlZmluZWQgbWF4aW11bS5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzRnVsbDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXhJdGVtcyAhPT0gbnVsbCAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+PSB0aGlzLnNldHRpbmdzLm1heEl0ZW1zO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlZnJlc2hlcyB0aGUgb3JpZ2luYWwgPHNlbGVjdD4gb3IgPGlucHV0PlxuXHRcdCAqIGVsZW1lbnQgdG8gcmVmbGVjdCB0aGUgY3VycmVudCBzdGF0ZS5cblx0XHQgKi9cblx0XHR1cGRhdGVPcmlnaW5hbElucHV0OiBmdW5jdGlvbihvcHRzKSB7XG5cdFx0XHR2YXIgaSwgbiwgb3B0aW9ucywgbGFiZWwsIHNlbGYgPSB0aGlzO1xuXHRcdFx0b3B0cyA9IG9wdHMgfHwge307XG5cdFxuXHRcdFx0aWYgKHNlbGYudGFnVHlwZSA9PT0gVEFHX1NFTEVDVCkge1xuXHRcdFx0XHRvcHRpb25zID0gW107XG5cdFx0XHRcdGZvciAoaSA9IDAsIG4gPSBzZWxmLml0ZW1zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdGxhYmVsID0gc2VsZi5vcHRpb25zW3NlbGYuaXRlbXNbaV1dW3NlbGYuc2V0dGluZ3MubGFiZWxGaWVsZF0gfHwgJyc7XG5cdFx0XHRcdFx0b3B0aW9ucy5wdXNoKCc8b3B0aW9uIHZhbHVlPVwiJyArIGVzY2FwZV9odG1sKHNlbGYuaXRlbXNbaV0pICsgJ1wiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj4nICsgZXNjYXBlX2h0bWwobGFiZWwpICsgJzwvb3B0aW9uPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghb3B0aW9ucy5sZW5ndGggJiYgIXRoaXMuJGlucHV0LmF0dHIoJ211bHRpcGxlJykpIHtcblx0XHRcdFx0XHRvcHRpb25zLnB1c2goJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+PC9vcHRpb24+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi4kaW5wdXQuaHRtbChvcHRpb25zLmpvaW4oJycpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuJGlucHV0LnZhbChzZWxmLmdldFZhbHVlKCkpO1xuXHRcdFx0XHRzZWxmLiRpbnB1dC5hdHRyKCd2YWx1ZScsc2VsZi4kaW5wdXQudmFsKCkpO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChzZWxmLmlzU2V0dXApIHtcblx0XHRcdFx0aWYgKCFvcHRzLnNpbGVudCkge1xuXHRcdFx0XHRcdHNlbGYudHJpZ2dlcignY2hhbmdlJywgc2VsZi4kaW5wdXQudmFsKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MvaGlkZSB0aGUgaW5wdXQgcGxhY2Vob2xkZXIgZGVwZW5kaW5nXG5cdFx0ICogb24gaWYgdGhlcmUgaXRlbXMgaW4gdGhlIGxpc3QgYWxyZWFkeS5cblx0XHQgKi9cblx0XHR1cGRhdGVQbGFjZWhvbGRlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3MucGxhY2Vob2xkZXIpIHJldHVybjtcblx0XHRcdHZhciAkaW5wdXQgPSB0aGlzLiRjb250cm9sX2lucHV0O1xuXHRcblx0XHRcdGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHQkaW5wdXQucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRpbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicsIHRoaXMuc2V0dGluZ3MucGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdFx0JGlucHV0LnRyaWdnZXJIYW5kbGVyKCd1cGRhdGUnLCB7Zm9yY2U6IHRydWV9KTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIGNvbnRhaW5pbmdcblx0XHQgKiB0aGUgYXZhaWxhYmxlIG9wdGlvbnMuXG5cdFx0ICovXG5cdFx0b3BlbjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0aWYgKHNlbGYuaXNMb2NrZWQgfHwgc2VsZi5pc09wZW4gfHwgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ211bHRpJyAmJiBzZWxmLmlzRnVsbCgpKSkgcmV0dXJuO1xuXHRcdFx0c2VsZi5mb2N1cygpO1xuXHRcdFx0c2VsZi5pc09wZW4gPSB0cnVlO1xuXHRcdFx0c2VsZi5yZWZyZXNoU3RhdGUoKTtcblx0XHRcdHNlbGYuJGRyb3Bkb3duLmNzcyh7dmlzaWJpbGl0eTogJ2hpZGRlbicsIGRpc3BsYXk6ICdibG9jayd9KTtcblx0XHRcdHNlbGYucG9zaXRpb25Ecm9wZG93bigpO1xuXHRcdFx0c2VsZi4kZHJvcGRvd24uY3NzKHt2aXNpYmlsaXR5OiAndmlzaWJsZSd9KTtcblx0XHRcdHNlbGYudHJpZ2dlcignZHJvcGRvd25fb3BlbicsIHNlbGYuJGRyb3Bkb3duKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBDbG9zZXMgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93biBtZW51LlxuXHRcdCAqL1xuXHRcdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciB0cmlnZ2VyID0gc2VsZi5pc09wZW47XG5cdFxuXHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ3NpbmdsZScgJiYgc2VsZi5pdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0c2VsZi5oaWRlSW5wdXQoKTtcblx0XHRcdH1cblx0XG5cdFx0XHRzZWxmLmlzT3BlbiA9IGZhbHNlO1xuXHRcdFx0c2VsZi4kZHJvcGRvd24uaGlkZSgpO1xuXHRcdFx0c2VsZi5zZXRBY3RpdmVPcHRpb24obnVsbCk7XG5cdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcblx0XHRcdGlmICh0cmlnZ2VyKSBzZWxmLnRyaWdnZXIoJ2Ryb3Bkb3duX2Nsb3NlJywgc2VsZi4kZHJvcGRvd24pO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIENhbGN1bGF0ZXMgYW5kIGFwcGxpZXMgdGhlIGFwcHJvcHJpYXRlXG5cdFx0ICogcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duLlxuXHRcdCAqL1xuXHRcdHBvc2l0aW9uRHJvcGRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICRjb250cm9sID0gdGhpcy4kY29udHJvbDtcblx0XHRcdHZhciBvZmZzZXQgPSB0aGlzLnNldHRpbmdzLmRyb3Bkb3duUGFyZW50ID09PSAnYm9keScgPyAkY29udHJvbC5vZmZzZXQoKSA6ICRjb250cm9sLnBvc2l0aW9uKCk7XG5cdFx0XHRvZmZzZXQudG9wICs9ICRjb250cm9sLm91dGVySGVpZ2h0KHRydWUpO1xuXHRcblx0XHRcdHRoaXMuJGRyb3Bkb3duLmNzcyh7XG5cdFx0XHRcdHdpZHRoIDogJGNvbnRyb2wub3V0ZXJXaWR0aCgpLFxuXHRcdFx0XHR0b3AgICA6IG9mZnNldC50b3AsXG5cdFx0XHRcdGxlZnQgIDogb2Zmc2V0LmxlZnRcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlc2V0cyAvIGNsZWFycyBhbGwgc2VsZWN0ZWQgaXRlbXNcblx0XHQgKiBmcm9tIHRoZSBjb250cm9sLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBzaWxlbnRcblx0XHQgKi9cblx0XHRjbGVhcjogZnVuY3Rpb24oc2lsZW50KSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0aWYgKCFzZWxmLml0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0c2VsZi4kY29udHJvbC5jaGlsZHJlbignOm5vdChpbnB1dCknKS5yZW1vdmUoKTtcblx0XHRcdHNlbGYuaXRlbXMgPSBbXTtcblx0XHRcdHNlbGYubGFzdFF1ZXJ5ID0gbnVsbDtcblx0XHRcdHNlbGYuc2V0Q2FyZXQoMCk7XG5cdFx0XHRzZWxmLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG5cdFx0XHRzZWxmLnVwZGF0ZVBsYWNlaG9sZGVyKCk7XG5cdFx0XHRzZWxmLnVwZGF0ZU9yaWdpbmFsSW5wdXQoe3NpbGVudDogc2lsZW50fSk7XG5cdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdFx0c2VsZi5zaG93SW5wdXQoKTtcblx0XHRcdHNlbGYudHJpZ2dlcignY2xlYXInKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBBIGhlbHBlciBtZXRob2QgZm9yIGluc2VydGluZyBhbiBlbGVtZW50XG5cdFx0ICogYXQgdGhlIGN1cnJlbnQgY2FyZXQgcG9zaXRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJGVsXG5cdFx0ICovXG5cdFx0aW5zZXJ0QXRDYXJldDogZnVuY3Rpb24oJGVsKSB7XG5cdFx0XHR2YXIgY2FyZXQgPSBNYXRoLm1pbih0aGlzLmNhcmV0UG9zLCB0aGlzLml0ZW1zLmxlbmd0aCk7XG5cdFx0XHRpZiAoY2FyZXQgPT09IDApIHtcblx0XHRcdFx0dGhpcy4kY29udHJvbC5wcmVwZW5kKCRlbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuJGNvbnRyb2xbMF0uY2hpbGROb2Rlc1tjYXJldF0pLmJlZm9yZSgkZWwpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRDYXJldChjYXJldCArIDEpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbShzKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlIChvcHRpb25hbClcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRkZWxldGVTZWxlY3Rpb246IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBpLCBuLCBkaXJlY3Rpb24sIHNlbGVjdGlvbiwgdmFsdWVzLCBjYXJldCwgb3B0aW9uX3NlbGVjdCwgJG9wdGlvbl9zZWxlY3QsICR0YWlsO1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRcdGRpcmVjdGlvbiA9IChlICYmIGUua2V5Q29kZSA9PT0gS0VZX0JBQ0tTUEFDRSkgPyAtMSA6IDE7XG5cdFx0XHRzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oc2VsZi4kY29udHJvbF9pbnB1dFswXSk7XG5cdFxuXHRcdFx0aWYgKHNlbGYuJGFjdGl2ZU9wdGlvbiAmJiAhc2VsZi5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQpIHtcblx0XHRcdFx0b3B0aW9uX3NlbGVjdCA9IHNlbGYuZ2V0QWRqYWNlbnRPcHRpb24oc2VsZi4kYWN0aXZlT3B0aW9uLCAtMSkuYXR0cignZGF0YS12YWx1ZScpO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGRldGVybWluZSBpdGVtcyB0aGF0IHdpbGwgYmUgcmVtb3ZlZFxuXHRcdFx0dmFsdWVzID0gW107XG5cdFxuXHRcdFx0aWYgKHNlbGYuJGFjdGl2ZUl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHQkdGFpbCA9IHNlbGYuJGNvbnRyb2wuY2hpbGRyZW4oJy5hY3RpdmU6JyArIChkaXJlY3Rpb24gPiAwID8gJ2xhc3QnIDogJ2ZpcnN0JykpO1xuXHRcdFx0XHRjYXJldCA9IHNlbGYuJGNvbnRyb2wuY2hpbGRyZW4oJzpub3QoaW5wdXQpJykuaW5kZXgoJHRhaWwpO1xuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID4gMCkgeyBjYXJldCsrOyB9XG5cdFxuXHRcdFx0XHRmb3IgKGkgPSAwLCBuID0gc2VsZi4kYWN0aXZlSXRlbXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0dmFsdWVzLnB1c2goJChzZWxmLiRhY3RpdmVJdGVtc1tpXSkuYXR0cignZGF0YS12YWx1ZScpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKChzZWxmLmlzRm9jdXNlZCB8fCBzZWxmLnNldHRpbmdzLm1vZGUgPT09ICdzaW5nbGUnKSAmJiBzZWxmLml0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAoZGlyZWN0aW9uIDwgMCAmJiBzZWxlY3Rpb24uc3RhcnQgPT09IDAgJiYgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKHNlbGYuaXRlbXNbc2VsZi5jYXJldFBvcyAtIDFdKTtcblx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPiAwICYmIHNlbGVjdGlvbi5zdGFydCA9PT0gc2VsZi4kY29udHJvbF9pbnB1dC52YWwoKS5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChzZWxmLml0ZW1zW3NlbGYuY2FyZXRQb3NdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGFsbG93IHRoZSBjYWxsYmFjayB0byBhYm9ydFxuXHRcdFx0aWYgKCF2YWx1ZXMubGVuZ3RoIHx8ICh0eXBlb2Ygc2VsZi5zZXR0aW5ncy5vbkRlbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzZWxmLnNldHRpbmdzLm9uRGVsZXRlLmFwcGx5KHNlbGYsIFt2YWx1ZXNdKSA9PT0gZmFsc2UpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBwZXJmb3JtIHJlbW92YWxcblx0XHRcdGlmICh0eXBlb2YgY2FyZXQgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHNlbGYuc2V0Q2FyZXQoY2FyZXQpO1xuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKHZhbHVlcy5sZW5ndGgpIHtcblx0XHRcdFx0c2VsZi5yZW1vdmVJdGVtKHZhbHVlcy5wb3AoKSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0c2VsZi5zaG93SW5wdXQoKTtcblx0XHRcdHNlbGYucG9zaXRpb25Ecm9wZG93bigpO1xuXHRcdFx0c2VsZi5yZWZyZXNoT3B0aW9ucyh0cnVlKTtcblx0XG5cdFx0XHQvLyBzZWxlY3QgcHJldmlvdXMgb3B0aW9uXG5cdFx0XHRpZiAob3B0aW9uX3NlbGVjdCkge1xuXHRcdFx0XHQkb3B0aW9uX3NlbGVjdCA9IHNlbGYuZ2V0T3B0aW9uKG9wdGlvbl9zZWxlY3QpO1xuXHRcdFx0XHRpZiAoJG9wdGlvbl9zZWxlY3QubGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2VsZi5zZXRBY3RpdmVPcHRpb24oJG9wdGlvbl9zZWxlY3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogU2VsZWN0cyB0aGUgcHJldmlvdXMgLyBuZXh0IGl0ZW0gKGRlcGVuZGluZ1xuXHRcdCAqIG9uIHRoZSBgZGlyZWN0aW9uYCBhcmd1bWVudCkuXG5cdFx0ICpcblx0XHQgKiA+IDAgLSByaWdodFxuXHRcdCAqIDwgMCAtIGxlZnRcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7aW50fSBkaXJlY3Rpb25cblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZSAob3B0aW9uYWwpXG5cdFx0ICovXG5cdFx0YWR2YW5jZVNlbGVjdGlvbjogZnVuY3Rpb24oZGlyZWN0aW9uLCBlKSB7XG5cdFx0XHR2YXIgdGFpbCwgc2VsZWN0aW9uLCBpZHgsIHZhbHVlTGVuZ3RoLCBjdXJzb3JBdEVkZ2UsICR0YWlsO1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IDApIHJldHVybjtcblx0XHRcdGlmIChzZWxmLnJ0bCkgZGlyZWN0aW9uICo9IC0xO1xuXHRcblx0XHRcdHRhaWwgPSBkaXJlY3Rpb24gPiAwID8gJ2xhc3QnIDogJ2ZpcnN0Jztcblx0XHRcdHNlbGVjdGlvbiA9IGdldFNlbGVjdGlvbihzZWxmLiRjb250cm9sX2lucHV0WzBdKTtcblx0XG5cdFx0XHRpZiAoc2VsZi5pc0ZvY3VzZWQgJiYgIXNlbGYuaXNJbnB1dEhpZGRlbikge1xuXHRcdFx0XHR2YWx1ZUxlbmd0aCA9IHNlbGYuJGNvbnRyb2xfaW5wdXQudmFsKCkubGVuZ3RoO1xuXHRcdFx0XHRjdXJzb3JBdEVkZ2UgPSBkaXJlY3Rpb24gPCAwXG5cdFx0XHRcdFx0PyBzZWxlY3Rpb24uc3RhcnQgPT09IDAgJiYgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMFxuXHRcdFx0XHRcdDogc2VsZWN0aW9uLnN0YXJ0ID09PSB2YWx1ZUxlbmd0aDtcblx0XG5cdFx0XHRcdGlmIChjdXJzb3JBdEVkZ2UgJiYgIXZhbHVlTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2VsZi5hZHZhbmNlQ2FyZXQoZGlyZWN0aW9uLCBlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHRhaWwgPSBzZWxmLiRjb250cm9sLmNoaWxkcmVuKCcuYWN0aXZlOicgKyB0YWlsKTtcblx0XHRcdFx0aWYgKCR0YWlsLmxlbmd0aCkge1xuXHRcdFx0XHRcdGlkeCA9IHNlbGYuJGNvbnRyb2wuY2hpbGRyZW4oJzpub3QoaW5wdXQpJykuaW5kZXgoJHRhaWwpO1xuXHRcdFx0XHRcdHNlbGYuc2V0QWN0aXZlSXRlbShudWxsKTtcblx0XHRcdFx0XHRzZWxmLnNldENhcmV0KGRpcmVjdGlvbiA+IDAgPyBpZHggKyAxIDogaWR4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIE1vdmVzIHRoZSBjYXJldCBsZWZ0IC8gcmlnaHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGUgKG9wdGlvbmFsKVxuXHRcdCAqL1xuXHRcdGFkdmFuY2VDYXJldDogZnVuY3Rpb24oZGlyZWN0aW9uLCBlKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsIGZuLCAkYWRqO1xuXHRcblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IDApIHJldHVybjtcblx0XG5cdFx0XHRmbiA9IGRpcmVjdGlvbiA+IDAgPyAnbmV4dCcgOiAncHJldic7XG5cdFx0XHRpZiAoc2VsZi5pc1NoaWZ0RG93bikge1xuXHRcdFx0XHQkYWRqID0gc2VsZi4kY29udHJvbF9pbnB1dFtmbl0oKTtcblx0XHRcdFx0aWYgKCRhZGoubGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2VsZi5oaWRlSW5wdXQoKTtcblx0XHRcdFx0XHRzZWxmLnNldEFjdGl2ZUl0ZW0oJGFkaik7XG5cdFx0XHRcdFx0ZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuc2V0Q2FyZXQoc2VsZi5jYXJldFBvcyArIGRpcmVjdGlvbik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogTW92ZXMgdGhlIGNhcmV0IHRvIHRoZSBzcGVjaWZpZWQgaW5kZXguXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2ludH0gaVxuXHRcdCAqL1xuXHRcdHNldENhcmV0OiBmdW5jdGlvbihpKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ3NpbmdsZScpIHtcblx0XHRcdFx0aSA9IHNlbGYuaXRlbXMubGVuZ3RoO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNlbGYuaXRlbXMubGVuZ3RoLCBpKSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0aWYoIXNlbGYuaXNQZW5kaW5nKSB7XG5cdFx0XHRcdC8vIHRoZSBpbnB1dCBtdXN0IGJlIG1vdmVkIGJ5IGxlYXZpbmcgaXQgaW4gcGxhY2UgYW5kIG1vdmluZyB0aGVcblx0XHRcdFx0Ly8gc2libGluZ3MsIGR1ZSB0byB0aGUgZmFjdCB0aGF0IGZvY3VzIGNhbm5vdCBiZSByZXN0b3JlZCBvbmNlIGxvc3Rcblx0XHRcdFx0Ly8gb24gbW9iaWxlIHdlYmtpdCBkZXZpY2VzXG5cdFx0XHRcdHZhciBqLCBuLCBmbiwgJGNoaWxkcmVuLCAkY2hpbGQ7XG5cdFx0XHRcdCRjaGlsZHJlbiA9IHNlbGYuJGNvbnRyb2wuY2hpbGRyZW4oJzpub3QoaW5wdXQpJyk7XG5cdFx0XHRcdGZvciAoaiA9IDAsIG4gPSAkY2hpbGRyZW4ubGVuZ3RoOyBqIDwgbjsgaisrKSB7XG5cdFx0XHRcdFx0JGNoaWxkID0gJCgkY2hpbGRyZW5bal0pLmRldGFjaCgpO1xuXHRcdFx0XHRcdGlmIChqIDwgIGkpIHtcblx0XHRcdFx0XHRcdHNlbGYuJGNvbnRyb2xfaW5wdXQuYmVmb3JlKCRjaGlsZCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuJGNvbnRyb2wuYXBwZW5kKCRjaGlsZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0c2VsZi5jYXJldFBvcyA9IGk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogRGlzYWJsZXMgdXNlciBpbnB1dCBvbiB0aGUgY29udHJvbC4gVXNlZCB3aGlsZVxuXHRcdCAqIGl0ZW1zIGFyZSBiZWluZyBhc3luY2hyb25vdXNseSBjcmVhdGVkLlxuXHRcdCAqL1xuXHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0dGhpcy5pc0xvY2tlZCA9IHRydWU7XG5cdFx0XHR0aGlzLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlLWVuYWJsZXMgdXNlciBpbnB1dCBvbiB0aGUgY29udHJvbC5cblx0XHQgKi9cblx0XHR1bmxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5pc0xvY2tlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5yZWZyZXNoU3RhdGUoKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBEaXNhYmxlcyB1c2VyIGlucHV0IG9uIHRoZSBjb250cm9sIGNvbXBsZXRlbHkuXG5cdFx0ICogV2hpbGUgZGlzYWJsZWQsIGl0IGNhbm5vdCByZWNlaXZlIGZvY3VzLlxuXHRcdCAqL1xuXHRcdGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi4kaW5wdXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdHNlbGYuJGNvbnRyb2xfaW5wdXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS5wcm9wKCd0YWJpbmRleCcsIC0xKTtcblx0XHRcdHNlbGYuaXNEaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRzZWxmLmxvY2soKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBFbmFibGVzIHRoZSBjb250cm9sIHNvIHRoYXQgaXQgY2FuIHJlc3BvbmRcblx0XHQgKiB0byBmb2N1cyBhbmQgdXNlciBpbnB1dC5cblx0XHQgKi9cblx0XHRlbmFibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi4kaW5wdXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHRzZWxmLiRjb250cm9sX2lucHV0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLnByb3AoJ3RhYmluZGV4Jywgc2VsZi50YWJJbmRleCk7XG5cdFx0XHRzZWxmLmlzRGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHNlbGYudW5sb2NrKCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogQ29tcGxldGVseSBkZXN0cm95cyB0aGUgY29udHJvbCBhbmRcblx0XHQgKiB1bmJpbmRzIGFsbCBldmVudCBsaXN0ZW5lcnMgc28gdGhhdCBpdCBjYW5cblx0XHQgKiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cblx0XHQgKi9cblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciBldmVudE5TID0gc2VsZi5ldmVudE5TO1xuXHRcdFx0dmFyIHJldmVydFNldHRpbmdzID0gc2VsZi5yZXZlcnRTZXR0aW5ncztcblx0XG5cdFx0XHRzZWxmLnRyaWdnZXIoJ2Rlc3Ryb3knKTtcblx0XHRcdHNlbGYub2ZmKCk7XG5cdFx0XHRzZWxmLiR3cmFwcGVyLnJlbW92ZSgpO1xuXHRcdFx0c2VsZi4kZHJvcGRvd24ucmVtb3ZlKCk7XG5cdFxuXHRcdFx0c2VsZi4kaW5wdXRcblx0XHRcdFx0Lmh0bWwoJycpXG5cdFx0XHRcdC5hcHBlbmQocmV2ZXJ0U2V0dGluZ3MuJGNoaWxkcmVuKVxuXHRcdFx0XHQucmVtb3ZlQXR0cigndGFiaW5kZXgnKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ3NlbGVjdGl6ZWQnKVxuXHRcdFx0XHQuYXR0cih7dGFiaW5kZXg6IHJldmVydFNldHRpbmdzLnRhYmluZGV4fSlcblx0XHRcdFx0LnNob3coKTtcblx0XG5cdFx0XHRzZWxmLiRjb250cm9sX2lucHV0LnJlbW92ZURhdGEoJ2dyb3cnKTtcblx0XHRcdHNlbGYuJGlucHV0LnJlbW92ZURhdGEoJ3NlbGVjdGl6ZScpO1xuXHRcblx0XHRcdCQod2luZG93KS5vZmYoZXZlbnROUyk7XG5cdFx0XHQkKGRvY3VtZW50KS5vZmYoZXZlbnROUyk7XG5cdFx0XHQkKGRvY3VtZW50LmJvZHkpLm9mZihldmVudE5TKTtcblx0XG5cdFx0XHRkZWxldGUgc2VsZi4kaW5wdXRbMF0uc2VsZWN0aXplO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIEEgaGVscGVyIG1ldGhvZCBmb3IgcmVuZGVyaW5nIFwiaXRlbVwiIGFuZFxuXHRcdCAqIFwib3B0aW9uXCIgdGVtcGxhdGVzLCBnaXZlbiB0aGUgZGF0YS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZU5hbWVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0cmVuZGVyOiBmdW5jdGlvbih0ZW1wbGF0ZU5hbWUsIGRhdGEpIHtcblx0XHRcdHZhciB2YWx1ZSwgaWQsIGxhYmVsO1xuXHRcdFx0dmFyIGh0bWwgPSAnJztcblx0XHRcdHZhciBjYWNoZSA9IGZhbHNlO1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIHJlZ2V4X3RhZyA9IC9eW1xcdCBcXHJcXG5dKjwoW2Etel1bYS16MC05XFwtX10qKD86XFw6W2Etel1bYS16MC05XFwtX10qKT8pL2k7XG5cdFxuXHRcdFx0aWYgKHRlbXBsYXRlTmFtZSA9PT0gJ29wdGlvbicgfHwgdGVtcGxhdGVOYW1lID09PSAnaXRlbScpIHtcblx0XHRcdFx0dmFsdWUgPSBoYXNoX2tleShkYXRhW3NlbGYuc2V0dGluZ3MudmFsdWVGaWVsZF0pO1xuXHRcdFx0XHRjYWNoZSA9ICEhdmFsdWU7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gcHVsbCBtYXJrdXAgZnJvbSBjYWNoZSBpZiBpdCBleGlzdHNcblx0XHRcdGlmIChjYWNoZSkge1xuXHRcdFx0XHRpZiAoIWlzc2V0KHNlbGYucmVuZGVyQ2FjaGVbdGVtcGxhdGVOYW1lXSkpIHtcblx0XHRcdFx0XHRzZWxmLnJlbmRlckNhY2hlW3RlbXBsYXRlTmFtZV0gPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2VsZi5yZW5kZXJDYWNoZVt0ZW1wbGF0ZU5hbWVdLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuXHRcdFx0XHRcdHJldHVybiBzZWxmLnJlbmRlckNhY2hlW3RlbXBsYXRlTmFtZV1bdmFsdWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gcmVuZGVyIG1hcmt1cFxuXHRcdFx0aHRtbCA9IHNlbGYuc2V0dGluZ3MucmVuZGVyW3RlbXBsYXRlTmFtZV0uYXBwbHkodGhpcywgW2RhdGEsIGVzY2FwZV9odG1sXSk7XG5cdFxuXHRcdFx0Ly8gYWRkIG1hbmRhdG9yeSBhdHRyaWJ1dGVzXG5cdFx0XHRpZiAodGVtcGxhdGVOYW1lID09PSAnb3B0aW9uJyB8fCB0ZW1wbGF0ZU5hbWUgPT09ICdvcHRpb25fY3JlYXRlJykge1xuXHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4X3RhZywgJzwkMSBkYXRhLXNlbGVjdGFibGUnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0ZW1wbGF0ZU5hbWUgPT09ICdvcHRncm91cCcpIHtcblx0XHRcdFx0aWQgPSBkYXRhW3NlbGYuc2V0dGluZ3Mub3B0Z3JvdXBWYWx1ZUZpZWxkXSB8fCAnJztcblx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleF90YWcsICc8JDEgZGF0YS1ncm91cD1cIicgKyBlc2NhcGVfcmVwbGFjZShlc2NhcGVfaHRtbChpZCkpICsgJ1wiJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGVtcGxhdGVOYW1lID09PSAnb3B0aW9uJyB8fCB0ZW1wbGF0ZU5hbWUgPT09ICdpdGVtJykge1xuXHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4X3RhZywgJzwkMSBkYXRhLXZhbHVlPVwiJyArIGVzY2FwZV9yZXBsYWNlKGVzY2FwZV9odG1sKHZhbHVlIHx8ICcnKSkgKyAnXCInKTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyB1cGRhdGUgY2FjaGVcblx0XHRcdGlmIChjYWNoZSkge1xuXHRcdFx0XHRzZWxmLnJlbmRlckNhY2hlW3RlbXBsYXRlTmFtZV1bdmFsdWVdID0gaHRtbDtcblx0XHRcdH1cblx0XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBDbGVhcnMgdGhlIHJlbmRlciBjYWNoZSBmb3IgYSB0ZW1wbGF0ZS4gSWZcblx0XHQgKiBubyB0ZW1wbGF0ZSBpcyBnaXZlbiwgY2xlYXJzIGFsbCByZW5kZXJcblx0XHQgKiBjYWNoZXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVOYW1lXG5cdFx0ICovXG5cdFx0Y2xlYXJDYWNoZTogZnVuY3Rpb24odGVtcGxhdGVOYW1lKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRpZiAodHlwZW9mIHRlbXBsYXRlTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0c2VsZi5yZW5kZXJDYWNoZSA9IHt9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVsZXRlIHNlbGYucmVuZGVyQ2FjaGVbdGVtcGxhdGVOYW1lXTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgdGhlXG5cdFx0ICogY3JlYXRlIGl0ZW0gcHJvbXB0LCBnaXZlbiBhIHVzZXIgaW5wdXQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNhbkNyZWF0ZTogZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdGlmICghc2VsZi5zZXR0aW5ncy5jcmVhdGUpIHJldHVybiBmYWxzZTtcblx0XHRcdHZhciBmaWx0ZXIgPSBzZWxmLnNldHRpbmdzLmNyZWF0ZUZpbHRlcjtcblx0XHRcdHJldHVybiBpbnB1dC5sZW5ndGhcblx0XHRcdFx0JiYgKHR5cGVvZiBmaWx0ZXIgIT09ICdmdW5jdGlvbicgfHwgZmlsdGVyLmFwcGx5KHNlbGYsIFtpbnB1dF0pKVxuXHRcdFx0XHQmJiAodHlwZW9mIGZpbHRlciAhPT0gJ3N0cmluZycgfHwgbmV3IFJlZ0V4cChmaWx0ZXIpLnRlc3QoaW5wdXQpKVxuXHRcdFx0XHQmJiAoIShmaWx0ZXIgaW5zdGFuY2VvZiBSZWdFeHApIHx8IGZpbHRlci50ZXN0KGlucHV0KSk7XG5cdFx0fVxuXHRcblx0fSk7XG5cdFxuXHRcblx0U2VsZWN0aXplLmNvdW50ID0gMDtcblx0U2VsZWN0aXplLmRlZmF1bHRzID0ge1xuXHRcdG9wdGlvbnM6IFtdLFxuXHRcdG9wdGdyb3VwczogW10sXG5cdFxuXHRcdHBsdWdpbnM6IFtdLFxuXHRcdGRlbGltaXRlcjogJywnLFxuXHRcdHNwbGl0T246IG51bGwsIC8vIHJlZ2V4cCBvciBzdHJpbmcgZm9yIHNwbGl0dGluZyB1cCB2YWx1ZXMgZnJvbSBhIHBhc3RlIGNvbW1hbmRcblx0XHRwZXJzaXN0OiB0cnVlLFxuXHRcdGRpYWNyaXRpY3M6IHRydWUsXG5cdFx0Y3JlYXRlOiBmYWxzZSxcblx0XHRjcmVhdGVPbkJsdXI6IGZhbHNlLFxuXHRcdGNyZWF0ZUZpbHRlcjogbnVsbCxcblx0XHRoaWdobGlnaHQ6IHRydWUsXG5cdFx0b3Blbk9uRm9jdXM6IHRydWUsXG5cdFx0bWF4T3B0aW9uczogMTAwMCxcblx0XHRtYXhJdGVtczogbnVsbCxcblx0XHRoaWRlU2VsZWN0ZWQ6IG51bGwsXG5cdFx0YWRkUHJlY2VkZW5jZTogZmFsc2UsXG5cdFx0c2VsZWN0T25UYWI6IGZhbHNlLFxuXHRcdHByZWxvYWQ6IGZhbHNlLFxuXHRcdGFsbG93RW1wdHlPcHRpb246IGZhbHNlLFxuXHRcdGNsb3NlQWZ0ZXJTZWxlY3Q6IGZhbHNlLFxuXHRcblx0XHRzY3JvbGxEdXJhdGlvbjogNjAsXG5cdFx0bG9hZFRocm90dGxlOiAzMDAsXG5cdFx0bG9hZGluZ0NsYXNzOiAnbG9hZGluZycsXG5cdFxuXHRcdGRhdGFBdHRyOiAnZGF0YS1kYXRhJyxcblx0XHRvcHRncm91cEZpZWxkOiAnb3B0Z3JvdXAnLFxuXHRcdHZhbHVlRmllbGQ6ICd2YWx1ZScsXG5cdFx0bGFiZWxGaWVsZDogJ3RleHQnLFxuXHRcdG9wdGdyb3VwTGFiZWxGaWVsZDogJ2xhYmVsJyxcblx0XHRvcHRncm91cFZhbHVlRmllbGQ6ICd2YWx1ZScsXG5cdFx0bG9ja09wdGdyb3VwT3JkZXI6IGZhbHNlLFxuXHRcblx0XHRzb3J0RmllbGQ6ICckb3JkZXInLFxuXHRcdHNlYXJjaEZpZWxkOiBbJ3RleHQnXSxcblx0XHRzZWFyY2hDb25qdW5jdGlvbjogJ2FuZCcsXG5cdFxuXHRcdG1vZGU6IG51bGwsXG5cdFx0d3JhcHBlckNsYXNzOiAnc2VsZWN0aXplLWNvbnRyb2wnLFxuXHRcdGlucHV0Q2xhc3M6ICdzZWxlY3RpemUtaW5wdXQnLFxuXHRcdGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RpemUtZHJvcGRvd24nLFxuXHRcdGRyb3Bkb3duQ29udGVudENsYXNzOiAnc2VsZWN0aXplLWRyb3Bkb3duLWNvbnRlbnQnLFxuXHRcblx0XHRkcm9wZG93blBhcmVudDogbnVsbCxcblx0XG5cdFx0Y29weUNsYXNzZXNUb0Ryb3Bkb3duOiB0cnVlLFxuXHRcblx0XHQvKlxuXHRcdGxvYWQgICAgICAgICAgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24ocXVlcnksIGNhbGxiYWNrKSB7IC4uLiB9XG5cdFx0c2NvcmUgICAgICAgICAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbihzZWFyY2gpIHsgLi4uIH1cblx0XHRvbkluaXRpYWxpemUgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKCkgeyAuLi4gfVxuXHRcdG9uQ2hhbmdlICAgICAgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24odmFsdWUpIHsgLi4uIH1cblx0XHRvbkl0ZW1BZGQgICAgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKHZhbHVlLCAkaXRlbSkgeyAuLi4gfVxuXHRcdG9uSXRlbVJlbW92ZSAgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24odmFsdWUpIHsgLi4uIH1cblx0XHRvbkNsZWFyICAgICAgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKCkgeyAuLi4gfVxuXHRcdG9uT3B0aW9uQWRkICAgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24odmFsdWUsIGRhdGEpIHsgLi4uIH1cblx0XHRvbk9wdGlvblJlbW92ZSAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKHZhbHVlKSB7IC4uLiB9XG5cdFx0b25PcHRpb25DbGVhciAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbigpIHsgLi4uIH1cblx0XHRvbk9wdGlvbkdyb3VwQWRkICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKGlkLCBkYXRhKSB7IC4uLiB9XG5cdFx0b25PcHRpb25Hcm91cFJlbW92ZSAgOiBudWxsLCAvLyBmdW5jdGlvbihpZCkgeyAuLi4gfVxuXHRcdG9uT3B0aW9uR3JvdXBDbGVhciAgIDogbnVsbCwgLy8gZnVuY3Rpb24oKSB7IC4uLiB9XG5cdFx0b25Ecm9wZG93bk9wZW4gICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbigkZHJvcGRvd24pIHsgLi4uIH1cblx0XHRvbkRyb3Bkb3duQ2xvc2UgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKCRkcm9wZG93bikgeyAuLi4gfVxuXHRcdG9uVHlwZSAgICAgICAgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24oc3RyKSB7IC4uLiB9XG5cdFx0b25EZWxldGUgICAgICAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbih2YWx1ZXMpIHsgLi4uIH1cblx0XHQqL1xuXHRcblx0XHRyZW5kZXI6IHtcblx0XHRcdC8qXG5cdFx0XHRpdGVtOiBudWxsLFxuXHRcdFx0b3B0Z3JvdXA6IG51bGwsXG5cdFx0XHRvcHRncm91cF9oZWFkZXI6IG51bGwsXG5cdFx0XHRvcHRpb246IG51bGwsXG5cdFx0XHRvcHRpb25fY3JlYXRlOiBudWxsXG5cdFx0XHQqL1xuXHRcdH1cblx0fTtcblx0XG5cdFxuXHQkLmZuLnNlbGVjdGl6ZSA9IGZ1bmN0aW9uKHNldHRpbmdzX3VzZXIpIHtcblx0XHR2YXIgZGVmYXVsdHMgICAgICAgICAgICAgPSAkLmZuLnNlbGVjdGl6ZS5kZWZhdWx0cztcblx0XHR2YXIgc2V0dGluZ3MgICAgICAgICAgICAgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHNldHRpbmdzX3VzZXIpO1xuXHRcdHZhciBhdHRyX2RhdGEgICAgICAgICAgICA9IHNldHRpbmdzLmRhdGFBdHRyO1xuXHRcdHZhciBmaWVsZF9sYWJlbCAgICAgICAgICA9IHNldHRpbmdzLmxhYmVsRmllbGQ7XG5cdFx0dmFyIGZpZWxkX3ZhbHVlICAgICAgICAgID0gc2V0dGluZ3MudmFsdWVGaWVsZDtcblx0XHR2YXIgZmllbGRfb3B0Z3JvdXAgICAgICAgPSBzZXR0aW5ncy5vcHRncm91cEZpZWxkO1xuXHRcdHZhciBmaWVsZF9vcHRncm91cF9sYWJlbCA9IHNldHRpbmdzLm9wdGdyb3VwTGFiZWxGaWVsZDtcblx0XHR2YXIgZmllbGRfb3B0Z3JvdXBfdmFsdWUgPSBzZXR0aW5ncy5vcHRncm91cFZhbHVlRmllbGQ7XG5cdFxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemVzIHNlbGVjdGl6ZSBmcm9tIGEgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+IGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJGlucHV0XG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzX2VsZW1lbnRcblx0XHQgKi9cblx0XHR2YXIgaW5pdF90ZXh0Ym94ID0gZnVuY3Rpb24oJGlucHV0LCBzZXR0aW5nc19lbGVtZW50KSB7XG5cdFx0XHR2YXIgaSwgbiwgdmFsdWVzLCBvcHRpb247XG5cdFxuXHRcdFx0dmFyIGRhdGFfcmF3ID0gJGlucHV0LmF0dHIoYXR0cl9kYXRhKTtcblx0XG5cdFx0XHRpZiAoIWRhdGFfcmF3KSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9ICQudHJpbSgkaW5wdXQudmFsKCkgfHwgJycpO1xuXHRcdFx0XHRpZiAoIXNldHRpbmdzLmFsbG93RW1wdHlPcHRpb24gJiYgIXZhbHVlLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZS5zcGxpdChzZXR0aW5ncy5kZWxpbWl0ZXIpO1xuXHRcdFx0XHRmb3IgKGkgPSAwLCBuID0gdmFsdWVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdG9wdGlvbiA9IHt9O1xuXHRcdFx0XHRcdG9wdGlvbltmaWVsZF9sYWJlbF0gPSB2YWx1ZXNbaV07XG5cdFx0XHRcdFx0b3B0aW9uW2ZpZWxkX3ZhbHVlXSA9IHZhbHVlc1tpXTtcblx0XHRcdFx0XHRzZXR0aW5nc19lbGVtZW50Lm9wdGlvbnMucHVzaChvcHRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldHRpbmdzX2VsZW1lbnQuaXRlbXMgPSB2YWx1ZXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXR0aW5nc19lbGVtZW50Lm9wdGlvbnMgPSBKU09OLnBhcnNlKGRhdGFfcmF3KTtcblx0XHRcdFx0Zm9yIChpID0gMCwgbiA9IHNldHRpbmdzX2VsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHRzZXR0aW5nc19lbGVtZW50Lml0ZW1zLnB1c2goc2V0dGluZ3NfZWxlbWVudC5vcHRpb25zW2ldW2ZpZWxkX3ZhbHVlXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplcyBzZWxlY3RpemUgZnJvbSBhIDxzZWxlY3Q+IGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJGlucHV0XG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzX2VsZW1lbnRcblx0XHQgKi9cblx0XHR2YXIgaW5pdF9zZWxlY3QgPSBmdW5jdGlvbigkaW5wdXQsIHNldHRpbmdzX2VsZW1lbnQpIHtcblx0XHRcdHZhciBpLCBuLCB0YWdOYW1lLCAkY2hpbGRyZW4sIG9yZGVyID0gMDtcblx0XHRcdHZhciBvcHRpb25zID0gc2V0dGluZ3NfZWxlbWVudC5vcHRpb25zO1xuXHRcdFx0dmFyIG9wdGlvbnNNYXAgPSB7fTtcblx0XG5cdFx0XHR2YXIgcmVhZERhdGEgPSBmdW5jdGlvbigkZWwpIHtcblx0XHRcdFx0dmFyIGRhdGEgPSBhdHRyX2RhdGEgJiYgJGVsLmF0dHIoYXR0cl9kYXRhKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyAmJiBkYXRhLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fTtcblx0XG5cdFx0XHR2YXIgYWRkT3B0aW9uID0gZnVuY3Rpb24oJG9wdGlvbiwgZ3JvdXApIHtcblx0XHRcdFx0JG9wdGlvbiA9ICQoJG9wdGlvbik7XG5cdFxuXHRcdFx0XHR2YXIgdmFsdWUgPSBoYXNoX2tleSgkb3B0aW9uLmF0dHIoJ3ZhbHVlJykpO1xuXHRcdFx0XHRpZiAoIXZhbHVlICYmICFzZXR0aW5ncy5hbGxvd0VtcHR5T3B0aW9uKSByZXR1cm47XG5cdFxuXHRcdFx0XHQvLyBpZiB0aGUgb3B0aW9uIGFscmVhZHkgZXhpc3RzLCBpdCdzIHByb2JhYmx5IGJlZW5cblx0XHRcdFx0Ly8gZHVwbGljYXRlZCBpbiBhbm90aGVyIG9wdGdyb3VwLiBpbiB0aGlzIGNhc2UsIHB1c2hcblx0XHRcdFx0Ly8gdGhlIGN1cnJlbnQgZ3JvdXAgdG8gdGhlIFwib3B0Z3JvdXBcIiBwcm9wZXJ0eSBvbiB0aGVcblx0XHRcdFx0Ly8gZXhpc3Rpbmcgb3B0aW9uIHNvIHRoYXQgaXQncyByZW5kZXJlZCBpbiBib3RoIHBsYWNlcy5cblx0XHRcdFx0aWYgKG9wdGlvbnNNYXAuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG5cdFx0XHRcdFx0aWYgKGdyb3VwKSB7XG5cdFx0XHRcdFx0XHR2YXIgYXJyID0gb3B0aW9uc01hcFt2YWx1ZV1bZmllbGRfb3B0Z3JvdXBdO1xuXHRcdFx0XHRcdFx0aWYgKCFhcnIpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9uc01hcFt2YWx1ZV1bZmllbGRfb3B0Z3JvdXBdID0gZ3JvdXA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCEkLmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zTWFwW3ZhbHVlXVtmaWVsZF9vcHRncm91cF0gPSBbYXJyLCBncm91cF07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRhcnIucHVzaChncm91cCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0dmFyIG9wdGlvbiAgICAgICAgICAgICA9IHJlYWREYXRhKCRvcHRpb24pIHx8IHt9O1xuXHRcdFx0XHRvcHRpb25bZmllbGRfbGFiZWxdICAgID0gb3B0aW9uW2ZpZWxkX2xhYmVsXSB8fCAkb3B0aW9uLnRleHQoKTtcblx0XHRcdFx0b3B0aW9uW2ZpZWxkX3ZhbHVlXSAgICA9IG9wdGlvbltmaWVsZF92YWx1ZV0gfHwgdmFsdWU7XG5cdFx0XHRcdG9wdGlvbltmaWVsZF9vcHRncm91cF0gPSBvcHRpb25bZmllbGRfb3B0Z3JvdXBdIHx8IGdyb3VwO1xuXHRcblx0XHRcdFx0b3B0aW9uc01hcFt2YWx1ZV0gPSBvcHRpb247XG5cdFx0XHRcdG9wdGlvbnMucHVzaChvcHRpb24pO1xuXHRcblx0XHRcdFx0aWYgKCRvcHRpb24uaXMoJzpzZWxlY3RlZCcpKSB7XG5cdFx0XHRcdFx0c2V0dGluZ3NfZWxlbWVudC5pdGVtcy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XG5cdFx0XHR2YXIgYWRkR3JvdXAgPSBmdW5jdGlvbigkb3B0Z3JvdXApIHtcblx0XHRcdFx0dmFyIGksIG4sIGlkLCBvcHRncm91cCwgJG9wdGlvbnM7XG5cdFxuXHRcdFx0XHQkb3B0Z3JvdXAgPSAkKCRvcHRncm91cCk7XG5cdFx0XHRcdGlkID0gJG9wdGdyb3VwLmF0dHIoJ2xhYmVsJyk7XG5cdFxuXHRcdFx0XHRpZiAoaWQpIHtcblx0XHRcdFx0XHRvcHRncm91cCA9IHJlYWREYXRhKCRvcHRncm91cCkgfHwge307XG5cdFx0XHRcdFx0b3B0Z3JvdXBbZmllbGRfb3B0Z3JvdXBfbGFiZWxdID0gaWQ7XG5cdFx0XHRcdFx0b3B0Z3JvdXBbZmllbGRfb3B0Z3JvdXBfdmFsdWVdID0gaWQ7XG5cdFx0XHRcdFx0c2V0dGluZ3NfZWxlbWVudC5vcHRncm91cHMucHVzaChvcHRncm91cCk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdCRvcHRpb25zID0gJCgnb3B0aW9uJywgJG9wdGdyb3VwKTtcblx0XHRcdFx0Zm9yIChpID0gMCwgbiA9ICRvcHRpb25zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdGFkZE9wdGlvbigkb3B0aW9uc1tpXSwgaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcblx0XHRcdHNldHRpbmdzX2VsZW1lbnQubWF4SXRlbXMgPSAkaW5wdXQuYXR0cignbXVsdGlwbGUnKSA/IG51bGwgOiAxO1xuXHRcblx0XHRcdCRjaGlsZHJlbiA9ICRpbnB1dC5jaGlsZHJlbigpO1xuXHRcdFx0Zm9yIChpID0gMCwgbiA9ICRjaGlsZHJlbi5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0dGFnTmFtZSA9ICRjaGlsZHJlbltpXS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmICh0YWdOYW1lID09PSAnb3B0Z3JvdXAnKSB7XG5cdFx0XHRcdFx0YWRkR3JvdXAoJGNoaWxkcmVuW2ldKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0YWdOYW1lID09PSAnb3B0aW9uJykge1xuXHRcdFx0XHRcdGFkZE9wdGlvbigkY2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdGl6ZSkgcmV0dXJuO1xuXHRcblx0XHRcdHZhciBpbnN0YW5jZTtcblx0XHRcdHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuXHRcdFx0dmFyIHRhZ19uYW1lID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR2YXIgcGxhY2Vob2xkZXIgPSAkaW5wdXQuYXR0cigncGxhY2Vob2xkZXInKSB8fCAkaW5wdXQuYXR0cignZGF0YS1wbGFjZWhvbGRlcicpO1xuXHRcdFx0aWYgKCFwbGFjZWhvbGRlciAmJiAhc2V0dGluZ3MuYWxsb3dFbXB0eU9wdGlvbikge1xuXHRcdFx0XHRwbGFjZWhvbGRlciA9ICRpbnB1dC5jaGlsZHJlbignb3B0aW9uW3ZhbHVlPVwiXCJdJykudGV4dCgpO1xuXHRcdFx0fVxuXHRcblx0XHRcdHZhciBzZXR0aW5nc19lbGVtZW50ID0ge1xuXHRcdFx0XHQncGxhY2Vob2xkZXInIDogcGxhY2Vob2xkZXIsXG5cdFx0XHRcdCdvcHRpb25zJyAgICAgOiBbXSxcblx0XHRcdFx0J29wdGdyb3VwcycgICA6IFtdLFxuXHRcdFx0XHQnaXRlbXMnICAgICAgIDogW11cblx0XHRcdH07XG5cdFxuXHRcdFx0aWYgKHRhZ19uYW1lID09PSAnc2VsZWN0Jykge1xuXHRcdFx0XHRpbml0X3NlbGVjdCgkaW5wdXQsIHNldHRpbmdzX2VsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5pdF90ZXh0Ym94KCRpbnB1dCwgc2V0dGluZ3NfZWxlbWVudCk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UgPSBuZXcgU2VsZWN0aXplKCRpbnB1dCwgJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRzLCBzZXR0aW5nc19lbGVtZW50LCBzZXR0aW5nc191c2VyKSk7XG5cdFx0fSk7XG5cdH07XG5cdFxuXHQkLmZuLnNlbGVjdGl6ZS5kZWZhdWx0cyA9IFNlbGVjdGl6ZS5kZWZhdWx0cztcblx0JC5mbi5zZWxlY3RpemUuc3VwcG9ydCA9IHtcblx0XHR2YWxpZGl0eTogU1VQUE9SVFNfVkFMSURJVFlfQVBJXG5cdH07XG5cdFxuXHRcblx0U2VsZWN0aXplLmRlZmluZSgnZHJhZ19kcm9wJywgZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdGlmICghJC5mbi5zb3J0YWJsZSkgdGhyb3cgbmV3IEVycm9yKCdUaGUgXCJkcmFnX2Ryb3BcIiBwbHVnaW4gcmVxdWlyZXMgalF1ZXJ5IFVJIFwic29ydGFibGVcIi4nKTtcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5tb2RlICE9PSAnbXVsdGknKSByZXR1cm47XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRzZWxmLmxvY2sgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWwgPSBzZWxmLmxvY2s7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBzb3J0YWJsZSA9IHNlbGYuJGNvbnRyb2wuZGF0YSgnc29ydGFibGUnKTtcblx0XHRcdFx0aWYgKHNvcnRhYmxlKSBzb3J0YWJsZS5kaXNhYmxlKCk7XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXHRcblx0XHRzZWxmLnVubG9jayA9IChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IHNlbGYudW5sb2NrO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgc29ydGFibGUgPSBzZWxmLiRjb250cm9sLmRhdGEoJ3NvcnRhYmxlJyk7XG5cdFx0XHRcdGlmIChzb3J0YWJsZSkgc29ydGFibGUuZW5hYmxlKCk7XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXHRcblx0XHRzZWxmLnNldHVwID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gc2VsZi5zZXR1cDtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0b3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XG5cdFx0XHRcdHZhciAkY29udHJvbCA9IHNlbGYuJGNvbnRyb2wuc29ydGFibGUoe1xuXHRcdFx0XHRcdGl0ZW1zOiAnW2RhdGEtdmFsdWVdJyxcblx0XHRcdFx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcblx0XHRcdFx0XHRkaXNhYmxlZDogc2VsZi5pc0xvY2tlZCxcblx0XHRcdFx0XHRzdGFydDogZnVuY3Rpb24oZSwgdWkpIHtcblx0XHRcdFx0XHRcdHVpLnBsYWNlaG9sZGVyLmNzcygnd2lkdGgnLCB1aS5oZWxwZXIuY3NzKCd3aWR0aCcpKTtcblx0XHRcdFx0XHRcdCRjb250cm9sLmNzcyh7b3ZlcmZsb3c6ICd2aXNpYmxlJ30pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c3RvcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkY29udHJvbC5jc3Moe292ZXJmbG93OiAnaGlkZGVuJ30pO1xuXHRcdFx0XHRcdFx0dmFyIGFjdGl2ZSA9IHNlbGYuJGFjdGl2ZUl0ZW1zID8gc2VsZi4kYWN0aXZlSXRlbXMuc2xpY2UoKSA6IG51bGw7XG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVzID0gW107XG5cdFx0XHRcdFx0XHQkY29udHJvbC5jaGlsZHJlbignW2RhdGEtdmFsdWVdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFsdWVzLnB1c2goJCh0aGlzKS5hdHRyKCdkYXRhLXZhbHVlJykpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRzZWxmLnNldFZhbHVlKHZhbHVlcyk7XG5cdFx0XHRcdFx0XHRzZWxmLnNldEFjdGl2ZUl0ZW0oYWN0aXZlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXHRcblx0fSk7XG5cdFxuXHRTZWxlY3RpemUuZGVmaW5lKCdkcm9wZG93bl9oZWFkZXInLCBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0dGl0bGUgICAgICAgICA6ICdVbnRpdGxlZCcsXG5cdFx0XHRoZWFkZXJDbGFzcyAgIDogJ3NlbGVjdGl6ZS1kcm9wZG93bi1oZWFkZXInLFxuXHRcdFx0dGl0bGVSb3dDbGFzcyA6ICdzZWxlY3RpemUtZHJvcGRvd24taGVhZGVyLXRpdGxlJyxcblx0XHRcdGxhYmVsQ2xhc3MgICAgOiAnc2VsZWN0aXplLWRyb3Bkb3duLWhlYWRlci1sYWJlbCcsXG5cdFx0XHRjbG9zZUNsYXNzICAgIDogJ3NlbGVjdGl6ZS1kcm9wZG93bi1oZWFkZXItY2xvc2UnLFxuXHRcblx0XHRcdGh0bWw6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIicgKyBkYXRhLmhlYWRlckNsYXNzICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgZGF0YS50aXRsZVJvd0NsYXNzICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCInICsgZGF0YS5sYWJlbENsYXNzICsgJ1wiPicgKyBkYXRhLnRpdGxlICsgJzwvc3Bhbj4nICtcblx0XHRcdFx0XHRcdFx0JzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cIicgKyBkYXRhLmNsb3NlQ2xhc3MgKyAnXCI+JnRpbWVzOzwvYT4nICtcblx0XHRcdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdFx0XHQnPC9kaXY+J1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcblx0XHRzZWxmLnNldHVwID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gc2VsZi5zZXR1cDtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0b3JpZ2luYWwuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdFx0c2VsZi4kZHJvcGRvd25faGVhZGVyID0gJChvcHRpb25zLmh0bWwob3B0aW9ucykpO1xuXHRcdFx0XHRzZWxmLiRkcm9wZG93bi5wcmVwZW5kKHNlbGYuJGRyb3Bkb3duX2hlYWRlcik7XG5cdFx0XHR9O1xuXHRcdH0pKCk7XG5cdFxuXHR9KTtcblx0XG5cdFNlbGVjdGl6ZS5kZWZpbmUoJ29wdGdyb3VwX2NvbHVtbnMnLCBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0ZXF1YWxpemVXaWR0aCAgOiB0cnVlLFxuXHRcdFx0ZXF1YWxpemVIZWlnaHQgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFxuXHRcdHRoaXMuZ2V0QWRqYWNlbnRPcHRpb24gPSBmdW5jdGlvbigkb3B0aW9uLCBkaXJlY3Rpb24pIHtcblx0XHRcdHZhciAkb3B0aW9ucyA9ICRvcHRpb24uY2xvc2VzdCgnW2RhdGEtZ3JvdXBdJykuZmluZCgnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblx0XHRcdHZhciBpbmRleCAgICA9ICRvcHRpb25zLmluZGV4KCRvcHRpb24pICsgZGlyZWN0aW9uO1xuXHRcblx0XHRcdHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgJG9wdGlvbnMubGVuZ3RoID8gJG9wdGlvbnMuZXEoaW5kZXgpIDogJCgpO1xuXHRcdH07XG5cdFxuXHRcdHRoaXMub25LZXlEb3duID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gc2VsZi5vbktleURvd247XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2YXIgaW5kZXgsICRvcHRpb24sICRvcHRpb25zLCAkb3B0Z3JvdXA7XG5cdFxuXHRcdFx0XHRpZiAodGhpcy5pc09wZW4gJiYgKGUua2V5Q29kZSA9PT0gS0VZX0xFRlQgfHwgZS5rZXlDb2RlID09PSBLRVlfUklHSFQpKSB7XG5cdFx0XHRcdFx0c2VsZi5pZ25vcmVIb3ZlciA9IHRydWU7XG5cdFx0XHRcdFx0JG9wdGdyb3VwID0gdGhpcy4kYWN0aXZlT3B0aW9uLmNsb3Nlc3QoJ1tkYXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdGluZGV4ID0gJG9wdGdyb3VwLmZpbmQoJ1tkYXRhLXNlbGVjdGFibGVdJykuaW5kZXgodGhpcy4kYWN0aXZlT3B0aW9uKTtcblx0XG5cdFx0XHRcdFx0aWYoZS5rZXlDb2RlID09PSBLRVlfTEVGVCkge1xuXHRcdFx0XHRcdFx0JG9wdGdyb3VwID0gJG9wdGdyb3VwLnByZXYoJ1tkYXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkb3B0Z3JvdXAgPSAkb3B0Z3JvdXAubmV4dCgnW2RhdGEtZ3JvdXBdJyk7XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHQkb3B0aW9ucyA9ICRvcHRncm91cC5maW5kKCdbZGF0YS1zZWxlY3RhYmxlXScpO1xuXHRcdFx0XHRcdCRvcHRpb24gID0gJG9wdGlvbnMuZXEoTWF0aC5taW4oJG9wdGlvbnMubGVuZ3RoIC0gMSwgaW5kZXgpKTtcblx0XHRcdFx0XHRpZiAoJG9wdGlvbi5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0QWN0aXZlT3B0aW9uKCRvcHRpb24pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXHRcblx0XHR2YXIgZ2V0U2Nyb2xsYmFyV2lkdGggPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkaXY7XG5cdFx0XHR2YXIgd2lkdGggPSBnZXRTY3JvbGxiYXJXaWR0aC53aWR0aDtcblx0XHRcdHZhciBkb2MgPSBkb2N1bWVudDtcblx0XG5cdFx0XHRpZiAodHlwZW9mIHdpZHRoID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGRpdi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNTBweDt0b3A6LTUwcHg7b3ZlcmZsb3c6YXV0bztcIj48ZGl2IHN0eWxlPVwid2lkdGg6MXB4O2hlaWdodDoxMDBweDtcIj48L2Rpdj48L2Rpdj4nO1xuXHRcdFx0XHRkaXYgPSBkaXYuZmlyc3RDaGlsZDtcblx0XHRcdFx0ZG9jLmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRcdFx0d2lkdGggPSBnZXRTY3JvbGxiYXJXaWR0aC53aWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcblx0XHRcdFx0ZG9jLmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB3aWR0aDtcblx0XHR9O1xuXHRcblx0XHR2YXIgZXF1YWxpemVTaXplcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGksIG4sIGhlaWdodF9tYXgsIHdpZHRoLCB3aWR0aF9sYXN0LCB3aWR0aF9wYXJlbnQsICRvcHRncm91cHM7XG5cdFxuXHRcdFx0JG9wdGdyb3VwcyA9ICQoJ1tkYXRhLWdyb3VwXScsIHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQpO1xuXHRcdFx0biA9ICRvcHRncm91cHMubGVuZ3RoO1xuXHRcdFx0aWYgKCFuIHx8ICFzZWxmLiRkcm9wZG93bl9jb250ZW50LndpZHRoKCkpIHJldHVybjtcblx0XG5cdFx0XHRpZiAob3B0aW9ucy5lcXVhbGl6ZUhlaWdodCkge1xuXHRcdFx0XHRoZWlnaHRfbWF4ID0gMDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdGhlaWdodF9tYXggPSBNYXRoLm1heChoZWlnaHRfbWF4LCAkb3B0Z3JvdXBzLmVxKGkpLmhlaWdodCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkb3B0Z3JvdXBzLmNzcyh7aGVpZ2h0OiBoZWlnaHRfbWF4fSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0aWYgKG9wdGlvbnMuZXF1YWxpemVXaWR0aCkge1xuXHRcdFx0XHR3aWR0aF9wYXJlbnQgPSBzZWxmLiRkcm9wZG93bl9jb250ZW50LmlubmVyV2lkdGgoKSAtIGdldFNjcm9sbGJhcldpZHRoKCk7XG5cdFx0XHRcdHdpZHRoID0gTWF0aC5yb3VuZCh3aWR0aF9wYXJlbnQgLyBuKTtcblx0XHRcdFx0JG9wdGdyb3Vwcy5jc3Moe3dpZHRoOiB3aWR0aH0pO1xuXHRcdFx0XHRpZiAobiA+IDEpIHtcblx0XHRcdFx0XHR3aWR0aF9sYXN0ID0gd2lkdGhfcGFyZW50IC0gd2lkdGggKiAobiAtIDEpO1xuXHRcdFx0XHRcdCRvcHRncm91cHMuZXEobiAtIDEpLmNzcyh7d2lkdGg6IHdpZHRoX2xhc3R9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFxuXHRcdGlmIChvcHRpb25zLmVxdWFsaXplSGVpZ2h0IHx8IG9wdGlvbnMuZXF1YWxpemVXaWR0aCkge1xuXHRcdFx0aG9vay5hZnRlcih0aGlzLCAncG9zaXRpb25Ecm9wZG93bicsIGVxdWFsaXplU2l6ZXMpO1xuXHRcdFx0aG9vay5hZnRlcih0aGlzLCAncmVmcmVzaE9wdGlvbnMnLCBlcXVhbGl6ZVNpemVzKTtcblx0XHR9XG5cdFxuXHRcblx0fSk7XG5cdFxuXHRTZWxlY3RpemUuZGVmaW5lKCdyZW1vdmVfYnV0dG9uJywgZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdGlmICh0aGlzLnNldHRpbmdzLm1vZGUgPT09ICdzaW5nbGUnKSByZXR1cm47XG5cdFxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7XG5cdFx0XHRsYWJlbCAgICAgOiAnJnRpbWVzOycsXG5cdFx0XHR0aXRsZSAgICAgOiAnUmVtb3ZlJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdyZW1vdmUnLFxuXHRcdFx0YXBwZW5kICAgIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIGh0bWwgPSAnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiJyArIG9wdGlvbnMuY2xhc3NOYW1lICsgJ1wiIHRhYmluZGV4PVwiLTFcIiB0aXRsZT1cIicgKyBlc2NhcGVfaHRtbChvcHRpb25zLnRpdGxlKSArICdcIj4nICsgb3B0aW9ucy5sYWJlbCArICc8L2E+Jztcblx0XG5cdFx0LyoqXG5cdFx0ICogQXBwZW5kcyBhbiBlbGVtZW50IGFzIGEgY2hpbGQgKHdpdGggcmF3IEhUTUwpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxfY29udGFpbmVyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxfZWxlbWVudFxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cblx0XHQgKi9cblx0XHR2YXIgYXBwZW5kID0gZnVuY3Rpb24oaHRtbF9jb250YWluZXIsIGh0bWxfZWxlbWVudCkge1xuXHRcdFx0dmFyIHBvcyA9IGh0bWxfY29udGFpbmVyLnNlYXJjaCgvKDxcXC9bXj5dKz5cXHMqKSQvKTtcblx0XHRcdHJldHVybiBodG1sX2NvbnRhaW5lci5zdWJzdHJpbmcoMCwgcG9zKSArIGh0bWxfZWxlbWVudCArIGh0bWxfY29udGFpbmVyLnN1YnN0cmluZyhwb3MpO1xuXHRcdH07XG5cdFxuXHRcdHRoaXMuc2V0dXAgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWwgPSBzZWxmLnNldHVwO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBvdmVycmlkZSB0aGUgaXRlbSByZW5kZXJpbmcgbWV0aG9kIHRvIGFkZCB0aGUgYnV0dG9uIHRvIGVhY2hcblx0XHRcdFx0aWYgKG9wdGlvbnMuYXBwZW5kKSB7XG5cdFx0XHRcdFx0dmFyIHJlbmRlcl9pdGVtID0gc2VsZi5zZXR0aW5ncy5yZW5kZXIuaXRlbTtcblx0XHRcdFx0XHRzZWxmLnNldHRpbmdzLnJlbmRlci5pdGVtID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFwcGVuZChyZW5kZXJfaXRlbS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBodG1sKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcblx0XHRcdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyXG5cdFx0XHRcdHRoaXMuJGNvbnRyb2wub24oJ2NsaWNrJywgJy4nICsgb3B0aW9ucy5jbGFzc05hbWUsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaXNMb2NrZWQpIHJldHVybjtcblx0XG5cdFx0XHRcdFx0dmFyICRpdGVtID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpO1xuXHRcdFx0XHRcdHNlbGYuc2V0QWN0aXZlSXRlbSgkaXRlbSk7XG5cdFx0XHRcdFx0aWYgKHNlbGYuZGVsZXRlU2VsZWN0aW9uKCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuc2V0Q2FyZXQoc2VsZi5pdGVtcy5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFxuXHRcdFx0fTtcblx0XHR9KSgpO1xuXHRcblx0fSk7XG5cdFxuXHRTZWxlY3RpemUuZGVmaW5lKCdyZXN0b3JlX29uX2JhY2tzcGFjZScsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdG9wdGlvbnMudGV4dCA9IG9wdGlvbnMudGV4dCB8fCBmdW5jdGlvbihvcHRpb24pIHtcblx0XHRcdHJldHVybiBvcHRpb25bdGhpcy5zZXR0aW5ncy5sYWJlbEZpZWxkXTtcblx0XHR9O1xuXHRcblx0XHR0aGlzLm9uS2V5RG93biA9IChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IHNlbGYub25LZXlEb3duO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmFyIGluZGV4LCBvcHRpb247XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IEtFWV9CQUNLU1BBQ0UgJiYgdGhpcy4kY29udHJvbF9pbnB1dC52YWwoKSA9PT0gJycgJiYgIXRoaXMuJGFjdGl2ZUl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRcdGluZGV4ID0gdGhpcy5jYXJldFBvcyAtIDE7XG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0b3B0aW9uID0gdGhpcy5vcHRpb25zW3RoaXMuaXRlbXNbaW5kZXhdXTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmRlbGV0ZVNlbGVjdGlvbihlKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFRleHRib3hWYWx1ZShvcHRpb25zLnRleHQuYXBwbHkodGhpcywgW29wdGlvbl0pKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5yZWZyZXNoT3B0aW9ucyh0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9O1xuXHRcdH0pKCk7XG5cdH0pO1xuXHRcblxuXHRyZXR1cm4gU2VsZWN0aXplO1xufSkpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3NlbGVjdGl6ZS5qcy9kaXN0L2pzL3N0YW5kYWxvbmUvc2VsZWN0aXplLmpzXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zZWxlY3RpemUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NlbGVjdGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zZWxlY3RpemUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL3NlbGVjdGl6ZS5qcy9kaXN0L2Nzcy9zZWxlY3RpemUuY3NzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBzZWxlY3RpemUuY3NzICh2MC4xMi4xKVxcbiAqIENvcHlyaWdodCAoYykgMjAxM+KAkzIwMTUgQnJpYW4gUmVhdmlzICYgY29udHJpYnV0b3JzXFxuICpcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcXG4gKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4gKlxcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxcbiAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXFxuICpcXG4gKiBAYXV0aG9yIEJyaWFuIFJlYXZpcyA8YnJpYW5AdGhpcmRyb3V0ZS5jb20+XFxuICovXFxuXFxuLnNlbGVjdGl6ZS1jb250cm9sLnBsdWdpbi1kcmFnX2Ryb3AubXVsdGkgPiAuc2VsZWN0aXplLWlucHV0ID4gZGl2LnVpLXNvcnRhYmxlLXBsYWNlaG9sZGVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNikgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMnB4IDRweCAjZmZmZmZmO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEycHggNHB4ICNmZmZmZmY7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5wbHVnaW4tZHJhZ19kcm9wIC51aS1zb3J0YWJsZS1wbGFjZWhvbGRlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogJyEnO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wucGx1Z2luLWRyYWdfZHJvcCAudWktc29ydGFibGUtaGVscGVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24taGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDBkMDtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xcbn1cXG4uc2VsZWN0aXplLWRyb3Bkb3duLWhlYWRlci1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbiAgdG9wOiA1MCU7XFxuICBjb2xvcjogIzMwMzAzMDtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93bi1oZWFkZXItY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24ucGx1Z2luLW9wdGdyb3VwX2NvbHVtbnMgLm9wdGdyb3VwIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMmYyZjI7XFxuICBib3JkZXItdG9wOiAwIG5vbmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24ucGx1Z2luLW9wdGdyb3VwX2NvbHVtbnMgLm9wdGdyb3VwOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAwIG5vbmU7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24ucGx1Z2luLW9wdGdyb3VwX2NvbHVtbnMgLm9wdGdyb3VwOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2VsZWN0aXplLWRyb3Bkb3duLnBsdWdpbi1vcHRncm91cF9jb2x1bW5zIC5vcHRncm91cC1oZWFkZXIge1xcbiAgYm9yZGVyLXRvcDogMCBub25lO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wucGx1Z2luLXJlbW92ZV9idXR0b24gW2RhdGEtdmFsdWVdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLnBsdWdpbi1yZW1vdmVfYnV0dG9uIFtkYXRhLXZhbHVlXSAucmVtb3ZlIHtcXG4gIHotaW5kZXg6IDE7XFxuICAvKiBmaXhlcyBpZSBidWcgKHNlZSAjMzkyKSAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMnB4IDAgMCAwO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDBkMGQwO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5wbHVnaW4tcmVtb3ZlX2J1dHRvbiBbZGF0YS12YWx1ZV0gLnJlbW92ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wucGx1Z2luLXJlbW92ZV9idXR0b24gW2RhdGEtdmFsdWVdLmFjdGl2ZSAucmVtb3ZlIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjY2FjYWNhO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wucGx1Z2luLXJlbW92ZV9idXR0b24gLmRpc2FibGVkIFtkYXRhLXZhbHVlXSAucmVtb3ZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5wbHVnaW4tcmVtb3ZlX2J1dHRvbiAuZGlzYWJsZWQgW2RhdGEtdmFsdWVdIC5yZW1vdmUge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24sXFxuLnNlbGVjdGl6ZS1pbnB1dCxcXG4uc2VsZWN0aXplLWlucHV0IGlucHV0IHtcXG4gIGNvbG9yOiAjMzAzMDMwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQsXFxuLnNlbGVjdGl6ZS1jb250cm9sLnNpbmdsZSAuc2VsZWN0aXplLWlucHV0LmlucHV0LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uc2VsZWN0aXplLWlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XFxuICBwYWRkaW5nOiA4cHggOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLm11bHRpIC5zZWxlY3RpemUtaW5wdXQuaGFzLWl0ZW1zIHtcXG4gIHBhZGRpbmc6IDZweCA4cHggM3B4O1xcbn1cXG4uc2VsZWN0aXplLWlucHV0LmZ1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dC5kaXNhYmxlZCxcXG4uc2VsZWN0aXplLWlucHV0LmRpc2FibGVkICoge1xcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uc2VsZWN0aXplLWlucHV0LmRyb3Bkb3duLWFjdGl2ZSB7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xcbn1cXG4uc2VsZWN0aXplLWlucHV0ID4gKiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1zdGFjaztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHpvb206IDE7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wubXVsdGkgLnNlbGVjdGl6ZS1pbnB1dCA+IGRpdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgM3B4IDNweCAwO1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XFxuICBjb2xvcjogIzMwMzAzMDtcXG4gIGJvcmRlcjogMCBzb2xpZCAjZDBkMGQwO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wubXVsdGkgLnNlbGVjdGl6ZS1pbnB1dCA+IGRpdi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcXG4gIGNvbG9yOiAjMzAzMDMwO1xcbiAgYm9yZGVyOiAwIHNvbGlkICNjYWNhY2E7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5tdWx0aSAuc2VsZWN0aXplLWlucHV0LmRpc2FibGVkID4gZGl2LFxcbi5zZWxlY3RpemUtY29udHJvbC5tdWx0aSAuc2VsZWN0aXplLWlucHV0LmRpc2FibGVkID4gZGl2LmFjdGl2ZSB7XFxuICBjb2xvcjogIzdkN2Q3ZDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXI6IDAgc29saWQgI2ZmZmZmZjtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dCA+IGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDAgMnB4IDAgMCAhaW1wb3J0YW50O1xcbiAgdGV4dC1pbmRlbnQ6IDAgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0byAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQgPiBpbnB1dDo6LW1zLWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQgPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY2xlYXI6IGxlZnQ7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQuZHJvcGRvd24tYWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIG1hcmdpbjogLTFweCAwIDAgMDtcXG4gIGJvcmRlci10b3A6IDAgbm9uZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biBbZGF0YS1zZWxlY3RhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2VsZWN0aXplLWRyb3Bkb3duIFtkYXRhLXNlbGVjdGFibGVdIC5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMjUsIDE2OCwgMjA4LCAwLjIpO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biBbZGF0YS1zZWxlY3RhYmxlXSxcXG4uc2VsZWN0aXplLWRyb3Bkb3duIC5vcHRncm91cC1oZWFkZXIge1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biAub3B0Z3JvdXA6Zmlyc3QtY2hpbGQgLm9wdGdyb3VwLWhlYWRlciB7XFxuICBib3JkZXItdG9wOiAwIG5vbmU7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24gLm9wdGdyb3VwLWhlYWRlciB7XFxuICBjb2xvcjogIzMwMzAzMDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24gLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmYWZkO1xcbiAgY29sb3I6ICM0OTVjNjg7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24gLmFjdGl2ZS5jcmVhdGUge1xcbiAgY29sb3I6ICM0OTVjNjg7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24gLmNyZWF0ZSB7XFxuICBjb2xvcjogcmdiYSg0OCwgNDgsIDQ4LCAwLjUpO1xcbn1cXG4uc2VsZWN0aXplLWRyb3Bkb3duLWNvbnRlbnQge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wuc2luZ2xlIC5zZWxlY3RpemUtaW5wdXQsXFxuLnNlbGVjdGl6ZS1jb250cm9sLnNpbmdsZSAuc2VsZWN0aXplLWlucHV0IGlucHV0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLnNpbmdsZSAuc2VsZWN0aXplLWlucHV0LmlucHV0LWFjdGl2ZSxcXG4uc2VsZWN0aXplLWNvbnRyb2wuc2luZ2xlIC5zZWxlY3RpemUtaW5wdXQuaW5wdXQtYWN0aXZlIGlucHV0IHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLnNpbmdsZSAuc2VsZWN0aXplLWlucHV0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDVweCA1cHggMCA1cHg7XFxuICBib3JkZXItY29sb3I6ICM4MDgwODAgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5zaW5nbGUgLnNlbGVjdGl6ZS1pbnB1dC5kcm9wZG93bi1hY3RpdmU6YWZ0ZXIge1xcbiAgbWFyZ2luLXRvcDogLTRweDtcXG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4IDVweDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzgwODA4MCB0cmFuc3BhcmVudDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLnJ0bC5zaW5nbGUgLnNlbGVjdGl6ZS1pbnB1dDphZnRlciB7XFxuICBsZWZ0OiAxNXB4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5ydGwgLnNlbGVjdGl6ZS1pbnB1dCA+IGlucHV0IHtcXG4gIG1hcmdpbjogMCA0cHggMCAtMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbCAuc2VsZWN0aXplLWlucHV0LmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9saWIvc2VsZWN0aXplLmpzL2Rpc3QvY3NzL3NlbGVjdGl6ZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zZWxlY3RpemUuYm9vdHN0cmFwMy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2VsZWN0aXplLmJvb3RzdHJhcDMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2VsZWN0aXplLmJvb3RzdHJhcDMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL3NlbGVjdGl6ZS5qcy9kaXN0L2Nzcy9zZWxlY3RpemUuYm9vdHN0cmFwMy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIHNlbGVjdGl6ZS5ib290c3RyYXAzLmNzcyAodjAuMTIuMSkgLSBCb290c3RyYXAgMyBUaGVtZVxcbiAqIENvcHlyaWdodCAoYykgMjAxM+KAkzIwMTUgQnJpYW4gUmVhdmlzICYgY29udHJpYnV0b3JzXFxuICpcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcXG4gKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4gKlxcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxcbiAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXFxuICpcXG4gKiBAYXV0aG9yIEJyaWFuIFJlYXZpcyA8YnJpYW5AdGhpcmRyb3V0ZS5jb20+XFxuICovXFxuLnNlbGVjdGl6ZS1jb250cm9sLnBsdWdpbi1kcmFnX2Ryb3AubXVsdGkgPiAuc2VsZWN0aXplLWlucHV0ID4gZGl2LnVpLXNvcnRhYmxlLXBsYWNlaG9sZGVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNikgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMnB4IDRweCAjZmZmZmZmO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEycHggNHB4ICNmZmZmZmY7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5wbHVnaW4tZHJhZ19kcm9wIC51aS1zb3J0YWJsZS1wbGFjZWhvbGRlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogJyEnO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wucGx1Z2luLWRyYWdfZHJvcCAudWktc29ydGFibGUtaGVscGVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24taGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDNweCAxMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93bi1oZWFkZXItY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEycHg7XFxuICB0b3A6IDUwJTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xcbn1cXG4uc2VsZWN0aXplLWRyb3Bkb3duLWhlYWRlci1jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93bi5wbHVnaW4tb3B0Z3JvdXBfY29sdW1ucyAub3B0Z3JvdXAge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcXG4gIGJvcmRlci10b3A6IDAgbm9uZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93bi5wbHVnaW4tb3B0Z3JvdXBfY29sdW1ucyAub3B0Z3JvdXA6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDAgbm9uZTtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93bi5wbHVnaW4tb3B0Z3JvdXBfY29sdW1ucyAub3B0Z3JvdXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24ucGx1Z2luLW9wdGdyb3VwX2NvbHVtbnMgLm9wdGdyb3VwLWhlYWRlciB7XFxuICBib3JkZXItdG9wOiAwIG5vbmU7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5wbHVnaW4tcmVtb3ZlX2J1dHRvbiBbZGF0YS12YWx1ZV0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1yaWdodDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wucGx1Z2luLXJlbW92ZV9idXR0b24gW2RhdGEtdmFsdWVdIC5yZW1vdmUge1xcbiAgei1pbmRleDogMTtcXG4gIC8qIGZpeGVzIGllIGJ1ZyAoc2VlICMzOTIpICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxcHggMCAwIDA7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLnBsdWdpbi1yZW1vdmVfYnV0dG9uIFtkYXRhLXZhbHVlXSAucmVtb3ZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5wbHVnaW4tcmVtb3ZlX2J1dHRvbiBbZGF0YS12YWx1ZV0uYWN0aXZlIC5yZW1vdmUge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5wbHVnaW4tcmVtb3ZlX2J1dHRvbiAuZGlzYWJsZWQgW2RhdGEtdmFsdWVdIC5yZW1vdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLnBsdWdpbi1yZW1vdmVfYnV0dG9uIC5kaXNhYmxlZCBbZGF0YS12YWx1ZV0gLnJlbW92ZSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSg3NywgNzcsIDc3LCAwKTtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93bixcXG4uc2VsZWN0aXplLWlucHV0LFxcbi5zZWxlY3RpemUtaW5wdXQgaW5wdXQge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dCxcXG4uc2VsZWN0aXplLWNvbnRyb2wuc2luZ2xlIC5zZWxlY3RpemUtaW5wdXQuaW5wdXQtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBjdXJzb3I6IHRleHQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLm11bHRpIC5zZWxlY3RpemUtaW5wdXQuaGFzLWl0ZW1zIHtcXG4gIHBhZGRpbmc6IDVweCAxMnB4IDJweDtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dC5mdWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQuZGlzYWJsZWQsXFxuLnNlbGVjdGl6ZS1pbnB1dC5kaXNhYmxlZCAqIHtcXG4gIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcbn1cXG4uc2VsZWN0aXplLWlucHV0LmZvY3VzIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dC5kcm9wZG93bi1hY3RpdmUge1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dCA+ICoge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgZGlzcGxheTogLW1vei1pbmxpbmUtc3RhY2s7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB6b29tOiAxO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLm11bHRpIC5zZWxlY3RpemUtaW5wdXQgPiBkaXYge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDNweCAzcHggMDtcXG4gIHBhZGRpbmc6IDFweCAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBib3JkZXI6IDAgc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLm11bHRpIC5zZWxlY3RpemUtaW5wdXQgPiBkaXYuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM0MjhiY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wubXVsdGkgLnNlbGVjdGl6ZS1pbnB1dC5kaXNhYmxlZCA+IGRpdixcXG4uc2VsZWN0aXplLWNvbnRyb2wubXVsdGkgLnNlbGVjdGl6ZS1pbnB1dC5kaXNhYmxlZCA+IGRpdi5hY3RpdmUge1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAwIHNvbGlkIHJnYmEoNzcsIDc3LCA3NywgMCk7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQgPiBpbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB0ZXh0LWluZGVudDogMCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dCA+IGlucHV0OjotbXMtY2xlYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dCA+IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjbGVhcjogbGVmdDtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dC5kcm9wZG93bi1hY3RpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnICc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAtMXB4IDAgMCAwO1xcbiAgYm9yZGVyLXRvcDogMCBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xcbn1cXG4uc2VsZWN0aXplLWRyb3Bkb3duIFtkYXRhLXNlbGVjdGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24gW2RhdGEtc2VsZWN0YWJsZV0gLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjM3LCA0MCwgMC40KTtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24gW2RhdGEtc2VsZWN0YWJsZV0sXFxuLnNlbGVjdGl6ZS1kcm9wZG93biAub3B0Z3JvdXAtaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDNweCAxMnB4O1xcbn1cXG4uc2VsZWN0aXplLWRyb3Bkb3duIC5vcHRncm91cDpmaXJzdC1jaGlsZCAub3B0Z3JvdXAtaGVhZGVyIHtcXG4gIGJvcmRlci10b3A6IDAgbm9uZTtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biAub3B0Z3JvdXAtaGVhZGVyIHtcXG4gIGNvbG9yOiAjNzc3Nzc3O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biAuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBjb2xvcjogIzI2MjYyNjtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biAuYWN0aXZlLmNyZWF0ZSB7XFxuICBjb2xvcjogIzI2MjYyNjtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biAuY3JlYXRlIHtcXG4gIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNSk7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24tY29udGVudCB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5zaW5nbGUgLnNlbGVjdGl6ZS1pbnB1dCxcXG4uc2VsZWN0aXplLWNvbnRyb2wuc2luZ2xlIC5zZWxlY3RpemUtaW5wdXQgaW5wdXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wuc2luZ2xlIC5zZWxlY3RpemUtaW5wdXQuaW5wdXQtYWN0aXZlLFxcbi5zZWxlY3RpemUtY29udHJvbC5zaW5nbGUgLnNlbGVjdGl6ZS1pbnB1dC5pbnB1dC1hY3RpdmUgaW5wdXQge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wuc2luZ2xlIC5zZWxlY3RpemUtaW5wdXQ6YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxN3B4O1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwIDVweDtcXG4gIGJvcmRlci1jb2xvcjogIzMzMzMzMyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLnNpbmdsZSAuc2VsZWN0aXplLWlucHV0LmRyb3Bkb3duLWFjdGl2ZTphZnRlciB7XFxuICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHggNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzMzMzIHRyYW5zcGFyZW50O1xcbn1cXG4uc2VsZWN0aXplLWNvbnRyb2wucnRsLnNpbmdsZSAuc2VsZWN0aXplLWlucHV0OmFmdGVyIHtcXG4gIGxlZnQ6IDE3cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLnJ0bCAuc2VsZWN0aXplLWlucHV0ID4gaW5wdXQge1xcbiAgbWFyZ2luOiAwIDRweCAwIC0ycHggIWltcG9ydGFudDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sIC5zZWxlY3RpemUtaW5wdXQuZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93bixcXG4uc2VsZWN0aXplLWRyb3Bkb3duLmZvcm0tY29udHJvbCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAycHggMCAwIDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24gLm9wdGdyb3VwLWhlYWRlciB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93biAub3B0Z3JvdXA6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWxlY3RpemUtZHJvcGRvd24gLm9wdGdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiAnICc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiA5cHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcXG59XFxuLnNlbGVjdGl6ZS1kcm9wZG93bi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG4uc2VsZWN0aXplLWRyb3Bkb3duLWhlYWRlciB7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG59XFxuLnNlbGVjdGl6ZS1pbnB1dCB7XFxuICBtaW4taGVpZ2h0OiAzNHB4O1xcbn1cXG4uc2VsZWN0aXplLWlucHV0LmRyb3Bkb3duLWFjdGl2ZSB7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uc2VsZWN0aXplLWlucHV0LmRyb3Bkb3duLWFjdGl2ZTo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWxlY3RpemUtaW5wdXQuZm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjNjZhZmU5O1xcbiAgb3V0bGluZTogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbn1cXG4uaGFzLWVycm9yIC5zZWxlY3RpemUtaW5wdXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjYTk0NDQyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxufVxcbi5oYXMtZXJyb3IgLnNlbGVjdGl6ZS1pbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM4NDM1MzQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjY2U4NDgzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNjZTg0ODM7XFxufVxcbi5zZWxlY3RpemUtY29udHJvbC5tdWx0aSAuc2VsZWN0aXplLWlucHV0Lmhhcy1pdGVtcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDlweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDlweDtcXG59XFxuLnNlbGVjdGl6ZS1jb250cm9sLm11bHRpIC5zZWxlY3RpemUtaW5wdXQgPiBkaXYge1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLmZvcm0tY29udHJvbC5zZWxlY3RpemUtY29udHJvbCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vbGliL3NlbGVjdGl6ZS5qcy9kaXN0L2Nzcy9zZWxlY3RpemUuYm9vdHN0cmFwMy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==