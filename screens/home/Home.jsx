import {View, Text, Alert} from 'react-native';
// import { AsyncStorage } from 'react-native';

import {  useSelector } from 'react-redux';
import styles from '../../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';

const Home = ({navigation}) => {
  const check = useSelector((state) => state.isLoggedIn);
 useEffect(() => {
    // Perform navigation after the component has been rendered
  /* your condition to check */;
    if (!check) {
      navigation.replace('login');
    }
  }, [navigation]);
 
 

  console.log(`check from home ${check}`)
  return (
    <View>
      <Text style={styles.subHeader}>gobal state token{check}</Text>
    </View>
  );
};

export default Home;
