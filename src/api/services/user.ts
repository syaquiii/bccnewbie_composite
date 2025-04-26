import {
  ApiError,
  UpdateProfilePayload,
  UpdateProfileResponse,
  UserProfileResponse,
} from "@/type/TAPI";
import core from "../core/core";
import { checkAuth } from "@/utils/checkAuth";

export const getUserProfile = async (): Promise<UserProfileResponse> => {
  try {
    const { token } = checkAuth();
    if (!token) {
      throw new Error("Yuk Login Terlebih Dahulu");
    }

    const response = await core.get<UserProfileResponse>("users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    const axiosError = error as ApiError;
    console.error("User profile error:", axiosError.message);

    if (axiosError.status === 401) {
      localStorage.removeItem("authToken");
      window.location.reload();
    }

    throw axiosError;
  }
};

export const updateProfile = async (
  payload: UpdateProfilePayload
): Promise<UpdateProfileResponse> => {
  try {
    const { token } = checkAuth();
    if (!token) {
      throw new Error("Yuk Login Terlebih Dahulu");
    }

    const response = await core.patch<UpdateProfileResponse>(
      "users/",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    const axiosError = error as ApiError;
    console.error("Update profile error:", axiosError.message);

    if (axiosError.status === 401) {
      localStorage.removeItem("authToken");
      window.location.reload();
    }

    throw axiosError;
  }
};
