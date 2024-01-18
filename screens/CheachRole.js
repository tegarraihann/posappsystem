import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { CheckBox as RNKCheckBox } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const CheachRole = () => {
  const [maskGroupchecked, setMaskGroupchecked] = useState(false);
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [groupDropdownValue, setGroupDropdownValue] = useState();
  const [groupDropdownItems, setGroupDropdownItems] = useState([
    { value: "OWNER", label: "OWNER" },
    { value: "USER", label: "USER" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.cheachrole}>
      <Image
        style={styles.cashier4xRemovebg1Icon}
        contentFit="cover"
        source={require("../assets/gambar.png")}
      />
      <View style={styles.posParent}>
        <Text style={styles.pos}>POS</Text>
        <Text style={styles.system}>System</Text>
      </View>
      <View style={styles.cheachroleChild} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Text style={[styles.signup, styles.loginTypo]}>SignUp</Text>
      <View style={[styles.cheachroleItem, styles.groupChildLayout]} />
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.frameWrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={[styles.createAccountWrapper, styles.wrapperLayout]}>
            <Text style={styles.createAccount}>Create Account</Text>
          </View>
        </Pressable>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.byCreatingAnAccountYourAgParent}>
          <Text style={styles.byCreatingAnContainer}>
            <Text
              style={styles.byCreatingAn}
            >{`By creating an account your agree to the `}</Text>
            <Text style={styles.termOfUse}>term of use</Text>
            <Text style={styles.byCreatingAn}> and our</Text>
            <Text style={styles.privacyPolicy}>
              {` `}
              <Text style={styles.privacyPolicy1}>privacy policy</Text>
            </Text>
          </Text>
          <RNKCheckBox
            style={styles.maskGroup}
            checked={maskGroupchecked}
            onChange={() => setMaskGroupchecked(!maskGroupchecked)}
          />
        </View>
      </View>
      <View style={[styles.checkroleText, styles.checkroleTextLayout]}>
        <Text style={[styles.checkYourRole, styles.checkroleTextLayout]}>
          Check your role to access this application
        </Text>
        <Text style={styles.checkRole}>Check Role</Text>
      </View>
      <View style={[styles.cheachroleInner, styles.wrapperLayout]}>
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <DropDownPicker
            open={groupDropdownOpen}
            setOpen={setGroupDropdownOpen}
            value={groupDropdownValue}
            setValue={setGroupDropdownValue}
            placeholder="Role"
            items={groupDropdownItems}
            labelStyle={styles.groupDropdownValue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupDropdownValue: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 20,
    fontFamily: "OpenSans-Regular",
  },
  loginTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_base,
    top: 51,
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  wrapperLayout: {
    height: 42,
    width: 318,
    position: "absolute",
  },
  checkroleTextLayout: {
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
    top: 0,
    position: "absolute",
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
  cheachroleChild: {
    left: -3,
    backgroundColor: Color.colorDarkslategray_100,
    width: 448,
    height: 827,
    top: 0,
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
  cheachroleItem: {
    top: 80,
    left: 256,
    borderColor: Color.colorSandybrown,
    width: 28,
  },
  createAccount: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.orelegaOneRegular,
  },
  createAccountWrapper: {
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
    height: 42,
    left: 0,
    top: 0,
  },
  frameWrapper: {
    top: 73,
    left: 0,
  },
  groupChild: {
    borderColor: Color.colorWhite,
    width: 311,
    top: 51,
    borderTopWidth: 1,
    left: 0,
  },
  byCreatingAn: {
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
  byCreatingAnContainer: {
    left: 14,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.openSansLight,
    width: 290,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  maskGroup: {
    top: 4,
    left: 0,
    position: "absolute",
  },
  byCreatingAnAccountYourAgParent: {
    left: 8,
    width: 304,
    height: 32,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: 427,
    left: 62,
    height: 115,
    width: 318,
    position: "absolute",
  },
  checkYourRole: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSansHebrew,
    textAlign: "left",
    color: Color.colorWhite,
    left: 0,
    top: 39,
  },
  checkRole: {
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.orelegaOneRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  checkroleText: {
    top: 208,
    left: 67,
    height: 57,
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  cheachroleInner: {
    top: 314,
    left: 60,
  },
  cheachrole: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
  },
});

export default CheachRole;
