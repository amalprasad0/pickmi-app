import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
  ToastAndroid,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Firebase } from "../Config";
import "firebase/compat/auth";
import { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [paswrd, setPaswrd] = useState("");

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`flex h-2/4 justify-center`}>
        <Text
          style={[
            tw`text-3xl font-bold text-center text-black`,
            styles.textSize,
          ]}
        >
          P I C K M I
        </Text>
        <Text style={tw`text-s  text-center text-black-500`}>
          Unlock Your Journey, On-Demand
        </Text>
      </View>
      <View style={tw`flex justify-center items-center h-2/4 mt-auto `}>
        <Text style={tw`text- font-regular text-center text-black-500 felx-1 `}>
          We're thrilled to have you back with us.
        </Text>
        <View style={tw`bg-white rounded-lg  w-70 mt-4`}>
          <TextInput
            style={tw`text-lg border border-gray-300 rounded-lg px-4 py-2  `}
            placeholder="Email Address"
            keyboardType="email-address"
            value={email}
            required
            onChangeText={setEmail}
            autoCompleteType="email"
            blurOnSubmit={true}
          />
          <TextInput
            style={tw`text-lg border border-gray-300 rounded-lg px-4 py-2 mt-2 `}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPaswrd}
            required
            value={paswrd}
          />
        </View>
        <View style={tw`bg-white rounded-lg  w-70 mt-4`}>
          <Button
            title="Next"
            color="black"
            onPress={() => {
              const Email = email;
              const Password = paswrd;
              Firebase.auth()
                .signInWithEmailAndPassword(Email, Password)
                .then((userCredential) => {
                  // Signed in
                  var user = userCredential.user;
                  console.log(user);
                  ToastAndroid.showWithGravityAndOffset(
                    'Login Successfully',
                    ToastAndroid.LONG, //can be SHORT, LONG
                    ToastAndroid.CENTER, //can be TOP, BOTTON, CENTER
                    25, //xOffset
                    500, //yOffset
                  );
                  navigation.navigate("HomeScreen");
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorCode, errorMessage);
                  ToastAndroid.showWithGravityAndOffset(
                    'The password is invalid or the user does not have a password',
                    ToastAndroid.LONG, //can be SHORT, LONG
                    ToastAndroid.CENTER, //can be TOP, BOTTON, CENTER
                    25, //xOffset
                    500, //yOffset
                  );
                });
            }}
            style={[tw`bg-black rounded-lg p-2  justify-center  items-center`]}
          />
        </View>
        <Text style={tw`text-center mt-2`}>
          Don't have account ?{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => {
              navigation.navigate("SignupScreen");
            }}
          >
            Signup Here
          </Text>
        </Text>
        <Text style={tw`text-center mt-2`}>Forgot Password ? <Text style={{color:"blue"}} onPress={()=>{
          navigation.navigate("ForgotPasswordScreen")
        }}>Reset Now</Text></Text>
         
        {/* <Text style={[tw`my-10`]}>Designed & Developed by LLC</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  textSize: {
    fontSize: 50,
    paddingTop: 50,
  },
});