/* eslint-disable-line no-unused-vars */
import axios from 'axios';

export const login = ({ email, password }) =>
  axios.post(`http://${process.env.API_HOST}/v1/login`, { email, password });

export const logout = () => axios.get(`http://${process.env.API_HOST}/logout`);

export const getAuthUser = () => axios.get(`http://${process.env.API_HOST}/v1/profile`);
