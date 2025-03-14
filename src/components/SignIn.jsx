import { TextInput, View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
const initialValues = {
  username: "",
  password: "",
};
const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const styles = StyleSheet.create({
    container: {
      margin: theme.spacing.medium,
    },
    input: {
      borderWidth: 2,
      padding: theme.spacing.small,
      borderRadius: 5,
      marginBottom: theme.spacing.medium,
      height: 50,
    },
    error: {
      color: theme.colors.error,
      marginBottom: theme.spacing.medium,
    },
    signInButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          ...styles.input,
          borderColor:
            formik.touched.username && formik.errors.username
              ? theme.colors.error
              : "gray",
        }}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        error
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={{
          ...styles.input,
          borderColor:
            formik.touched.password && formik.errors.password
              ? theme.colors.error
              : "gray",
        }}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.signInButton}>
        <Text fontSize="subheading" fontWeight="bold" color="textThird">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
