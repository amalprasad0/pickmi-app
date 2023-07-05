import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { selectOrigin, selectDestination } from "../slices/navSlices";
import NavigateCard from "../components/NavigateCard";
import RideOption from "../components/RideOption";
import { selectTravelTimeInformation } from "../slices/navSlices";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const BookScreen = () => {
  const Stack = createNativeStackNavigator();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const timeTravelInformation = useSelector(selectTravelTimeInformation);
  console.log(timeTravelInformation);
  const distance = timeTravelInformation?.distance?.text * 1.60934;
  console.log(distance);
  return (
    <SafeAreaView style={[tw`bg-white`,styles.container]}>
      <Text style={tw`text-3xl font-semibold p-5`}>Let's start the trip</Text>
      <View style={tw`h-1/2 items-center`}>
        <View
          style={[tw`mt-2 p-3 mx-1 bg-gray-950 border-gray-300 rounded-xl text-white`,styles.cardProp]}
        >
          <View
            Style={[
              tw`w-50 border text-white border-gray-300 rounded-xl`,
              styles.shadowProp,
            ]}
          >
            <Text style={tw`text-sm text-white`}>Pickup:</Text>
            <Text style={tw`text-xl pl-3 text-white font-thin`}>
              {origin ? origin.description : "not selected"}
            </Text>
          </View>
          <View
            Style={[
              tw`w-70 border text-white border-gray-300 rounded-xl mt-10`,
            ]}
          >
            <Text style={tw`text-sm text-white`}>Drop off:</Text>
            <Text style={tw`text-xl text-white pl-3 font-thin`}>
              {destination ? destination.description : "not selected"}
            </Text>
          </View>
          <View style={tw` p-5`}>
            <Text style={tw`text-2xl text-white`}>Travel Time</Text>
            <Text style={tw`text-sm text-white font-thin`}>
              {timeTravelInformation?.duration?.text}
            </Text>
            <Text style={tw`text-2xl text-white`}>Distance</Text>
            <Text style={tw`text-sm text-white font-thin`}>
              {timeTravelInformation?.distance?.text}
            </Text>
          </View>
          <View style={tw` p-1 pl-5`}>
            
            <Text style={tw`text-sm text-white font-thin`}>
              Ride Mode : Auto Rickshaw
            </Text>
            <Text style={tw`text-sm text-white font-thin`}>
              Fare : Rs. 100
            </Text>
            <Text style={tw`text-base text-white font-thin`}>
              Date & Time : 12/12/2021 12:00 PM
            </Text>
           
          </View>
        </View>
      </View>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="BookScreen"
      >
        <Stack.Screen name="NavigateCard" component={NavigateCard} />
        <Stack.Screen name="RideOption" component={RideOption} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight,
  },
  conent: {
    marginTop: 10,
  },
  shadowProp: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#171717",
    shadowOpacity: 10,
    shadowRadius: 9,
  },
  cardProp:{
    height:hp('47%'),
    width:wp('90%'),
  }
});
// {origin?.description}
