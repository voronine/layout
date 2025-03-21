import { User } from "./User";

export interface AuthState {
  user: User | null;
  token: string | null;
  error: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
  remember?: boolean;
}
