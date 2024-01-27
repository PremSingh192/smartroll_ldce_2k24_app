import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/styles';
export default function ChangeStudentState(props) {
  return (
  <View style={styles.bottom_text_view}>
    <Text style={[styles.bottom_buttonText2,styles.font_global]}>{props.text1}</Text>
    <TouchableOpacity  onPress={()=>(props.setstudentstatus(props.setStatus))}>
    <Text style={[styles.bottom_buttonText2, {color:"#4FD2EF", textDecorationLine:"underline"},styles.font_global]}>{props.text2}</Text>
    </TouchableOpacity>
  </View>
  );
}
