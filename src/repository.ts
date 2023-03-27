import axios from "axios";
import Cookies from "js-cookie";

const REACT_APP_API_URL  = 'http://localhost:5000';

const repository = axios.create({
    baseURL: REACT_APP_API_URL
});


const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}


repository.interceptors.request.use(
    (config) => {
      const access_token = Cookies.get('access_token');
      if (access_token) {
        config.headers.set('Authorization', `Bearer ${access_token}`);
      }
      return config;
    },
  );

repository.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await repository.get("auth/refresh-token", headers);
            Cookies.set('access_token', response.data.access_token);
            return repository.request(originalRequest);
        }
        catch (e) {
            console.log("Не авторизован");
        }
    }
    throw error;
    }
)



export default repository;