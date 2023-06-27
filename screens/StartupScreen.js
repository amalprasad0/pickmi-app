import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
  ToastAndroid,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Firebase } from "../Config";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { KeyboardAvoidingView } from "react-native";
import tw from "twrnc";

const StartupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Place, setPlace] = useState("");

  const setUp = () => {
    Firebase.auth().onAuthStateChanged(function (currentUser) {
      console.log(currentUser.email);
      Firebase.firestore()
        .collection("users")
        .doc(currentUser.email)
        .set({
          name: name,
          mobile: Mobile,
          place: Place,
        })
        .then(() => {
          ToastAndroid.show("User Created", ToastAndroid.SHORT);
          navigation.navigate("HomeScreen");
        });
      console.log("Document successfully written!");
    });
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
  >
    <SafeAreaView style={styles.container}>
      <Text style={[tw`text-4xl font-bold mt-20 mx-4`, styles.text]}>
        Welcome to PickMi 👋
      </Text>
      <Text style={[tw`text-sm font-normal mt-2 mx-4 text-slate-600 w-96 text-justify`, styles.text]}>
        Say goodbye to traditional booking hassles and enjoy a wide range of vehicles at your fingertips. Let's hit the road together!
      </Text>
      <Text style={[tw`text-2xl font-bold mt-10 mx-4`, styles.text]}>
        Let's get started 👉
      </Text>
      {/* <View style={[tw`justify-center items-center`, styles.imageContainer]}>
        <Image
          style={[tw`h-40 w-40 mx-4 mt-10`, styles.image]}
          source={require("../assets/Startup.png")}
        />
      </View> */}
      <View style={[tw`flex justify-center items-center mt-10`, styles.formContainer]}>
        <View style={[tw`bg-white rounded-lg w-100`, styles.form]}>
          <TextInput
            style={[tw`text-lg border border-gray-300 rounded-lg px-4 py-3`, styles.input]}
            placeholder="Name"
            value={name}
            required
            onChangeText={setName}
            autoCompleteType="name"
            blurOnSubmit={true}
          />
          <TextInput
            style={[tw`text-lg border border-gray-300 rounded-lg px-2 py-3 mt-2`, styles.input]}
            placeholder="Mobile Number"
            secureTextEntry={true}
            onChangeText={setMobile}
            required
            autoComplete="tel"
            keyboardType="phone-pad"
            value={Mobile}
          />
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Your Place"
            styles={{
              container: {
                flex: 0,
                width: "100%",
                color: "gray",
              },
              // textInputContainer: {
              //   backgroundColor: "#fff",
              //   borderWidth: 1,
              //   borderRadius: 10,
              //   marginTop: 10,
              //   height: 50,
              // },
              textInput: [tw`text-lg border border-gray-300 rounded-lg px-4 py-5 mt-2`, color="#000"],
            }}
            onPress={(data) => {
              setPlace(data.description);
            }}
            enablePoweredByContainer={false}
            query={{
              key: "AIzaSyDhIyWfb1NU_3fC0cJ5okzfnvImQb6QFnQ",
              language: "en",
            }}
          />
          <TouchableOpacity style={[styles.button, styles.input]} onPress={setUp}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    // textAlign: "center",
  },
 
  
  formContainer: {
    marginHorizontal: 20,
    color: "black",
  },
  form: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: "100%",
  },
  input: {
    marginTop: 10,
    color: "black",
    
  },
  button: tw`bg-black mt-5 p-4 rounded items-center`,
  buttonText: tw`text-white text-lg font-bold`,
});
