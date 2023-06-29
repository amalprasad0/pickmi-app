// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { FlatList } from "react-native-gesture-handler";
// import tw from "twrnc";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import * as Location from "expo-location";
// import { setDestination, setOrigin } from "../slices/navSlices";
// import { useDispatch } from "react-redux";
// const NavFavorite = () => {
//   const navigation = useNavigation();
//     const dispatch = useDispatch();
//   const [latitude, setLatitude] = useState(0);
//   const [longitude, setLongitude] = useState(0);
//   const getCurrentLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//         return;
//       }
//       const location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;
//       setLatitude(latitude);
//       setLongitude(longitude);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };
//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   const data = [
//     // {
//     //   id: "123",
//     //   icon: "home",
//     //   label: "Current Location",
//     //   location: latitude + "," + longitude,
//     //   destination: latitude + "," + longitude
//     // },
//     {
//       id: "456",
//       icon: "briefcase",
//       label: "Home",
//       destination: "Calicut, Kerala, India",
//     },
//   ];
//   return (
//     <FlatList
//       data={data}
//       keyExtractor={(item) => item.id}
//       itemSeparatorComponent={() => (
//         <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
//       )}
//       renderItem={({ item: { label, destination, icon } }) => (
//         <TouchableOpacity
//           style={tw`flex-row items-center  p-5`}
//           onPress={() => {
//             dispatch(setDestination({
//                 destination:destination,
//                 description: label,
            
//             }));
//           }}
//         >
//           <View style={tw`px-3`}>
//             <Text style={tw`font-semibold text-lg`}>{label}</Text>
//             <Text style={tw`text-gray-500`}>{destination}</Text>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

// export default NavFavorite;

// const styles = StyleSheet.create({});
