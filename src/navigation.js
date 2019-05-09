import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Presentation from './components/Presentation';

// Main navigator
export default StackNavigator({
  Presentation: {screen: Presentation},
  Home: {screen: Page1},
  About: {screen: Page2}
});