// CustomAuthComponent.js

import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import Loading from './Loading';
import useAPI from '../hooks/temphook';
import axios from 'axios';
import { headers } from '../utils/Baseurl';
const Router = ({children}) => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useState(false);
  const [StoredTokens,CallAPI]= useAPI();
  useEffect(() => {
    try {
      if (StoredTokens) {
        const axiosInstance = axios.create()
        console.log("from router hook",StoredTokens)
        CallAPI(StoredTokens,axiosInstance,'/auth/api/check_token_authenticity','get',headers).then(responseObj => {
          setAuthenticated(true);
          console.log("from router call api",responseObj.response.data);
        }).catch(err => {
          console.log('from route error', err);
          navigation.replace('login');
        });

  
      } else {
        throw 'No token';
      }
    } catch (error) {
      console.log('no token');
      navigation.replace('login');
    }
  }, []);
  return authenticated ? <>{children}</> : <Loading />;
};

export default Router;
