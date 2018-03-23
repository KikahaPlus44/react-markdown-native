import React, { Component } from 'react';
import { Linking, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Link extends Component {
  static propTypes = {
    href: PropTypes.string
  };

  handleClick = () => {
    const { href } = this.props;

    Linking
      .canOpenURL(href)
      .then(supported => {
        if (supported) {
          Linking.openURL(href);
        }
      });
  };

  render() {
    const { children } = this.props;

    return <Text onPress={this.handleClick}>{children}</Text>;
  }
}
