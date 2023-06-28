import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlices";
import NavFavorite from "../components/NavFavorite";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlices";
import NavigateCard from "../components/NavigateCard";
const BookScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-3xl font-semibold p-5`}>Hello Amal !</Text>
      <View style={tw`h-1/2 mt-4 p-5 mx-1 bg-neutral-600 w-96 border-gray-300 rounded-xl text-white`}>
        <View Style={tw`w-70 border border-gray-300 rounded-xl`}>
          <Text style={tw`text-sm text-white`}>Pickup:</Text>
          <Text style={tw`text-2xl pl-3 text-white`}>Chittarikkal, Kerala, India</Text>
        </View>
        <View Style={[tw`w-70 border text-white border-gray-300 rounded-xl mt-10`]}>
          <Text style={tw`text-sm text-white`}>Drop off:</Text>
          <Text style={tw`text-2xl text-white pl-3`}>Empty </Text>
        </View>
        <View style={tw`mt-3 p-5`}>
          <Text style={tw`text-2xl text-white font-semibold`}>Date & Time</Text>
          <Text style={tw`text-sm text-white`}>Mon, 12 July, 10:00 AM</Text>
        </View>
        <View style={tw` p-5`}>
          <Text style={tw`text-2xl text-white font-semibold`}>Price : ₹ 1000/-</Text>
          <Text style={tw`text-sm text-white`}>Ride Mode : Auto</Text>
          <Text style={tw`text-sm text-white`}>OTP : 7823</Text>
          </View>
      </View>
      <NavigateCard/>
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  conent:{
    marginTop:10
  }
});
// {origin?.description}
