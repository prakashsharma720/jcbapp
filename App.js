// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import IndexNavigator from './navigation/IndexNavigator';
import { AuthProvider } from './AuthContext';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import light from './assets/light.json';
const App = () => {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={light}>
      <AuthProvider>
        <NavigationContainer>
          <IndexNavigator />
        </NavigationContainer>
      </AuthProvider>
    </ApplicationProvider>
    </>
  );
};

export default App;
