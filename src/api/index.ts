import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = 'https://api.github.com';

const api = axios.create({
  baseURL,
});

export type Response<T> = Promise<AxiosResponse<T>>;

export default function makeRequest(params: AxiosRequestConfig) {
  return api.request(params);
}
