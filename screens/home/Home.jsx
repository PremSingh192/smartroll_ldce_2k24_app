import {View, Text, Alert} from 'react-native';
// import { AsyncStorage } from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../../styles/styles';
import React, {useState, useEffect} from 'react';

import {jwtDecode} from 'jwt-decode';

const Home = ({navigation}) => {
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
