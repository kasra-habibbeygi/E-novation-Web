import { configureStore } from '@reduxjs/toolkit';
import UserInfo from './reducer/user';
import Utils from './reducer/utils';

const store = configureStore({
    reducer: {
        UserInfo: UserInfo,
        Utils: Utils
    }
});

export default store;
