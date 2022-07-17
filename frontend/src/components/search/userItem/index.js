import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "./styles";

export default function SearchUserItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        {item ? (item.displayName ? item.displayName : item.email) : "Name"}
      </Text>
      {item.photoURL ? (
        <Image style={styles.image} source={{ uri: item.photoURL }} />
      ) : (
        <Avatar.Icon size={32} icon={"account"} />
      )}
    </TouchableOpacity>
  );
}
