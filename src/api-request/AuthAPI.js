import axios from 'axios';
import { Global } from '../constants/Global';
import { URLS, localStorageNames } from '../constants/Types';

export default class AuthAPI {
    static Login({ email, pass }) {
        let userData = async (email, pass) => {
            let response = await axios
                .post(`${URLS.BaseURL}${URLS.Authentication}`, {
                    email: email,
                    password: pass
                })
                .catch(() => {});
            if (response?.status === 202) {
                localStorage.setItem(localStorageNames.user, JSON.stringify({ ...response.data.data }));
                Global.user = response.data.data;
                return response.data.data;
            }
            return null;
        };
        return userData(email, pass);
    }
}
