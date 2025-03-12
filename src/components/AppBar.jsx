import { View, StyleSheet, ScrollView } from "react-native";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useMe from "../hooks/useMe";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.spacing.large * 2,
    paddingBottom: theme.spacing.large,
    paddingLeft: theme.spacing.medium,
    backgroundColor: theme.colors.appBar,
  },
  scrollView: {
    gap: theme.spacing.medium,
    flexDirection: "row",
    justifyContent: "flex-start",
    minWidth: "100%",
  },
});

const AppBar = () => {
  const { me } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const signOutHandler = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <AppBarTab text="Repositories " to="/" />
        {me ? (
          <AppBarTab text="Sign Out " to="signin" onPress={signOutHandler} />
        ) : (
          <AppBarTab text="Sign In " to="signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
