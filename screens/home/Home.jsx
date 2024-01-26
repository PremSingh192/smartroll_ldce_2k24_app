import {View, Text, Alert} from 'react-native';
// import { AsyncStorage } from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../../styles/styles';
import React, {useState, useEffect} from 'react';
import useAsyncStorage from '../../hooks/useAsyncStorage';
import axios from 'axios';
import useAPI from '../../hooks/useAPI';
import CardScreen from '../CardScreen';

const Home = ({navigation}) => {  
  const check = useSelector(state => state.isLoggedIn);  
  useEffect(() => {
    useAsyncStorage('get','tokens').then((data) => {
      if(!data || !check){        
          navigation.replace('login');        
      }
    })
  }, [navigation]);  
  // const getObjectCounts = async () =>{const header = {"Content-Type":"application/json",        'ngrok-skip-browser-warning':true};const axiosInstance = axios.create();let endpoint = `/manage/get_object_counts`;let method='get';let headers = header;let response  = await useAPI(axiosInstance,endpoint,method,headers)    if(response.error){console.log(response.errorMessage);ToastAndroid.showWithGravityAndOffset(response.errorMessage,ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50,);}}  
  return (
    <View>
      <Text style={styles.subHeader}>
        gobal state token {check.toString()}
      </Text>          
    </View>
  );
};

export default Home;
