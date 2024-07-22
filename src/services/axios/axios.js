// import axios from 'axios';
// import { apiURl } from '../../utils/constants';
// function createAxiosInstance(token  ) { 
//     const instance = axios.create({
//         baseURL: apiURl,
//     });
//     if( token && token.trim()){
//     instance.interceptors.request.use(
        
//         (config) => {
//             config.headers.Authorization = `Bearer ${localStorage.getItem(token)}`; 
//             return config;
//         },
//         (error) => {
//             return Promise.reject(error);
//         }
//       );
//     }
//     return instance;
// }



// const axiosUserInstance = createAxiosInstance("token" );
// const axiosInstance = createAxiosInstance(null , null)


// export {
//     axiosUserInstance,
//     axiosInstance
// };


import axios from 'axios';
import { apiURL } from '../../utils/constants';

function createAxiosInstance(token) {
    const instance = axios.create({
        baseURL: apiURL,
        withCredentials: true, 
    });

    if (token) {
        instance.interceptors.request.use(
            (config) => {
                const authToken = localStorage.getItem('token'); 
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    return instance;
}

const axiosUserInstance = createAxiosInstance(true); 
const axiosInstance = createAxiosInstance(false); 

export {
    axiosUserInstance,
    axiosInstance
};
