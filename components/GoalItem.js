import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default GoalItem;
