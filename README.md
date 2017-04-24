# react-vue-style-loader
Webpack loader.
For Vue developers, who trying React.
Write your CSS by "Vue-style" in js or jsx files. Use <style> - tag;
Available attributes "lang" are: "sass", "less", "postcss". It's for using css preprocessor's webpack loaders.
```
<style lang="sass">
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
