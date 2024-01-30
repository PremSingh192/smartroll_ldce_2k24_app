import React, {useState, useRef} from 'react';
import {  
  View,
  StyleSheet,
  Modal
} from 'react-native';
import styles from '../styles/styles';
import LottieView from "lottie-react-native";

export default function Loading({visible}) {  
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
            <LottieView
                source={require("../assets/lottie/Animation - 1706605632590.json")}
                style={LottieStyles.animation}
                autoPlay
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
const LottieStyles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});
