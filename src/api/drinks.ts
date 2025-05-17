import { mapObjectToCamelCase } from "../helpers";
import { CrudRequest, Request } from "./services";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

class Drinks extends CrudRequest {
  constructor() {
    super(URL, mapObjectToCamelCase);
  }

  async getDrinks(this: any, params: any) {
    return await Request.get(`${this.url}?s=${params.cocktailCode}`);
  }

}

export default new Drinks();
