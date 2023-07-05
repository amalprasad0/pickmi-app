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
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlices";
const cargoImage = require("./cargo.png");

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "BookScreen",
  },
  {
    id: "456",
    title: "Get a Cargo",
    image:
      "https://github.com/amalprasad0/pickmi-app/blob/master/components/cargo.png?raw=true",
    screen: "BookScreen",
  },
  {
    id: "45",
    title: "Mechanic",
    image:
      "https://github.com/amalprasad0/pickmi-app/blob/master/components/male-mechanic.png?raw=true",
    screen: "MechScreen",
  },
  {
    id: "434",
    title: "My Booking",
    image:
      "https://github.com/amalprasad0/pickmi-app/blob/master/components/trye.png?raw=true",
    screen: "TyreScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  const renderCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.screen)}
      style={[tw`p-2 pl-5 pb-5 pt-4 bg-gray-200 m-2  border border-gray-300 rounded-xl`,styles.NavCard]}
      disabled={!origin}

    >
      <View  style={tw`${!origin && "opacity-20"}`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: item.image }}
        />
        <Text style={tw`mt-2 ml-2 text-lg font-semibold`}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderRow = ({ item }) => (
    <View style={[tw`flex-row`,styles.navOption]}>
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
      // style={[tw`mt-1 `,{flexGrow: 0,justifyContent: 'center',alignItems: "center"}]}
      data={dividedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderRow}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  navOption:{
    flex: 0,
    paddingLeft: '6%',
    paddingTop: '5%',
  },
  NavCard:{
    flex: 1,
    width:'80%',
  }
  
});
