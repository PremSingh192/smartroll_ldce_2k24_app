
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



function isAuthenticated(){
let isAuth=false;

AsyncStorage.getItem('access_token').then((data)=>{
if (data.length>0){
    isAuth=true;
}
else{
    isAuth= false ;
}

}).catch(err=>{
    console.log(err);
})
  return isAuth
}

export default isAuthenticated;
