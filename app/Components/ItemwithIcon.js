import React from 'react'
import { Image, View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import Mytext from './Mytext';

import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";

function ItemwithIcon({color,id,text,onPress}) {
    const onPress1=()=>{
        onPress(id)
    }
    return (
        <View style={{display:"flex",flexDirection:"row",alignContent:"center",width:"100%",
        marginRight:"auto",marginBottom:7}}>
    <TouchableOpacity style={{marginRight:3}} onPress={onPress1}>
    <MaterialCommunityIcons style={{alignSelf:"center"}} name='delete-circle' color={color} size={34} />
   </TouchableOpacity>
    <View style={{width:"92%"}}>
 <Mytext tec={text} style={{color:"white",textTransform:"capitalize",marginVertical:"auto", fontWeight: "bold",fontSize:22}}/>
</View>
    </View>
    )}
const styles = StyleSheet.create({
    card:{
        borderRadius:20,
        borderColor:"#000",
        borderWidth:2,
        backgroundColor:"#ffffff",
        marginBottom:20,
        overflow:"hidden",    
    }
    ,image: {
        width:330,
        height:200,
         resizeMode: "stretch",
         borderTopLeftRadius:16,
         borderTopRightRadius:16,
    
       
       },
    title:{
        fontSize:20,marginBottom:7,textTransform:"capitalize"
    },subtitle:{
        fontSize:18,
        color:"#808080",textTransform:"capitalize"
    
    }
    
        })
export default ItemwithIcon
