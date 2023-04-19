import RequestHandler from '@/src/configs/axios';

export const GetOpenJobs = async () => {
    return RequestHandler.get('/USER/opproject/').then(res => res.data);
};
