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
