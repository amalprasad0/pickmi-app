import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView, Pressable,Animated } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useRef, useEffect } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import * as Haptics from "expo-haptics";


const driverData = [
  {
    carName: "Honda City",
    carNum: "KL79A1965",
    image: 'https://links.papareact.com/3pn',
    upi: "Enabled",
    rating: "4/5",
    place: "Chittarikkal, Kerala",
    name: "Manu Snakar",
    mode: "Online"
  },
  {
    carName: "Honda City",
    carNum: "KL79A1965",
    image: 'https://links.papareact.com/3pn',
    upi: "Enabled",
    rating: "4/5",
    place: "Chittarikkal, Kerala",
    name: "Manu Snakar",
    mode: "Online"
  },
  {
    carName: "Honda City",
    image: 'https://links.papareact.com/3pn',
    carNum: "KL79A1965",
    upi: "Enabled",
    rating: "4/5",
    place: "Chittarikkal, Kerala",
    name: "Manu Snakar"
  },
  {
    carName: "Honda City",
    name: "Manu Snakar",
    image: 'https://links.papareact.com/3pn',
    carNum: "KL79A1965",
    upi: "Enabled",
    rating: "4/5",
    place: "Chittarikkal, Kerala"
  },
  {
    carName: "Honda City",
    name: "Manu Snakar",
    image: 'https://links.papareact.com/3pn',
    carNum: "KL79A1965",
    upi: "Enabled",
    rating: "4/5",
    place: "Chittarikkal, Kerala"
  },
  {
    carName: "Honda City",
    name: "Manu Snakar",
    image: 'https://links.papareact.com/3pn',
    carNum: "KL79A1965",
    upi: "Enabled",
    rating: "4/5",
    place: "Chittarikkal, Kerala"
  },
];

const SelectScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showBookButton, setShowBookButton] = useState(false);
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

  const handleCardPress = (index) => {
    setSelectedCard(index);
    setShowBookButton(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

  };
  const handleBookNow = () => {
    // Handle book now functionality
  };
  const buttonTranslateY = buttonPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });



  return (
    <SafeAreaView style={[tw``, styles.container]}>
      <View>
        <Icon name="angle-left" style={[tw`m-2 pl-3`]} size={30} />
      </View>
      <Text style={[tw`text-center text-lg mb-3`]}>Select the Car</Text>
      <ScrollView contentContainerStyle={tw`flex-grow justify-center`}>
        {driverData.map((item, index) => (
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
                  <Text style={tw`text-gray-600 text-xl `}>{item.name}</Text>
                </View>
                <View style={tw`flex-row items-center mb-1`}>
                  <Icon name="car" style={tw`mr-2`} size={15} color="gray" />
                  <Text style={tw`text-gray-600`}>{item.carName}</Text>
                </View>
                <View style={tw`flex-row items-center mb-1`}>
                  <Icon name="hashtag" style={tw`mr-2`} size={15} color="gray" />
                  <Text style={tw`text-gray-600`}>{item.carNum}</Text>
                </View>
                <View style={tw`flex-row items-center mb-1`}>
                  <Icon name="credit-card" style={tw`mr-2`} size={15} color="gray" />
                  <Text style={tw`text-gray-600`}>UPI {item.upi}</Text>
                </View>
                <View style={tw`flex-row items-center mb-1`}>
                  <Icon name="map-marker" style={tw`mr-2`} size={15} color="gray" />
                  <Text style={tw`text-gray-600`}> {item.place}</Text>
                </View>
              </View>
              <View style={tw`absolute bottom-4 right-4`}>
                <View style={tw`flex-row items-center`}>
                  <Icon name="star" style={tw`mr-2`} size={18} color="gray" />
                  <Text style={tw`text-gray-600`}>{item.rating}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
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
    width: wp('95%'),
  },
  bookNowButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});
