import {StyleSheet} from 'react-native';
import {Platform, useColorScheme} from 'react-native';
//import { Appearance, useColorScheme } from 'react-native-appearance';

import React from 'react';



 const styles = StyleSheet.create({
  font_global: {
    fontFamily: 'Poppins-Regular',
  },
  wrapper: {
    flex: 1,

    //backgroundColor: '#FFFFFF',
     backgroundColor: 'black',
  },
  top_container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    
    marginTop: 0,
    height: 400,
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
    fontSize: 21,
    //backgroundColor:'grey',
  },
  text_top2: {
    fontSize: 21,
    // backgroundColor:'blue',
  },
  top_container_box2: {
    flex: 1,

    //  width:"auto",
    //  height:"auto",
    paddingHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: 'pink',
  },
  top_image_container: {
    // paddingHorizontal: 'auto',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  image: {
    width: 300,
    height: 300,
   
    resizeMode: 'center',
  },

  bottom_container: {
     flex: 1,

    display: 'flex',
    minHeight: 367,
    justifyContent: 'flex-start',
    alignItems: 'center',

    alignItems: 'center',
  },
  bottom_box1: {
    //  backgroundColor: 'grey',

    // flex: 1,

    // width: '100%',

    // // justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_box1_1: {
    // border:"black",
    margin: 5,
    // padding: 0,
    flexDirection: 'row',
    width: '85%',
    // backgroundColor: 'pink',
    // marginTop: 0,
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
    width: 'auto',
    borderRadius: 5.02,
    marginTop: '10%',
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
  bottom_buttonText2: {
    color: '#858585',
    fontSize: 15,
    textAlign: 'center',
  },

  bottom_touch: {
    marginTop: '5%',
    width: '85%',
  },

  bottom_text_view: {
    marginTop: '10%',
    flexDirection: 'row',

    alignItems: 'center',
  },

  bottom_input_wrapper: {
    width: '100%',
    height: 140,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // loading spinner container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
    backgroundColor: 'black',
  },
  loadingContainer: {
    width: 132,
    height: 132,
    overflow: 'hidden',
    backgroundColor: 'transparent', // You can set a background color if needed
  },
  ellipsisContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: [{translate: [95.04, 50.160000000000004]}, {scale: 1}],
    backfaceVisibility: 'hidden',
    transformOrigin: '0 0',
  },
  ellipsisDot: {
    position: 'absolute',
    width: 31.68,
    height: 31.68,
    borderRadius: 50,
    backgroundColor: '#bcb1b1',
  },
  dot1: {
    backgroundColor: '#000000',
    transform: [{translate: [95.04, 50.160000000000004]}, {scale: 1}],
  },
  dot2: {
    backgroundColor: '#bcb1b1',
    transform: [{translate: [5.28, 50.160000000000004]}, {scale: 1}],
  },
  dot3: {
    backgroundColor: '#000000',
    transform: [{translate: [50.160000000000004, 95.04]}, {scale: 1}],
  },
  dot4: {
    backgroundColor: '#bcb1b1',
    transform: [{translate: [50.160000000000004, 5.28]}, {scale: 1}],
  },
  dot5: {
    backgroundColor: '#000000',
    transform: [{translate: [95.04, 50.160000000000004]}, {scale: 1}],
  },
});



export default styles