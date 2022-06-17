import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { FirstScreen } from '../screens/FirstScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <StackNavigator>
            <Stack.Screen name="LoginScreen" component={ LoginScreen } />
            <Stack.Screen name="FirstScreen" component={ FirstScreen } />
        </StackNavigator>
    );
}
