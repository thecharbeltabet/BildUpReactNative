import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Modal,
  Pressable,
} from "react-native";
import styles from "./styles";
import { buttonStyles } from "../../../styles";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileNavBar({ user }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>
              BildUp Premium Subscription!
            </Text>
            <Text style={styles.modalText}>
              The BildUp team is currently working on the premium subscription !
              Keep up to date on app updates via our social media accounts
            </Text>
            <Pressable
              style={buttonStyles.greenOutlinedButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Return To Profile</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity>
        <Feather name="search" size={20} color={"snow"} />
      </TouchableOpacity>
      <Text style={styles.text}>{user ? user.displayName : "name"}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <AntDesign name={"staro"} size={24} color={"#0FDD7F"} />
      </TouchableOpacity>
    </View>
  );
}
