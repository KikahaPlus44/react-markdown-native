import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Item = (props, context) => {
  const { children } = props;
  
  return <Text>{children}</Text>;
};

Item.contextTypes = {
  type: PropTypes.string
};

export default Item;
