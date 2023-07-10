import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
  Animated,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useRef, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Haptics from "expo-haptics";
import { Firebase } from "../Config";
import SpinnerOverlay from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlices";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

const SelectScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showBookButton, setShowBookButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCarsAvailable, setIsCarsAvailable] = useState(true); // Track if cars are available
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const animation = useRef(null);

  const originCoordinates = {
    latitude: origin.location.lat,
    longitude: origin.location.lng,
  };

  const buttonPosition = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (showBookButton) {
      Animated.spring(buttonPosition, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(buttonPosition, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [showBookButton]);

  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        setIsLoading(true);
        const driversRef = Firebase.firestore().collection("Drivers");
        const snapshot = await driversRef.get();
        const drivers = snapshot.docs.map((doc) => {
          const data = doc.data();
          const latitude = data.location.latitude;
          const longitude = data.location.longitude;
          return { ...data, latitude, longitude };
        });
        const filteredDrivers = drivers.filter((driver) => {
          const driverCoordinates = {
            latitude: driver.latitude,
            longitude: driver.longitude,
          };
          const distance = calculateDistance(
            originCoordinates,
            driverCoordinates
          );
          return distance <= 3; // Filter drivers within 3 kilometers
        });
        setDriverData(filteredDrivers);
        setIsCarsAvailable(filteredDrivers.length > 0); // Check if cars are available
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching driver data:", error);
      }
    };

    fetchDriverData();
  }, []);

  const calculateDistance = (origin, destination) => {
    const lat1 = origin.latitude;
    const lon1 = origin.longitude;
    const lat2 = destination.latitude;
    const lon2 = destination.longitude;

    const R = 6371; // Radius of the earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const handleCardPress = (index) => {
    setSelectedCard(index);
    setShowBookButton(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleBookNow = () => {
    navigation.navigate("SuccessScreen");
  };

  const buttonTranslateY = buttonPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <SafeAreaView style={[tw``, styles.container]}>
      <Pressable
        onPress={() => {
          navigation.navigate("RideOption");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Icon name="angle-left" style={[tw`m-2 pl-3`]} size={30} />
      </Pressable>
      <Text style={[tw`text-center text-lg mb-3`]}>Select the Car</Text>
      <SpinnerOverlay
        visible={isLoading}
        textContent={"Please Wait..."}
        textStyle={styles.spinnerText}
      />

      <ScrollView contentContainerStyle={tw`flex justify-center`}>
        {isCarsAvailable ? (
          driverData.map((item, index) => (
            <Pressable
              onPress={() => handleCardPress(index)}
              style={[
                tw`p-2 pl-6 pb-5 pt-4 bg-gray-200 m-2 rounded-xl`,
                styles.card,
                selectedCard === index && tw`bg-neutral-300`, // Apply different background color to selected card
              ]}
              key={index}
            >
              <View style={tw`flex-row`}>
                <Image
                  style={{ width: 100, height: 100, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />
                <View style={tw`ml-4 flex-grow`}>
                  <View style={tw`flex-row items-center mb-1`}>
                    <Text style={tw`text-gray-600 text-xl `}>
                      {item.driverName}
                    </Text>
                  </View>
                  <View style={tw`flex-row items-center mb-1`}>
                    <Icon name="car" style={tw`mr-2`} size={15} color="gray" />
                    <Text style={tw`text-gray-600`}>{item.vehicleName}</Text>
                  </View>
                  <View style={tw`flex-row items-center mb-1`}>
                    <Icon
                      name="hashtag"
                      style={tw`mr-2`}
                      size={15}
                      color="gray"
                    />
                    <Text style={tw`text-gray-600`}>{item.vehicleNum}</Text>
                  </View>
                  <View style={tw`flex-row items-center mb-1`}>
                    <Icon
                      name="credit-card"
                      style={tw`mr-2`}
                      size={15}
                      color="gray"
                    />
                    <Text style={tw`text-gray-600`}>UPI {item.upi}</Text>
                  </View>
                  <View style={tw`flex-row items-center mb-1`}>
                    <Icon
                      name="map-marker"
                      style={tw`mr-2`}
                      size={18}
                      color="gray"
                    />
                    <Text style={tw`text-gray-600`}>2Km Away </Text>
                  </View>
                </View>
                <View style={tw`absolutebottom-4 right-4`}>
                  <View style={tw`flex-row items-center`}>
                    <Icon name="star" style={tw`mr-2`} size={18} color="gray" />
                    <Text style={tw`text-gray-600`}>{item.rating}/5</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))
        ) : (
          <Animated.View
            style={[
              tw`flex flex-grow justify-center items-center`,
              styles.noCarsContainer,
            ]}
          >
            <LottieView
              autoPlay
              loop={true}
              ref={animation}
              style={{
                width: 300,
                height: 300,
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require("../assets/empty.json")}
            />
            <Text style={tw`text-center text-xl`}>
              Sorry, no cars currently nearby.
            </Text>
            <Text style={tw`text-center text-sm min-w-min`}>
              Great news! We're expanding our services to your area!
            </Text>
          </Animated.View>
        )}
      </ScrollView>
      <Animated.View
        style={[
          tw`bg-black py-3 rounded-lg`,
          styles.bookNowButton,
          { transform: [{ translateY: buttonTranslateY }] },
        ]}
      >
        <Pressable onPress={handleBookNow}>
          <Text style={tw`text-white text-center text-lg`}>Book Now</Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
};

export default SelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    width: wp("95%"),
  },
  bookNowButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  spinnerText: {
    color: "#FFF",
  },
  noCarsContainer: {
    height: hp("70%"),
  },
});
