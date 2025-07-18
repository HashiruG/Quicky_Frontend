import axios from "axios";
import api from "../../api/api";

export const loginService = async (loginInput: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(
    "http://localhost:8080/auth/login",
    loginInput
  );
  return response;
};

export const registerService = async (registerInput: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(
    "http://localhost:8080/auth/register",
    registerInput
  );
  return response;
};

export const passwordResetService = async (passwordResetRequest: {
  token: string | null;
  newPassword: string;
}) => {
  const response = await api.post("/auth/reset-password", passwordResetRequest);
  return response;
};

export const forgotPasswordService = async (forgotPasswordRequest: {
  username: string;
}) => {
  const response = await api.post(
    "/auth/forgot-password",
    forgotPasswordRequest
  );
  return response;
};
