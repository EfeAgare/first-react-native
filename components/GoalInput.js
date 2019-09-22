import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = goal => {
    setEnteredGoal(goal);
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="ADD"
        style={{ flex: 1 }}
        onPress={props.addGoalHandler.bind(this, enteredGoal)}
        // onPress={() => props.addGoalHandler(enteredGoal)}
      />
    </View>
  );
};

export default GoalInput;
