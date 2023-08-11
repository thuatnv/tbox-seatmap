import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

// FIXED FOR DEV
const authToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhcGkudGlja2V0Ym94LnZuIiwiZXhwIjoxNjkyNzgzMjYzLCJpYXQiOjE2OTE0ODcyNjMsImlzcyI6ImlkZW50aXR5LnRpY2tldGJveC52biIsImRldmljZV9pZCI6IjNjOGY4MTNlOTU5MzM0ODI1YWI4ZTZhNDQ4OTRhMDNjIiwidXNlcl9pZCI6MjU5MDIxLCJraW5kIjoiYWNjZXNzX3Rva2VuIn0.jnEl97hBKYHAScQ8Kz_2ySVc5iJkKwT8plIffFcR5-PtWXrhC6DJshFDYY-H-yJrJdOBcob_IUgT2EnkVYM_7im9zLVZgrOGSMVG6PQJoyYtkxv5RtYu2O4wJ86HL3DqZrDDV9UOKlWW4zz6cQFgRj0UjXBIvylFJB8_YMqNh-DfCmy4q33riYDkFHWaLPI8E8tEIlZbi2ylgoLpyDbwsr0KIbgpojTV9WQA8_SVpBBfrnBdsbsUk06xJVvh_TTE10sZcB6Swij1VbxSm9nsRhopjUL9xgRrpOCKsEz1IRYkRvAebnHT5XdrcbEl1mjDGN57-A_EeYialxgrHIyG1Q`;
const instance = axios.create({
  baseURL: `https://event.ticketbox.dev/api`, // FIXED FOR DEV
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  },
});
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data) {
      throw new Error(
        error.response.data.message ||
          "There was an error occurred, please try again"
      );
    }
    throw error;
  }
);

const fetcher = (axios: AxiosInstance) => ({
  get: <T>(url: string, config: AxiosRequestConfig = {}) =>
    axios.get<T>(url, config),
  delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
    axios.delete<T>(url, config),
  put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
    axios.put<T>(url, body, config),
  patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
    axios.patch<T>(url, body, config),
  post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
    axios.post<T>(url, body, config),
});

export default fetcher(instance);
