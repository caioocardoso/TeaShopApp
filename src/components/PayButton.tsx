import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

const PayButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: s(14),
          fontWeight: "bold",
          marginStart: s(2),
        }}
      >
        PAY & CONFIRM
      </Text>
    </TouchableOpacity>
  );
};

export default PayButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D47A22",
    borderRadius: s(10),
    paddingVertical: vs(22),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: vs(15),
  },
});
