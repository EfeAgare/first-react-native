import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState(
    'Open up App.js to start working on your app!'
  );
  return (
    // <View style={styles.container}>
    //   <Text>{outputText}</Text>
    //   <Button title="Change Text" onPress={() => setOutputText("This is my first App changing")} />
    // </View>
    <View style={{padding: 30}}>
      <View>
        <TextInput placeholder="Course Goal" style={{borderBottomColor: "black", borderWidth:1, padding: 10, marginTop: 10, marginBottom: 10}}/>
        <Button title="ADD"/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
