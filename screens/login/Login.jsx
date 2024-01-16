// Import necessary components and libraries
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addtoken} from '../../redux/action';
import {login}   from "../../redux/reducer"
import useAsyncStorage from '../../hooks/useAsyncStorage';
// import { AsyncStorage } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import base_url from '../../utils/Baseurl';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';


import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';


import Styles,{mystyles as styles} from '../../styles/Styles';
import LoginInput from '../../components/login/LoginInput';
import InputButton from '../../components/login/InputButton';
import {ScrollView} from 'react-native';

import {
  Email_Svg,
  Pass_Svg,
  Login_logo,
} from '../../components/login/GlobalSvg/SvgStore';
import SvgCall from '../../components/login/GlobalSvg/SvgCall';


export default function Login({navigation}) {
  DeviceInfo.getUniqueId().then(uniqueId => {
    // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
    // Android: "dd96dec43fb81c97"
    // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"
    console.log(uniqueId);
  });

  const dispatch = useDispatch();
 
  // sample test redux

  

  const [useremail, setUseremail] = useState(() =>"");
  const [password, setPassword] = useState(() =>"");

  const handleLogin = () => {
    if (useremail == "" || password == "") {
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
  const mode = Styles();

  return (
    // wrapper body
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: mode ? 'black' : 'white',
          },
        ]}>
        {/* // top view  */}
        <View style={styles.top_container}>
          {/* seperate view for text and image */}
          <View style={styles.top_container_box1}>
            <Text style={[styles.text_top1, styles.font_global]}>Student</Text>
            <Text style={[styles.text_top2, styles.font_global]}>Teacher </Text>
          </View>

          <View style={styles.top_container_box2}>
            <View style={styles.top_image_container}>
              {/* <Image source={logo} style={styles.image} /> */}
              <SvgCall logo_code={Login_logo} />
            </View>
          </View>
        </View>

        <View style={styles.bottom_container}>
          <View style={styles.bottom_box1}>
            {/* bottom wrapper  */}
            <LoginInput
              secret={false}
              logo_code={Email_Svg}
              styledClass={[styles.image_icon, styles.bottom_inner_input]}
              placeholderText={'Enter Email'}
            />

            <LoginInput
              secret={true}
              logo_code={Pass_Svg}
              styledClass={[styles.image_icon, styles.bottom_inner_input]}
              placeholderText={'Enter Password'}></LoginInput>
            <InputButton
              style={[styles.input_btn, styles.bottom_buttonText]}
              placeholder={'Register'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
