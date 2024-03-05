import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the eye icon
import { Alert } from 'react-native'; // Import Alert for displaying information


const PasswordStrengthIndicator = ({ password }) => {
  // Define your password strength criteria here
  const indicators = [
    { label: 'At least 8 characters', check: password.length >= 8 },
    { label: 'At least one uppercase letter', check: /[A-Z]/.test(password) },
    { label: 'At least one lowercase letter', check: /[a-z]/.test(password) },
    { label: 'At least one digit', check: /\d/.test(password) },
    { label: 'At least one special character', check: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  return (
    <View style={{ marginTop: 0 }}>
      {indicators.map((indicator, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 8, fontSize: 16 }}>
            {indicator.check ? '\u2022' : '\u25A1'}
          </Text>
          <Text style={{ color: indicator.check ? 'green' : '#7f7e85' }}>
            {indicator.label}
          </Text>
        </View>
      ))}
    </View>
  );
};
const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (text) => {
    // Implement your password validation logic here if needed
    setPassword(text);
  };

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's consider the user is logged in if both email and password are provided
    if (email.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Please enter a valid email and password.');
    }
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
        {/* <View style={styles.logoContainer}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
        </View> */}
     
        <View>
          <Text style={styles.header}> User Master</Text>
          {/* <Text style={styles.subtitle}>Login with email and password to continue</Text> */}
          <Text style={styles.label}> Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Full Name"
                value=""
                onChangeText={(text) => setName(text)}
              />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
           <Text style={styles.label}>Address </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Address"
                value=""
                onChangeText={(text) => setAddress1(text)}
            />

          <Text style={styles.label}>Password</Text>
           <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
            <PasswordStrengthIndicator password={password} />
           <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>

           {/* <Text style={styles.fpass}>Forgot Password?</Text> */}
           
           <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Register</Text>
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
  label:{
    color:'#7f7e85',
    fontSize: 15,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
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
    top: 380, // Adjust the top position as needed
    right: 15, // Adjust the right position as needed
  },
  helpIcon: {
    position: 'absolute',
    top: 75, // Adjust the top position as needed
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
export default Register;


