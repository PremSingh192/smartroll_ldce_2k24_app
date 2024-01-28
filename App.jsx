import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from './screens/login/Login';
import Home from './screens/home/Home';
import {useSelector} from 'react-redux';
import useAPI from './hooks/useAPI';
import Router from './components/Router';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home">
          {props => (
            <Router>
              <Home {...props} />
            </Router>
          )}
        </Stack.Screen>

        <Stack.Screen
          name="login"
          component={login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
