import { mapObjectToCamelCase, mapObjectToSnakeCase } from "../../helpers";
import { paginationMapper } from "../../helpers/mappings";

import cancelableRequest from "./cancelableRequest";
import Request from "./request";

export default class CrudRequest {
  url: string = "";
  mapEntityListData = (list: any[]) => list.map(this.mapEntityData);
  mapEntityData: any = mapObjectToCamelCase;
  hasPaginationDecorator: boolean = false;
  cancelableGetRequest: any;

  constructor(url: string, mapEntityListData: any, mapEntityData: any = null, options: any = {}) {
    this.url = url;
    this.hasPaginationDecorator = options.hasPaginationDecorator;

    if (mapEntityListData) {
      this.mapEntityListData = mapEntityListData;
    }

    if (mapEntityData) {
      this.mapEntityData = mapEntityData;
    }

    this.cancelableGetRequest = cancelableRequest.createGetRequest(this.url);
  }

  async get(params: any = {}, config = {}) {
    const list = await this.cancelableGetRequest({ params, config });

    if (!params.all && this.hasPaginationDecorator) {
      return paginationMapper(list, this.mapEntityListData);
    }

    return this.mapEntityListData(list);
  }

  update(id: number, body: any, config: any = {}) {
    return Request.put(`${ this.url }/${ id }`, mapObjectToSnakeCase(body), config);
  }

  delete(id: number, params: any, config: any = {}) {
    return Request.delete(`${ this.url }/${ id }`, params, config);
  }
}
