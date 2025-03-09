import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const signIn = async (credentials) => {
    try {
      return await mutate({
        variables: { credentials },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return [signIn, result];
};
export default useSignIn;
