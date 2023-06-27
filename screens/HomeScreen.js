import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image ,FlatList } from "react-native";
import tw from "twrnc"
import NavOptions from "../components/NavOptions";
const TaxiBookingScreen = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handleBooking = () => {
    // Handle booking logic here
    console.log("Booking confirmed!");
  };

  return (
    <SafeAreaView style={[tw`bg-white h-full`,styles.container]}>
     <View style={tw`pt-8 pl-4`}>
      <Text style={tw`text-5xl font-bold mt-6`}>Pickmi</Text>
     </View>
     <NavOptions/>
      <View style={tw`h-1/4`}>
        <Text style={tw`text-2xl p-5`}>History</Text>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) =>
            
           <Text style={tw`text-sm p-5`}>{item.key}</Text>
           
          
          }
        />
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    
  }
});

export default TaxiBookingScreen;
