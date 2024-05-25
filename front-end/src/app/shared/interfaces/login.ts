export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  role: string;
}

export interface LoginErrorResponse {
  error_message: string;
}
