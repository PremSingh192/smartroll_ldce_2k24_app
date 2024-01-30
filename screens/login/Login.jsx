// Import necessary components and libraries
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import logo from '../../assets/images/login-logo.png';
import base_url from '../../utils/Baseurl';
import axios from 'axios';
import {login} from '../../redux/LoginReducer';

import {Image, View} from 'react-native';

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
import ComponentWrapper from '../../components/ComponentWrapper';
import {Alert} from 'react-native';
import Loading from '../../components/Loading';

export default function Login({navigation}) {
  const [loginstate, setloginstate] = useState({
    Email: '',
    Pass: '',
  });    
  const dispatch = useDispatch();
  const [loader,showLoader] = useState(false)
  function submitlogin() {
    showLoader(true)
    const {Email, Pass} = loginstate;
    if (Email && Pass) {      
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
              dispatch(login(data));
              navigation.replace('home');
            }
          }
        })
        .catch(error => {          
          if (error.response.data.status === 401) {            
            Alert.alert('error ', `${error.response.data.detail}`);
          }
        });
    } else {
      Alert.alert('Input Field Empty', 'please enter email and password');
    }
  }

  return (
    // wrapper body
    <ComponentWrapper>
      <Loading visible={loader} />
      <View style={styles.top_container}>
        <Image source={logo} style={styles.image} />
        <SvgCall logo_code={Login_logo}></SvgCall>
      </View>

      <View style={styles.bottom_container}>
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

          <InputButton
            handleButtonPress={submitlogin}            
            style={[styles.input_btn, styles.bottom_buttonText]}
            placeholder={'Login'}
          />
        </View>
      </View>
    </ComponentWrapper>
  );
}
