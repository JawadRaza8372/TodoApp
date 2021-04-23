import React ,{useState} from 'react'
import { Image, View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import Icon,{IconSimple} from "./Icon"
function TextInputwithIconSimple({iconName,iconColor,varient,onChangeText,placeholder,onPress,...otherProps}) {
    return (
       <View style={{flexDirection:"row",marginVertical:5,backgroundColor:`${varient}`,borderRadius:35,borderColor:`${iconColor}`,borderWidth:2,justifyContent:"center",alignItems:"center",padding:11,width:"85%", height:50,alignSelf:"center"}}>
       

<TextInput

      style={{ height: 50 ,width:"85%",marginLeft:1,marginBottom:5,marginTop:5 }}
      onChangeText={onChangeText}
      placeholder={`${placeholder}`}
      {...otherProps}    />
      {(iconName &&iconColor) &&(       <TouchableOpacity style={{marginRight:3}} onPress={onPress}>
<IconSimple  name={iconName} background={iconColor}/></TouchableOpacity>
) }
       </View>
    )
}
function TextInputwithIcon({iconName,iconColor,varient,onChangeText,placeholder,...otherProps}) {
    return (
       <View style={{flexDirection:"row",marginVertical:5,backgroundColor:`${varient}`,borderRadius:35,borderColor:`${iconColor}`,borderWidth:2,justifyContent:"center",alignItems:"center",padding:15,width:"80%", height:50,alignSelf:"center"}}>
       
       {(iconName &&iconColor) &&(<Icon  name={iconName} background={iconColor}/>) }

<TextInput

      style={{ height: 50 ,width:"85%",marginLeft:12,marginBottom:5,marginTop:5 }}
      onChangeText={onChangeText}
      placeholder={`${placeholder}`}
      {...otherProps}    />

       </View>
    )
}
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
export default TextInputwithIcon
export {TextInputwithIconSimple}