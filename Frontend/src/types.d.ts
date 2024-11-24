export type User = {
  username?: string;
  userId?: number;
  password?: string;
  status?: boolean;
};

export type AuthContextType = {
  user: User | null;
  isAuth: boolean;
  loading: boolean;
  errors: Array<string>;
  signIn: ({ username, password }: { username: string; password: string }) => void;
  signUp: ({
    password,
    username,
  }: {
    password: string;
    username: string;
  }) => void;
  logout: () => void;
};