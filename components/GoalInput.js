import React, { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';
import { styles } from '../styles/styles';
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = goal => {
    setEnteredGoal(goal);
  };

  const addClearInput = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '80%'
          }}
        >
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="tomato"
              onPress={props.onGoalCancel}
              // onPress={() => props.addGoalHandler(enteredGoal)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={addClearInput}
              // onPress={() => props.addGoalHandler(enteredGoal)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
