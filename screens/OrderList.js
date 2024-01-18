import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const OrderList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.orderlist}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorParent}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-100.png")}
        />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-22.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.maskGroupLayout]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.maskGroup, styles.maskGroupLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mask-group7.png")}
          />
        </Pressable>
        <View style={[styles.groupInner, styles.lineViewLayout]} />
      </View>
      <Image
        style={styles.orderlistChild}
        contentFit="cover"
        source={require("../assets/rectangle-4811.png")}
      />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.lineParent, styles.parentLayout]}>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Text style={[styles.order, styles.orderFlexBox]}>Order</Text>
          <Text style={[styles.menu, styles.orderFlexBox]}>Menu</Text>
          <Text style={[styles.totalPayment, styles.orderFlexBox]}>
            Total Payment
          </Text>
          <Text style={[styles.payment, styles.orderFlexBox]}>Payment</Text>
          <Text style={[styles.status, styles.orderFlexBox]}>Status</Text>
        </View>
        <View style={[styles.order1Parent, styles.order2ParentPosition]}>
          <Text style={[styles.order1, styles.orderTypo]}>Order #1</Text>
          <Text style={[styles.idr57000, styles.wrapperFlexBox1]}>
            IDR 57.000
          </Text>
          <Text
            style={[styles.matchaLatteCaramel, styles.redVelvetPosition]}
          >{`Matcha Latte, caramel
Macchiato`}</Text>
          <View style={[styles.completedWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.completed, styles.debitTypo]}>Completed</Text>
          </View>
          <View style={[styles.cashWrapper, styles.wrapperLayout]}>
            <Text style={[styles.completed, styles.debitTypo]}>Cash</Text>
          </View>
        </View>
        <View style={[styles.order2Parent, styles.order2ParentPosition]}>
          <Text style={[styles.order2, styles.order2Position]}>Order #2</Text>
          <Text style={[styles.idr57000, styles.wrapperFlexBox1]}>
            IDR 24.000
          </Text>
          <Text style={[styles.redVelvet, styles.redVelvetPosition]}>
            Red Velvet
          </Text>
          <View style={[styles.preparingWrapper, styles.order2Position]}>
            <Text style={[styles.preparing, styles.debitTypo]}>Preparing</Text>
          </View>
          <View style={[styles.cashWrapper, styles.wrapperLayout]}>
            <Text style={[styles.completed, styles.debitTypo]}>Cash</Text>
          </View>
        </View>
        <View style={[styles.order2Group, styles.order2ParentPosition]}>
          <Text style={[styles.order2, styles.order2Position]}>Order #2</Text>
          <Text style={[styles.idr57000, styles.wrapperFlexBox1]}>
            IDR 24.000
          </Text>
          <Text style={[styles.redVelvet, styles.redVelvetPosition]}>
            Red Velvet
          </Text>
          <View style={[styles.cancelWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.cancel, styles.debitTypo]}>Cancel</Text>
          </View>
          <View style={[styles.debitWrapper, styles.wrapperLayout]}>
            <Text style={[styles.debit, styles.debitTypo]}>Debit</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.orderList, styles.orderFlexBox]}>Order List</Text>
      <Text style={[styles.tuesday27Nov, styles.orderFlexBox]}>
        Tuesday, 27 Nov 2023
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupLayout: {
    height: 36,
    width: 36,
    left: 26,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  parentLayout: {
    width: 908,
    position: "absolute",
  },
  orderFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  order2ParentPosition: {
    width: 831,
    left: 20,
    position: "absolute",
  },
  orderTypo: {
    width: 85,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    left: 0,
  },
  wrapperFlexBox1: {
    alignItems: "center",
    position: "absolute",
  },
  redVelvetPosition: {
    left: 122,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    left: 584,
  },
  debitTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  wrapperLayout: {
    padding: Padding.p_3xs,
    height: 25,
    width: 80,
    left: 751,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  order2Position: {
    top: 1,
    alignItems: "center",
    position: "absolute",
  },
  vectorParent: {
    width: 87,
    left: 0,
    top: 0,
    position: "absolute",
    height: 834,
  },
  maskGroupIcon: {
    top: 267,
  },
  groupItem: {
    top: 174,
    left: 16,
    width: 55,
    height: 55,
    position: "absolute",
  },
  maskGroupIcon1: {
    top: 753,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 101,
  },
  maskGroup: {
    top: 21,
  },
  groupInner: {
    top: 698,
    left: 19,
    borderColor: Color.colorGray_600,
    width: 51,
  },
  orderlistChild: {
    top: 104,
    width: 1025,
    height: 685,
    left: 118,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  lineView: {
    top: 40,
    borderColor: Color.colorGray_100,
    width: 909,
    left: 0,
  },
  order: {
    left: 23,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  menu: {
    left: 142,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  totalPayment: {
    left: 389,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  payment: {
    left: 771,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  status: {
    left: 604,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  lineParent: {
    height: 40,
    left: 0,
    top: 0,
  },
  order1: {
    top: 4,
    alignItems: "center",
    position: "absolute",
  },
  idr57000: {
    left: 369,
    width: 106,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    color: Color.colorWhite,
    top: 0,
  },
  matchaLatteCaramel: {
    width: 224,
  },
  completed: {
    color: Color.colorAquamarine_200,
  },
  completedWrapper: {
    paddingHorizontal: 15,
    backgroundColor: Color.colorAquamarine_300,
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  cashWrapper: {
    backgroundColor: Color.colorAquamarine_300,
  },
  order1Parent: {
    top: 67,
    height: 54,
  },
  order2: {
    width: 85,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    left: 0,
  },
  redVelvet: {
    width: 105,
  },
  preparing: {
    color: Color.colorMediumpurple_100,
  },
  preparingWrapper: {
    backgroundColor: "rgba(167, 154, 255, 0.2)",
    paddingHorizontal: 19,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    left: 584,
  },
  order2Parent: {
    top: 194,
    height: 30,
  },
  cancel: {
    color: "#ff81a8",
  },
  cancelWrapper: {
    backgroundColor: "rgba(255, 129, 168, 0.2)",
    paddingHorizontal: 30,
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  debit: {
    color: Color.colorLightskyblue_100,
  },
  debitWrapper: {
    backgroundColor: Color.colorLightskyblue_200,
  },
  order2Group: {
    top: 138,
    height: 29,
  },
  groupParent: {
    top: 128,
    left: 171,
    height: 224,
  },
  orderList: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.colorWhite,
    textAlign: "center",
    left: 118,
    top: 21,
  },
  tuesday27Nov: {
    top: 63,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    left: 118,
  },
  orderlist: {
    backgroundColor: Color.colorDarkslategray_100,
    flex: 1,
    overflow: "hidden",
    height: 834,
    width: "100%",
    borderRadius: Border.br_3xs,
  },
});

export default OrderList;
