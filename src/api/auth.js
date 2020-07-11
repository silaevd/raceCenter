/* eslint-disable-line no-unused-vars */
import axios from 'axios';

export const login = ({ email: email, password }) =>
  axios.post('http://localhost/login', { email: email, password });

export const logout = () => axios.get('http://localhost/logout');

export const getAuthUser = () => axios.get('http://localhost/profile');
