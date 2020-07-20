/* eslint-disable-line no-unused-vars */
import axios from 'axios';

export const getList = (limit = 10, offset = 0) => axios.get(`http://${process.env.API_HOST}/v1/news?limit=${limit}&offset=${offset}`);
