import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { selectOrigin, selectDestination } from "../slices/navSlices";
import NavigateCard from "../components/NavigateCard";
import RideOption from "../components/RideOption";
import { useEffect } from "react";
const BookScreen = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-3xl font-semibold p-5`}>Let's start the trip</Text>
      <View style={tw`h-1/2 items-center`}>
        <View
          style={tw` mt-3 p-4 mx-1 bg-gray-950 w-96 border-gray-300 rounded-xl text-white`}
        >
          <View
            Style={[
              tw`w-70 border border-gray-300 rounded-xl`,
              styles.shadowProp,
            ]}
          >
            <Text style={tw`text-sm text-white`}>Pickup:</Text>
            <Text style={tw`text-2xl pl-3 text-white font-thin`}>
              {origin ? origin.description : "not selected"}
            </Text>
          </View>
          <View
            Style={[
              tw`w-70 border text-white border-gray-300 rounded-xl mt-10`,
            ]}
          >
            <Text style={tw`text-sm text-white`}>Drop off:</Text>
            <Text style={tw`text-2xl text-white pl-3 font-thin`}>
              {destination ? destination.description : "not selected"}
            </Text>
          </View>
          <View style={tw`mt-3 p-5`}>
            <Text style={tw`text-2xl text-white`}>Date & Time</Text>
            <Text style={tw`text-sm text-white font-thin`}>
              Mon, 12 July, 10:00 AM
            </Text>
          </View>
          <View style={tw` p-5`}>
            <Text style={tw`text-2xl text-white font-thin`}>
              Price : ₹ 1000/-
            </Text>
            <Text style={tw`text-sm text-white font-thin`}>
              Ride Mode : Auto
            </Text>
            <Text style={tw`text-sm text-white font-thin`}>OTP : 7823</Text>
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
    backgroundColor: "#fff",
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
});
// {origin?.description}
