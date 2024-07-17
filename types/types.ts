export interface CategoryType {
  title: string;
  id: number;
  items: ItemType[];
}

export interface ItemType {
  id: number;
  name: string;
  price: number;
  image: string;
}

export type CategoryMapType = {
  [key: string]: ItemType[];
};

export type CategoriesStateType = {
  categories: CategoryType[];
  name: string;
  isLoading: boolean;
};

export type CategoryPayloadType = {
  payload: CategoryType;
};

export type setNamePayload = {
  payload: {
    name: String;
  };
};
