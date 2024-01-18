import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Login = () => {
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [groupDropdownValue, setGroupDropdownValue] = useState();
  const [groupDropdownItems, setGroupDropdownItems] = useState([
    { value: "OWNER", label: "OWNER" },
    { value: "USER", label: "USER" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={styles.cashier4xRemovebg1Icon}
        contentFit="cover"
        source={require("../assets/cashier-4xremovebg-1.png")}
      />
      <View style={styles.posParent}>
        <Text style={[styles.pos, styles.posLayout]}>POS</Text>
        <Text style={styles.system}>System</Text>
      </View>
      <View style={styles.loginChild} />
      <View style={[styles.loginParent, styles.posLayout]}>
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        <Text style={[styles.signup, styles.login1Typo]}>SignUp</Text>
        <View style={[styles.groupChild, styles.childLayout]} />
      </View>
      <Text style={styles.welcomeBack}>Welcome Back!</Text>
      <RNPTextInput
        style={styles.loginItem}
        label="Email address"
        placeholder="Email address"
        mode="outlined"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        theme={{
          fonts: {
            regular: { fontFamily: "Open Sans", fontWeight: "Regular" },
          },
          colors: { text: "rgba(255, 255, 255, 0.7)" },
        }}
      />
      <TextInput
        style={[styles.loginInner, styles.groupLayout]}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
      />
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={styles.loginWrapper}>
          <Text style={[styles.login2, styles.posTypo]}>Login</Text>
        </View>
      </Pressable>
      <Text style={styles.forgotPasswordclickHereContainer}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
        <Text style={styles.clickHere}>Click here!</Text>
      </Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={styles.groupItem} />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Text style={[styles.signWithIn, styles.orTypo]}>
          Sign With In Google
        </Text>
      </Pressable>
      <View style={styles.orParent}>
        <Text style={[styles.or, styles.orTypo]}>Or</Text>
        <View style={[styles.groupInner, styles.lineViewLayout]} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.wrapper, styles.groupLayout]}>
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
      <View style={[styles.loginChild1, styles.childLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupDropdownValue: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 20,
    fontFamily: "OpenSans-Regular",
  },
  posLayout: {
    width: 149,
    position: "absolute",
  },
  login1Typo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  childLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupLayout: {
    height: 42,
    width: 318,
    position: "absolute",
  },
  posTypo: {
    fontFamily: FontFamily.orelegaOneRegular,
    textAlign: "center",
  },
  orTypo: {
    fontFamily: FontFamily.openSansHebrew,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  lineViewLayout: {
    width: 111,
    top: 9,
    borderColor: Color.colorGray_100,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  cashier4xRemovebg1Icon: {
    top: 39,
    left: 448,
    width: 746,
    height: 795,
    position: "absolute",
  },
  pos: {
    fontSize: FontSize.size_45xl,
    color: Color.colorDarkslateblue,
    height: 68,
    textAlign: "center",
    fontFamily: FontFamily.orelegaOneRegular,
    left: 0,
    top: 0,
  },
  system: {
    top: 34,
    left: 94,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.oreganoItalic,
    width: 110,
    height: 54,
    color: Color.colorSandybrown,
    fontStyle: "italic",
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
  loginChild: {
    width: 448,
    backgroundColor: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
    position: "absolute",
    height: 834,
  },
  login1: {
    color: Color.colorSandybrown,
    left: 0,
  },
  signup: {
    left: 91,
    color: Color.colorWhite,
  },
  groupChild: {
    top: 29,
    left: 9,
    borderColor: Color.colorSandybrown,
    width: 28,
  },
  loginParent: {
    top: 51,
    left: 150,
    height: 29,
  },
  welcomeBack: {
    top: 159,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    left: 68,
    color: Color.colorWhite,
    fontFamily: FontFamily.orelegaOneRegular,
    position: "absolute",
  },
  loginItem: {
    top: 322,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_11xl,
    height: 42,
    width: 318,
    left: 58,
    borderStyle: "solid",
    position: "absolute",
  },
  loginInner: {
    top: 386,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xl,
    left: 58,
    width: 318,
  },
  login2: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  loginWrapper: {
    backgroundColor: Color.colorSandybrown,
    borderColor: Color.colorGray_400,
    justifyContent: "center",
    borderWidth: 1,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 42,
    width: 318,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPressable: {
    top: 516,
    left: 58,
    width: 318,
  },
  forgotPassword: {
    fontWeight: "300",
    fontFamily: FontFamily.openSansLight,
    color: Color.colorSilver,
  },
  clickHere: {
    fontWeight: "700",
    fontFamily: FontFamily.openSansBoldItalic,
    color: Color.colorWhite,
    fontStyle: "italic",
  },
  forgotPasswordclickHereContainer: {
    top: 588,
    left: 68,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 10,
    elevation: 10,
    borderColor: Color.colorGray_100,
    height: 46,
    borderWidth: 1,
    width: 318,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image1Icon: {
    top: 11,
    left: 82,
    width: 25,
    height: 25,
    position: "absolute",
  },
  signWithIn: {
    top: 14,
    left: 117,
  },
  rectangleParent: {
    top: 218,
    height: 46,
    width: 318,
    left: 58,
    position: "absolute",
  },
  or: {
    left: 120,
    top: 0,
  },
  groupInner: {
    left: 146,
  },
  lineView: {
    left: 0,
  },
  orParent: {
    top: 284,
    left: 89,
    width: 256,
    height: 18,
    position: "absolute",
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 450,
    left: 58,
    width: 318,
  },
  loginChild1: {
    top: 577,
    left: 62,
    borderColor: Color.colorWhite,
    width: 311,
  },
  login: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 834,
  },
});

export default Login;
