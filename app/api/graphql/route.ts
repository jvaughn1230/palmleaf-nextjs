import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "@/lib/graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(apolloServer);

export { handler as GET, handler as POST };
