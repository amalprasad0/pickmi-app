import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const data=[
  {
    id:"Car-123",
    title:"Car 5-seater",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"car-456",
    title:"Car 7-seater",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8"
  },
  {
    id:"Auto-123",
    title:"Auto 3-seater",
    multiplier:1.75,
    image:"https://links.papareact.com/7pf"
  },
]
const SURGE_CHARGE_RATE=1.5
const RideOptionsCard = () => {
  const navigation=useNavigation()
  const [selected, setselected]=useState(null)
  return (
    <View style={tw`bg-white  flex-grow`}>
      <View >
        <TouchableOpacity 
        style={tw`absolute left-5 p-3 rounded-full`}
        onPress={()=>
          navigation.navigate("NavigateCard")
          // console.log("pressed")}
        }
        >
        </TouchableOpacity>
        <Text style={tw`text-center py-1 text-lg `}>Select a Ride</Text>
      </View>
      <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item:{id,title,multiplier,image},item})=>(
        <TouchableOpacity 
        onPress={()=>{
          setselected(item)
        }}
        style={tw`flex-row items-center justify-between px-10 ${
          id===selected?.id && "bg-gray-200"
        }`}>
          <Image style={{
            width:90,
            height:90,
            resizeMode:"contain"
          }
          }
          source={{uri:image}}/>
          <View >
            <Text style={tw`text-xl font-semibold`}>{title}</Text>
            <Text>""</Text>

          </View>
          <Text style={tw`text-xl`}>₹
          
          {/* {new Intl.NumberFormat('en-IN',{
            style:"currency",
            currency:"INR"
          }).format(
            (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier)/100
          )
          } */}
          </Text>
        </TouchableOpacity>

      )}
     />  
     <View style={tw`mt-auto border-t border-gray-200`}>
      <TouchableOpacity
      disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-400"}`} >
        <Text style={tw`text-center text-white text-lg`}>
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
     </View>

    </View>
  );
};

export default RideOptionsCard

const styles = StyleSheet.create({})