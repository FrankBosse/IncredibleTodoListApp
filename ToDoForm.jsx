/**
 * ToDoForm Component
 *
 * @format
 */

import React from 'react';
import { View, TextInput, Button } from 'react-native';

// Import the styles from AppStyles.jsx
import styles from './AppStyles';

function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
      />
      <Button title="Add" />
    </View>
  );
}

export default ToDoForm;
