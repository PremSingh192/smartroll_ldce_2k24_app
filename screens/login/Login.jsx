// Import necessary components and libraries
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {jwtDecode} from 'jwt-decode';
import useAsyncStorage from '../../hooks/useAsyncStorage';
// import { AsyncStorage } from 'react-native';
import logo from '../../assets/images/login-logo.png';
import logodark from '../../assets/images/login-dark.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base_url from '../../utils/Baseurl';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import { login } from '../../redux/LoginReducer';

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from '../../styles/styles';
import LoginInput from '../../components/login/LoginInput';
import InputButton from '../../components/login/InputButton';

import {
  mylogo,
  Email_Svg,
  Pass_Svg,
  Login_logo,
  Enroll_Svg,
} from '../../components/login/GlobalSvg/SvgStore';
import SvgCall from '../../components/login/GlobalSvg/SvgCall';
import ChangeStudentState from '../../components/login/ChangeStudentState';
import TopTitle from '../../components/login/TopTitle';
import ComponentWrapper from '../../components/ComponentWrapper';
import {Alert} from 'react-native';
import Loading from '../../components/Loading';

export default function Login({navigation}) {
  const [Student, setStudent] = useState('student');
  const [loginstate, setloginstate] = useState({
    Email: '',
    Pass: '',
  });
  const [studentstatus, setstudentstatus] = useState('registered');
  const [disable, setdisable] = useState(() => false);
  console.log(loginstate);
  const dispatch = useDispatch();  
  useEffect(() => {
    DeviceInfo.getUniqueId().then(uniqueId => {
      // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
      // Android: "dd96dec43fb81c97"
      // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"
      console.log(uniqueId);
    });
  }, []);

  function submitlogin() {
    const {Email, Pass} = loginstate;

    if (Email && Pass) {
      console.log(Email, Pass);
      setdisable(prev => !prev);
      console.log(disable);
      const body = {
        email: Email,
        password: Pass,
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
          if (data.access && data.refresh) {
            if (data.access && data.refresh) {
              console.log(data.access);
              // setdisable(prev => data);
              dispatch(login(data));
              navigation.replace('home');
            }
          }
        })
        .catch(error => {
          setdisable(prev => !prev);

          console.log(disable);
          Alert.alert('error ', `${error.response.data.detail}`);

          //  console.error('Login request failed:', error.response.data);
          // Handle the error, e.g., show an error message to the user
        });
    } else {
      Alert.alert('Input Field Empty', 'please enter email and password');
    }
  }

  // useAsyncStorage('get', 'tokens')
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  return (
    // wrapper body
    <ComponentWrapper>
      {<Loading visible={disable} />}
      {/* // top view  */}

      <View style={styles.top_container}>
        {/* seperate view for text and image
        <TopTitle setStudent={setStudent} Student={Student} /> */}
        {/* <Text style={{color: 'white'}}>{JSON.stringify(token)}</Text> */}
        <Image source={logo} style={styles.image} />

        {/* <SvgCall logo_code={mylogo} /> */}
      </View>

      <View style={styles.bottom_container}>
        <View>
          <View style={styles.bottom_input_wrapper}>
            <LoginInput
              value={loginstate?.Email}
              handlechange={e => {
                setloginstate({
                  ...loginstate,
                  Email: e,
                });
              }}
              secret={false}
              logo_code={Email_Svg}
              styledClass={[styles.image_, styles.bottom_inner_input]}
              placeholderText={'Enter Email'}
            />

            <LoginInput
              value={loginstate?.Pass}
              handlechange={e => {
                setloginstate({
                  ...loginstate,
                  Pass: e,
                });
              }}
              secret={true}
              logo_code={Pass_Svg}
              styledClass={[styles.image_icon, styles.bottom_inner_input]}
              placeholderText={'Enter Password'}
            />
          </View>

          <InputButton
            handleButtonPress={submitlogin}
            disabled={disable}
            style={[styles.input_btn, styles.bottom_buttonText]}
            placeholder={'Login'}
          />
        </View>
        {/* bottom wrapper  */}

        <View></View>
      </View>
    </ComponentWrapper>
  );
}