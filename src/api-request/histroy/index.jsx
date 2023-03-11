import RequestHandler from '@/src/configs/axios';

export const GetHistory = async id => {
    return RequestHandler.get(`${process.env.URL}/BIGADMIN/history/${id}`).then(res => res.data);
};
