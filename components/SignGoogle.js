import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SignGoogle = () => {
  return (
    <View style={styles.checkWrapper}>
      <Text style={styles.check}>Check</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  check: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.orelegaOneRegular,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  checkWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorSandybrown,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 318,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
});

export default SignGoogle;
