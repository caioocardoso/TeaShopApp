import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { s, vs } from "react-native-size-matters";
import Entypo from '@expo/vector-icons/Entypo';

interface PayMethodCard {
    title: string,
    icon: React.ReactNode,
    isSelected: Boolean
}

const PayMethodCard = ({ title, icon, isSelected = false }) => {
  return (
    <View style={{ width: s(95), marginEnd: s(8) }}>
      {isSelected && (
        <View style={styles.checkmarkContainer}>
          <Entypo name="check" size={s(12)} color="white" />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

export default PayMethodCard;

const styles = StyleSheet.create({
  card: {
    height: vs(82),
    width: s(95),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4EDE4",
  },
  label: {
    fontSize: s(14),
    color: "#464E57",
    textAlign: "center",
    marginTop: vs(4),
  },
  selectedCardStyle: {
    height: vs(82),
    width: s(95),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: s(2),
    borderColor: "#4A5D4E",
  },
  checkmarkContainer: {
    height: s(24),
    width: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#fff",
    backgroundColor: "#4A5D4E",
    position: "absolute",
    zIndex: 1,
    top: s(-10),
    right: s(-6),
    justifyContent: "center",
    alignItems: "center",
  },
});
