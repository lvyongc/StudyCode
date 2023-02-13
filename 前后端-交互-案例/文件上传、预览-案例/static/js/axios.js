import axios from 'axios'
export default  axios = axios.create({
    baseURL: 'http://localhost:8081',
    // 允许请求超时多久
    timeout: 3000,
    withCredentials: true, // 默认false
});
// 请求拦截
myAxios.interceptors.request.use((config)=>{
    // 拿到token
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization =  token; // Bearer 最后带一个空格
        // instance.defaults.headers.common['Authorization'] = token;
    }
    return config
});

// 响应拦截
myAxios.interceptors.response.use((res)=>{
    return res 
},(err)=>{
    if(err.response.status === 401){
        // location.href = "/login.html"
    }
    return Promise.reject(err);
});

