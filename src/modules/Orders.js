import { api } from "./network";

const Orders = {
  async create(product_id, user_id) {
    const { data } = await api.post("./orders", {
      params: { product_id: product_id, user_id: user_id },
    });

    return data.order;
  },
  async update(product_id, order_id) {
    debugger;
  },
};

export default Orders;
