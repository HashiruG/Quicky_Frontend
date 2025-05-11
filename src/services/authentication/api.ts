import api from "../../api/api";

export const loginService = async (loginInput: { username: string; password: string; }) => {
  try {
    const response = await api.post("/auth/login", loginInput);
    return response;
  } catch (error) {
    throw new Error("Invalid credentials. Please try again.");
  }
};

export const registerService = async (registerInput: { username: string; password: string; }) => {
  try {
    const response = await api.post("/auth/register", registerInput);
    return response;
  } catch (error) {
    if (error.response.status === 409) {
      throw new Error("Email already exists. Please try another one.");
    } else {
      throw new Error("An error occurred. Please try again later.");
    }
  }
};

export const passwordResetService = async (passwordResetRequest: { token: string | null; newPassword: string; }) => {
  try {
    const response = await api.post(
      "/auth/reset-password",
      passwordResetRequest
    );
    return response;
  } catch (error) {
    throw new Error("An error occurred. Please try again later.");
  }
};

export const forgotPasswordService = async (forgotPasswordRequest: { username: string; }) => {
  try {
    const response = await api.post(
      "/auth/forgot-password",
      forgotPasswordRequest
    );
    return response;
  } catch (error) {
    if (error.response.status === 404) {
      throw new Error("No user found with the given username.");
    } else {
      throw new Error("An errored, please try again later.");
    }
  }
};
