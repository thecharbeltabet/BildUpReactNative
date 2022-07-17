import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-paper";
import AuthScreen from "../../../screens/auth";
import { logOut } from "../../../redux/actions";
import { buttonStyles } from "../../../styles";
import styles from "./styles";
import { userAuthStateListener } from "../../../redux/actions";

export default function ProfileHeader({ user }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuthStateListener());
  }, []);

  const logUserOut = () => {
    dispatch(logOut())
      .then(() => {
        console.log("logout successful");
      })
      .catch(() => {
        console.log("logout unsuccessful");
      });
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.imageViewContainer}>
          {user && user.photoURL ? (
            <Image
              style={styles.image}
              source={{ uri: auth.currentUser.photoURL }}
            />
          ) : (
            <Avatar.Icon size={100} icon={"account"} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.emailText}>
        {user ? user.email : "notAnEmail@gmail.com"}
      </Text>
      <View style={styles.counterContainer}>
        <View style={styles.counterItemContainer}>
          <TouchableOpacity
            style={buttonStyles.grayOutlinedButton}
            onPress={() => navigation.navigate("editProfile")}
          >
            <Text style={{ color: "snow" }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counterItemContainer}>
          <TouchableOpacity
            style={buttonStyles.redButton}
            onPress={() => logUserOut()}
          >
            <Text style={{ color: "red" }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
