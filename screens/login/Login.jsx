// Import necessary components and libraries
import React, {useState, useEffect} from 'react';
import isAuthenticated from '../../utils/isAuthenticated';
// import { AsyncStorage } from 'react-native';
import styles from '../../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base_url from '../../utils/Baseurl';
import axios from 'axios';

import {View, StyleSheet, Alert, Platform} from 'react-native';
import {
  Input,
  Button,
  lightColors,
  createTheme,
  ThemeProvider,
  Icon,
} from '@rneui/themed';

export default function Login({navigation}) {
  // if (isAuthenticated()){
  //   navigation.replace('home')
  // }
  const [useremail, setUseremail] = useState(() => {
    return '';
  });
  const [password, setPassword] = useState(() => {
    return '';
  });

  const handleLogin = () => {
    if (useremail == '' || password == '') {
      Alert.alert('Alert', 'Enter username and password ');
    } else {
      console.log(`username ${useremail} and pasword ${password}`);

      const body = {
        email: useremail,
        password: password,
      };
      const axiosconfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios.post(`${base_url}/auth/api/login/`, body, axiosconfig)
      .then(response => {
        let data = response.data;
        console.log(`from login access_token: ${data.access}\nrefresh_token: ${data.refresh}`);
    
        AsyncStorage.setItem('access_token', data.access).then(() => {
          AsyncStorage.setItem('refresh_token', data.refresh).then(() => {
            navigation.replace('home');
          });
        });
      })
      .catch(error => {
        console.error('Login request failed:', error);
        // Handle the error, e.g., show an error message to the user
      });
    
        
    
     
    }
  };

  return (
    <View style={styles.container}>
      <Input
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={val => setUseremail(val)}
      />
      <Input
        autoCapitalize="none"
        placeholder="Password"
        // secureTextEntry={true}
        onChangeText={val => setPassword(val)}
      />
      <Button
        title="LOG IN"
        buttonStyle={styles.buttonStyle}
        onPress={handleLogin}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{fontWeight: 'bold'}}
      />
    </View>
  );
}
