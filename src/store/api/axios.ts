import axios, { AxiosRequestConfig } from "axios";

async function getToken() {
  const refresh = localStorage.getItem("refresh");
  return "123";
}

export const axiosWrapper = () => {
  const defaultOptions: AxiosRequestConfig<any> = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async function (config) {
    let access_token = localStorage.getItem("token");
    console.log(config.baseURL)
    if (!access_token) {
      access_token = await getToken();
    }
    config.headers!.Authorization = access_token ? `Bearer ${access_token}` : "";
    return config;
  });
  instance.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await getToken();            
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  });

  return instance;
};
