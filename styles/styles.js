import {StyleSheet} from 'react-native';
import {Platform, useColorScheme} from 'react-native';
//import { Appearance, useColorScheme } from 'react-native-appearance';

import React from 'react';

const clicked = true;
export default function Styles() {
  const mode = useColorScheme() === 'dark';

  return mode;
}

export const mystyles = StyleSheet.create({
  font_global: {
    fontFamily: 'Poppins-Regular',
  },
  wrapper: {
    flex: 1,

    // backgroundColor: '#FFFFFF',
    backgroundColor: 'white',
    fontFamily: 'Poppins-Regular',
  },
  top_container: {
    flex: 1,
    justifyContent: 'center',

    // backgroundColor: 'orange',
  },
  top_container_box1: {
    flex: 1,
    marginTop: '10%',
    //  width:"auto",
    //  height:"auto",
    flexDirection: 'row',
    justifyContent: 'center',

    //  backgroundColor: 'blue',
  },
  text_top1: {
    paddingRight: '5%',
    fontSize: 26,
    //backgroundColor:'grey',
    color: clicked ? '#FFA31A' : '#858585',
  },
  text_top2: {
    fontSize: 26,
    // backgroundColor:'blue',
    color: '#858585',
  },
  top_container_box2: {
    flex: 4,

    //  width:"auto",
    //  height:"auto",
    paddingHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: 'pink',
  },
  top_image_container: {
    flex: 1,

    // paddingHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'grey',
  },
  image: {
    width: '60%',
    height: 260,
    //backgroundColor: 'pink',
    resizeMode: 'cover',
  },

  bottom_container: {
    flex: 2,

    // backgroundColor: 'lightblue',

    justifyContent: 'center',
    alignItems: 'center',

    alignItems: 'center',
  },
  bottom_box1: {
    // backgroundColor: 'grey',

    flex: 3,

    width: '85%',

    // justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_box1_1: {
    // border:"black",

    flexDirection: 'row',
    width: '85%',
    //   //  backgroundColor:"pink",
    marginTop: 20,
    //   elevation: 4,
    //   // borderWidth: 2, // border width
    //   // borderColor: 'black', // border color
    borderRadius: 5.5, // border radius for rounded corners

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  bottom_inner_input: {
    color: 'grey',
    flex: 1,
    // backgroundColor:"grey",
  },
  image_icon: {
    marginVertical: 12,
    marginRight: 5,
    marginLeft: 5,
  },
  // bottom_button_input: {
  //   width: '85%',
  //   //   //  backgroundColor:"pink",
  //   marginTop: 20,
  //   //   elevation: 4,
  //   //   // borderWidth: 2, // border width
  //   //   // borderColor: 'black', // border color
  //   // borderRadius: 30, // border radius for rounded corners
  //   borderRadius: 30,
  //   backgroundColor: 'grey',
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  //   elevation: 5,
  // },
  input_btn: {
    backgroundColor: '#FFA31A',
    width: '85%',
    borderRadius: 5.02,
    marginTop: '15%',
    paddingVertical: 10,
    paddingHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    // Set the border radius here
  },
  bottom_buttonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
});
