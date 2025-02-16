import axios from 'axios';
import config from '@/config';

axios.defaults.baseURL = `${config.apiUrl}`;
axios.interceptors.request.use( (config) =>{
    const token_seguridad = window.localStorage.getItem('token');
    if(token_seguridad){
        config.headers.Authorization = `Bearer ${token_seguridad}`;
        return config;
    }
}, error => {
    return Promise.reject(error);
});


const requestGeneric = {
    get:(url)=>axios.get(url),
    post:(url,body)=>axios.post(url,body),
    put:(url,body)=>axios.put(url,body),
    delete:(url)=>axios.delete(url)
}

export default requestGeneric;