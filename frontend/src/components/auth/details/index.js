import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { login, register } from "../../../redux/actions";

export default function AuthDetails({ authPage, setDetailsPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  /**
   * dispatch login action
   */
  const handleLogin = () => {
    dispatch(login(email, password))
      .then(() => {
        console.log("login successful");
      })
      .catch(() => {
        console.log("login unsuccessful");
      });
  };

  /**
   * dispatch register action
   */
  const handleRegister = () => {
    dispatch(register(email, password))
      .then(() => {
        console.log("register successful");
      })
      .catch(() => {
        console.log("register unsuccessful");
      });
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableOpacity onPress={() => setDetailsPage(false)}>
        <Feather
          name="arrow-left"
          size={24}
          color="snow"
          style={{ marginTop: 20 }}
        />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/seniorprojectbildup.appspot.com/o/bildUp%20White%20Logo.png?alt=media&token=2f5d8af3-a761-4907-a91f-47f902c84c69",
        }}
      />
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={"grey"}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.textInput}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor={"grey"}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => (authPage == 0 ? handleLogin() : handleRegister())}
      >
        <Text style={styles.buttonText}>
          {authPage == 0 ? "Sign In" : "Sign Up"}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
