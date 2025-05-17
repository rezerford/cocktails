import axios from "axios";
import { API_URL } from "../../constants";

type configType = {
  method: string;
  url: string;
  body: any;
  config: any;
  params: any;
}

function getConfig({ method, url, body, config, params } : configType) {
  return {
    method,
    url: url.startsWith("https") ? url : `${API_URL}${url}`,
    headers: {
      ...(config?.headers ?? {}),
    },
    redirect: "follow",
    params,
    data: body,
    ...config,
  };
}

function sendRequest({ method, url, body, config, params } : configType) {
  return axios(getConfig({ method, url, body, config, params }));
}

export function doRequest({ method, url, body, config, params } : configType) {
  return sendRequest({ method, url, body, config, params }).then((res) => {
    return res?.data;
  });
}
