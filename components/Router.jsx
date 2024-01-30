// CustomAuthComponent.js

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { StyleSheet,View } from 'react-native';
import Loading from './Loading';
import useAPI from '../hooks/useAPI';


const   Router = ({children}) => {  
  const navigation = useNavigation();
  const token = useSelector(state => state.isLoggedIn.token);  
  const [authenticated,setAuthenticated] = useState(false)
  if(token){
    useAPI(
      token, '/auth/api/check_token_authenticity', 'get', {},).then(res => {        
        setAuthenticated(true)
      }).catch(err => {        
        navigation.replace('login')
      })
  }    
  return (
    authenticated ? <>{children}</> :  <Loading/>
  );
};

export default Router;
