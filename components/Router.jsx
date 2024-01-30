// CustomAuthComponent.js

import React, {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import Loading from './Loading';
import useAPI from '../hooks/useAPI';

const Router = ({children}) => {
  const navigation = useNavigation();
  const token = useSelector(state => state.isLoggedIn.token);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (token) {
          const res = await useAPI(
            token,
            '/auth/api/check_token_authenticity',
            'get',
            {},
          ); // Your API authentication function
          if (res.response.data.data != true) {
            console.log('invalid token')
            setIsLoading(false);
            navigation.replace('login'); // Redirect to Home screen if not authenticated
          }
        } else {
          setIsLoading(false);
          console.log('no token');
          navigation.replace('login');
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Error checking authentication:', error);
        navigation.replace('login');
        // Handle error
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Loading visible={isLoading} />
      </View>
    );
  }

  return <>{children}</>;
};

export default Router;
