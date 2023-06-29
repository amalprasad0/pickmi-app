import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 80,
      height: 100,
    },
    shadowOpacity: 10,
    shadowRadius: 4.65,
    elevation: 10,
  },
});
// {origin?.description}
