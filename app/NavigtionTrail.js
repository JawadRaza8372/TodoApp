import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./screens/WelcomeScreen";
import Splashscreen from "./screens/Splashscreen"


const Stack = createStackNavigator();

function NavigtionTrail() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splashscreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigtionTrail
