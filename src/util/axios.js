import axios from 'axios';

const token = sessionStorage.getItem('token');

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers['Authorization'] = token ? token : '';

export default axios;
