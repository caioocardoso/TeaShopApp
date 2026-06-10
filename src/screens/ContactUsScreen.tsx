import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SendButton from "../components/SendButton";
import SociaLCircle from "../components/SocialCircle";
import SocialSection from "../components/SocialSection";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(16) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.title}>Contact Me</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />} title={"Whatsapp"} />
        <SocialSection icon={<Entypo name="email" size={24} color="#178AD9" />} title={"Email"} />
        <SocialSection icon={<Entypo name="linkedin" size={24} color="#178AD9" />} title={"Linkedin"} />
        <SocialSection icon={<AntDesign name="github" size={24} color="#178AD9" />} title={"GitHub"} />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    padding: s(14),
    marginTop: 22,
  },
  title: {
    fontSize: s(30),
    fontWeight: "semibold",
    marginTop: vs(20),
    marginStart: s(19),
  },
  socialTitle: {
    fontWeight: "semibold",
    fontSize: s(16),
  },
});
