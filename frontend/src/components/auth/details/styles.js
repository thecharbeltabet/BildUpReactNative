import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 18,
    backgroundColor: "#0F0F0F",
  },
  textInput: {
    borderColor: "snow",
    borderBottomWidth: 2,
    borderStyle: "solid",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    color: "snow",
  },
  button: {
    marginTop: 80,
    borderColor: "#0F0F0F",
    borderRadius: 5,
    borderStyle: "solid",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#0FDD7F",
    color: "snow",
  },
  buttonText: {
    color: "snow",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    height: 350,
    marginLeft: 20,
    alignContent: "center",
  },
});

export default styles;
