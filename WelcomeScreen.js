// WelcomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useAuth } from './AuthContext';

export default function WelcomeScreen() {
  const { logout } = useAuth();
  const [isVisible, setIsVisible] = useState(true);

  const handleLogout = () => {
    // Call the logout function from AuthContext or perform any necessary cleanup
    logout();
  };
  useEffect(() => {
    // Set a timeout to hide the text after 5 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <View style={styles.container}>
      {isVisible && (
        <>
          <Image source={require('./assets/cong.gif')} style={styles.logo} />
          <Text style={styles.welcomeText}>Good Morning Lucky !! Welcome Back.</Text>
        </>
      )}
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
    width:'100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
