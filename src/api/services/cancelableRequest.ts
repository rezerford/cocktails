import axios from "axios";

import { doRequest } from "./baseRequest";

type configType = {
  method?: string;
  url?: string;
  body: any;
  config: any;
  params: any;
}

export default {
  createGetRequest(url: string) {
    return this.createCancelableRequest("GET", url);
  },

  createCancelableRequest(method: string, url: string) {
    let requestTokenSource: any;

    return ({ body, config = {}, params } : configType) => {
      if (requestTokenSource) {
        requestTokenSource.cancel();
      }

      requestTokenSource = axios.CancelToken.source();

      return doRequest({
        method,
        url,
        body,
        params,
        config: {
          cancelToken: requestTokenSource.token,
          ...config,
        },
      });
    };
  }
};
