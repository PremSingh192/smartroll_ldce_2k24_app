// Import necessary components and libraries
import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import logo from '../../assets/images/login-logo.png';
import base_url from '../../utils/Baseurl';
import axios from 'axios';
import {login} from '../../redux/LoginReducer';
import {Image, View} from 'react-native';
import styles from '../../styles/styles';
import LoginInput from '../../components/login/LoginInput';
import InputButton from '../../components/login/InputButton';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';
import {
  Email_Svg,
  Pass_Svg,
  Login_logo,
} from '../../components/login/GlobalSvg/SvgStore';
import SvgCall from '../../components/login/GlobalSvg/SvgCall';
import ComponentWrapper from '../../components/ComponentWrapper';
import {Alert} from 'react-native';
import Loading from '../../components/Loading';
export default function Login({navigation}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [formSubmited, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();
  function submitlogin() {
    setFormSubmitted(true);
    if (email && password) {
      const body = {
        email: email,
        password: password,
      };
      const axiosconfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios
        .post(`${base_url}/auth/api/login/`, body, axiosconfig)
        .then(response => response.data)
        .then(data => {
          setFormSubmitted(false);
          if (data.access && data.refresh) {
            dispatch(login(data));
            navigation.replace('home');
          }
        })
        .catch(err => {
          setFormSubmitted(false);
          if (err.response.status && err.response.status == 401) {
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: 'Incorrect Credentials',
              autoClose: 20,
            });
          }
        });
    } else {
      Alert.alert('Empty input', 'Enter Email and Password');
    }
  }

  return (
    // wrapper body

    <ComponentWrapper>
      <AlertNotificationRoot>
        <Loading visible={formSubmited} />
        <View style={styles.top_container}>
          <Image source={logo} style={styles.image} />
          <SvgCall logo_code={Login_logo}></SvgCall>
        </View>
        <View style={styles.bottom_container}>
          <View style={styles.bottom_input_wrapper}>
            <LoginInput
              inputType={'text'}
              value={email}
              secret={false}
              innerRef={email}
              logo_code={Email_Svg}
              styledClass={[styles.image_icon, styles.bottom_inner_input]}
              placeholderText={'Enter Email'}
              handlechange={e => setEmail(e)}
            />

            <LoginInput
              inputType={'password'}
              value={password}
              secret={true}
              logo_code={Pass_Svg}
              styledClass={[styles.image_icon, styles.bottom_inner_input]}
              placeholderText={'Enter Password'}
              handlechange={e => setPassword(e)}
            />

            <InputButton
              disabled={formSubmited}
              handleButtonPress={submitlogin}
              style={[styles.input_btn, styles.bottom_buttonText]}
              placeholder={'Login'}
            />
          </View>
        </View>
      </AlertNotificationRoot>
    </ComponentWrapper>
  );
}
