// import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import React from 'react'
// import tw from 'twrnc'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { useDispatch } from 'react-redux';
// import { setDestination } from '../slices/navSlices';
// import { useNavigation } from '@react-navigation/native';
// import NavFavourite from './NavFavorite';
// import { useSelector } from 'react-redux';
// import { selectOrigin,selectDestination } from '../slices/navSlices';
// import { Pressable } from 'react-native';
// import * as Haptics from "expo-haptics";
// import Icon from 'react-native-vector-icons/FontAwesome';
// const NavigateCard = () => {
//     const dispatch = useDispatch();
//     const navigation = useNavigation();
//     const origin = useSelector(selectOrigin);
//     const destination = useSelector(selectDestination);
    
//     return (
//         <SafeAreaView style={tw`bg-white flex-1`}>
//             <View style={tw`border-t border-gray-200 flex-shrink`}>
//                 <View>
//                     <GooglePlacesAutocomplete
//                         placeholder='Where to?'
//                         styles={toInputBoxStyles}
                        
//                         onPress={(data, details = null) => {
//                             // 'details' is provided when fetchDetails = true
//                             dispatch(
//                                 setDestination({
//                                     location: details.geometry.location,
//                                     description: data.description,
//                                 }))
//                             navigation.navigate("RideOption")
//                             // console.log(data, details);

//                         }}
//                         fetchDetails={true}
//                         query={{
//                             key: "AIzaSyDhIyWfb1NU_3fC0cJ5okzfnvImQb6QFnQ",
//                             language: 'en',
//                             components: 'country:in'
//                         }}
//                         nearbyPlacesAPI="GooglePlacesSearch"
//                         debounce={400}
//                         enablePoweredByContainer={false}
//                         returnKeyType={"search"}
//                         minLength={2}
//                     />
//                 </View>
//                 <NavFavourite />
//             </View>
//             {/* <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
//                 <TouchableOpacity
//                     onPress={() => alert("Rides")}
//                     style={tw`flex flex-row w-24 justify-between bg-black px-4 py-3 rounded-full`}>
//                     <Text style={tw`text-center text-white`}>Rides</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={tw`flex flex-row w-24 justify-between px-4 py-3 rounded-full`}>
//                     <Text style={tw`text-center`}>Eats</Text>
//                 </TouchableOpacity>
//             </View> */}
//             <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
//                 <Pressable
//                     onPress={() =>{ 
//                         navigation.navigate("HomeScreen")
//                         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

//                     }}
//                     style={tw` flex-row w-24  justify-center bg-black px-1 py-3 rounded-full`}>
//                     <Icon name="check" size={20} color="white" style={tw`mr-1`}/>
//                     <Text style={tw`text-center text-white`}>Book</Text>
//                 </Pressable>
//                 <Pressable
//                   onPress={() => {
//                     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
//                   }
//                 } 
//                 style={tw`flex flex-row w-24 justify-between px-4 py-3 rounded-full`}>
//                     <Icon name="gear" size={20} color="black" style={tw`mr-1`}/>
//                     <Text style={tw`text-center`}>Setting</Text>
//                 </Pressable>
//             </View>
//         </SafeAreaView>
//     )
// }

// export default NavigateCard

// const toInputBoxStyles = StyleSheet.create({
//     container: {
//         backgroundColor: "white",
//         paddingTop: 20,
//         flex: 0,
//     },
//     textInput: {
//         backgroundColor: "#DDDDDF",
//         borderRadius: 0,
//         fontSize: 18,
//         borderRadius: 10
//     },
//     textInputContainer: {
//         paddingHorizontal: 20,
//         paddingBottom: 0,
//     }
// })





import { StyleSheet, Text, View, SafeAreaView,Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlices';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import NavFavourite from './NavFavorite';
import { useSelector } from 'react-redux';
import { selectOrigin, selectDestination } from '../slices/navSlices';
import { Pressable } from 'react-native';
import * as Haptics from "expo-haptics";
import Icon from 'react-native-vector-icons/FontAwesome';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardActive(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardActive(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleDestinationPress = (data, details = null) => {
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description,
      })
    );
    navigation.navigate("RideOption");
  };

  const handleBookPress = () => {
    navigation.navigate("RideOption");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleSettingPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={toInputBoxStyles}
            onPress={handleDestinationPress}
            fetchDetails={true}
            query={{
              key: "AIzaSyDhIyWfb1NU_3fC0cJ5okzfnvImQb6QFnQ",
              language: 'en',
              components: 'country:in'
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            minLength={2}
          />
        </View>
        <NavFavourite />
      </View>
      {!isKeyboardActive && (
        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
          <Pressable
            onPress={handleBookPress}
            style={tw` flex-row w-24  justify-center bg-black px-1 py-3 rounded-full`}>
            <Icon name="check" size={20} color="white" style={tw`mr-1`} />
            <Text style={tw`text-center text-white`}>Book</Text>
          </Pressable>
          <Pressable
            onPress={handleSettingPress}
            style={tw`flex flex-row w-24 justify-between px-4 py-3 rounded-full`}>
            <Icon name="gear" size={20} color="black" style={tw`mr-1`} />
            <Text style={tw`text-center`}>Setting</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  )
=======
// import NavFavourite from './NavFavorite';
import { TouchableOpacity } from 'react-native-gesture-handler';
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1 border border-gray-300 rounded-xl`}>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        styles={toInputBoxStyles}
                        
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }))
                            navigation.navigate("RideOptionsCard")
                            // console.log(data, details);

                        }}
                        fetchDetails={true}
                        query={{
                            key: "AIzaSyDhIyWfb1NU_3fC0cJ5okzfnvImQb6QFnQ",
                            language: 'en',
                            components: 'country:in'
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        enablePoweredByContainer={false}
                        returnKeyType={"search"}
                        minLength={2}
                    />
                </View>
                {/* <NavFavourite /> */}
            </View>
            {/* <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
                <TouchableOpacity
                    onPress={() => alert("Rides")}
                    style={tw`flex flex-row w-24 justify-between bg-black px-4 py-3 rounded-full`}>
                    <Text style={tw`text-center text-white`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row w-24 justify-between px-4 py-3 rounded-full`}>
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    )
>>>>>>> a2710a86e28ee6413463c7ef3c942890d62f3e38
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
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



