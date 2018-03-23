import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";

export default class List extends Component {
  static childContextTypes = {
    type: PropTypes.string
  };

  getChildContext() {
    return {
      type: this.props.type
    };
  }
  renderListItems() {
    return this.props.children.map((item, index) => {
      return (
        <View key={index}>
          <ListItem prefix={index} item={item} />
        </View>
      )
    })
  }
  render() {
    const { type } = this.props;

    return <View>{this.renderListItems()}</View>;
  }
}