/**
 * ToDoList Component
 *
 * @format
 */

import React from 'react';
import { ScrollView, Pressable, View, Text, TextInput, Button } from 'react-native';

// Import the styles from App.jsx
import styles from './AppStyles';

function ToDoList() {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Walk dog</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

export default ToDoList;
