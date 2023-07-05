import { StyleSheet, KeyboardAvoidingView, } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import StartupScreen from "./screens/StartupScreen";
import BookScreen from "./screens/BookScreen";
import { StatusBar } from "expo-status-bar";
import ConfirmScreen from "./screens/ConfirmScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <StatusBar style="auto" StatusBarStyle="dark" />
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="BookScreen"
            >
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="StartupScreen" component={StartupScreen} />
              <Stack.Screen name="BookScreen" component={BookScreen} />
              <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />

            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    
    // marginTop:StatusBar.currentHeight
  },
});
