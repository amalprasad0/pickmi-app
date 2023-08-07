import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { selectOrigin, selectDestination } from "../slices/navSlices";
import NavigateCard from "../components/NavigateCard";
import RideOption from "../components/RideOption";
import { selectTravelTimeInformation } from "../slices/navSlices";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const BookScreen = () => {
  const Stack = createNativeStackNavigator();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const timeTravelInformation = useSelector(selectTravelTimeInformation);
  console.log(timeTravelInformation);
  const distance = timeTravelInformation?.distance?.text * 1.60934;
  console.log(distance);
  return (
    <SafeAreaView style={[tw`bg-white`, styles.container]}>
      <View style={[tw`flex-row`]}>
        <Text style={tw`text-2xl font-semibold p-5`}>Good Morning, Amal !</Text>
        {/* <Icon name="mug-hot"  type="ionicon" style={[tw`self-center ml-17`]} size={25}></Icon> */}
      </View>
      {/* <Text style={tw`text-3xl font-semibold p-5`}>Ready, Set, Ride ! 
      <Icon name="bell" style={{margin:60}} size={25}></Icon>
      </Text> */}
      <View style={tw`h-1/2 items-center`}>
        <View
          style={[
            tw`mt-2 p-3 mx-1 bg-gray-950 border-gray-300 rounded-xl text-white`,
            styles.cardProp,
          ]}
        >
          <View
            Style={[
              tw`w-50 border text-white border-gray-300 rounded-xl`,
              styles.shadowProp,
            ]}
          >
            <Text style={tw`text-sm text-white`}>
             
              Pickup:
              </Text>
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

            <Text style={tw`text-lg text-white mt-2`}>
              Date & Time :{" "}
              <Text style={tw`text-sm text-white font-thin`}>
                2021-09-20 10:00:00 AM
              </Text>
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
=======
import { selectDestination, selectOrigin } from "../slices/navSlices";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import NavigateCard from "../components/NavigateCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const BookScreen = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-3xl font-semibold p-5`}>Let's Start the trip !</Text>
      <View style={tw`h-1/2 items-center `}>
        <View
          style={[
            tw` mt-3 p-4 bg-zinc-800 w-96 border-gray-300 rounded-xl text-white `,
            styles.shadow,
          ]}
        >
          <View Style={tw`w-70 border border-gray-300 rounded-xl`}>
            <Text style={tw`text-sm text-white`}>Pickup:</Text>
            <Text
              style={tw`text-2xl font-light pl-3 text-white`}
            >
              {origin?.description}
            </Text>
          </View>
          <View
            Style={[
              tw`w-70 border text-white border-gray-300 rounded-xl mt-10`,
            ]}
          >
            <Text style={tw`text-sm text-white`}>Drop off:</Text>
            <Text style={tw`text-2xl text-white font-light pl-3`}>
              {destination?.description}
            </Text>
          </View>
          <View style={tw`mt-3 p-5`}>
            <Text style={tw`text-2xl text-white font-semibold`}>
              Ride Mode:
            </Text>
            <Text style={tw`text-sm text-white`}>Auto Rikshaw</Text>
          </View>
          <View style={tw`p-5`}>
            <Text style={tw`text-2xl text-white`}>Price : ₹ 57.09/-</Text>
            <Text style={tw`text-sm text-white `}>Date & Time:</Text>
            <Text style={tw`text-sm text-white `}>Mon, 12 July, 10:00 AM</Text>
            <Text style={tw`text-sm text-white `}>
              Travelling Time : 2 hr 4 min
            </Text>
          </View>
        </View>
      </View>

      <Stack.Navigator>
        <Stack.Screen
          name="NavigateCard"
          component={NavigateCard}
          options={{ headerShown: false }}
        />
>>>>>>> a2710a86e28ee6413463c7ef3c942890d62f3e38
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
<<<<<<< HEAD
  shadowProp: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#171717",
    shadowOpacity: 10,
    shadowRadius: 9,
  },
  cardProp: {
    height: hp("47%"),
    width: wp("90%"),
=======
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 80,
      height: 100,
    },
    shadowOpacity: 10,
    shadowRadius: 4.65,
    elevation: 10,
>>>>>>> a2710a86e28ee6413463c7ef3c942890d62f3e38
  },
});
// {origin?.description}
