import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

const AddButton = () => {
  return (
    <TouchableOpacity
      style={{
        borderColor: "#E2CBB7",
        borderWidth: s(2),
        backgroundColor: "",
        borderRadius: s(10),
        paddingVertical: vs(20),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        marginTop: vs(15)
      }}
    >
      <Feather name="plus" size={s(20)} color="#4A5D4E" />
      <Text style={{ color: "#4A5D4E", fontSize: s(14), fontWeight: 'bold', marginStart: s(2) }}>ADD NEW</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
