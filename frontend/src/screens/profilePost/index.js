import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { Video } from "expo-av";
import PostSingle from "../../components/general/post";
import PostSingleOverlay from "../../components/general/post/overlay";
import { getFeed } from "../../services/posts";
import styles from "./styles";
import { useSelector } from "react-redux";

/**
 * Component that renders a list of posts meant to be
 * used for the feed screen.
 *
 * On start make fetch for posts then use a flatList
 * to display/control the posts.
 */
export default function ProfilePost({ item }) {
  const user = useSelector((state) => state.auth.currentUser);
  const ref = useRef(null);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          height: Dimensions.get("window").height - 54,
          backgroundColor: "black",
        }}
      >
        <PostSingleOverlay user={user} post={item} />
        <Video
          ref={ref}
          style={styles.container}
          resizeMode={Video.RESIZE_MODE_COVER}
          shouldPlay={false}
          isLooping
          usePoster
          posterSource={{ uri: item.media[1] }}
          posterStyle={{ resizeMode: "cover", height: "100%" }}
          source={{ uri: item.media[1] }}
        />
      </View>
    </View>
  );
}
