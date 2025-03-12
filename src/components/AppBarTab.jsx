import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, to, ...restProps }) => {
  return (
    <Link to={to} {...restProps}>
      <Text color="textThird" fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
