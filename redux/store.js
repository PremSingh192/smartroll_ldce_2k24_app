import { configureStore } from "@reduxjs/toolkit";
import {checkforlogin }from './reducer'

export default configureStore({
    reducer: {
        isLoggedIn:checkforlogin
    },
})