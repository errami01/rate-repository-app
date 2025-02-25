import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text color="textBar" fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
