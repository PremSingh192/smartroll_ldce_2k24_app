import React from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from '../../styles/Styles';

export default function InputButton(props) {
  return (
    // <View style={styles.bottom_button_input}>
    <TouchableOpacity
      style={props.style[0]}
      // onPress={handleButtonPress}
      activeOpacity={0.7} // Adjust the opacity on press
    >
      <Text style={[styles.font_global, props.style[1]]}>
        {props.placeholder}
      </Text>
    </TouchableOpacity>
    // </View>
  );
}
