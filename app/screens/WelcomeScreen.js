import React,{useState,useEffect} from 'react';
import { SafeAreaView,StyleSheet,View,Platform,StatusBar,ScrollView} from 'react-native';
import {useDimensions} from "@react-native-community/hooks";
import appName,{bgColor} from "../TextData"
import Mytext from '../Components/Mytext';
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import {TextInputwithIconSimple} from "../Components/TextInputwithIcon"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Itemwithicon from '../Components/ItemwithIcon';
function WelcomeScreen() {
  const dimension= useDimensions().screen.width;
  const [item, setitem] = useState('')
  const [data, setdata] = useState([])
  const [edata, setedata] = useState(null)
useEffect(() => {
  storeData(data);

}, [data])
  let storeData = async (as) => {
    try {
      {data &&
      await AsyncStorage.setItem('todo',JSON.stringify(as)).then(()=>{
        console.log("saved");
        setitem('')
        retrieveData();
      })}
    } catch (error) {
console.log(error)
    }
  };
  let retrieveData = async () => {
    try {
      const value =JSON.parse( await AsyncStorage.getItem('todo'));
      if (value !== null) {
        // We have data!!
        setedata(value);
      }
    } catch (error) {
console.log("error retrive"+error)
    }
  };

 const  delateitem=(idd)=>{
    
   let j=edata.filter((newarr,index)=>{
      return  index !== idd;
      }
       )
   
   console.log(j)
   setedata(j);
   setdata(j);

   
   
   }

    return (
        <SafeAreaView style={styles.contan}>
       <View style={[styles.logo,    {borderBottomLeftRadius: ((dimension)/4),height:((dimension)/3),borderBottomRightRadius:  ((dimension)/4),}]}>


    <View style={{flexDirection:"row",alignContent:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",}}>

    <MaterialCommunityIcons style={{alignSelf:"center"}} name='clipboard-list' color={`${bgColor}`} size={58} />
    
    <View style={{paddingVertical:10}}>
 <Mytext tec={`${appName}`} style={{color:`${bgColor}`,textTransform:"uppercase",marginVertical:"auto", fontWeight: "bold"}}></Mytext>
</View>
    </View>
         </View>
<View style={{marginTop:"28%",paddingTop:25,paddingHorizontal:15}}>
<TextInputwithIconSimple iconName="add-circle" iconColor={`${bgColor}`} value={item} varient="white" onChangeText={(text)=>{setitem(text)}}
 placeholder="Enter Your List Item" onPress={()=>{setdata((prevalue,index)=>{
 return [...prevalue,{id:index,ts:item}]
});
}}/>
<ScrollView style={{marginTop:15,marginLeft:5,overflow:"hidden"}}>
{edata && edata.map((dats,index)=>{
  return(<Itemwithicon color="white" id={index} text={dats.ts} key={index} onPress={delateitem}/>)

})
}
</ScrollView></View>
        




                         </SafeAreaView>
        );
}
const styles = StyleSheet.create({
    logo:{
      position:"absolute",
      top:0,
    width:'100%',
    justifyContent:"center",
    backgroundColor:"white",
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,
   
     },
    
    tagline:{
        marginVertical:80,
        alignSelf:"center",
        fontSize:23,
        textTransform:"uppercase",
        color:"white",
       fontWeight: "bold"},
    container: {
      flex: 1,
      flexDirection: "column"
    },
    contan: {
      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,
      flex: 1,
      justifyContent:'flex-start',
      backgroundColor:`${bgColor}`
      ,paddingBottom:45
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });

export default WelcomeScreen;