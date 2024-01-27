import React, {useState, useRef, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Modal,
  Button,
  Text,
  Image,
} from 'react-native';
import loadinggif from '../assets/loading.gif';
import Svg, {Circle} from 'react-native-svg';
import {Spinner_Svg, Email_Svg} from './login/GlobalSvg/SvgStore';
import SvgCall from './login/GlobalSvg/SvgCall';
import styles from '../styles/styles';
import RNAnimatedGif from 'react-native-gif';

import {WebView} from 'react-native-webview';
export default function Loading({visible}) {
  const [modalVisible, setModalVisible] = useState(false);
  const circleRef = useRef();
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.container}>
          <View
            style={{
              display: 'flex',
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            
            }}>
          <ActivityIndicator size ={"large"} color={"white"}></ActivityIndicator>
          </View>
        </View>
      </Modal>
    </View>
  );
}
