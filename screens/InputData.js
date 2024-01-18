import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const InputData = () => {
  const [groupDatePicker, setGroupDatePicker] = useState(undefined);
  const [maskGroupchecked, setMaskGroupchecked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.inputdata}>
      <Image
        style={styles.cashier4xRemovebg1Icon}
        contentFit="cover"
        source={require("../assets/gambar.png")}
      />
      <View style={styles.posParent}>
        <Text style={[styles.pos, styles.inputPosition]}>POS</Text>
        <Text style={styles.system}>System</Text>
      </View>
      <View style={styles.inputdataChild} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Text style={[styles.signup, styles.loginTypo]}>SignUp</Text>
      <View style={[styles.inputdataItem, styles.lineViewLayout]} />
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <RNPTextInput
          style={[styles.groupChild, styles.groupLayout]}
          label="First Name"
          placeholder="First name"
          mode="outlined"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          theme={{
            fonts: {
              regular: { fontFamily: "Open Sans", fontWeight: "Regular" },
            },
            colors: { text: "rgba(255, 255, 255, 0.7)" },
          }}
        />
        <RNPTextInput
          style={[styles.groupItem, styles.groupLayout]}
          label="Last name"
          placeholder="Last name"
          mode="flat"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          theme={{
            fonts: {
              regular: { fontFamily: "Open Sans", fontWeight: "Regular" },
            },
            colors: { text: "rgba(255, 255, 255, 0.7)" },
          }}
        />
      </View>
      <RNPTextInput
        style={[styles.inputdataInner, styles.groupLayout1]}
        label="No. Handphone"
        placeholder="No. Handphone"
        mode="outlined"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        theme={{
          fonts: {
            regular: { fontFamily: "Open Sans", fontWeight: "Regular" },
          },
          colors: { text: "rgba(255, 255, 255, 0.7)" },
        }}
      />
      <RNPTextInput
        style={[styles.groupRnptextinput, styles.groupLayout1]}
        label="Address"
        placeholder="Address"
        mode="flat"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        theme={{
          fonts: {
            regular: { fontFamily: "Open Sans", fontWeight: "Regular" },
          },
          colors: { text: "rgba(255, 255, 255, 0.7)" },
        }}
      />
      <RNKDatepicker
        placeholder={() => (
          <Text style={styles.groupDatePickerPlaceHolder}>Month/Day/Years</Text>
        )}
        date={groupDatePicker}
        onSelect={setGroupDatePicker}
        controlStyle={styles.groupDatePickerValue}
      />
      <Pressable
        style={[styles.groupPressable, styles.groupLayout1]}
        onPress={() => navigation.navigate("CheachRole")}
      >
        <View style={[styles.checkWrapper, styles.groupLayout1]}>
          <Text style={styles.check}>Check</Text>
        </View>
      </Pressable>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={styles.byCheckAnAccountYourAgreeParent}>
        <Text style={[styles.byCheckAnContainer, styles.inputPosition]}>
          <Text
            style={styles.byCheckAn}
          >{`By check an account your agree to the `}</Text>
          <Text style={styles.termOfUse}>term of use</Text>
          <Text style={styles.byCheckAn}> and our</Text>
          <Text style={styles.privacyPolicy}>
            {` `}
            <Text style={styles.privacyPolicy1}>privacy policy</Text>
          </Text>
        </Text>
        <CheckBox
          checked={maskGroupchecked}
          onPress={() => setMaskGroupchecked(!maskGroupchecked)}
          containerStyle={styles.maskGroupLayout}
        />
      </View>
      <View style={[styles.inputdatatext, styles.inputdatatextLayout]}>
        <Text style={[styles.enterYourData, styles.inputdatatextLayout]}>
          Enter your data if you want to use this Pos system application
        </Text>
        <View style={[styles.textInputData, styles.inputPosition]}>
          <Text style={[styles.inputData, styles.inputPosition]}>
            Input Data
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupDatePickerPlaceHolder: {
    fontFamily: "OpenSans-Regular",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 20,
  },
  groupDatePickerValue: {},
  maskGroupLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 0,
    top: 4,
    position: "absolute",
  },
  inputPosition: {
    top: 0,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_base,
    top: 51,
    textAlign: "center",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupLayout1: {
    height: 42,
    width: 318,
    position: "absolute",
  },
  groupLayout: {
    width: 153,
    height: 42,
    top: 0,
    position: "absolute",
  },
  inputdatatextLayout: {
    width: 301,
    position: "absolute",
  },
  cashier4xRemovebg1Icon: {
    left: 448,
    width: 746,
    height: 795,
    top: 39,
    position: "absolute",
  },
  pos: {
    fontSize: FontSize.size_45xl,
    color: Color.colorDarkslateblue,
    width: 149,
    height: 68,
    textAlign: "center",
    fontFamily: FontFamily.orelegaOneRegular,
    left: 0,
  },
  system: {
    top: 34,
    left: 94,
    fontSize: FontSize.size_21xl,
    fontStyle: "italic",
    fontFamily: FontFamily.oreganoItalic,
    width: 110,
    height: 54,
    color: Color.colorSandybrown,
    textAlign: "center",
    position: "absolute",
  },
  posParent: {
    top: 467,
    left: 602,
    width: 204,
    height: 88,
    position: "absolute",
  },
  inputdataChild: {
    top: -4,
    left: -3,
    backgroundColor: Color.colorDarkslategray_100,
    width: 448,
    height: 827,
    position: "absolute",
  },
  login: {
    left: 150,
    color: Color.colorWhite,
  },
  signup: {
    left: 241,
    color: Color.colorSandybrown,
  },
  inputdataItem: {
    top: 80,
    left: 256,
    borderColor: Color.colorSandybrown,
    width: 28,
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 165,
  },
  groupParent: {
    top: 255,
    left: 62,
    width: 318,
  },
  inputdataInner: {
    top: 311,
    left: 62,
    width: 318,
  },
  groupRnptextinput: {
    top: 367,
    left: 63,
  },
  check: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.orelegaOneRegular,
  },
  checkWrapper: {
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
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    borderStyle: "solid",
    width: 318,
    left: 0,
    top: 0,
  },
  groupPressable: {
    top: 532,
    left: 64,
  },
  lineView: {
    top: 520,
    left: 60,
    borderColor: Color.colorWhite,
    width: 319,
  },
  byCheckAn: {
    color: Color.colorWhite,
  },
  termOfUse: {
    color: Color.colorBlueviolet_100,
    textDecoration: "underline",
  },
  privacyPolicy1: {
    textDecoration: "underline",
  },
  privacyPolicy: {
    color: Color.colorBlueviolet_200,
  },
  byCheckAnContainer: {
    left: 14,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.openSansLight,
    width: 290,
    textAlign: "left",
  },
  byCheckAnAccountYourAgreeParent: {
    top: 479,
    left: 74,
    width: 304,
    height: 32,
    position: "absolute",
  },
  enterYourData: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSansHebrew,
    color: Color.colorSilver,
    textAlign: "left",
    left: 0,
    top: 39,
  },
  inputData: {
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.orelegaOneRegular,
    left: 0,
  },
  textInputData: {
    left: 1,
    width: 171,
    height: 39,
  },
  inputdatatext: {
    top: 157,
    left: 72,
    height: 75,
  },
  inputdata: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
  },
});

export default InputData;
