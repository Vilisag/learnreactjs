import axios from 'axios';
import * as Config from '../configs';

const apiCaller = (endpoint, method = 'GET', data = {}) => {
    if ('GET' === method) {
        return axios.get(`${Config.API_URL}/${endpoint}`).catch(err => {
            console.log(err);
        });
    } else {
        return axios({
            method: method,
            url: `${Config.API_URL}/${endpoint}`,
            data: data
        }).catch(err => {
            console.log(err);
        });
    }
}   

export default apiCaller; 