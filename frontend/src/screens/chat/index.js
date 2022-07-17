import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";

export default function chatScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/seniorprojectbildup.appspot.com/o/bildUpChat.png?alt=media&token=a62efb56-3624-4dca-8730-65d87d9adb82",
        }}
      />
    </View>
  );
}
