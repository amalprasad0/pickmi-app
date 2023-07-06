import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Linking,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView,RefreshControl, } from "react-native";
import { LinearGradient } from 'expo'

const ConfirmScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      
       <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl   />
        }>
      <View style={[tw`flex-row justify-between`]}>
        <Pressable
          onPress={() => {
            console.log("pressed");
            navigation.navigate("HomeScreen");
          }}
        >
          <Icon name="angle-left" style={[tw`m-4`]} size={30}></Icon>
        </Pressable>
        <Text style={[tw`m-5`]}>Booking Details</Text>
        <Pressable
          onPress={() => {
            Linking.openURL(
              `whatsapp://send?&text=bookingID:*123AMAL456A* | 23 JUN 2023, Mon 10:00AM | Pickup: Chittarikkal ,Kerala | Dropoff: Kollam,Kerala | Car: Swift Dzire | Driver: Manu Sankar |
              Happy Journey by *Pickmi India*
              `
            );
          }}
        >
          <Icon
            name="whatsapp"
            style={[tw`m-5 mr-3`, { marginRight: wp(10) }]}
            size={30}
          ></Icon>
        </Pressable>
      </View>

      <View style={[tw`mt-4`]}>
        <Text style={[tw`text-4xl font-bold ml-3`]}>
          Car will arrive in 
        </Text>
       
        <Text style={[tw`text-xl  ml-3 `]}> 10 mins 00 sec </Text>
      </View>
      <View style={[tw`flex-row mt-12 ml-2 justify-around`]}>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>Booking-ID</Text>
          <Text style={[tw`text-sm font-normal`, styles.header]}>
            CAR234AMAL345F
          </Text>
        </View>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>
            Date & Time
          </Text>
          <Text style={[tw`text-sm font-normal`, styles.header]}>
            23 JUN 2023, Mon 10:00AM
          </Text>
        </View>
      </View>
      <View style={[tw`mt-13`]}>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: wp("90%"),
            opacity: 0.1,
          }}
        />
      </View>
      <View style={[tw`flex-row mt-4 ml-2 justify-around`]}>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>Pickup</Text>
          <Text
            style={[tw`text-sm font-normal max-w-xs`, { maxWidth: wp(45) }]}
          >
            Chittarikkal, Kasaragod, Kerala
          </Text>
        </View>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>Dropoff</Text>
          <Text
            style={[tw`text-sm font-normal max-w-xs`, { maxWidth: wp(45) }]}
          >
            Cherupuzha, Kannur, Kerala
          </Text>
        </View>
      </View>
      <View style={[tw`flex-row mt-4 ml-2 justify-around`]}>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>Distance</Text>
          <Text
            style={[tw`text-sm font-normal max-w-xs`, { maxWidth: wp(45) }]}
          >
            1 km (approx)
          </Text>
        </View>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>Duration</Text>
          <Text
            style={[tw`text-sm font-normal max-w-xs`, { maxWidth: wp(45) }]}
          >
            10 min (approx)
          </Text>
        </View>
      </View>
      <View style={[tw`mt-13`]}>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: wp("90%"),
            opacity: 0.1,
          }}
        />
      </View>
      <Text style={[tw`mt-4`]}>
        Driver Will Call you you before reaching the pickup location.
      </Text>
      <View style={[tw`flex-row mt-4 ml-2 justify-around`]}>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>
            Driver Name
          </Text>
          <Text
            style={[tw`text-sm font-normal max-w-xs`, { maxWidth: wp(45) }]}
          >
            Mr.Manu Sankar
          </Text>
        </View>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>
            Vehicle No.
          </Text>
          <Text
            style={[tw`text-sm font-normal max-w-xs`, { maxWidth: wp(45) }]}
          >
            KL-14-AB-1234
          </Text>
        </View>
      </View>
      <View style={[tw`flex-row mt-4 ml-2 justify-around`]}>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>
            UPI Enabled Driver
          </Text>
          <Text
            style={[tw`text-sm font-normal max-w-xs`, { maxWidth: wp(45) }]}
          >
            Yes
          </Text>
        </View>
        <View style={[tw`flex-1`]}>
          <Text style={[tw`text-xl font-thin`, styles.header]}>
            Trip Status
          </Text>
          <Text
            style={[tw`text-sm font-normal max-w-xs`, { maxWidth: wp(45) }]}
          >
            Not Started
          </Text>
        </View>
      </View>
      <View style={[tw`flex-row mt-4 ml-2 justify-around`]}></View>
      <View style={[tw`mt-3`]}>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: wp("90%"),
            opacity: 0.1,
          }}
        />
      </View>
      <View style={[tw`flex-row mt-2 justify-between ml-10 `]}>
        <Pressable
          style={[tw`bg-black w-50 h-16 content-center rounded-lg`]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={[tw`text-2xl text-center mt-4  text-white`]}>
            Cancel Trip
          </Text>
        </Pressable>
        <Pressable
          style={[
            tw`border border-gray-300 w-20 ml-3 rounded-lg `,
            { marginRight: wp(23) },
          ]}
        >
          <Icon
            name="phone"
            size={35}
            style={[tw`text-center text-center mt-3`]}
          />
        </Pressable>
      </View>
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 20,
  },
  header: {
    flexDirection: "row",
  },
});
