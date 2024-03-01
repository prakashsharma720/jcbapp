import React from 'react';
import { DrawerItem,createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, Image, StyleSheet,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons ,Ionicons,MaterialCommunityIcons,FontAwesome5,FontAwesome6} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './WelcomeScreen';
import UserManagementScreen from './UserManagementScreen';
import DealerMaster from './DealerMaster';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import { useAuth } from './AuthContext';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Separator = () => (
  <View style={styles.separator} />
);



const CustomDrawerContent = (props) => {
  const { navigation } = props;
  const { logout } = useAuth();

  const handleLogout = () => {
    // Call the logout function from the useAuth hook
    logout();
    navigation.navigate('Login')
  };
  return (
  
    <DrawerContentScrollView {...props}>
      {/* Add your image above the drawer */}
      <Image
        source={require('./assets/logo.png')}
        style={{ width: '60%', height: 60, resizeMode: 'contain', marginBottom: 20, marginTop: 20 }}
      />
      {/* Rest of the drawer content */}
      {/* <DrawerItemList {...props} /> */}
      {/* Custom expandable sub-menu */}
      <Separator />
      <Text style={styles.subtitle}>Master</Text>
      <DrawerItem
        label="Item Master"
        onPress={() => navigation.navigate('ItemMaster')}
        icon={({ focused, color, size }) => (
          <Ionicons name="cube-sharp" size={24} color="black" />
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
      <DrawerItem
        label="Labour Master"
        onPress={() => navigation.navigate('ItemMaster')}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons name="screwdriver" size={24} color="black" />
          // <Image source={require('./assets/icons/dealer.png')} style={styles.icons}/>
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
      <DrawerItem
        label="Feedback Master"
        onPress={() => navigation.navigate('ItemMaster')}
        icon={({ focused, color, size }) => (
          <MaterialIcons name="feedback" size={24} color="black" />
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
       <Separator />
      <Text style={styles.subtitle}>User Management</Text>
      <DrawerItem
        label="User Master"
        onPress={() => navigation.navigate('ItemMaster')}
        icon={({ focused, color, size }) => (
          <FontAwesome5 name="user-alt" size={24} color="black" />
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
      <DrawerItem
        label="User Rights"
        onPress={() => navigation.navigate('ItemMaster')}
        icon={({ focused, color, size }) => (
          <Image source={require('./assets/icons/user-rights.png')} style={styles.icons}/>
          // <FontAwesome6 name="users-gear" size={24} color="black" />
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
      <Separator />
      <Text style={styles.subtitle}>Dealer Management</Text>
      <DrawerItem
        label="Dealer Creation"
        onPress={() => navigation.navigate('DealerMaster')}
        icon={({ focused, color, size }) => (
          <FontAwesome5 name="user-astronaut" size={24} color="black" />
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
      <DrawerItem
        label="Dealer Location"
        onPress={() => navigation.navigate('ItemMaster')}
        icon={({ focused, color, size }) => (
          <FontAwesome6 name="location-dot" size={24} color="black" />
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
      <DrawerItem
        label="Dealer Mapping"
        onPress={() => navigation.navigate('ItemMaster')}
        icon={({ focused, color, size }) => (
          <Image source={require('./assets/icons/mapping.png')} style={styles.icons}/>
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -30, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
       <DrawerItem
        label="Area Master"
        onPress={() => navigation.navigate('ItemMaster')}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons name="map-marker-multiple" size={24} color="black" />
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }}
      />
       <Separator />
       <Text style={styles.subtitle}>Controls</Text>
      <DrawerItem
        label="Dealer Form Controls"
        onPress={() => navigation.navigate('UserRights')}
        icon={({ focused, color, size }) => (
          <Image source={require('./assets/icons/control.png')} style={styles.icons}/>
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }} // Indent for sub-menu
      />
       <Separator />
      <Text style={styles.subtitle}>Utility</Text>
      <DrawerItem
        label="Audit Trails"
        onPress={() => navigation.navigate('UserRights')}
        icon={({ focused, color, size }) => (
          <Image source={require('./assets/icons/audit.png')} style={styles.icons}/>
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }} // Indent for sub-men
      />
       <Separator />
       <DrawerItem
        label="Logout"
        onPress={handleLogout}
        icon={({ focused, color, size }) => (
          <MaterialIcons
          name={focused ? 'logout' : 'logout'}
          size={size}
          color={color}
        />
        )}
        inactiveTintColor="black"
        labelStyle={{ marginLeft: -25, marginRight: -20 }}
        style={{ marginLeft: 16 }} // Indent for sub-men
      />

    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  // Conditionally render the Drawer Navigator based on authentication status
  const { isAuthenticated } = useAuth();

  
  if (isAuthenticated) {
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="DealerMaster" component={DealerMaster} />
        {/* Add other screens as needed */}
      </Drawer.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="DealerMaster" component={DealerMaster} />
      </Stack.Navigator>
    );
  }
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

export default DrawerNavigator;
