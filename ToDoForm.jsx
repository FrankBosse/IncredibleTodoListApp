/**
 * ToDoForm Component
 *
 * @format
 */

import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {useState} from 'react';

// Import the styles from AppStyles.jsx
import styles from './AppStyles';

function ToDoForm({addTask}) {
  const [taskText, setTaskText] = React.useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(taskText);
          setTaskText('');
        }}
      />
    </View>
  );
}

export default ToDoForm;
