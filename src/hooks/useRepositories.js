import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    // Other options
  });
  return {
    repositories: loading ? null : data.repositories,
    loading,
    // refetch: fetchRepositories,
  };
};

export default useRepositories;
