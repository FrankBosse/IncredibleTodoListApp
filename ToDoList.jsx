/**
 * ToDoList Component
 *
 * @format
 */

import React from 'react';
import { ScrollView, Pressable, View, Text, TextInput, Button } from 'react-native';

// Import the styles from App.jsx
import styles from './AppStyles';

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default ToDoList;
