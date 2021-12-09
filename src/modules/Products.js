import { api } from "./network";
const Products = {
  async index() {
    const { data } = await api.get(`/products`);
    return data.products;
  },
};

export default Products;
