import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textThird: "white",
    primary: "#0366d6",
    error: "#d73a4a",
    secondary: "#e1e4e8",
    appBar: "#24292e",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.OS === "android" ? "Roboto" : "Arial",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  },
};

export default theme;
