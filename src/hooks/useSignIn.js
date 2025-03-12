import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();
  const signIn = async (credentials) => {
    try {
      const { data } = await mutate({
        variables: { credentials },
      });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      await apolloClient.resetStore();
    } catch (error) {
      console.error(error);
    }
  };

  return [signIn, result];
};
export default useSignIn;
