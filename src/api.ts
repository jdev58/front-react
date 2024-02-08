import axios from 'axios';
axios.defaults.withCredentials = true;

const apiClient = axios.create({
    baseURL: 'https://taban.pelak.com/', // Replace with your API's base URL
    headers: {
        'Content-Type': 'application/json',
        // Add any other default headers you need
    },
    withCredentials: true,
});

export default apiClient;
