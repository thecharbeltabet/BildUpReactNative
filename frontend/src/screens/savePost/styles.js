import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#0d0d0d",
  },
  uploadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spacer: {
    flex: 1,
  },
  formContainer: {
    margin: 20,
    flexDirection: "row",
  },
  buttonsContainer: {
    flexDirection: "row",
    margin: 20,
  },
  inputText: {
    paddingVertical: 10,
    marginRight: 20,
    flex: 1,
    color: "snow",
  },
  mediaPreview: {
    aspectRatio: 9 / 16,
    backgroundColor: "black",
    width: 60,
  },
  cancelButton: {
    alignItems: "center",
    flex: 1,
    borderColor: "lightgray",
    borderWidth: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 4,
    marginRight: 10,
    color: "snow",
  },
  postButton: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ff4040",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 4,
    marginRight: 10,
  },
  cancelButtonText: {
    marginLeft: 5,
    color: "snow",
    fontWeight: "bold",
    fontSize: 16,
  },
  postButtonText: {
    marginLeft: 5,
    color: "snow",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
