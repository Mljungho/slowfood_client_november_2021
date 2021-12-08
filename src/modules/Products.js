import axios from "axios";
const baseUrl = "http://localhost:3000/api";

const Products = {
  async index() {
    const { data } = await axios.get(`${baseUrl}/products`);
    return data.products;
  },
};

export default Products;
