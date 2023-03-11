import RequestHandler from '@/src/configs/axios';

export const GetJobAblum = async id => {
    return RequestHandler.get(`${process.env.URL}/BIGADMIN/listalbum/${id}`).then(res => res.data);
};
