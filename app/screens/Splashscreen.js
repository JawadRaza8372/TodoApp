import React,{useState,useEffect,useCallback} from 'react'
import { View, Text,Image } from 'react-native'
import {bgColor} from "../TextData"
import { MaterialCommunityIcons} from "@expo/vector-icons";
import Mytext from '../Components/Mytext';

const Splashscreen = ({navigation}) => {
    const [newName, setnewName] = useState("");

    const names=[{line:"."},{line:".."},{line:"..."}];
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index].line);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome');
          }, 4000);
       
    }, [])
    let image={uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-library.com%2Ficon%2Ftodo-icon-13.html&psig=AOvVaw1T-Tm-bhagrFpmvNIAHRdN&ust=1619159768027000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiQh6alkfACFQAAAAAdAAAAABAQ"}
    return (
        <View style={{backgroundColor:`${bgColor}`,flex:1,justifyContent:"center",alignContent:"center"}}>
            
<MaterialCommunityIcons style={{alignSelf:"center"}} name='clipboard-list' color="white" size={68} />
<Mytext tec="todo" style={{color:`white`,marginLeft:"auto",marginRight:"auto",textTransform:"uppercase", fontWeight: "bold"}}></Mytext>

           <Text style={{fontSize:38,textTransform:"uppercase",color:"white",fontWeight: "bold",alignSelf:"center"}}>{newName}</Text>
        </View>
    )
}

export default Splashscreen
