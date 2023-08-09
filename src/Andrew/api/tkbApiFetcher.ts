import axios, { AxiosRequestConfig } from "axios";

interface Options {
  id?: number;
  seatId?: number;
  method?: string;
  headers?: Headers;
  data?: Data;
  params: Params;
  isDownloading?: boolean;
  isPreview?: boolean;
}
interface Headers {}
interface Data {}
interface Params {}

// authToken exists after logging in - FIXED JUST TO DEV
const authToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhcGkudGlja2V0Ym94LnZuIiwiZXhwIjoxNjkyNzgzMjYzLCJpYXQiOjE2OTE0ODcyNjMsImlzcyI6ImlkZW50aXR5LnRpY2tldGJveC52biIsImRldmljZV9pZCI6IjNjOGY4MTNlOTU5MzM0ODI1YWI4ZTZhNDQ4OTRhMDNjIiwidXNlcl9pZCI6MjU5MDIxLCJraW5kIjoiYWNjZXNzX3Rva2VuIn0.jnEl97hBKYHAScQ8Kz_2ySVc5iJkKwT8plIffFcR5-PtWXrhC6DJshFDYY-H-yJrJdOBcob_IUgT2EnkVYM_7im9zLVZgrOGSMVG6PQJoyYtkxv5RtYu2O4wJ86HL3DqZrDDV9UOKlWW4zz6cQFgRj0UjXBIvylFJB8_YMqNh-DfCmy4q33riYDkFHWaLPI8E8tEIlZbi2ylgoLpyDbwsr0KIbgpojTV9WQA8_SVpBBfrnBdsbsUk06xJVvh_TTE10sZcB6Swij1VbxSm9nsRhopjUL9xgRrpOCKsEz1IRYkRvAebnHT5XdrcbEl1mjDGN57-A_EeYialxgrHIyG1Q`;

// create axios client instance with needed config
const tkbClient = axios.create({
  baseURL: `https://event.ticketbox.dev/api`,
});

tkbClient.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err?.response?.data) {
      throw new Error(
        err.response.data.message ||
          "There was an error occurred, please try again"
      );
    }

    throw err;
  }
);

// initial headers config
const initialHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${authToken}`,
};

const tkbApiFetcher = async (url: string, options = {}) => {
  // if not logged in
  if (!authToken) {
    window.location.reload();
    return -1;
  }

  // if logged in, then handle api calls
  // destruct options object
  const {
    id = 0,
    seatId = 0,
    method = "get",
    headers = {},
    data = {},
    params = {},
    isDownloading = false,
    isPreview = false,
  } = options as Options;

  // handle special cases
  // 1. if api url has id or seatId BUT data does not have id or seatId
  if ((url.includes(":id") && !id) || (url.includes(":seat-id") && !seatId))
    return -1;
  // 2. if valid, replace id or seatId placeholder
  let copyUrl = url;
  if (id) copyUrl = copyUrl.replace(":id", `${id}`);
  if (seatId) copyUrl = copyUrl.replace(":seat-id", `${seatId}`);

  const instanceCfg = {
    url: seatId || id ? copyUrl : url,
    method,
    headers: { ...initialHeaders, ...headers },
    data,
    params,
    responseType: "",
  };

  if (isDownloading || isPreview) {
    instanceCfg.responseType = "blob"; // use blog type for file downloading or preview
  }

  const res = await tkbClient(instanceCfg as AxiosRequestConfig<Data>);

  // --- VERY IMPORTANT NOTES ---
  // ERROR LEVEL 1: ERROR COMING FROM AXIOS, this will catch any status !== 200
  // ERROR LEVEL 2: ERROR COMING FROM REQUEST, this will catch any status === 200 BUT request code < 0
  const resStatus = await res.status;
  const resData = await res.data;
  // const resError = await res.error;
  // console.log('[tkbApiFetcher] LOGS:', { resStatus, resData, resError });

  if (resStatus === 200 && resData.status === 0)
    throw new Error(resData.message);

  // if is downloading, create a link using blob in the response
  if (isDownloading) {
    const href = URL.createObjectURL(res.data);
    const fileName = (
      res.headers["content-disposition"] || "filename=undefined"
    ).split("filename=")[1];

    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", fileName);
    link.setAttribute("style", "display: none;");
    document.body.appendChild(link);
    link.click();
    link?.parentNode?.removeChild(link);

    return null;
  }

  if (isPreview) {
    const href = URL.createObjectURL(res.data);
    window.open(href, "_blank");
    return null;
  }

  // IF NO ERROR, RETURN DATA
  return { data: res.data.data || res.data, status: res.status };
};

export default tkbApiFetcher;
