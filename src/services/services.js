
import api from "./api";

// ── PRODUCTS ──
export const getAllProducts = async () => {
  const { data } = await api.get("/Product/get-all");
  return data.data;
};

export const getProductById = async (id) => {
  const { data } = await api.get(`/Product/get/${id}`);
  return data.data;
};

export const getMyProducts = async () => {
  const { data } = await api.get("/Product/my-listings");
  return data.data;
};

export const createProduct = async (formData) => {
  const { data } = await api.post("/Product/create", formData);
  return data;
};

export const updateProduct = async (id, formData) => {
  const { data } = await api.put(`/Product/update/${id}`, formData);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/Product/delete/${id}`);
  return data;
};

// ── CATEGORIES ──
export const getAllCategories = async () => {
  const { data } = await api.get("/ProductCategory/get-all");
  return data.data;
};

// ── CART ──
export const getCart = async () => {
  const { data } = await api.get("/Cart/get");
  return data.data;
};

export const addToCart = async (productId, quantity) => {
  const { data } = await api.post("/Cart/add", { productId, quantity });
  return data;
};

export const updateCartItem = async (cartItemId, quantity) => {
  const { data } = await api.put(`/Cart/update/${cartItemId}`, { quantity });
  return data;
};

export const removeFromCart = async (cartItemId) => {
  const { data } = await api.delete(`/Cart/remove/${cartItemId}`);
  return data;
};

export const clearCart = async () => {
  const { data } = await api.delete("/Cart/clear");
  return data;
};

// ── ORDERS ──
export const createOrder = async (orderData) => {
  const { data } = await api.post("/Order/create", orderData);
  return data;
};

export const getOrderById = async (id) => {
  const { data } = await api.get(`/Order/get/${id}`);
  return data.data;
};

export const getMyOrders = async () => {
  const { data } = await api.get("/Order/my-orders");
  return data.data;
};

export const getFarmerOrders = async () => {
  const { data } = await api.get("/Order/farmer-orders");
  return data.data;
};

export const updateOrderStatus = async (orderId, status) => {
  const { data } = await api.put(`/Order/update-status/${orderId}`, { status });
  return data;
};

export const cancelOrder = async (orderId) => {
  const { data } = await api.put(`/Order/cancel/${orderId}`);
  return data;
};

// ── DELIVERY ──
export const getDeliveryByOrder = async (orderId) => {
  const { data } = await api.get(`/Delivery/order/${orderId}`);
  return data.data;
};

export const getAddresses = async () => {
  const { data } = await api.get("/Delivery/addresses");
  return data.data;
};

export const addAddress = async (addressData) => {
  const { data } = await api.post("/Delivery/addresses/add", addressData);
  return data;
};

export const updateAddress = async (addressId, addressData) => {
  const { data } = await api.put(`/Delivery/addresses/update/${addressId}`, addressData);
  return data;
};

export const getDeliveryZones = async () => {
  const { data } = await api.get("/Delivery/zones");
  return data.data;
};

// ── WALLET ──
export const getWallet = async () => {
  const { data } = await api.get("/Wallet/get");
  return data.data;
};

export const getTransactions = async () => {
  const { data } = await api.get("/Wallet/transactions");
  return data.data;
};

// ── REVIEWS ──
export const createReview = async (productId, rating, comment) => {
  const { data } = await api.post("/Review/create", { productId, rating, comment });
  return data;
};

export const getProductReviews = async (productId) => {
  const { data } = await api.get(`/Review/product/${productId}`);
  return data.data;
};