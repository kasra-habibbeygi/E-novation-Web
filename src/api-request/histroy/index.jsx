import RequestHandler from '@/src/configs/axios';

export const GetHistory = async id => {
    return RequestHandler.get(`/BIGADMIN/history/${id}`).then(res => res.data);
};
