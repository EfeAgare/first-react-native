import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

import { styles } from './styles/styles';
import GoalInput from './components/GoalInput';
let i = 0;
export default function App() {
  // handling event (useState)

  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  const removeGoalHandler = id => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== id);
    });
  };
  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} />

      {/* <ScrollView>
        {courseGoal.map((goal, i) => (
          <View key={`${i}`}style={styles.listItem}>
          <Text >{goal}</Text></View>
        ))}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={courseGoal}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}
