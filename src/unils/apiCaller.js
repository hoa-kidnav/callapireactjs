import axios from "axios";
import * as Config from "../containers/config";
export const getProducts = () => {
  return axios.get(`${Config.API_URL}products`);
};
export const postProducts = (productData) => {
  return axios.post(`${Config.API_URL}products`, productData);
};
