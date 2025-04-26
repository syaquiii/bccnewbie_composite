export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export type ApiError = Error & {
  status?: number;
  code?: string;
  details?: any;
};

export interface RegisterPayload {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}
export interface RegisterResponse extends ApiResponse {
  message: string;
  success: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: string; // JWT token
  success: boolean;
}

export interface DepositResponse {
  id: string;
  message: string;
}

export interface DepositFormData {
  name: string;
  waste_type: string;
  pickup_method: string;
  waste_weight: string;
}
export interface DepositPayload {
  name: string;
  waste_type: string;
  waste_weight: number;
  pickup_method: string;
}

export type ModalType = "confirmation" | "success" | "error";
export interface DepositHistoryItem {
  waste_type: string;
  waste_weight: number;
  status: string;
  pickup_date: string;
}

export type DepositHistoryResponse = DepositHistoryItem[];

export interface RewardItem {
  reward: number;
  pickup_date: string;
}

export type RewardResponse = RewardItem[];
