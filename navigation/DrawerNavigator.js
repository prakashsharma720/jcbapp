import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { StyleSheet,View} from 'react-native';
import HomeScreen from '../WelcomeScreen';
import UserMaster from '../Register';
import DealerMaster from '../DealerMaster';
import { useAuth } from '../AuthContext';
import {
  Button,
  Drawer as KittenDrawer,
  DrawerItem as KittenDrawerItem,
  DrawerGroup as KittenDrawerGroup,
  Icon,
} from '@ui-kitten/components';

const Drawer = createDrawerNavigator();
const routes = [
  {
      name: 'Master',
      icon: <Icon name="settings-2-outline" />,

      children: [
          {
              name: 'Item Master',
              icon: <Icon name="inbox-outline" />,
              route: 'HomeScreen',
          },
          {
              name: 'Labour Master',
              icon: <Icon name="scissors-outline" />,
              route: {},
          }
      ],
  },
  {
      name: 'User Management',
      icon: <Icon name="npm-outline" />,

      children: [
          {
              name: 'User Master',
              icon: <Icon name="person-outline" />,
              route:'UserMaster'
          },
          {
              name: 'User Rights',
              icon: <Icon name="people-outline" />,
              route: {},
          }
      ],
  },
  {
      name: 'Dealer Management',
      icon: <Icon name="cube-outline" />,

      children: [
          {
              name: 'Dealer Creation',
              icon: <Icon name="settings-2-outline" />,
              route:'DealerMaster'
          },
          {
              name: 'Dealer Location',
              icon: <Icon name="navigation-2-outline" />,
              route: {},
          },
          {
              name: 'Dealer Mapping',
              icon: <Icon name="map-outline" />,
              route: {},
          },
          {
              name: 'Area Master',
              icon: <Icon name="navigation-outline" />,
              route: {},
          }
      ],
  },
  {
      name: 'Controls',
      icon: <Icon name="grid-outline" />,

      children: [
          {
              name: 'Dealer Form Controls',
              icon: <Icon name="settings-outline" />,
              route: {},
          }
      ],
  },
  {
      name: 'Utility',
      icon: <Icon name="car-outline" />,

      children: [
          {
              name: 'Audit Trails',
              icon: <Icon name="checkmark-square-outline" />,
              route: {},
          }
      ],
  },
];


const CustomDrawerContent = (props) => {
  const { navigation } = props;
  const { logout } = useAuth();
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleLogout = () => {
    // Call the logout function from the useAuth hook
    logout();
    navigation.closeDrawer();
    navigation.push('Login');
  };
  return (
  
    <DrawerContentScrollView {...props}>
     <>
                <View style={{ height: 180, backgroundColor: '#FFA200' }} />
                <KittenDrawer
                    style={{
                        padding: 10,
                    }}
                    selectedIndex={selectedIndex}
                    onSelect={(index) => setSelectedIndex(index)}>
                    {routes &&
                        routes.map((route, index) => {
                            if (route.children) {
                                return (
                                    <KittenDrawerGroup key={`drawer_group_${index}`} title={route.name} accessoryLeft={route.icon}>
                                        {route.children &&
                                            route.children.map((nested_child,nested_index) => {
                                                return (
                                                    <KittenDrawerItem
                                                    key={`drawer_item_${nested_index}`}
                                                    onPress={()=> navigation.navigate(nested_child.route)} 
                                                        title={nested_child.name}
                                                        accessoryLeft={nested_child.icon}
                                                    />
                                                );
                                            })}
                                    </KittenDrawerGroup>
                                );
                            } else {
                                return (
                                    <KittenDrawerItem   key={`drawer_item_${index}`} onPress={()=> navigation.navigate(route.route)} 
                                    title={route.name} accessoryLeft={route.icon} />
                                );
                            }
                        })}
                </KittenDrawer>
                <View>
                    <Button
                        style={{
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            margin: 10,
                        }}
                        onPress={handleLogout}
                        status="primary"
                        accessoryLeft={<Icon name="log-out-outline" />}>
                        Logout
                    </Button>
                </View>
            </>

    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="DealerMaster" component={DealerMaster} />
        <Drawer.Screen name="UserMaster" component={UserMaster} />

        {/* Add other screens as needed */}
      </Drawer.Navigator>
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

export default DrawerNavigator;
