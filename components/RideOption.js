import React, { useEffect } from "react";
import { StyleSheet, Alert, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlices";
import { useDispatch } from "react-redux";
import { setTravelTimeInformation,setVehicle } from "../slices/navSlices";
import * as Haptics from "expo-haptics";

const data = [
  {
    id: "Car-123",
    title: "Car 5-seater",
    multiplier: 17,
    type: "5",
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "car-456",
    title: "Car 7-seater",
    multiplier: 19,
    type: "7",
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Auto-123",
    title: "Auto Rickshaw",
    multiplier: 14,
    type: "3",
    image:
      "https://cdnb.artstation.com/p/marketplace/presentation_assets/001/504/935/large/file.jpg?1643365883",
  },
];
const SURGE_CHARGE_RATE = 1.5;
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const [selected, setselected] = useState(null);
  const [travelTimeInformation, setTravelTime] = useState(null);
  useEffect(() => {
    if (!origin || !destination) return;
    const getTraveltime = async () => {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=AIzaSyDhIyWfb1NU_3fC0cJ5okzfnvImQb6QFnQ`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.rows[0].elements[0]);
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
          setTravelTime(data.rows[0].elements[0]);
        });
    };
    getTraveltime();
  }, [origin, destination, "AIzaSyDhIyWfb1NU_3fC0cJ5okzfnvImQb6QFnQ"]);
  console.log("Vehile",selected);
  return (
    <View style={tw`flex-grow bg-white border-t border-gray-200 `}>
      <View>
        <TouchableOpacity
          style={tw`absolute p-3 rounded-full left-5`}
          onPress={() => navigation.navigate("NavigateCard")}
        ></TouchableOpacity>
        <Text style={tw`py-1 text-lg text-center `}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier,type, image }, item }) => (
          <TouchableOpacity
            onPress={() => {
              setselected(item);
              dispatch(setVehicle({id,title,multiplier,type,image}));
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            }}
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Approx. price</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          onPress={() => {
            
            Alert.alert(
              "Confirm Booking",
              `Are you sure you want to book this ride from ${origin.description} to ${destination.description}`,
              [
                {
                  text: "Book",
                  onPress: () => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                    navigation.navigate("SelectScreen");
                   
                  },
                },
                {
                  text: "No",
                  onPress: () => console.log("No Pressed"),
                  style: "cancel",
                },
              ],
              { cancelable: false }
              //on clicking out side, Alert will not dismiss
            );
          }}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-400"}`}
        >
          <Text style={tw`text-lg text-center text-white`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
