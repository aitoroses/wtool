import './verify';

import React from "react";

// Add selectize plugin
import '../lib/selectize.js/dist/js/standalone/selectize';
import '../lib/selectize.js/dist/css/selectize.css';
import '../lib/selectize.js/dist/css/selectize.bootstrap3.css';

class Selectize extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func,
    options: React.PropTypes.array.isRequired,
    optgroups: React.PropTypes.array,
    optgroupField: React.PropTypes.string,
    optgroupLabelField: React.PropTypes.string,
		optgroupValueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    valueField: React.PropTypes.string,
    searchField: React.PropTypes.array,
    disable: React.PropTypes.bool,
    value: React.PropTypes.any
  }

  handleChange(e) {

    var value = e.target.value;

    // Invoke onChange
    var item = this.props.options.filter((i) => i[this.props.valueField] == e.target.value)[0];
    if (this.props.onChange) this.props.onChange(value, item);
  }

  componentDidMount() {
    var sel = this.container = $('<select></select>');
    $(React.findDOMNode(this.refs.mountNode)).append(sel);
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
    sel.on('change', this.handleChange.bind(this))
  }

  componentWillUnmount() {
    // Remove listeners
    var sel = this.container;
    sel.off('change', this.handleChange)

    // Remove component
    $(React.findDOMNode(this.refs.mountNode)).children().remove();
  }

  remount() {
    this.componentWillUnmount();
    this.componentDidMount();
  }

  componentWillUpdate(props) {

    // Reload options
    if (props.options != this.props.options) {
      this.selectize.load((cb) => {
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
    setTimeout(() => {
      if (Object.keys(this.selectize.options).length != props.options.length) {
        this.remount();
      }
    });
  }

  render() { return <div ref="mountNode"></div> }
}

export default Selectize;
