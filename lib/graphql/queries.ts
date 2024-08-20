import gql from "graphql-tag";

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

export const GET_CATEGORIES_WITH_PREVIEW_ITEMS = gql`
  query GetCategoriesWithItems($limit: Int) {
    categories {
      id
      title
      items(limit: $limit) {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
