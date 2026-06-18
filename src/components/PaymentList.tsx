import { FlatList, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { s, vs } from "react-native-size-matters";
import PayMethodCard from "./PayMethodCard";
import { useState } from "react";

const paymentMethods = [
  {
    label: "Cash",
    icon: <FontAwesome name="money" size={s(32)} color="black" />,
  },
  {
    label: "Cas2h",
    icon: <FontAwesome name="money" size={s(32)} color="black" />,
  },
  {
    label: "Cash3",
    icon: <FontAwesome name="money" size={s(32)} color="black" />,
  },
  {
    label: "Cas4h",
    icon: <FontAwesome name="money" size={s(32)} color="black" />,
  },
  {
    label: "Ca5sh",
    icon: <FontAwesome name="money" size={s(32)} color="black" />,
  },
  {
    label: "Ca6sh",
    icon: <FontAwesome name="money" size={s(32)} color="black" />,
  },
  {
    label: "Ca7sh",
    icon: <FontAwesome name="money" size={s(32)} color="black" />,
  },
  {
    label: "Visa",
    icon: <FontAwesome name="credit-card-alt" size={s(32)} color="black" />,
  },
];

const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PayMethodCard
            title={item.label}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.label)}
            isSelected={item.label === selectedMethod}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(10),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
