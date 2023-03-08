import { createSlice } from '@reduxjs/toolkit';

export const toolsReducer = createSlice({
    name: 'tools',
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

export const { loaderHandler, restoreRequireHanler } = toolsReducer.actions;

export default toolsReducer.reducer;
