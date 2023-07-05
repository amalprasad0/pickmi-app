import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const NavFavorite = () => {
    const navigation = useNavigation()
    const data = [
        {
            id: '123',
            icon: 'home',
            location: 'Current Location',
            destination: 'Chittarikkal, Kerala, India'
        },
        
    ]
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            itemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}

            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity
                    style={tw`flex-row items-center  p-5`}
                    onPress={() => navigation.navigate("NavigateCard")}
                >
                    
                    <View style={tw`px-3`}>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>

            )}

        />

    )
}

export default NavFavorite

const styles = StyleSheet.create({})