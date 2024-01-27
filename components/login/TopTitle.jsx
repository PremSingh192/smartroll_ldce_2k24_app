import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/styles';
export default function TopTitle({setStudent,Student}) {

  
  return (
    <View style={styles.top_container_box1}>
      <TouchableOpacity  onPress={()=>(setStudent("student"))}>
       {<Text style={[styles.text_top1, styles.font_global,{     color:  Student=="student"? '#FFA31A':'#858585' }]}>Student</Text>} 
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>(setStudent("teacher"))} >
        <Text style={[styles.text_top2, styles.font_global,{  color:  Student=="teacher"? '#FFA31A':'#858585'  }]}>Teacher </Text>
      </TouchableOpacity>
    </View>
  );
}
