import { createSlice } from "@reduxjs/toolkit";

const checklogin = createSlice({
    name:'isLoggedIn',
    initialState: false,
    reducers: {
       login: () => true ,
       logout: () => false ,
    },

});

export const {login,logout} = checklogin.actions
export const checkforlogin = checklogin.reducer