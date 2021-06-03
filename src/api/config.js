import axios from 'axios';

const http = axios.create({baseURL: 'http://localhost:3080'});

export default http;


