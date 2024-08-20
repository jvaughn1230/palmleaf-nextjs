import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/lib/graphql/schema";
import { resolvers } from "@/lib/graphql/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(apolloServer);

export { handler as GET, handler as POST };
