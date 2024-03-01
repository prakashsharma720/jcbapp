import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { useAuth } from './AuthContext';

const ForgotPassword = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const { login } = useAuth();

  const handleEmailValidation = () => {
    let message = '';

    if (!email) {
      message = 'Email is required';
    } else if (!isValidEmail(email)) {
      message = 'Please enter a valid email address';
    } else {
      message = 'Email is valid!';
      setShowOtpInput(true); // Show OTP input after email validation
    }

    Alert.alert('Email Validation', message);
  };

  const handleOtpVerification = () => {
    // Implement your OTP verification logic here
    if (otp === '1234') {
      // Assume '1234' is the correct OTP for demonstration purposes
      Alert.alert('OTP Verification', 'OTP verified successfully!');
      navigation.navigate('ResetPassword');
      // You can navigate to the next screen or perform other actions here
    } else {
      Alert.alert('OTP Verification', 'Incorrect OTP. Please try again.');
    }
  };

  const handlelogic = () => {
    if (email.trim() !== '') {
      setIsLoggedIn(true);
      // Instead of navigating directly, show OTP input after email validation
      handleEmailValidation();
    } else {
      alert('Please enter a valid email.');
    }
  };

  const LoginLink = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      <View>
        <Text style={styles.header}>Forgot Password </Text>
        <Text style={styles.lable}>Enter Registered Email/Mobile</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Or Phone"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.helpIcon} onPress={handleEmailValidation}>
          <Ionicons name="information-circle" size={24} color="black" />
        </TouchableOpacity>

        {showOtpInput && (
          <>
            <Text style={styles.lable}>Enter OTP</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              value={otp}
              onChangeText={(text) => setOtp(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleOtpVerification}>
              <Text style={styles.buttonText}> Verify OTP</Text>
            </TouchableOpacity>
          </>
        )}

        {!showOtpInput && (
          <TouchableOpacity style={styles.button} onPress={handlelogic}>
            <Text style={styles.buttonText}> Verify</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={LoginLink}>
          <Text style={styles.fpass}>Already Account, Login Here?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

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
    top: 100, // Adjust the top position as needed
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
    marginTop:10,
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
export default ForgotPassword;


