import { ApolloClient, InMemoryCache } from "@apollo/client";
import { URL } from "./constants";

const createApolloClient = () => {
  return new ApolloClient({
    uri: `${URL}:4000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
