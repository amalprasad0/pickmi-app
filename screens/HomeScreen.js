import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlices";
import { useDispatch } from "react-redux";
import { Firebase } from "../Config";
import { useNavigation } from "@react-navigation/native";
// import NavLocation from "../components/NavLocation";
const TaxiBookingScreen = () => {
 
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //check if user is logged in  
  const [user, setUser] = useState(null);
  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      console.log(user);
    } else {
      setUser(null);
      navigation.navigate("LoginScreen");
    }
  });
  
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
      <View style={tw`pt-4 pl-4`}>
        <Text style={tw`text-5xl font-bold mt-6`}>Pickmi</Text>
      </View>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
       
        placeholder="Where From?"
        styles={{
          container: {
            flex: 0,
            paddingTop: 10,
            paddingLeft: 10,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        onPress={(data, details = null) => {
          console.log("Location",details.geometry.location);
          console.log("Description",data.description);
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        minLength={2}
        enablePoweredByContainer={false}
        query={{
          key: "AIzaSyDhIyWfb1NU_3fC0cJ5okzfnvImQb6QFnQ",
          language: "en",
          components:"country:in"
        }} // this is for the google maps api
      />
      <NavOptions />
      {/* <NavLocation/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TaxiBookingScreen;
