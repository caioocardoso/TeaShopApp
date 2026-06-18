import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PayMethodCard from "../components/PayMethodCard";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddButton from "../components/AddButton";
import PayButton from "../components/PayButton";

const PaymentScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={styles.container}
      >
        <BackButton />
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <PaymentList />
      </View>

      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
        <AddButton />
      </View>
      <View style={{paddingHorizontal: s(16), flexDirection: 'row', alignItems: 'center', marginTop: vs(24)}}>
        <Text style={styles.total}>TOTAL:</Text>
        <Text style={styles.price}>$94</Text>
      </View>
      <View
        style={{
          paddingHorizontal: s(16),
          marginBottom: s(20),
        }}
      >
        <PayButton />
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: `row`,
    alignItems: "center",
    marginBottom: vs(20),
    paddingHorizontal: s(16),
    marginTop: vs(50),
  },
  headerTitle: {
    fontSize: s(17),
    color: "#18IC2E",
    marginStart: s(18),
  },
  total: {
    color: '#a5ada6',
    fontWeight: 'bold'
  },
  price: {
    fontWeight: 'bold',
    fontSize: s(24),
    marginStart: s(12),
    color: '#4A5D4E'
  },
});
