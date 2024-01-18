import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <View style={styles.tuesday27Nov2023Parent}>
        <Text style={[styles.tuesday27Nov, styles.groupChildTypo]}>
          Tuesday, 27 Nov 2023
        </Text>
        <Text style={styles.pm}>4:04 PM</Text>
      </View>
      <View style={[styles.maskGroupParent, styles.groupLayout2]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group51.png")}
        />
        <TextInput
          style={[styles.groupChild, styles.groupLayout2]}
          placeholder="Search"
          placeholderTextColor="#848586"
        />
      </View>
      <View style={styles.lineParent}>
        <View style={styles.groupItem} />
        <Pressable style={[styles.rectangleParent, styles.groupLayout1]}>
          <Pressable style={[styles.groupInner, styles.groupBorder]} />
          <Text style={[styles.foods, styles.idrClr]}>Foods</Text>
        </Pressable>
        <Pressable style={[styles.rectangleGroup, styles.groupChildLayout3]}>
          <View style={[styles.rectangleView, styles.groupChildLayout3]} />
          <Text style={[styles.desserts, styles.idrClr]}>Desserts</Text>
        </Pressable>
        <Pressable style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.groupChild1, styles.groupChildPosition]} />
          <Text style={[styles.drinks, styles.latteTypo]}>Drinks</Text>
        </Pressable>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
      </View>
      <View style={styles.groupView}>
        <View style={styles.groupChild2} />
        <View style={[styles.rectangleParent1, styles.parentPosition]}>
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
          <View style={[styles.groupChild4, styles.groupPosition]} />
          <Text style={[styles.dineIn, styles.dineInPosition]}>Dine In</Text>
          <Text style={[styles.takeAway, styles.idrClr]}>Take Away</Text>
        </View>
        <Text style={[styles.orders1, styles.orders1Typo]}>Orders #1</Text>
        <Image
          style={styles.maskGroupIcon1}
          contentFit="cover"
          source={require("../assets/mask-group61.png")}
        />
        <View style={[styles.lineView, styles.groupChildLayout2]} />
        <View style={[styles.lineGroup, styles.groupLayout]}>
          <View style={[styles.groupChild5, styles.groupChildLayout2]} />
          <View style={[styles.groupChild6, styles.groupChildLayout2]} />
          <View style={[styles.groupChild7, styles.groupLayout]} />
          <Text style={[styles.x1MatchaLatteContainer, styles.containerTypo]}>
            <Text style={styles.x1}>{`x1 `}</Text>
            <Text style={styles.matchaLatte}>Matcha Latte</Text>
          </Text>
          <Text style={[styles.idr20000, styles.idrTypo]}>IDR 20.000</Text>
          <Text style={[styles.lessIceLess, styles.lessTypo]}>
            Less ice, less sugar
          </Text>
          <Text style={[styles.remove, styles.containerTypo]}>Remove</Text>
        </View>
        <View style={[styles.addNotesParent, styles.parentPosition]}>
          <Text style={[styles.addNotes, styles.lessTypo]}>Add Notes...</Text>
          <Text style={[styles.idr200001, styles.idrTypo]}>IDR 20.000</Text>
          <Text style={[styles.x1IcedMochaContainer, styles.containerTypo]}>
            <Text style={styles.x1}>{`x1 `}</Text>
            <Text style={styles.matchaLatte}>Iced Mocha</Text>
          </Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupChild8Layout]}>
          <View style={[styles.groupChild8, styles.groupChild8Layout]} />
          <Text style={[styles.payment, styles.orders1Typo]}>Payment</Text>
        </View>
        <View style={styles.lineContainer}>
          <View style={[styles.groupChild9, styles.groupChildLayout2]} />
          <Text style={[styles.total, styles.lessPosition]}>Total</Text>
          <Text style={[styles.idr40000, styles.latteTypo]}>IDR 40.000</Text>
        </View>
      </View>
      <View style={styles.posParent}>
        <Text style={styles.pos}>POS</Text>
        <Text style={[styles.system, styles.idrClr]}>System</Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorParent}
          contentFit="cover"
          source={require("../assets/rectangle-27.png")}
        />
        <View style={styles.groupChild10} />
        <Image
          style={[styles.maskGroupIcon2, styles.wrapperGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.maskGroupIcon3, styles.wrapperGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-100.png")}
        />
        <Pressable
          style={[styles.groupWrapper, styles.wrapperGroupLayout]}
          onPress={() => navigation.navigate("OrderList")}
        >
          <Pressable
            style={[styles.wrapper, styles.wrapperGroupLayout]}
            onPress={() => navigation.navigate("OrderList")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-98.png")}
            />
          </Pressable>
        </Pressable>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
        <Pressable
          style={[styles.maskGroup, styles.wrapperGroupLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mask-group7.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild11, styles.groupChildLayout1]} />
          <Image
            style={styles.fafc801a5f2de37158c009a2c3RemIcon}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-2.png")}
          />
          <View style={[styles.groupChild12, styles.groupChildLayout]} />
          <Text style={[styles.addOrder, styles.addTypo]}>Add Order</Text>
          <Text style={[styles.icedMocha1, styles.icedMocha1Position]}>
            Iced Mocha
          </Text>
          <Text style={[styles.idr200002, styles.addTypo]}>IDR 20.000</Text>
          <Text style={[styles.richIcyIndulgent, styles.icedMocha1Position]}>
            Rich. Icy. Indulgent.
          </Text>
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild13, styles.groupChildLayout1]} />
          <View style={[styles.groupChild14, styles.addOrder3Position]} />
          <Text style={[styles.addOrder1, styles.addTypo]}>Add Order</Text>
          <Text style={[styles.milkTea, styles.latteTypo]}>Milk Tea</Text>
          <Text style={[styles.idr18000, styles.addTypo]}>IDR 18.000</Text>
          <Text
            style={[
              styles.smoothCreamyAuthentic,
              styles.smoothCreamyAuthenticPosition,
            ]}
          >
            Smooth. Creamy. Authentic.
          </Text>
          <Image
            style={[
              styles.f4d99a7f9ea1d2f8bcf7ecd2181290Icon,
              styles.smoothCreamyAuthenticPosition,
            ]}
            contentFit="cover"
            source={require("../assets/4f4d99a7f9ea1d2f8bcf7ecd21812908removebgpreview-2.png")}
          />
        </View>
        <View
          style={[styles.rectangleParent5, styles.rectangleParentShadowBox]}
        >
          <View style={[styles.groupChild15, styles.groupChildLayout1]} />
          <View style={[styles.groupChild16, styles.groupChildLayout]} />
          <Text style={[styles.addOrder2, styles.addTypo]}>Add Order</Text>
          <Text style={[styles.matchaLatte1, styles.matchaLatte1Position]}>
            Matcha Latte
          </Text>
          <Text style={[styles.idr22000, styles.addTypo]}>IDR 22.000</Text>
          <Text style={[styles.velvetyGreenSoothing, styles.lessTypo]}>
            Velvety. Green. Soothing.
          </Text>
          <Image
            style={[
              styles.a71ea35360404286f07478e9dc4fd3Icon,
              styles.matchaLatte1Position,
            ]}
            contentFit="cover"
            source={require("../assets/67a71ea35360404286f07478e9dc4fd3removebgpreview-2.png")}
          />
        </View>
        <View
          style={[styles.rectangleParent6, styles.rectangleParentShadowBox1]}
        >
          <View style={[styles.groupChild17, styles.groupChildLayout1]} />
          <View style={[styles.groupChild18, styles.groupChildLayout]} />
          <Text style={[styles.addOrder3, styles.addOrder3Position]}>
            Add Order
          </Text>
          <Text style={[styles.redvelvetLatte, styles.redvelvetLattePosition]}>
            Redvelvet Latte
          </Text>
          <Text style={[styles.idr24000, styles.addTypo]}>IDR 24.000</Text>
          <Text style={[styles.decadentVelvetyIrresistibl, styles.lessTypo]}>
            Decadent. Velvety. Irresistible.
          </Text>
          <Image
            style={styles.f1a3c41976da80206c6b5b93a7262Icon}
            contentFit="cover"
            source={require("../assets/623f1a3c41976da80206c6b5b93a7262removebgpreview-1.png")}
          />
        </View>
        <View
          style={[styles.rectangleParent7, styles.rectangleParentShadowBox]}
        >
          <View style={[styles.groupChild11, styles.groupChildLayout1]} />
          <Image
            style={styles.fafc801a5f2de37158c009a2c3RemIcon}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-2.png")}
          />
          <View style={[styles.groupChild12, styles.groupChildLayout]} />
          <Text style={[styles.addOrder, styles.addTypo]}>Add Order</Text>
          <Text style={[styles.icedMocha1, styles.icedMocha1Position]}>
            Iced Mocha
          </Text>
          <Text style={[styles.idr200002, styles.addTypo]}>IDR 20.000</Text>
          <Text style={[styles.richIcyIndulgent, styles.icedMocha1Position]}>
            Rich. Icy. Indulgent.
          </Text>
        </View>
        <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild21, styles.groupChildLayout1]} />
          <View style={[styles.groupChild22, styles.groupChildLayout]} />
          <Text style={[styles.addOrder5, styles.addTypo]}>Add Order</Text>
          <Text style={[styles.caramelMacchiato, styles.latteTypo]}>
            Caramel Macchiato
          </Text>
          <Text style={[styles.idr35000, styles.addTypo]}>IDR 35.000</Text>
          <Text
            style={[
              styles.sweetCreamyIrresistible,
              styles.redvelvetLattePosition,
            ]}
          >
            Sweet. Creamy. Irresistible.
          </Text>
          <Image
            style={[
              styles.d3297115b0945af892bbf2e3741888Icon,
              styles.icedMocha1Position,
            ]}
            contentFit="cover"
            source={require("../assets/5d3297115b0945af892bbf2e37418887removebgpreview-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildTypo: {
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
  },
  groupLayout2: {
    height: 35,
    width: 190,
    position: "absolute",
  },
  groupLayout1: {
    width: 125,
    height: 29,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorSandybrown,
    borderStyle: "solid",
    top: 0,
    borderRadius: Border.br_3xs,
  },
  idrClr: {
    color: Color.colorSandybrown,
    position: "absolute",
  },
  groupChildLayout3: {
    width: 124,
    height: 29,
  },
  groupChildPosition: {
    backgroundColor: Color.colorSandybrown,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  latteTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  parentPosition: {
    width: 257,
    left: 33,
    position: "absolute",
  },
  groupPosition: {
    left: 133,
    position: "absolute",
  },
  dineInPosition: {
    left: 32,
    textAlign: "center",
    position: "absolute",
  },
  orders1Typo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout2: {
    width: 281,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupLayout: {
    height: 55,
    position: "absolute",
  },
  containerTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  idrTypo: {
    height: 11,
    width: 51,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorGray_100,
    position: "absolute",
  },
  lessTypo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
  },
  groupChild8Layout: {
    height: 39,
    width: 265,
    position: "absolute",
  },
  lessPosition: {
    left: 10,
    textAlign: "center",
    position: "absolute",
  },
  wrapperGroupLayout: {
    width: 36,
    height: 36,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 292,
    shadowColor: "rgba(0, 0, 0, 0.15)",
  },
  groupChildLayout1: {
    height: 244,
    borderRadius: Border.br_xl,
    width: 205,
    backgroundColor: Color.colorGray_200,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    left: 40,
    backgroundColor: Color.colorSandybrown,
    width: 124,
    height: 29,
    borderRadius: Border.br_3xs,
  },
  addTypo: {
    left: 61,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  icedMocha1Position: {
    left: 57,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 245,
    width: 205,
    position: "absolute",
  },
  addOrder3Position: {
    top: 225,
    position: "absolute",
  },
  smoothCreamyAuthenticPosition: {
    left: 37,
    position: "absolute",
  },
  rectangleParentShadowBox: {
    left: 490,
    width: 205,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  matchaLatte1Position: {
    left: 49,
    position: "absolute",
  },
  rectangleParentShadowBox1: {
    width: 205,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    position: "absolute",
  },
  redvelvetLattePosition: {
    left: 39,
    textAlign: "center",
    position: "absolute",
  },
  tuesday27Nov: {
    top: 36,
    left: 6,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorGray_100,
    position: "absolute",
  },
  pm: {
    fontSize: 32,
    height: 36,
    color: Color.colorWhite,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
    textAlign: "center",
    width: 122,
    position: "absolute",
  },
  tuesday27Nov2023Parent: {
    left: 701,
    height: 51,
    width: 122,
    top: 29,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 8,
    left: 21,
    width: 18,
    height: 18,
    position: "absolute",
  },
  groupChild: {
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
  },
  maskGroupParent: {
    top: 103,
    left: 662,
  },
  groupItem: {
    width: 746,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    top: 42,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    height: 29,
    width: 125,
    position: "absolute",
    left: 0,
  },
  foods: {
    left: 38,
    width: 49,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 3,
    height: 18,
    textAlign: "center",
  },
  rectangleParent: {
    left: 34,
    height: 29,
    top: 0,
  },
  rectangleView: {
    borderWidth: 1,
    borderColor: Color.colorSandybrown,
    borderStyle: "solid",
    top: 0,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  desserts: {
    left: 27,
    width: 71,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 3,
    height: 18,
    textAlign: "center",
  },
  rectangleGroup: {
    left: 300,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    height: 29,
    width: 125,
    position: "absolute",
  },
  drinks: {
    left: 35,
    color: "#201e2d",
    width: 54,
    top: 3,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    height: 18,
    textAlign: "center",
    position: "absolute",
  },
  rectangleContainer: {
    left: 167,
    height: 29,
    top: 0,
  },
  lineIcon: {
    top: 41,
    left: 207,
    maxHeight: "100%",
    width: 45,
    position: "absolute",
  },
  lineParent: {
    top: 106,
    left: 107,
    width: 745,
    height: 42,
    position: "absolute",
  },
  groupChild2: {
    width: 320,
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
    position: "absolute",
    height: 834,
  },
  groupChild3: {
    width: 124,
    height: 29,
    position: "absolute",
  },
  groupChild4: {
    width: 124,
    height: 29,
    borderWidth: 1,
    borderColor: Color.colorSandybrown,
    borderStyle: "solid",
    top: 0,
    borderRadius: Border.br_3xs,
  },
  dineIn: {
    width: 61,
    color: Color.colorGray_200,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 3,
    height: 18,
  },
  takeAway: {
    left: 151,
    width: 89,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 3,
    height: 18,
    textAlign: "center",
  },
  rectangleParent1: {
    top: 86,
    height: 29,
  },
  orders1: {
    left: 33,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    top: 29,
  },
  maskGroupIcon1: {
    top: 31,
    left: 265,
    width: 25,
    height: 25,
    position: "absolute",
  },
  lineView: {
    top: 148,
    left: 23,
    borderColor: Color.colorGray_100,
    width: 281,
  },
  groupChild5: {
    top: 1,
    borderColor: "rgba(140, 140, 140, 0.1)",
    left: 0,
  },
  groupChild6: {
    top: 55,
    borderColor: "rgba(140, 140, 140, 0.09)",
    left: 0,
  },
  groupChild7: {
    left: 272,
    backgroundColor: "#b31312",
    width: 50,
    top: 0,
  },
  x1: {
    color: Color.colorWhite,
  },
  matchaLatte: {
    color: Color.colorGray_100,
  },
  x1MatchaLatteContainer: {
    top: 10,
    left: 11,
    width: 81,
  },
  idr20000: {
    left: 210,
    top: 35,
  },
  lessIceLess: {
    top: 24,
    left: 10,
    textAlign: "center",
    position: "absolute",
  },
  remove: {
    left: 276,
    top: 21,
    color: Color.colorWhite,
  },
  lineGroup: {
    top: 244,
    width: 322,
    left: 1,
  },
  addNotes: {
    top: 14,
    left: 1,
    textAlign: "center",
    position: "absolute",
  },
  idr200001: {
    top: 25,
    left: 206,
  },
  x1IcedMochaContainer: {
    width: 71,
    left: 0,
    top: 0,
  },
  addNotesParent: {
    top: 185,
    height: 36,
  },
  groupChild8: {
    backgroundColor: Color.colorSandybrown,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  payment: {
    left: 88,
    top: 6,
    color: Color.colorGray_200,
  },
  rectangleParent2: {
    top: 738,
    left: 29,
  },
  groupChild9: {
    borderColor: Color.colorGray_100,
    width: 281,
    left: 0,
    top: 0,
  },
  total: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 0,
    color: Color.colorGray_100,
  },
  idr40000: {
    left: 189,
    top: 0,
    textAlign: "center",
    color: Color.colorGray_100,
    position: "absolute",
  },
  lineContainer: {
    top: 670,
    left: 22,
    width: 280,
    height: 22,
    position: "absolute",
  },
  groupView: {
    left: 875,
    width: 323,
    top: 0,
    position: "absolute",
    height: 834,
  },
  pos: {
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.orelegaOneRegular,
    width: 149,
    height: 68,
    color: Color.colorWhite,
    left: 0,
    top: 0,
    textAlign: "center",
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
    textAlign: "center",
  },
  posParent: {
    left: 103,
    width: 204,
    height: 88,
    top: 6,
    position: "absolute",
  },
  vectorParent: {
    width: 87,
    left: 0,
    top: 0,
    position: "absolute",
    height: 834,
  },
  groupChild10: {
    top: 698,
    left: 19,
    borderColor: Color.colorGray_600,
    width: 51,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  maskGroupIcon2: {
    top: 753,
    left: 26,
    width: 36,
  },
  maskGroupIcon3: {
    top: 267,
    left: 26,
    width: 36,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 183,
    left: 26,
    width: 36,
  },
  groupIcon: {
    top: 92,
    left: 16,
    width: 55,
  },
  maskGroup: {
    left: 26,
    width: 36,
    top: 21,
  },
  groupChild11: {
    top: 48,
  },
  fafc801a5f2de37158c009a2c3RemIcon: {
    left: 17,
    width: 170,
    height: 170,
    top: 0,
    position: "absolute",
  },
  groupChild12: {
    top: 234,
    position: "absolute",
  },
  addOrder: {
    top: 238,
    color: Color.colorGray_200,
    position: "absolute",
  },
  icedMocha1: {
    top: 159,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
  },
  idr200002: {
    top: 204,
    color: Color.colorSandybrown,
    position: "absolute",
  },
  richIcyIndulgent: {
    top: 180,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  rectangleParent3: {
    width: 205,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    position: "absolute",
    top: 0,
  },
  groupChild13: {
    top: 39,
  },
  groupChild14: {
    left: 40,
    backgroundColor: Color.colorSandybrown,
    width: 124,
    height: 29,
    borderRadius: Border.br_3xs,
  },
  addOrder1: {
    top: 229,
    color: Color.colorGray_200,
    position: "absolute",
  },
  milkTea: {
    top: 150,
    left: 68,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  idr18000: {
    top: 195,
    color: Color.colorSandybrown,
    position: "absolute",
  },
  smoothCreamyAuthentic: {
    top: 171,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  f4d99a7f9ea1d2f8bcf7ecd2181290Icon: {
    width: 133,
    height: 147,
    top: 0,
  },
  rectangleParent4: {
    top: 9,
    height: 283,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 245,
    shadowColor: "rgba(0, 0, 0, 0.15)",
  },
  groupChild15: {
    top: 42,
    height: 244,
    borderRadius: Border.br_xl,
  },
  groupChild16: {
    top: 228,
    position: "absolute",
  },
  addOrder2: {
    top: 232,
    color: Color.colorGray_200,
    position: "absolute",
  },
  matchaLatte1: {
    top: 153,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
  },
  idr22000: {
    top: 198,
    color: Color.colorSandybrown,
    position: "absolute",
  },
  velvetyGreenSoothing: {
    top: 174,
    left: 44,
    textAlign: "center",
    position: "absolute",
  },
  a71ea35360404286f07478e9dc4fd3Icon: {
    width: 115,
    height: 150,
    top: 0,
  },
  rectangleParent5: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 286,
    top: 6,
  },
  groupChild17: {
    top: 35,
  },
  groupChild18: {
    top: 221,
    position: "absolute",
  },
  addOrder3: {
    left: 61,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorGray_200,
  },
  redvelvetLatte: {
    top: 146,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  idr24000: {
    top: 191,
    color: Color.colorSandybrown,
    position: "absolute",
  },
  decadentVelvetyIrresistibl: {
    top: 167,
    left: 32,
    textAlign: "center",
    position: "absolute",
  },
  f1a3c41976da80206c6b5b93a7262Icon: {
    left: 65,
    width: 75,
    height: 146,
    top: 0,
    position: "absolute",
  },
  rectangleParent6: {
    top: 330,
    height: 279,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    width: 205,
  },
  rectangleParent7: {
    top: 317,
    height: 292,
    shadowColor: "rgba(0, 0, 0, 0.15)",
  },
  groupChild21: {
    top: 53,
  },
  groupChild22: {
    top: 239,
    position: "absolute",
  },
  addOrder5: {
    top: 243,
    color: Color.colorGray_200,
    position: "absolute",
  },
  caramelMacchiato: {
    top: 164,
    left: 25,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  idr35000: {
    top: 209,
    color: Color.colorSandybrown,
    position: "absolute",
  },
  sweetCreamyIrresistible: {
    top: 185,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
  },
  d3297115b0945af892bbf2e3741888Icon: {
    height: 165,
    width: 89,
    top: 0,
  },
  rectangleParent8: {
    top: 312,
    height: 297,
  },
  groupParent: {
    top: 176,
    width: 695,
    height: 609,
  },
  homepage: {
    backgroundColor: Color.colorDarkslategray_100,
    flex: 1,
    overflow: "hidden",
    height: 834,
    width: "100%",
    borderRadius: Border.br_3xs,
  },
});

export default HomePage;
