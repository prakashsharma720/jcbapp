import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the eye icon
import { Alert } from 'react-native'; // Import Alert for displaying information


const DealerMaster = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState('');
  const [dcode, setDcode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [email, setEmail] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gstin, setGstin] = useState('');
  const [areaOffice, setAreaOffice] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [nameError, setNameError] = useState('');


  const handleLogin = () => {
    setNameError('');
    if (!name.trim()) {
        setNameError('Dealership Name is required.');
        return;
      }
  
   // Validation for Dealer Name
    if (!name.trim()) {
        alert('Dealership Name is required.');
        return;
      }
  
      // Validation for Dealer Code
      if (!dcode.trim()) {
        alert('Dealer Code is required.');
        return;
      }
  
      // Validation for Address 1
      if (!address1.trim()) {
        alert('Address 1 is required.');
        return;
      }
  
      // Validation for Address 2
      if (!address2.trim()) {
        alert('Address 2 is required.');
        return;
      }
      if (!address2.trim()) {
        alert('Address 2 is required.');
        return;
      }
  
      if (!country.trim()) {
        alert('Country is required.');
        return;
      }
  
      if (!state.trim()) {
        alert('State is required.');
        return;
      }
  
      if (!city.trim()) {
        alert('City is required.');
        return;
      }
  
      if (!pinCode.trim()) {
        alert('Pin Code is required.');
        return;
      }
  
      if (!email.trim()) {
        alert('Email is required.');
        return;
      }
  
      if (!contactPerson.trim()) {
        alert('Contact Person is required.');
        return;
      }
  
      if (!contactNumber.trim()) {
        alert('Contact Number is required.');
        return;
      }
  
      if (!gstin.trim()) {
        alert('GSTin is required.');
        return;
      }
  
      if (!areaOffice.trim()) {
        alert('Area Office is required.');
        return;
      }
  
      if (!latitude.trim()) {
        alert('Latitude is required.');
        return;
      }
  
      if (!longitude.trim()) {
        alert('Longitude is required.');
        return;
      }
      // If all validations pass, continue with your logic
      alert('Validation successful!');
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
    <ScrollView contentContainerStyle={styles.mainContainer}>
            <View>
            <Text style={styles.label}>Dealership Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Dealership Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
             <Text style={styles.errorText}>{nameError}</Text>

            <Text style={styles.label}>Dealer Code</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Dealer Code"
                value={dcode}
                onChangeText={(text) => setDcode(text)}
            />
            <Text style={styles.label}>Address 1</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Address 1"
                value={address1}
                onChangeText={(text) => setAddress1(text)}
            />
            <Text style={styles.label}>Address 2</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Address 2"
                value={address2}
                onChangeText={(text) => setAddress2(text)}
            />
            <Text style={styles.label}>Country</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Country"
                value={country}
                onChangeText={(text) => setCountry(text)}
            />
            <Text style={styles.label}>State</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter State"
                value={state}
                onChangeText={(text) => setState(text)}
            />
            <Text style={styles.label}>City</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter City"
                value={city}
                onChangeText={(text) => setCity(text)}
            />
            <Text style={styles.label}>Pin Code</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Pin Code"
                value={pinCode}
                onChangeText={(text) => setPinCode(text)}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.label}>Contact Person</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Contact Person"
                value={contactPerson}
                onChangeText={(text) => setContactPerson(text)}
            />
            <Text style={styles.label}>Contact Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Contact Number"
                value={contactNumber}
                onChangeText={(text) => setContactNumber(text)}
            />
            <Text style={styles.label}>GSTin</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter GSTin"
                value={gstin}
                onChangeText={(text) => setGstin(text)}
            />
            <Text style={styles.label}>Area Office</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Area Office"
                value={areaOffice}
                onChangeText={(text) => setAreaOffice(text)}
            />
            <Text style={styles.label}>Latitude</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Latitude"
                value={latitude}
                onChangeText={(text) => setLatitude(text)}
            />
            <Text style={styles.label}>Longitude</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Longitude"
                value={longitude}
                onChangeText={(text) => setLongitude(text)}
            />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        <StatusBar style="auto" />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '5%',
  },
  logoContainer: {
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 0,
    marginBottom: 10,
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
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width:'48%',
    height: 60,
    backgroundColor: '#fcb026',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cancelButton: {
    width:'48%',
    height: 60,
    backgroundColor: 'red',
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
  }
 
});
export default DealerMaster;


