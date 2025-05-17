import { doRequest } from "./baseRequest";
type configType = {
  method: string;
  url: string;
  body: any;
  config: any;
  params: any;
};

export default {
  get(url: string, params: any = {}, config: any = {}, body: any = null) {
    return this.request({ method: "GET", url, params, config, body });
  },
  post(url: string, body: any, params: any = {}, config: any = {}) {
    return this.request({ method: "POST", url, body, config, params });
  },
  put(url: string, body: any, params: any = {}, config: any = {}) {
    return this.request({ method: "PUT", url, body, config, params });
  },
  patch(url: string, params: any, body: any = null, config: any = {}) {
    return this.request({ method: "PATCH", url, params, config, body });
  },
  delete(url: string, params: any, config: any = {}, body: any = null) {
    return this.request({ method: "DELETE", url, params, config, body });
  },
  request({ method, url, body, config, params } : configType) {
    return doRequest({ method, url, body, config, params });
  },
};
