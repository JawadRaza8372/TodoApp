import React from 'react'
import { View, Image, StyleSheet,StatusBar,Platform,SafeAreaView,Text,ScrollView } from "react-native";

function Mytext({tec,style}) {
    return (
        <Text style={[styles.screen,style]}>{tec}</Text>

    )
}

const styles = StyleSheet.create({
    screen: {
        fontSize:26
    },
  });
  
export default Mytext
