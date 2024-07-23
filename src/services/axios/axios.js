import axios from 'axios';
import { apiURl } from '../../utils/constants';
function createAxiosInstance(token  ) { 
    const instance = axios.create({
        baseURL: apiURl,
    });
    if( token && token.trim()){
    instance.interceptors.request.use(
        
        (config) => {
              console.log("token in axiosinstance::",token)
            config.headers.Authorization = `Bearer ${localStorage.getItem(token)}`; 
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
      );
    }
    return instance;
}
const axiosUserInstance = createAxiosInstance("token" );
const axiosInstance = createAxiosInstance(null )


export {
    axiosUserInstance,
    axiosInstance
};


