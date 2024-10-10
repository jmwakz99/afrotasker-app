import { DB_BASE_URL } from "@/constants/urls";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

type ErrorResponse = {
  data?: {
    message?: string;
  };
  message?: string;
};

export const coreRequestHandler = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // Implement any core request handling logic here
  return request;
};

export const errorHandler = (error: AxiosError): Promise<never> => {
  // const errorObj: ErrorResponse = error.response
  //   ? JSON.parse(JSON.stringify(error.response))
  //   : JSON.parse(JSON.stringify(error));

  return Promise.reject({
    message: error,
  });
};

const requestHandler = axios.create({
  baseURL: DB_BASE_URL,
});

requestHandler.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    return coreRequestHandler(request);
  },
  (error) => {
    return Promise.reject(error);
  }
);

requestHandler.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => errorHandler(error)
);

export default requestHandler;
