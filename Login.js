import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the eye icon
import { Alert } from 'react-native'; // Import Alert for displaying information
import { useAuth } from './AuthContext';


const Login = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  useEffect(()=>{
  setEmail('')
  setPassword('')
  },[])
  
  const handleLogin = () => {
      
    // For simplicity, let's consider the user is logged in if both email and password are provided
    if (email.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      login();
      navigation.push('Home');
    } else {
      alert('Please enter a valid email and password.');
    }
  };

  const ForgotPassword = () => {
    // Add your logout logic here
    navigation.navigate('ForgotPassword');
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
     
        <View>
          <Text style={styles.header}>Sign in</Text>
          {/* <Text style={styles.subtitle}>Login with email and password to continue</Text> */}
          <Text style={styles.lable}>Email/Mobile</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Or Phone"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
           <TouchableOpacity style={styles.helpIcon} onPress={() => handleEmailValidation('email')}>
              <Ionicons name="information-circle" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.lable}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
           <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity  onPress={ForgotPassword}>
          <Text style={styles.fpass}>Forgot Password?</Text>
          </TouchableOpacity>
          
           <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {/* <View style={styles.separator} /> */}
        </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '5%',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
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
    marginBottom: 15,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  eyeIcon: {
    position: 'absolute',
    top: 195, // Adjust the top position as needed
    right: 15, // Adjust the right position as needed
  },
  helpIcon: {
    position: 'absolute',
    top: 90, // Adjust the top position as needed
    right: 15, // Adjust the right position as needed
  },

  button: {
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
  fpass: {
    marginTop:-10,
    color: '#7f7e85',
    alignSelf:'flex-end'
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
export default Login;


