import { Pressable } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to}>
      <Text color="textThird" fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
