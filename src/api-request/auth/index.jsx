import RequestHandler from '@/src/configs/axios';

export const LoginApi = async data => {
    return RequestHandler.post(`${process.env.URL}/USER/login/`, data).then(res => res.data);
};
