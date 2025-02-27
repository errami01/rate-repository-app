import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.spacing.large * 2,
    paddingBottom: theme.spacing.large,
    paddingLeft: theme.spacing.medium,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
    gap: theme.spacing.small,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories " to="/" />
      <AppBarTab text="Sign In " to="signin" />
    </View>
  );
};

export default AppBar;
