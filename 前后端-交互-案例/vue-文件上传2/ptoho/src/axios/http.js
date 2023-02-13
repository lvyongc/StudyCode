import axios from 'axios';
import store from '../store';

export const http = axios.create({
    timeout:6000,
    baseURL:"/api"
});


http.interceptors.response.use(
    (res)=>{
        return res.data
    }
);

http.interceptors.request.use((config) => {
    // 先获取 token
    const token = store.state.token;

    if (token) {
        config.headers.authorization = "Bearer " + token;
    }
    return config;
    });






