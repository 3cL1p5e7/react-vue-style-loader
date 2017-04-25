# react-vue-style-loader
Webpack loader.
For Vue developers, who trying React.
Write your CSS by "Vue-style" in js or jsx files. Use style-tag;
Available attributes "lang" are: "sass", "less", "postcss". It use css preprocessor's webpack loaders.

Example file 'app/modules/modules.js':
```
<style lang="sass">
  @import '~uikit/theme';
  .calendar-desk {
    background: green;
    color: white;
    h1 {
      padding: 100px;
    }
    &__trololo-section {
      color: red;
    }
  }
</style>

import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class CalendarDesk extends Component {
  render() {
    return (
      <div className="calendar-desk">
        <h1>Hello world</h1>
        <div className="calendar-desk__trololo-section">
          <h1>Trololo</h1>
        </div>
      </div>
    );
  }
}


```
webpack.config.js
```
module.exports = {
  context: join(__dirname, 'app'),
  entry: {
    app: [
      './app.js'
    ]
  },
  ...
  module: {
    rules: [
      ...
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'app')],
        exclude: [/node_modules/, /dist/],
        loader: 'babel-loader!react-vue-style-loader'
      },
      ...
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app'), // for import sass variables relative 'app'(root)
      path.join(__dirname, 'uikit'), // uikit is subdirectory of app, 
      "node_modules"
    ]
  }
};
```
