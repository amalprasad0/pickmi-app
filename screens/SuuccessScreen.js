import React, { useRef, useEffect } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const SuuccessScreen = () => {
    const navigation = useNavigation();
  const animation = useRef(null);
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={{
          width: 300,
          height: 300,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/success (2).json")}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#000",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Your have booked successfully
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "#000",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Booking ID: AM125SDFR
      </Text>
      <View>
        <TouchableOpacity

            style={{
                backgroundColor: "#000",
                padding: 10,
                borderRadius: 10,
                width: 200,
                marginTop: 20,
                }}
                onPress={() => navigation.navigate("ConfirmScreen")}
                >
                <Text
                style={{
                    fontSize: 20,
                    color: "#fff",
                    textAlign: "center",
                }}
                >
                Continue
                </Text>
            </TouchableOpacity>
      </View>
     
    </View>
  );
};

export default SuuccessScreen;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
