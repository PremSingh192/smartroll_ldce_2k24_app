import React from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from '../../styles/styles';
import Svg, {Path, SvgXml} from 'react-native-svg';
import SvgCall from './GlobalSvg/SvgCall';

function LoginInput(props) {
  return (
    <View style={styles.bottom_box1_1}>
      <View style={styles.image_icon}>
        <SvgCall logo_code={props.logo_code} />
      </View>
      {/* <Image source={props.logo_img} style={props.styledClass[0]} /> */}

      <TextInput
      keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={props.handlechange}
        secureTextEntry={props.secret || false}
        autoCapitalize="none"
        placeholderTextColor="grey"
        style={[props.styledClass[1], styles.font_global]}
        placeholder={props.placeholderText}></TextInput>
    </View>
  );
}

export default LoginInput;
