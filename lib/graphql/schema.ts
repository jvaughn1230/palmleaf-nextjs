import { gql } from "graphql-tag";
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
