import { createSlice } from '@reduxjs/toolkit';

export const toolsReducer = createSlice({
    name: 'tools',
    initialState: {
        loader: false,
        restoreRequire: false,
        userAsideStatus: false
    },
    reducers: {
        loaderHandler: (state, action) => {
            state.loader = action.payload;
        },
        restoreRequireHanler: (state, action) => {
            state.restoreRequire = action.payload;
        },
        userAsideStatusHandler: (state, action) => {
            state.userAsideStatus = action.payload;
        }
    }
});

export const { loaderHandler, restoreRequireHanler, userAsideStatusHandler } = toolsReducer.actions;

export default toolsReducer.reducer;
