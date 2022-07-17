import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
    color: "snow",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderWidth: 2,
    borderColor: "#0FDD7F",
    backgroundColor: "#0d0d0d",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "snow",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "snow",
  },
});

export default styles;
