import axios from "axios";
import api from "../../api/api";

export const loginService = async (loginInput: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(
    "https://quickyadmin-cgencwhxg9hzaceq.southindia-01.azurewebsites.net/auth/login",
    loginInput
  );
  return response;
};

export const registerService = async (registerInput: {
  username: string;
  password: string;
  role: string;
  name: string;
}) => {
  const response = await api.post(
    "https://quickyadmin-cgencwhxg9hzaceq.southindia-01.azurewebsites.net/register",
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


export const getAdminsService = async () => {
  const response = await api.get("/auth/register/view-admins");
  return response;
}

export const removeAdminService = async (username: string) => {
  const response = await api.delete(`/auth/register/delete-admin/${username}`);
  return response;
};
