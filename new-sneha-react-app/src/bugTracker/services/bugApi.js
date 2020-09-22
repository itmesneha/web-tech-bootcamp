import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'http://localhost:3030',
});

async function getAll () {
    const response = axiosInstance.get('/bugs').then(response.data);
};