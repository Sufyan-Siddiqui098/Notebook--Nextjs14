// 'use server'
import axios from "axios";

export const loginUser = async (credentials) => {
  try {
    const { data } = await axios.post("/api/login", credentials);
    return data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export const regisgerUser = async (credentials) => {
  try {
    const { data } = await axios.post("/api/register", credentials);
    return data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await axios.get("/api/logout");
    return data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export const forgotPassword = async (credentials) => {
  try {
    const { data } = await axios.post("/api/forget-password", credentials);
    return data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};
