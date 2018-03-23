import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props, context) => {
	const { item, prefix } = props;
	return <Text>{context.type === 'Bullet' ? '● ' : `${prefix + 1}. `}{item}</Text>;
};

ListItem.contextTypes = {
	type: PropTypes.string
};

export default ListItem;