// WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useAuth } from './AuthContext';

export default function WelcomeScreen() {
  const { logout } = useAuth();
  const handleLogout = () => {
    // Call the logout function from AuthContext or perform any necessary cleanup
    logout();
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Good Morning Lucky !! Welcome Back.</Text>
      {/* <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '5%',
    marginTop:-80,
  },
  welcomeText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  logoutButton: {
    width:'100%',
    height: 60,
    backgroundColor: '#fcb026',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
