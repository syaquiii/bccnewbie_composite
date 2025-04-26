import {
  ApiError,
  DepositHistoryResponse,
  DepositPayload,
  DepositResponse,
  RewardResponse,
} from "@/type/TAPI";
import core from "../core/core";
import { checkAuth } from "@/utils/checkAuth";

export const createDeposit = async (
  payload: DepositPayload
): Promise<DepositResponse> => {
  try {
    const { token } = checkAuth();
    if (!token) {
      throw new Error("Yuk Login Terlebih Dahulu");
    }

    // Lakukan request dengan token
    const response = await core.post<DepositResponse>("deposits", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    const axiosError = error as ApiError;
    console.error("Deposit error:", axiosError.message);

    // Handle unauthorized error
    if (axiosError.status === 401) {
      localStorage.removeItem("authToken");
      window.location.reload();
    }

    throw axiosError;
  }
};

export const getDepositHistory = async (): Promise<DepositHistoryResponse> => {
  try {
    const { token } = checkAuth();
    if (!token) {
      throw new Error("Yuk Login Terlebih Dahulu");
    }

    const response = await core.get<DepositHistoryResponse>(
      "deposits/history",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    const axiosError = error as ApiError;
    console.error("Deposit history error:", axiosError.message);

    // Handle unauthorized error
    if (axiosError.status === 401) {
      localStorage.removeItem("authToken");
      window.location.reload();
    }

    throw axiosError;
  }
};
export const getRewardHistory = async (): Promise<RewardResponse> => {
  try {
    const { token } = checkAuth();
    if (!token) {
      throw new Error("Yuk Login Terlebih Dahulu");
    }

    const response = await core.get<RewardResponse>("deposits/reward", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    const axiosError = error as ApiError;
    console.error("Reward history error:", axiosError.message);

    if (axiosError.status === 401) {
      localStorage.removeItem("authToken");
      window.location.reload();
    }

    throw axiosError;
  }
};
