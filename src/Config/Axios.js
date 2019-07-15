import axios from 'axios';
import {
    loadProgressBar
} from 'axios-progress-bar';

const AXIOS = axios.create({
    baseURL: 'https://jorge6242-casino-api.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 100000,
});

loadProgressBar(undefined, AXIOS);
export default AXIOS;