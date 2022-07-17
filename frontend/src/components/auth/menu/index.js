import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AuthMenu({ authPage, setAuthPage, setDetailsPage }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Image
          style={styles.image}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/seniorprojectbildup.appspot.com/o/bildUp%20White%20Logo.png?alt=media&token=2f5d8af3-a761-4907-a91f-47f902c84c69",
          }}
        />
        <Text style={styles.headerText}>
          {authPage == 0 ? "Sign In" : "Sign Up"}
        </Text>
        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => setDetailsPage(true)}
        >
          <Feather name="user" size={24} color="white" />
          <Text style={styles.providerButtonText}> Use Email</Text>
          <View />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.containerBottomButton}
        onPress={() => (authPage == 0 ? setAuthPage(1) : setAuthPage(0))}
      >
        {authPage == 0 ? (
          <Text style={{ color: "snow" }}>
            Don't have an account?{" "}
            <Text style={styles.bottomButtonText}>Sign up</Text>
          </Text>
        ) : (
          <Text style={{ color: "snow" }}>
            Already have an account?{" "}
            <Text style={styles.bottomButtonText}>Sign in</Text>
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
