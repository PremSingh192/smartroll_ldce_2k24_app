import {View, Text, Alert} from 'react-native';
// import { AsyncStorage } from 'react-native';

import {useSelector} from 'react-redux';
import styles from '../../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';

const Home = ({navigation}) => {

  const check = useSelector(state => state.isLoggedIn);
  console.log(check); // Now it should log the actual value of isLoggedIn
  // AsyncStorage.getAllKeys().then((keys) => {
  //   AsyncStorage.multiGet(keys).then((items) => {
  //     console.log(items);
  //   })
  // })
  useEffect(() => {
    // Perform navigation after the component has been rendered
    /* your condition to check */ if (!check) {
      navigation.replace('login');
    }
  }, [navigation]);
  
  return (
    <View>
      {/* <Text style={styles.subHeader}>
        gobal state token {check.toString()}
      </Text> */}
    </View>
  );
};

export default Home;
