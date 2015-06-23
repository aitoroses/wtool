# Instructions

```<Selectize />``` has the following expected propTypes

```js
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
}```

It is a React wrapper around Selectize.js jQuery API. See [Selectize](https://github.com/brianreavis/selectize.js) documentation for more info.


# Usage

Suposing that we have items with this interface:

```js
{
  itemId: Number
  itemDescription: String
}
```

```jsx
<Selectize
  value={this.props.itemId}
  labelField="itemDescription"
  disabled={false}
  valueField="itemId"
  searchField={["itemDescription"]}
  options={itemsCollection}
  onChange={this.handleChange} />
```

# Liscense

```react-selectize``` is governed under the MIT License (MIT)

Copyright (c) 2015 Aitor Oses.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
