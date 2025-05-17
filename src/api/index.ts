import axios from "axios";

export { default as Drinks } from "./drinks";
export default axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
  timeout: 2000,
});
