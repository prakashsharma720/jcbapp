// NestedStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrakashComponent from './PrakashComponent';
import UserMasterScreen from './YashComponent';
import Yashmin from './Yashmin';

const Stack = createStackNavigator();

const NestedStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PrakashComponent" headerMode="none">
      <Stack.Screen name="PrakashComponent" component={PrakashComponent} />
      <Stack.Screen name="UserMasterScreen" component={UserMasterScreen} />
      <Stack.Screen name="Yashmin" component={Yashmin} />
    </Stack.Navigator>
  );
};

export default NestedStackNavigator;
