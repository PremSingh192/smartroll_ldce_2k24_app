import React from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from '../styles/styles';
import {ScrollView} from 'react-native';
export default function ComponentWrapper(props) {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.wrapper}>{props.children}</View>
    </ScrollView>
  );
}
