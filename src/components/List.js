import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class List extends Component {
  static childContextTypes = {
    type: PropTypes.string
  };

  getChildContext() {
    return {
      type: this.props.type
    };
  }

  render() {
    const { children, type } = this.props;

    return <View>{children}</View>;
  }
}
