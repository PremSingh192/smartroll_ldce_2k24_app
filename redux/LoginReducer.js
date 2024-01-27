import { createSlice } from "@reduxjs/toolkit";

const checklogin = createSlice({
    name:'isLoggedIn',
    initialState: {token:null},
    reducers: {
    login: (state, action) => ({token:action.payload}),
       logout: () => ({ token: null }) ,
    },

});

export const {login,logout} = checklogin.actions
export const checkforlogin = checklogin.reducer