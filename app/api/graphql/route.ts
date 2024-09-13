import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/lib/graphql/schema";
import { resolvers } from "@/lib/graphql/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest, NextResponse } from "next/server";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = async (req: NextRequest) => {
  try {
    const nextHandler = startServerAndCreateNextHandler(apolloServer);

    const response = await nextHandler(req);

    return response;
  } catch (error: unknown) {
    console.error("Error in GraphQL handler:", error);

    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: message,
      },
      { status: 500 }
    );
  }
};

export { handler as GET, handler as POST };
