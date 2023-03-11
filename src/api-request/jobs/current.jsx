import RequestHandler from '@/src/configs/axios';

export const GetOpenJobs = async () => {
    return RequestHandler.get(`${process.env.URL}/USER/opproject/`).then(res => res.data);
};
