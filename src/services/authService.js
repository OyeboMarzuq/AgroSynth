import api from "./api";

export const loginUser = async (email, password) => {
  const { data } = await api.post("/Auth/login", { email, password });
  return data.data;
};

export const registerFarmer = async (formData) => {
  const { data } = await api.post("/Auth/register/farmer", formData);
  return data;
};

export const registerBuyer = async (formData) => {
  const { data } = await api.post("/Auth/register/buyer", formData);
  return data;
};

export const saveAuth = (authData) => {
  localStorage.setItem("token", authData.accessToken);
  localStorage.setItem("refreshToken", authData.refreshToken);
  localStorage.setItem("userId", authData.userId);
  localStorage.setItem("fullName", authData.fullName);
  localStorage.setItem("role", authData.role);
};

export const logout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

export const getUserRole = () => localStorage.getItem("role");
export const getFullName = () => localStorage.getItem("fullName");
export const isLoggedIn = () => !!localStorage.getItem("token");