import { useQuery } from "@apollo/client";
import { GET_Me } from "../graphql/queries";

const useMe = () => {
  const { data, loading } = useQuery(GET_Me, {
    fetchPolicy: "cache-and-network",
    // Other options
  });
  return {
    me: loading ? null : data.me,
    loading,
    // refetch: fetchRepositories,
  };
};

export default useMe;
