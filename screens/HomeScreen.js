import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin,  setUserCredentials } from "../slices/navSlices";
import { useDispatch } from "react-redux";
import NavFavorite from "../components/NavFavorite";
import { Firebase } from "../Config";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from "react";
import * as Location from 'expo-location';


const TaxiBookingScreen = () => {
  useEffect(() => {
  (async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      // Location permission granted
    } else {
      // Location permission not granted
    }
  })();
}, []);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  //check if user is logged in  
  const [user, setUser] = useState(null);
  useEffect(() => {
  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      console.log(user);
      dispatch(setUserCredentials(user))
    } else {
      setUser(null);
    }
  });
  }, []);
  
  return (
    <SafeAreaView style={[tw`h-full bg-white`]}>
      <View style={tw`pt-5 pl-4`}>
        <Text style={tw`mt-6 text-5xl font-bold`}>Pickmi</Text>
      </View>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={100}
        placeholder="Where From?"
        styles={styles}
        onPress={(data, details = null) => {
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
          components:"country:in",
          
        }} // this is for the google maps api
      />
      <View>
      <NavOptions style={{}} />
      </View>
      <NavFavorite />
      <View style={tw`flex-row py-2 mt-auto bg-white border-t border-gray-200 justify-evenly`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomeScreen")}
                    style={tw`flex flex-row justify-center w-24 px-1 py-3 bg-black rounded-full`}>
                    <Icon name="home" size={20} color="white" style={tw`mr-1`}/>
                    <Text style={tw`text-center text-white`}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("suuccessScreen")} 
                style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name="gear" size={20} color="black" style={tw`mr-1`}/>
                    <Text style={tw`text-center`}>Setting</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: '7%',
    flex: 0,
},
textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
    borderRadius: 10
},
textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
}
});

export default TaxiBookingScreen;
