import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

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
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <AppBarTab text="Repositories " to="/" />
        <AppBarTab text="Sign In " to="signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
