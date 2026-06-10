import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import SociaLCircle from "./SocialCircle";
import SendButton from "./SendButton";
import { s, vs } from "react-native-size-matters";

interface SocialSection {
  title: string;
  icon: React.ReactNode;
}

const SocialSection: FC<SocialSection> = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: vs(1),
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15),
  },
  text: {
    marginStart: s(14),
    flex: 1,
  },
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: s(1),
    borderColor: "#E4E6E8",
  },
});
