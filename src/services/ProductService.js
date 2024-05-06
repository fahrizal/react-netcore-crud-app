import axios from "axios";

const basedURL = "https://localhost:7260/api/Product";

const productService = {
  getAllProducts: async () => {
    const response = await axios.get(basedURL);
    return response.data;
  },

  addProduct: async (product) => {
    const response = await axios.post(basedURL, product);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await axios.delete(`${basedURL}/${id}`);
    return response.data;
  },

  updateProduct: async (product) => {
    const response = await axios.put(`${basedURL}/${product.id}`, product);
    return response.data;
  },
};

export default productService;
