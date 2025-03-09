import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const signIn = async (credentials) => {
    try {
      const { data } = await mutate({
        variables: { credentials },
      });
      return data.authenticate.accessToken;
    } catch (error) {
      console.error(error);
    }
  };

  return [signIn, result];
};
export default useSignIn;
