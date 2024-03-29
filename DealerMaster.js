import React, { useState } from 'react';
import { StatusBar, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ProgressBar from 'react-native-progress/Bar';



const DealerMaster = () => {
  const [step, setStep] = useState(1);
  const [index, setIndex] = useState(0);
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

  const totalSteps = 3;

  const handleNext = () => {
    // Validate fields based on the current step
    if (step === 1) {
      if (!name.trim()) {
        // Validation failed
        alert('Dealership Name is required.');
        return;
      }
      // Validation passed, move to the next step
      setStep(step + 1);
    } else if (step === 2) {
      // Add validation logic for fields in the second step
      // For example, check if email is not empty
      if (!email.trim()) {
        // Validation failed
        alert('Email is required.');
        return;
      }
      // Validation passed, move to the next step
      setStep(step + 1);
    }
    // You can add more steps with additional else if blocks
  };

  const handleBack = () => {
    // Move to the previous step
    setStep(step - 1);
  };

  const handleFinalSubmit = () => {
    // Handle final submit logic here
    alert('Final Submit!');
  };

  const renderProgressBar = () => {
    return (
      <ProgressBar
        progress={step / totalSteps}
        width={null}
        height={10}
        borderRadius={2}
        color="#fcb026"
        animated
        marginBottom={20}     />
    );
  };

  // const renderStepContent = () => {
  //   return (
  //     <ScrollView contentContainerStyle={styles.mainContainer}>
  //       <View>
  //         {renderProgressBar()}
      
  //         {/* Rest of your code for each step */}
  //       </View>
  //     </ScrollView>
  //   );
  // };
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <ScrollView contentContainerStyle={styles.mainContainer}>
            <View>
            <Text style={styles.stepIndicator}>Step 1 of 3</Text>

              {renderProgressBar()}
              <Text style={styles.label}>Dealership Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Dealership Name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
               <Text style={styles.label}>Dealer Code</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Dealer Code"
                value={dcode}
                onChangeText={(text) => setDcode(text)}
            />
             <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
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
           
              {/* ... (other fields for the first step) */}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      case 2:
        return (
          <ScrollView contentContainerStyle={styles.mainContainer}>
            <View>
            <Text style={styles.stepIndicator}>Step 2 of 3</Text>
            {renderProgressBar()}
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
           
           
              {/* ... (other fields for the second step) */}
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleBack}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
           
          </ScrollView>
        );
        case 3:
          return (
          <ScrollView contentContainerStyle={styles.mainContainer}>
              <View>
              <Text style={styles.stepIndicator}>Step 3 of 3</Text>
              {renderProgressBar()}
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
              <TouchableOpacity style={styles.cancelButton} onPress={handleBack}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={handleFinalSubmit}>
                <Text style={styles.buttonText}>Final Submit</Text>
              </TouchableOpacity>
            </View>
              </ScrollView>
          );
      // Add more cases for additional steps
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {renderStepContent()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '5%',
  },
  stepIndicator: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',

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
    width:'100%',
    height: 60,
    backgroundColor: '#fcb026',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button1: {
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
    backgroundColor: 'grey',
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


