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
  signIn: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  signUp: ({
    password,
    username,
  }: {
    password: string;
    username: string;
  }) => void;
  logout: () => void;
};

export type Oferts = {
  price?: number;
  ofertId?: number;
  description?: string;
};

export type Desserts = {
  price?: number;
  dessertId?: number;
  name?: string;
  imagen?: string;
};

export type Gastronomics = {
  price?: number;
  gastronomicId?: number;
  description?: string;
  imagen?: string;
};

export type Drinks = {
  price?: number;
  drinkId?: number;
  name?: string;
  imagen?: string;
};

export type Snacks = {
  price?: number;
  snackId?: number;
  name?: string;
  imagen?: string;
};

