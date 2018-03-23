import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Item = (props, context) => {
  const { children, nodeKey } = props;
  let listPrefix = context.type === 'Bullet' ? '● ' : `${nodeKey + 1}. `;

  return <Text>{listPrefix}{children}</Text>;
};

Item.contextTypes = {
  type: PropTypes.string
};

export default Item;
