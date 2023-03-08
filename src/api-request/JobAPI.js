import axios from 'axios';
import { URLS } from '../constants/Types';

export default class JobAPI {
    static getJobs(token) {
        let jobs = async token => {
            let response = await axios
                .get(`${URLS.BaseURL}${URLS.Jobs}`, {
                    // url: URLS.Jobs,
                    headers: { Authorization: `Token ${token}` }
                })
                .catch(() => {});
            if (response?.status == 200) {
                return response.data;
            }
            console.log('error happened in jobs api call');
        };
        return jobs(token);
    }
}
