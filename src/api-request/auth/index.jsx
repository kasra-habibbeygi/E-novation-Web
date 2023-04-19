import RequestHandler from '@/src/configs/axios';

export const LoginApi = async data => {
    return RequestHandler.post('/USER/login/', data).then(res => res.data);
};
