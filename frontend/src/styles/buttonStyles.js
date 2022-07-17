import { StyleSheet } from "react-native";
const buttonStyles = StyleSheet.create({
  grayOutlinedButton: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    color: "snow",
  },
  redButton: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    color: "snow",
  },
  greenOutlinedButton: {
    backgroundColor: "#0FDD7F",
    borderWidth: 0,
    borderRadius: 17,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

export default buttonStyles;
