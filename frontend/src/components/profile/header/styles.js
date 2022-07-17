import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    paddingHorizontal: 65,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  counterContainer: {
    paddingBottom: 20,
    flexDirection: "row",
    width: 300,
  },
  counterItemContainer: {
    flex: 1,
    alignItems: "center",
  },
  emailText: {
    padding: 20,
    color: "snow",
  },
  counterNumberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  counterLabelText: {
    color: "gray",
    fontSize: 11,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  imageViewContainer: {
    backgroundColor: "gray",
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
    position: "absolute",
  },
});

export default styles;
