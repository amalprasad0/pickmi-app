import {
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";
  import React from "react";
  import tw from "twrnc";

  const cargoImage = require("./cargo.png");

  
  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Get a Cargo",
      image : "https://github.com/amalprasad0/pickmi-app/blob/master/components/cargo.png?raw=true",
      screen: "EatsScreen",
    },
    {
        id: "45",
        title: "Book a Mechanic",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
      },
  ];
  
  const NavOptions = () => {
    const renderCard = ({ item }) => (
      <TouchableOpacity
        onPress={() => alert("clicked")}
        style={tw`p-2 pl-8 pb-8 pt-4 bg-gray-200 m-2 w-40 h-52 border border-gray-300 rounded-xl`}
        // disabled={!origin}
      >
        <View>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{ uri: item.image }}
          />
          <Text style={tw`mt-2 ml-2 text-lg font-semibold`}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  
    const renderRow = ({ item }) => (
      <View style={tw`flex-row`}>
        {item.map((card) => (
          <View style={tw`flex-1`} key={card.id}>
            {renderCard({ item: card })}
          </View>
        ))}
      </View>
    );
  
    const dividedData = [];
    for (let i = 0; i < data.length; i += 2) {
      dividedData.push(data.slice(i, i + 2));
    }
  
    return (
      <FlatList
        data={dividedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRow}
      />
    );
  };
  
  export default NavOptions;
  
  const styles = StyleSheet.create({});
  