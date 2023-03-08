import axios from 'axios';
import toast from 'react-hot-toast';

let URL = 'http://2.56.155.102:3000/api/v1/';

const instance = axios.create({
    baseURL: URL
});

instance.interceptors.request.use(async config => {
    if (config.data) {
        for (const key of Object.keys(config.data)) {
            if (config.data[key] === '') {
                delete config.data[key];
            }
        }
    }

    if (typeof window !== 'undefined' && localStorage.getItem('accessToken') !== null) {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        const accessTokenMaxExpiredTimestamp = new Date(accessToken.expiredAt).getTime();

        if (accessTokenMaxExpiredTimestamp < Date.now() + 10 * 60000) {
            axios
                .put(`${URL}admins/session`, { token: accessToken.token })
                .then(res => {
                    localStorage.setItem(
                        'accessToken',
                        JSON.stringify({
                            token: res.data.result.token,
                            expiredAt: res.data.result.expiredAt
                        })
                    );
                })
                .catch(() => {});
        }

        const newAccessTokenMaxExpiredTimestamp = new Date(JSON.parse(localStorage.getItem('accessToken')).expiredAt).getTime();
        if (newAccessTokenMaxExpiredTimestamp > Date.now()) {
            config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('accessToken')).token}`;
        }
    }

    return config;
});

instance.interceptors.response.use(
    res => {
        if (res.data.message && res.status === 200) {
            toast.success(res.data.message, { style: { zIndex: 2000 } });
        }
        return res;
    },
    error => {
        if (error?.response?.status === 401) {
            localStorage.removeItem('accessToken');
            window.location.href = '/login';
        } else {
            if (error?.response?.data?.message) {
                toast.error(error?.response?.data?.message, { style: { zIndex: 2000 } });
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
