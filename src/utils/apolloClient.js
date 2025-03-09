import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

const URL = Constants.expoConfig.extra.apolloUri;
const createApolloClient = () => {
  return new ApolloClient({
    uri: `${URL}:4000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
