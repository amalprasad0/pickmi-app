import { StyleSheet, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import React from 'react';
import SignupScreen from './screens/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen'

export default function App() {
  const Stack = createNativeStackNavigator();
  

  return (
    <Provider store={store} >
    <SafeAreaProvider  >
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignupScreen'>
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop:StatusBar.currentHeight
//   },
// });
