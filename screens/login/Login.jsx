// Import necessary components and libraries
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addtoken} from '../../redux/action';
import {login}   from "../../redux/reducer"
import useAsyncStorage from '../../hooks/useAsyncStorage';
// import { AsyncStorage } from 'react-native';
import styles from '../../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base_url from '../../utils/Baseurl';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

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
  DeviceInfo.getUniqueId().then(uniqueId => {
    // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
    // Android: "dd96dec43fb81c97"
    // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"
    console.log(uniqueId);
  });

  const dispatch = useDispatch();
 
  // sample test redux

  

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
      axios
        .post(`${base_url}/auth/api/login/`, body, axiosconfig)
        .then(response => {
          let data = response.data;
            if(data.access && data.refresh){     
              console.log(data);
              useAsyncStorage('set','tokens',data).then(() => {
                dispatch(login())
                navigation.replace('home');
              })
            }
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
