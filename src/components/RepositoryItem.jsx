import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const RepositoryItem = (props) => {
  const { item } = props;
  const styles = StyleSheet.create({
    container: {
      padding: theme.spacing.medium,
      backgroundColor: "white",
      gap: 15,
    },
    avatarAndInfo: {
      flexDirection: "row",
      gap: 15,
    },
    avatar: {
      width: 50,
      height: 50,
    },
    info: {
      alignItems: "flex-start",
      flexShrink: 1,
      gap: 3,
    },
    language: {
      backgroundColor: theme.colors.primary,
      borderRadius: 3,
      padding: 5,
      color: "white",
    },
    countersContainer: {
      flexDirection: "row",
      // backgroundColor: "red",
      flexBasis: "50%",
      justifyContent: "space-around",
      alignItems: "center",
    },
    singleCountersContainer: {
      alignItems: "center",
    },
    // counterValue:{
    //   fontWeight: "bold",
    // }
    // counterLabel:{
    //   color:
    // }
  });
  const counter = (label, counterString) => {
    let counter = Number(counterString);
    if (counter >= 1000) {
      counter = `${(counter / 1000).toFixed(1)}k`;
    }
    return (
      <View style={styles.singleCountersContainer}>
        <Text fontWeight="bold">{counter}</Text>
        <Text color="textSecondary">{label}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatarAndInfo}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.info}>
          <Text fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.countersContainer}>
        {counter("Stars", item.stargazersCount)}
        {counter("Forks", item.forksCount)}
        {counter("Reviews", item.reviewCount)}
        {counter("Rating", item.ratingAverage)}
      </View>
    </View>
  );
};
export default RepositoryItem;
