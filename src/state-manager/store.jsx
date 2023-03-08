import { configureStore } from '@reduxjs/toolkit';
import UserInfo from './reducers/user';
import Tools from './reducers/tools';

const store = configureStore({
    reducer: {
        UserInfo: UserInfo,
        Tools: Tools
    }
});

export default store;
