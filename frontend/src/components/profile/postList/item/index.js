import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function ProfilePostListItem({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          //navigation.navigate("profilePost", item);
          console.log(item.media);
        }}
      >
        <Image style={styles.image} source={{ uri: item.media[1] }} />
      </TouchableOpacity>
    </View>
  );
}
