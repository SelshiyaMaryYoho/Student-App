import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { GetLocalStorage, RemoveLocalStorage } from "../utils/localstorage";

// eslint-disable-next-line import/no-named-as-default-member
const AxiosInstance = axios.create({
  baseURL: "http://192.168.1.8:3000", // change for device
  timeout: 500000,
  headers: { "Content-Type": "application/json" },
});

AxiosInstance.interceptors.request.use(
  async(config: InternalAxiosRequestConfig) => {
    const token = await GetLocalStorage('t_s_tk');

    if (token && config.headers) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      RemoveLocalStorage('t_stk');
    }
    return Promise.reject(error);
  }
);

class HttpClient {
  async get(url: string, params?: any) {
    const response = await AxiosInstance.get(url, { params });
    return response.data;
  }

  async post(url: string, data?: any, params?: any) {
    const response = await AxiosInstance.post(url, data, { params });
    return response.data;
  }

  async put(url: string, data?: any) {
    const response = await AxiosInstance.put(url, data);
    return response.data;
  }

  async delete(url: string, params?: any) {
    const response = await AxiosInstance.delete(url, { params });
    return response.data;
  }
}

export default new HttpClient();