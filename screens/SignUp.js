import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignGoogle from "../components/SignGoogle";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <View style={[styles.gambarposWrapper, styles.gambarposLayout]}>
        <View style={[styles.gambarpos, styles.gambarposLayout]}>
          <Image
            style={[styles.gambarpos, styles.gambarposLayout]}
            contentFit="cover"
            source={require("../assets/gambar.png")}
          />
          <Text style={styles.pos}>POS</Text>
          <Text style={styles.system}>System</Text>
        </View>
      </View>
      <View style={styles.signupChild} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Text style={[styles.signup1, styles.loginTypo]}>SignUp</Text>
      <View style={[styles.signupItem, styles.signupLayout]} />
      <View style={styles.textSignup}>
        <Text style={styles.signUp}>{`SIgn up `}</Text>
        <Text style={[styles.giveUsSome, styles.or1Typo]}>
          Give us some of your information to get free access to POS System.
        </Text>
      </View>
      <Pressable
        style={[styles.buttonCheck, styles.formLayout]}
        onPress={() => navigation.navigate("InputData")}
      >
        <SignGoogle />
      </Pressable>
      <View style={[styles.signupInner, styles.formPosition]} />
      <TextInput
        style={[styles.formInput, styles.formTypo]}
        placeholder="Email address"
        keyboardType="email-address"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
      />
      <TextInput
        style={[styles.formPassword, styles.formTypo]}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
      />
      <View style={[styles.formRepeatPassword, styles.formPosition]}>
        <View style={styles.repeatPasswordWrapper}>
          <Text style={[styles.repeatPassword, styles.formTypo]}>
            Repeat Password
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.signwgoogle, styles.signwgoogleLayout]}
        onPress={() => navigation.navigate("InputData")}
      >
        <View style={[styles.rectangleParent, styles.signwgoogleLayout]}>
          <View style={styles.groupChild} />
          <View style={[styles.signgoogle, styles.signgoogleLayout]}>
            <Image
              style={[styles.image1Icon, styles.signgoogleLayout]}
              contentFit="cover"
              source={require("../assets/image-1.png")}
            />
            <Text style={[styles.signWithIn, styles.or1Typo]}>
              Sign With In Google
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.or}>
        <Text style={[styles.or1, styles.or1Typo]}>Or</Text>
        <View style={[styles.orChild, styles.orItemLayout]} />
        <View style={[styles.orItem, styles.orItemLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gambarposLayout: {
    height: 795,
    width: 746,
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
  signupLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  or1Typo: {
    fontFamily: FontFamily.openSansHebrew,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  formLayout: {
    height: 42,
    width: 318,
  },
  formPosition: {
    left: 56,
    position: "absolute",
  },
  formTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansRegular,
  },
  signwgoogleLayout: {
    height: 46,
    width: 318,
    position: "absolute",
  },
  signgoogleLayout: {
    height: 25,
    position: "absolute",
  },
  orItemLayout: {
    width: 111,
    top: 9,
    borderColor: Color.colorGray_100,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  gambarpos: {
    left: 0,
    top: 0,
  },
  pos: {
    top: 428,
    left: 154,
    fontSize: FontSize.size_45xl,
    color: Color.colorDarkslateblue,
    width: 149,
    height: 68,
    textAlign: "center",
    fontFamily: FontFamily.orelegaOneRegular,
    position: "absolute",
  },
  system: {
    top: 462,
    left: 248,
    fontSize: FontSize.size_21xl,
    fontStyle: "italic",
    fontFamily: FontFamily.oreganoItalic,
    width: 110,
    height: 54,
    color: Color.colorSandybrown,
    textAlign: "center",
    position: "absolute",
  },
  gambarposWrapper: {
    left: 448,
    top: 39,
  },
  signupChild: {
    left: -5,
    width: 448,
    height: 827,
    backgroundColor: Color.colorDarkslategray_100,
    top: 0,
    position: "absolute",
  },
  login: {
    left: 150,
    color: Color.colorWhite,
  },
  signup1: {
    left: 241,
    color: Color.colorSandybrown,
  },
  signupItem: {
    top: 80,
    left: 256,
    borderColor: Color.colorSandybrown,
    width: 28,
    position: "absolute",
  },
  signUp: {
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.orelegaOneRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  giveUsSome: {
    color: Color.colorSilver,
    width: 277,
    left: 0,
    top: 39,
  },
  textSignup: {
    top: 151,
    left: 64,
    height: 75,
    width: 277,
    position: "absolute",
  },
  buttonCheck: {
    top: 543,
    left: 60,
    position: "absolute",
  },
  signupInner: {
    top: 527,
    borderColor: Color.colorWhite,
    width: 319,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  formInput: {
    top: 353,
    left: 56,
    position: "absolute",
    height: 42,
    width: 318,
  },
  formPassword: {
    top: 411,
    left: 56,
    position: "absolute",
    height: 42,
    width: 318,
  },
  repeatPassword: {
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
  },
  repeatPasswordWrapper: {
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 30,
    elevation: 30,
    borderColor: Color.colorGray_400,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    height: 42,
    width: 318,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  formRepeatPassword: {
    top: 469,
    height: 42,
    width: 318,
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 10,
    elevation: 10,
    borderColor: Color.colorGray_100,
    height: 46,
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    width: 318,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image1Icon: {
    width: 25,
    left: 0,
    top: 0,
  },
  signWithIn: {
    top: 3,
    left: 35,
    color: Color.colorWhite,
  },
  signgoogle: {
    top: 11,
    left: 82,
    width: 154,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  signwgoogle: {
    top: 243,
    left: 58,
  },
  or1: {
    left: 120,
    color: Color.colorWhite,
    top: 0,
  },
  orChild: {
    left: 146,
  },
  orItem: {
    left: 0,
  },
  or: {
    top: 309,
    left: 89,
    width: 256,
    height: 18,
    position: "absolute",
  },
  signup: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
  },
});

export default SignUp;
