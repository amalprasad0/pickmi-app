import { SafeAreaView, StyleSheet, Text,StatusBar } from 'react-native'
import React from 'react'

const ConfirmScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Confirm Screen</Text>


    </SafeAreaView>
  )
}

export default ConfirmScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: StatusBar.currentHeight,
        paddingLeft: 20,
      }
})