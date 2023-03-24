import axios from "axios";

const REACT_APP_API_URL  = 'http://localhost:5000';

const repository = axios.create({
    baseURL: REACT_APP_API_URL
});

repository.interceptors.request.use(
  // (config) => {
    // const access_token = sessionStorage.get('access_token');
  //   const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5ydSIsImlkIjoiNjI2M2ZlYWYtNTU0NS00ZWZmLTg4MWEtODM2MjFjNThiYWFhIiwicm9sZUlkIjoiMiIsImlhdCI6MTY3OTY4MTIyMiwiZXhwIjoxNjc5Njg0ODIyfQ.sZQTCnXLzH6mGvXFIo8SgHoictmlN7d32ZLSQ8fvsPY';
  //   if (access_token) {
  //       config.headers.set('Authorization', `Bearer ${access_token}`);
  //   }
  //   return config;
  // },
);

export default repository;