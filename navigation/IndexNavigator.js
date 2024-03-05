import React from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import ResetPassword from '../ResetPassword';
import ForgotPassword from '../ForgotPassword';
import Login from '../Login';
import { useAuth } from '../AuthContext';

const Stack = createStackNavigator();


const IndexNavigator = () => {
  // Conditionally render the Drawer Navigator based on authentication status
  const { isAuthenticated } = useAuth();

    return (
      <Stack.Navigator initialRouteName={isAuthenticated?'Home':'Login'} screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
      </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
  subtitle: {
    marginBottom: 5,
    paddingLeft: 10,
    color: '#ccc'
  },
  lable: {
    color: '#000'
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 0,
    marginBottom: 8,
  },
  icons:{
    width:30,
    height:30
  }
});

export default IndexNavigator;
