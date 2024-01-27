import React from 'react';
import {
  Input,
  Button,
  lightColors,
  createTheme,
  ThemeProvider,
  Icon,
} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import login from './screens/login/Login';
import {SafeAreaView} from 'react-native';
import home from './screens/home/Home';
const Stack = createStackNavigator();

const theme = createTheme({
  lightColors: {
    primary: 'grey3',
  },
});
//np import { NativeBaseProvider, Text, Box } from "native-base";S

export default function App() {
  return (        
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="home" component={home} />
        </Stack.Navigator>
      </NavigationContainer>    
  )
}