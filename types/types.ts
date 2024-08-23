import { Timestamp } from "firebase/firestore";

export interface CategoryType {
  title: string;
  id: string;
  items: ItemType[];
}

export interface CategoryDirectoryItemType {
  route: string;
  id: number;
  imageUrl: string;
  title: string;
}

export interface ItemType {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface CartItemType extends ItemType {
  quantity: number;
}

export type CategoryMapType = {
  [key: string]: ItemType[];
};

export interface CategoriesStateType {
  categories: CategoryType[];
  name: string;
  isLoading: boolean;
  error: string | null;
}

export type CategoryPayloadType = {
  payload: CategoryType;
};

export type setNamePayload = {
  payload: {
    name: String;
  };
};

export interface UserType {
  displayName: string;
  email: string;
  createdAt: Timestamp;
}
