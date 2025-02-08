import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    async (config) => {
        console.log('config', config);
        const token = Cookies.get('token');
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = Cookies.get('refreshToken');
            if (!refreshToken) {
                return Promise.reject(error);
            }

            try {
                const res = await axiosClient.post('/auth/refresh-token', {
                    token: refreshToken,
                });

                Cookies.set('token', res.data.accessToken);

                originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
                return axiosClient(originalRequest);
            } catch (error) {
                Cookies.remove('token');
                Cookies.remove('refreshToken');
                return Promise.reject(error);
            }
        }
    }
);
export default axiosClient;
