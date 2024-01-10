export interface IUser {
  id: number;
  name: string;
  email: string;
  city: string;
  avatar: string | null;
  sells_from: string | null;
  phone: string;
  role?: string;
  surname?: string;
}

export interface IRequestChangeUser {
  role: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  city: string;
  avatar: string | null;
}

export interface IRequestChangePassword {
  password_1: string;
  password_2: string;
}
