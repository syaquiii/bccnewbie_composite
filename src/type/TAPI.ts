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
