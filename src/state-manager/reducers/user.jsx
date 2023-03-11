/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
    name: 'userInfo',
    initialState: {
        loginStaus: typeof window !== 'undefined' && localStorage.getItem('userInfo') !== null ? true : false,
        info:
            typeof window !== 'undefined' && localStorage.getItem('userInfo') !== null
                ? JSON.parse(localStorage.getItem('userInfo'))
                : ''
    },
    reducers: {
        authStateHandler: (state, action) => {
            state.loginStaus = action.payload;
        },
        infoHandler: (state, action) => {
            state.info = action.payload;
        }
    }
});

export const { authStateHandler, infoHandler } = userReducer.actions;

export default userReducer.reducer;
