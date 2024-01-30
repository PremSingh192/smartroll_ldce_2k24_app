// CustomAuthComponent.js

import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAPI from '../hooks/useAPI';
import {useSelector} from 'react-redux';
import Loading from './Loading';
const Router = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const token = useSelector(state => state.isLoggedIn.token);
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
            setIsLoading(false);
            navigation.navigate('login'); // Redirect to Home screen if not authenticated
          }
        } else {
          setIsLoading(false);
          console.log('no token');
          navigation.navigate('login');
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Error checking authentication:', error);
        navigation.navigate('login');
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
