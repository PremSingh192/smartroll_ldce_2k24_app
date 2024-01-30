import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../styles/styles';
import Svg, {Path, SvgXml} from 'react-native-svg';
import SvgCall from './GlobalSvg/SvgCall';
import {hide_pass,show_pass} from './GlobalSvg/SvgStore';
function LoginInput(props) {
  const eyesvg = props.inputType == 'password' ? true : false;
  const [changetype, setchangetype] = useState(true);
  console.log('eyesvg', eyesvg);
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
        secureTextEntry={props.inputType == 'password' ? changetype : false}
        autoCapitalize="none"
        placeholderTextColor="grey"
        style={[props.styledClass[1], styles.font_global]}
        placeholder={props.placeholderText}></TextInput>
      {eyesvg && (
        <TouchableOpacity
          onPress={() => {
            console.log('icon clicked');
            setchangetype(prev => !prev);
          }}>
          <View
            style={{
              marginVertical: 12,
              marginRight: 10,
              width:25,
              height:25,
              
            }}>
            <SvgCall logo_code={changetype ? show_pass: hide_pass} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default LoginInput;
