import RequestHandler from '@/src/configs/axios';

export const GetJobDocument = async id => {
    return RequestHandler.get(`/BIGADMIN/listdoc/${id}`).then(res => res.data);
};
