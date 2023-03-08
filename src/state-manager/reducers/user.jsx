import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
    name: 'userInfo',
    initialState: {
        loginStaus: false
    },
    reducers: {
        authStateHandler: (state, action) => {
            state.loginStaus = action.payload;
        }
    }
});

export const { authStateHandler } = userReducer.actions;

export default userReducer.reducer;
