/**
 * AboutScreen Component
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import {Button} from 'react-native';

function AboutScreen({navigation}) {
  const appName = 'My To Do List App';
  const myName = 'Francis Bosse';
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text>App Name: {appName}</Text>
      <Text>Developer: {myName}</Text>
      <Text>Date: {currentDate}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </MainLayout>
  );
}

export default AboutScreen;
