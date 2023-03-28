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
  async  (config) => {
      const access_token = Cookies.get('access_token');

      if (access_token) {
          config.headers.set('Authorization', `Bearer ${access_token}`);
      }

      let curTime = Number(new Date().getTime())/1000;
      let expTime = Number(Cookies.get('expired_at'))/1000;
      if (expTime - curTime < 600) {
          try{
              const response = await repository.get("auth/refresh-token", headers);
              Cookies.set('access_token', response.data.access_token);
              Cookies.set('expired_at', response.data.expired_at);
          }
          catch (e) {
              console.log("User unauthorized!");
          }


        }
      return config;
    },
  );



export default repository;