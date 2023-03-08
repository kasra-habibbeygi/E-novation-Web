import RequestHandler from '@/src/configs/axios';

export const LoginApi = async () => {
    return RequestHandler.get(`${process.env.URL}`).then(res => res.data);
};
