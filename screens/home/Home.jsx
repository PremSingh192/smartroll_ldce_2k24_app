import {View, Text} from 'react-native';
// import { AsyncStorage } from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../../styles/styles';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import useAPI from '../../hooks/temphook';
import {jwtDecode} from 'jwt-decode';
import { headers } from '../../utils/Baseurl';
const Home = ({navigation}) => {

  const [StoredTokens,CallAPI]= useAPI();
  
  useEffect(()=>{
    const axiosInstance = axios.create()
// console.log("from hook",StoredTokens)
CallAPI(StoredTokens,axiosInstance, `/manage/get_object_counts`,'get',headers).then(responseObj => {
  console.log("from call api",responseObj.response.data);
})
  },[])
  const access = useSelector(state => state.isLoggedIn.token?.access);
  let user;
  if (access) {
    user = jwtDecode(access);
  }

  console.log('from home', access);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
      }}>
      <Text
        style={{color: 'black', fontSize: 16, textDecorationStyle: 'solid'}}>
        name: {user?.username}
      </Text>
      <Text
        style={{color: 'black', fontSize: 16, textDecorationStyle: 'solid'}}>
        email: {user?.email}
      </Text>
      <Text
        style={{color: 'black', fontSize: 16, textDecorationStyle: 'solid'}}>
        Role: {user?.role}
      </Text>
    </View>
  );
};

export default Home;
