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

// types/TAPI.ts
export interface MarketProduct {
  product_id: string;
  store_id: string;
  store_name: string;
  product_name: string;
  product_price: number;
  product_weight: number;
  product_type: string;
  product_weight_filter: string;
  product_usage: string;
  composition: string;
  description: string;
  photo_url: string;
}

export interface MarketResponse {
  data: MarketProduct[];
  success: boolean;
}

export interface MarketDetailResponse {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface MarketDetail {
  product_id: string;
  store_id: string;
  store_name: string;
  product_name: string;
  product_price: number;
  product_weight: number;
  product_type: string;
  product_weight_filter: string;
  product_usage: string;
  composition: string;
  description: string;
  photo_url: string;
}

export interface MarketDetailResponse {
  data: MarketDetail;
  success: boolean;
}

export type UserProfileResponse = {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type UpdateProfileResponse = {
  data: {
    user_id: string;
    email: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
  };
  message: string;
  success: boolean;
};
export type UpdateProfilePayload = {
  first_name?: string;
  last_name?: string;
  profile_pic?: string;
};
