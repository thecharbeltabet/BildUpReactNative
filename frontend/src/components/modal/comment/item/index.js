import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { useUser } from "../../../../hooks/useUser";
import { generalStyles } from "../../../../styles";
import styles from "./styles";

const CommentItem = ({ item }) => {
  const user = useUser(item.creator).data;
  //console.log(user);
  console.log(user);
  return (
    <View style={styles.container}>
      {user && user.photoURL ? (
        <Image
          style={generalStyles.avatarSmall}
          source={{ uri: user.photoURL }}
        />
      ) : (
        <Avatar.Icon size={32} icon={"account"} />
      )}
      <View style={styles.containerText}>
        <Text style={styles.displayName}>
          {user
            ? user.displayName
              ? user.displayName
              : user.email
            : "no name"}
        </Text>
        <Text style={{ color: "snow" }}>{item.comment}</Text>
      </View>
    </View>
  );
};

export default CommentItem;
