import {
  getCategoriesAndDocuments,
  getCategoryByTitle,
} from "@/utils/firebase";

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
