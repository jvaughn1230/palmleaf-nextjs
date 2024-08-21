"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/graphql/apolloClient";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};