export interface UserLogin {
  username: string;
  password: string;
}

export interface User {
  usermane: string;
  id: string;
  role: "USER" | "ADMIN";
}

export interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  errors: Array<string>;
  loading: boolean;
  signIn: (value: UserLogin) => Promise<void>;
  logout: () => void;
}

export interface Users {
  id: string;
  username: string;
  image: string;
  role: "USER" | "ADMIN";
  createdAt: string;
}

export type Oferts = {
  price: number;
  id: number;
  description: string;
  createdAt: string;
};

export type Desserts = {
  price: number;
  id: number;
  name: string;
  imagen: string;
  createdAt: string;
};

export type Gastronomics = {
  price: number;
  id: number;
  description: string;
  imagen: string;
  createdAt: string;
};

export type Drinks = {
  price: number;
  id: number;
  name: string;
  imagen: string;
  createdAt: string;
};

export type Snacks = {
  price: number;
  id: number;
  name: string;
  imagen: string;
  createdAt: string;
};

export type Gallery = {
  id: number;
  description: string;
  imagen: string;
  createdAt: string;
};

export type Events = {
  id: number;
  description: string;
  imagen: string;
  createdAt: string;
};
