import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Firebase } from "../Config";
import "firebase/compat/auth";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  Firebase.auth().onAuthStateChanged(function(currentUser) {
    if (currentUser) {
      console.log(currentUser.email);
    } else {
      // the user is not logged in, redirect to login page
      
      navigation.navigate("LoginScreen");
      
    }
  });
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})