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

import Login from './screens/login/Login';
import {SafeAreaView} from 'react-native';
import home from './screens/home/Home';
const Stack = createStackNavigator();

// const theme = createTheme({
//   lightColors: {
//     primary: 'grey3',
//   },
// });

export default function App() {
  return (
    <ThemeProvider >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen   options={{ headerShown: false }} name="login" component={Login} />
          <Stack.Screen name="home" component={home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
