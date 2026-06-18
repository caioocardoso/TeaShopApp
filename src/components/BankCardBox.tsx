import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import CreditCardIcon from "../../assets/icons";
import LottieView from "lottie-react-native";

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      {/* <CreditCardIcon size={s(180)} /> */}
      <LottieView
      autoPlay
      // ref={animation}
      style={{
        width: s(200),
        height: s(200),
      }}
      source={require('../../assets/BankCardAnimation.json')}
      />
      <Text style={styles.title}>No cards added</Text>
      <Text style={styles.text}>You can add a mastercard and save it for later</Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: vs(300),
    backgroundColor: "#F4EDE4",
    borderRadius: s(10),
    marginTop: vs(15),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: vs(35),
    paddingHorizontal: vs(30)
  },
  title:{
    fontSize: s(16),
    fontWeight: 'bold',
    marginTop: vs(17)
  },
  text: {
    fontSize: s(15),
    marginTop: vs(6),
    textAlign: 'center'
  }
});
