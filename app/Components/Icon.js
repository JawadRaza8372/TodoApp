import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
function IconSimple(props) {
  return (
    <View
      style={{
        width:25,
        height:25,
        borderRadius:30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white",
             }}
    >
      {/* <MaterialCommunityIcons name={`${props.name}`} color="white" size={25} /> */}
      <Ionicons name={props.name} color={`${props.background}`} size={25} />

    </View>
  );
}
function Icon(props) {
  return (
    <View
      style={{
        width:28,
        height:28,
        borderRadius:30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:`${props.background}`,
             }}
    >
      <MaterialCommunityIcons name={`${props.name}`} color="white" size={25} />

    </View>
  );
}

export default Icon;
export {IconSimple};
