import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://185.141.213.174:1050/', // Replace with your API's base URL
    headers: {
        'Content-Type': 'application/json',
        // Add any other default headers you need
    },
    withCredentials: true,
});

export default apiClient;
