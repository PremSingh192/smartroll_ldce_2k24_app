import React from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from '../../styles/styles';

export default function InputButton(props) {
  return (
    // <View style={styles.bottom_button_input}>
    <TouchableOpacity
      disabled={props.disabled}
      style={styles.input_btn}
      onPress={props.handleButtonPress}
      activeOpacity={0.7} // Adjust the opacity on press
    >
      <Text style={[props.style[1], styles.font_global]}>
        {props.placeholder}
      </Text>
    </TouchableOpacity>
    // </View>
  );
}
