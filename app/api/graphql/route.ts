import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/lib/graphql/schema";
import { resolvers } from "@/lib/graphql/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiRequest, NextApiResponse } from "next";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const nextHandler = startServerAndCreateNextHandler(apolloServer);
    return nextHandler(req, res);
  } catch (error: unknown) {
    console.error("Error in GraphQL handler:", error);

    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export { handler as GET, handler as POST };
