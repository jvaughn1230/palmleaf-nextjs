import { gql } from "graphql-tag";
import {
  getCategoriesAndDocuments,
  getCategoryByTitle,
} from "@/utils/firebase";

export const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    price: Float!
    imageUrl: String!
  }

  type Category {
    id: ID!
    title: String!
    items(limit: Int): [Item!]!
  }

  type Query {
    categories: [Category!]!
    categoryByTitle(title: String!): Category
  }
`;

export const resolvers = {
  Query: {
    categories: async () => {
      return await getCategoriesAndDocuments(); // Fetch categories from Firebase
    },

    categoryByTitle: async (_: any, { title }: { title: string }) => {
      const category = await getCategoryByTitle(title);

      if (!category) {
        throw new Error(`Category with title '${title}' not found.`);
      }

      return category;
    },
  },
  Category: {
    items: (parent: any, { limit }: { limit?: number }) => {
      return limit ? parent.items.slice(0, limit) : parent.items;
    },
  },
};

export const GET_CATEGORY_ITEMS = gql`
  query getCategoryItems($title: String!) {
    categoryByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
