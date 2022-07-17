import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NavBarGeneral({
  title = "NavBarGeneral",
  leftButton = { display: false },
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={26} color="snow" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => (leftButton.display ? leftButton.action() : null)}
      >
        <Feather
          name={leftButton.name}
          size={26}
          color={leftButton.display ? "#0FDD7F" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
}
