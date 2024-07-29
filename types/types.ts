export interface CategoryType {
  title: string;
  id: string;
  items: ItemType[];
}

export interface ItemType {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
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
