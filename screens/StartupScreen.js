import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
  ToastAndroid,
  Image
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Firebase } from "../Config";
import { TouchableOpacity } from "react-native";
import "firebase/compat/auth";
import { useState } from "react";

const StartupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-4xl font-bold  mt-20 mx-4`}>
        Welcome to PickMi 👋
      </Text>
      <Text
        style={tw`text-sm font-normal mt-2 mx-4 text-slate-600 w-96  text-justify `}
      >
      
        {`Say goodbye to traditional booking hassles and enjoy a wide range of vehicles at your fingertips. Let's hit the road together!`}
      </Text>
      <Text style={tw`text-2xl font-bold  mt-10 mx-4`}>
        Let's get started 👉
      </Text>
      <View style={tw`justify-center items-center`}>
        <Image
            style={tw`h-40 w-40 mx-4 mt-10`}
            source={require("../assets/Startup.png")}
        />
      </View>
      <View style={tw`flex justify-center items-center mt-auto `}>
        <View style={tw`bg-white rounded-lg  w-100 mb-10`}>
          <TextInput
            style={tw`text-lg border border-gray-300 rounded-lg px-4 py-5  `}
            placeholder="Name"
            // value={email}
            required
            // onChangeText={setEmail}
            autoCompleteType="name"
            blurOnSubmit={true}
          />
          <TextInput
            style={tw`text-lg border border-gray-300 rounded-lg px-4 py-5 mt-2 `}
            placeholder="Mobile Number"
            secureTextEntry={true}
            // onChangeText={setPaswrd}
            required
            // value={paswrd}
          />
          <TextInput
            style={tw`text-lg border border-gray-300 rounded-lg px-4 py-5 mt-2 `}
            placeholder="Place of Residence"
            secureTextEntry={true}
            // onChangeText={setPaswrd}
            required
            // value={paswrd}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert("Continue");
            }}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  textSize: {
    fontSize: 40,
  },
  button: tw`bg-black mt-5 p-4 rounded items-center`,
  buttonText: tw`text-white text-lg font-bold`,
});
