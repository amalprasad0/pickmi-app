import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination,setTravelTimeInformation } from '../slices/navSlices';
import { useNavigation } from '@react-navigation/native';
import NavFavourite from './NavFavorite';
import { useSelector } from 'react-redux';
import { selectOrigin,selectDestination } from '../slices/navSlices';
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    
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
                            navigation.navigate("RideOption")
                            // console.log(data, details);
                            TimeTraveled();

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
                <NavFavourite />
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
})