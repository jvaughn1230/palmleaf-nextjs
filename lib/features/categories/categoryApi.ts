import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCategories: builder.query({
      queryFn() {
        return { data: "categories" };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
