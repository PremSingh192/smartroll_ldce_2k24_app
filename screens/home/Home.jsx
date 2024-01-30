import {View, Text} from 'react-native';
// import { AsyncStorage } from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../../styles/styles';
import React, {useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode';


const Home = ({navigation}) => {  
  const check = useSelector(state => state.isLoggedIn.token);  
  const access = check?.access
  return (
    <View>
      <Text style={{color:"black"}}>        
        {/* gobal state token {access} */}
      </Text>          
    </View>
  );
};

export default Home;
