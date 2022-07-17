import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  containerMain: {
    padding: 20,
    flex: 1,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
    color: "snow",
    textAlign: "center",
  },
  providerButton: {
    borderColor: "#0FDD7F",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  providerButtonText: {
    paddingRight: 20,
    color: "snow",
  },

  containerBottomButton: {
    backgroundColor: "#0F0F0F",
    padding: 20,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#0F0F0F",
  },
  bottomButtonText: {
    fontWeight: "bold",
    color: "#0FDD7F",
  },
  image: {
    height: 350,
    marginLeft: 20,
    alignContent: "center",
  },
});

export default styles;
