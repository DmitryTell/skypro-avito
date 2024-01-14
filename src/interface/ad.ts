import { IUser } from './user';


export interface IImg {
  id: number;
  ad_id: number;
  url: string;
}

export interface IAd {
  id: number;
  title: string;
  description: string;
  price: number;
  images: IImg[];
  user_id: number;
  created_on: string;
  user: IUser;
}

export interface IRequestNewAd {
  title: string;
  description: string;
  price: number;
}
