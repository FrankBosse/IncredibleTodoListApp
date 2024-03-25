/**
 * AboutScreen Component
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const appName = 'My To Do List App';
  const myName = 'Francis Bosse';
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text>App Name: {appName}</Text>
      <Text>Developer: {myName}</Text>
      <Text>Date: {currentDate}</Text>
    </MainLayout>
  );
}

export default AboutScreen;
