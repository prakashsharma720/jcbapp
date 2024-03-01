import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons'; // Import Ionicons for the eye icon
import { Alert } from 'react-native'; // Import Alert for displaying information


export default function App() {

  const [showPassword, setShowPassword] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's consider the user is logged in if both email and password are provided
    if (email.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Please enter a valid email and password.');
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const handleEmailValidation = () => {
    let message = '';
  
    if (!email) {
      message = 'Email is required';
    } else if (!isValidEmail(email)) {
      message = 'Please enter a valid email address';
    } else {
      message = 'Email is valid!';
    }
  
    Alert.alert('Email Validation', message);
  };
  

  return (
    <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('./assets/logo.png')} style={styles.logo} />
          </View>
        {isLoggedIn ? (
        <View>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        ) : (
        <View style={styles.BoxContainer}>
          <Text style={styles.header}>Sign in</Text>
          {/* <Text style={styles.subtitle}>Login with email and password to continue</Text> */}
          {/* <Text style={styles.lable}>Email</Text> */}
         
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
           <TouchableOpacity style={styles.helpIcon} onPress={() => handleEmailValidation('email')}>
              <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>

          {/* <Text style={styles.lable}>Password</Text> */}
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
         <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.fpass}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleContainer} onPress={handleLogin}>
            <Text style={styles.circleText}><AntDesign name="arrowright" size={24} color="white" /></Text>
          </TouchableOpacity>

          {/* <View style={styles.separator} /> */}
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e7af28',
    // padding: '5%',
    
  },
  logoContainer: {
    alignItems: 'center',
  },
  BoxContainer:{
    backgroundColor:'#000',
    marginRight:40,
    borderRadius:20,
    padding:'10%',
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
    // backgroundColor:'#000'
  },
  subtitle: {
    marginBottom: 30,
    color:'#7f7e85'
  },
  lable:{
    color:'#7f7e85'
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold',
    color:'#fff'
  },
  input: {
    width: '90%',
    height: 60,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#000',
    marginTop:10,
    color:'#fff'
  },
  eyeIcon: {
    position: 'absolute',
    top: 240, // Adjust the top position as needed
    left: 45, // Adjust the right position as needed
  },
  helpIcon: {
    position:'relative',
    top: -50, // Adjust the top position as needed
    left: 0, // Adjust the right position as needed
  },

  // button: {
  //   width:'20%',
  //   height: 60,
  //   backgroundColor: '#fcb026',
  //   borderRadius: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: -20,
  //   alignSelf:'flex-end'
  // },
  circleContainer: {
    width: 80,  // Adjust the width and height as needed for your circle
    height: 80,
    borderRadius: 40,  // Half of the width and height to make it a circle
    backgroundColor: '#fcb026',  // Specify the background color
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-end',
    marginTop:-40
  },
  circleText: {
    color: 'white',
  },
  fpass: {
    marginTop:10,
    color: '#7f7e85',
    },
  separator: {
    marginTop: 30,
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  welcomeText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
});

