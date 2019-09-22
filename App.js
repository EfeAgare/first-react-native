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
import GoalInput from './components/GoalInput';
let i = 0;
export default function App() {
  // handling event (useState)
 
  const [courseGoal, setCourseGoal] = useState([]);

  

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      { id: Math.random.toString(), value: enteredGoal }
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler}/>

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
