import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import tw from 'twrnc'

const BookScreen = () => {
  return (
    <View style={tw`h-1/2`}>
        <Map />
      </View>
  )
}

export default BookScreen

const styles = StyleSheet.create({})