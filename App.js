import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';

import { styles } from './styles/styles';
let i = 0
export default function App() {
  // handling event (useState)
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = goal => {
    setEnteredGoal(goal);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      { id: Math.random.toString(), value: enteredGoal }
    ]);
  };
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" style={{ flex: 1 }} onPress={addGoalHandler} />
      </View>

      {/* <ScrollView>
        {courseGoal.map((goal, i) => (
          <View key={`${i}`}style={styles.listItem}>
          <Text >{goal}</Text></View>
        ))}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

