// store.js

import { configureStore,combineReducers,getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { checkforlogin } from './LoginReducer';

const persistConfig = {
    key:'root',
    version:1,
    storage:AsyncStorage
}

const rootReducer = combineReducers({
    isLoggedIn:checkforlogin
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export { store };