import RequestHandler from '@/src/configs/axios';

export const GetJobsMessages = async id => {
    return RequestHandler.get(`/BIGADMIN/listcom/${id}`).then(res => res.data);
};

export const GetSpecificJobsMessages = async id => {
    return RequestHandler.get(`/BIGADMIN/uprojectedit/${id}`).then(res => res.data);
};
