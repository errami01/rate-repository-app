import { TextInput, View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";

const SignIn = () => {
  const styles = StyleSheet.create({
    container: {
      margin: theme.spacing.medium,
    },
    input: {
      borderWidth: 2,
      borderColor: "gray",
      padding: theme.spacing.small,
      borderRadius: 5,
      marginBottom: theme.spacing.medium,
      height: 50,
    },
    signInButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("Submitting form", values);
    // TODO: Add your logic to handle form submission
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      <Pressable onPress={formik.handleSubmit} style={styles.signInButton}>
        <Text fontSize="subheading" fontWeight="bold" color="textThird">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
