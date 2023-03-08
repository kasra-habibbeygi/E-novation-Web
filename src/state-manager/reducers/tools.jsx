import { createSlice } from '@reduxjs/toolkit';

export const utilsReducer = createSlice({
    name: 'utils',
    initialState: {
        loader: false,
        restoreRequire: false
    },
    reducers: {
        loaderHandler: (state, action) => {
            state.loader = action.payload;
        },
        restoreRequireHanler: (state, action) => {
            state.restoreRequire = action.payload;
        }
    }
});

export const { loaderHandler, restoreRequireHanler } = utilsReducer.actions;

export default utilsReducer.reducer;
