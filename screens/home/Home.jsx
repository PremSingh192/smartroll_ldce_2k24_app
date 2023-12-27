import {View, Text, Alert} from 'react-native';
// import { AsyncStorage } from 'react-native';
import styles from '../../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';

const Home = () => {
  const [tokens, setTokens] = useState({access: '', refresh: ''});
useEffect(()=>{

  AsyncStorage.getItem('access_token')
  .then(access => {
    AsyncStorage.getItem('refresh_token').then(refresh => {
      setTokens((prevTokens) => ({
        ...prevTokens, // Copy the previous state
        access: access,
        refresh:refresh // Update the access property
      }));
    });
  })
  .catch(err => {
    Alert.alert('err', `${err}`);
  });




},[])
 
  console.log(
    `from home access_token : ${tokens.access}` + '\n' + `refresh_token:${tokens.refresh}`,
  );
  return (
    <View>
      <Text style={styles.subHeader}>{`access token ${tokens.access}`}</Text>
      <Text style={styles.subHeader}>{`refresh token ${tokens.refresh}`}</Text>
    </View>
  );
};

export default Home;
