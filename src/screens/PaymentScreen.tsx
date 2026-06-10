import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PayMethodCard from "../components/PayMethodCard";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const PaymentScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(16) }}>
      <View
        style={{
          flexDirection: `row`,
          alignItems: "center",
          marginBottom: vs(37),
        }}
      >
        <BackButton />
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <PayMethodCard title='Cash' icon={<FontAwesome name="money" size={s(32)} color="black" />}/>
        <PayMethodCard title='Credit/Debit' icon={<FontAwesome name="credit-card-alt" size={s(32)} color="black" />} isSelected={true}/>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: s(17),
    color: "#18IC2E",
    marginStart: s(18),
  },
});
