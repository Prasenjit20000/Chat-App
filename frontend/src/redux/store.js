import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice.js'
import messageSlice from './messageSlice.js'
import socketSlice from './socketSlice.js'

import {
    persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { version } from 'react';

const persistConfig = {
    key:'root',
    version:1,
    storage,
}
const rootReducer = combineReducers({
    user:userSlice,
        message:messageSlice,
        socket:socketSlice
})
const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        })
});
export default store;