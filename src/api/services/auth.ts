import {
  ApiError,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "@/type/TAPI";
import core from "../core/core";

export const registerUser = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  try {
    const response = await core.post<RegisterResponse>(
      "users/register",
      payload
    );
    return response.data;
  } catch (error) {
    const axiosError = error as ApiError;
    console.error("Registration error:", axiosError.message);
    throw axiosError;
  }
};
export const loginUser = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  try {
    const response = await core.post<LoginResponse>("users/login", payload);
    return response.data;
  } catch (error) {
    const axiosError = error as ApiError;
    console.error("Login error:", axiosError.message);
    throw axiosError;
  }
};
