import RequestHandler from '@/src/configs/axios';

export const GetArticleList = async () => {
    return RequestHandler.get(`${process.env.URL}`).then(res => res.data);
};
