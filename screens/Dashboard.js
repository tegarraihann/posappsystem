import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorParent}
          contentFit="cover"
          source={require("../assets/rectangle-40.png")}
        />
        <Pressable
          style={[styles.maskGroup, styles.maskGroupLayout]}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </Pressable>
        <View style={styles.groupItem} />
        <Image
          style={[styles.groupInner, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-100.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.maskGroupLayout]}
          onPress={() => navigation.navigate("OrderList")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-98.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.maskGroup1, styles.maskGroupLayout]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-20.png")}
        />
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.rectangleView, styles.groupChildLayout1]} />
        <View style={[styles.groupChild1, styles.groupChildLayout1]} />
        <View style={[styles.groupChild2, styles.groupChildLayout1]} />
      </View>
      <Image
        style={styles.dashboardChild}
        contentFit="cover"
        source={require("../assets/rectangle-47.png")}
      />
      <Image
        style={[styles.dashboardItem, styles.dashboardLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Image
        style={[styles.dashboardInner, styles.dashboardLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <View style={[styles.dashboardText, styles.groupIconPosition]}>
        <Text style={styles.dashbord}>Dashbord</Text>
        <Text style={[styles.tuesday27Nov, styles.paymentTypo]}>
          Tuesday, 27 Nov 2023
        </Text>
        <View style={[styles.dashboardTextChild, styles.lineViewBorder]} />
      </View>
      <View style={[styles.groupParent, styles.parentGroupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupChild3Layout]}>
          <View style={[styles.groupChild3, styles.groupChildBorder]} />
        </View>
        <Text style={[styles.text, styles.textPosition]}>+2.50 %</Text>
        <Image
          style={[styles.maskGroupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mask-group21.png")}
        />
        <Image
          style={styles.groupChild4}
          contentFit="cover"
          source={require("../assets/group-29.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.parentGroupLayout]}>
        <Image
          style={[styles.rectangleWrapper, styles.groupChild3Layout]}
          contentFit="cover"
          source={require("../assets/group-32.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>+2.50 %</Text>
        <Image
          style={styles.groupChild4}
          contentFit="cover"
          source={require("../assets/group-29.png")}
        />
      </View>
      <View style={[styles.parent, styles.parentGroupLayout]}>
        <Text style={[styles.text2, styles.textPosition]}>+2.50 %</Text>
        <Image
          style={[styles.rectangleWrapper, styles.groupChild3Layout]}
          contentFit="cover"
          source={require("../assets/group-31.png")}
        />
        <Image
          style={styles.groupChild4}
          contentFit="cover"
          source={require("../assets/group-28.png")}
        />
      </View>
      <Text style={[styles.totalReveneu, styles.totalTypo]}>Total Reveneu</Text>
      <Text style={[styles.totalOrdered, styles.totalTypo]}>Total Ordered</Text>
      <Text style={[styles.totalCostumer, styles.totalTypo]}>
        Total Costumer
      </Text>
      <Text style={[styles.idr10000000, styles.textTypo3]}>IDR 10,000,000</Text>
      <Text style={[styles.text3, styles.textTypo3]}>2.000</Text>
      <Text style={[styles.text4, styles.textTypo3]}>1.000</Text>
      <View style={[styles.vectorGroup, styles.vectorGroupLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.vectorGroupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-48.png")}
        />
        <Text style={styles.soldOrderReport}>SOLD ORDER REPORT</Text>
        <View style={styles.lineParent}>
          <View style={[styles.lineView, styles.lineViewBorder]} />
          <Text style={[styles.order, styles.orderPosition]}>Order</Text>
          <Text style={[styles.menu, styles.orderPosition]}>Menu</Text>
          <Text style={[styles.totalPayment, styles.orderPosition]}>
            Total Payment
          </Text>
          <Text style={[styles.typeOfPayment, styles.orderPosition]}>
            Type Of Payment
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupChild9, styles.groupLayout1]} />
          <Image
            style={[styles.maskGroupIcon1, styles.icedMocha1Layout]}
            contentFit="cover"
            source={require("../assets/mask-group31.png")}
          />
          <Text style={[styles.filterOrder, styles.cashTypo]}>
            Filter Order
          </Text>
        </View>
        <View style={[styles.order2Parent, styles.parentLayout1]}>
          <Text style={[styles.order2, styles.orderPosition]}>Order #2</Text>
          <Text style={[styles.idr24000, styles.orderPosition]}>
            IDR 24.000
          </Text>
          <Text style={styles.redVelvet}>Red Velvet</Text>
          <View style={[styles.debitWrapper, styles.debitWrapperFlexBox]}>
            <Text style={[styles.debit, styles.cashTypo]}>Debit</Text>
          </View>
        </View>
        <View style={[styles.order3Parent, styles.parentLayout1]}>
          <Text style={[styles.order2, styles.orderPosition]}>Order #3</Text>
          <Text style={[styles.idr24000, styles.orderPosition]}>
            IDR 18.000
          </Text>
          <Text style={styles.redVelvet}>Milk Tea</Text>
          <View style={[styles.debitWrapper, styles.debitWrapperFlexBox]}>
            <Text style={[styles.debit, styles.cashTypo]}>Debit</Text>
          </View>
        </View>
        <View style={[styles.order5Parent, styles.parentLayout1]}>
          <Text style={[styles.order2, styles.orderPosition]}>Order #5</Text>
          <Text style={[styles.idr24000, styles.orderPosition]}>
            IDR 20.000
          </Text>
          <Text style={styles.redVelvet}>Iced Mocha</Text>
          <View style={[styles.debitWrapper, styles.debitWrapperFlexBox]}>
            <Text style={[styles.debit, styles.cashTypo]}>Debit</Text>
          </View>
        </View>
        <View style={[styles.order6Parent, styles.parentLayout1]}>
          <Text style={[styles.order2, styles.orderPosition]}>Order #6</Text>
          <Text style={[styles.idr24000, styles.orderPosition]}>
            IDR 35.000
          </Text>
          <Text style={styles.redVelvet}>Caramel Macchiato</Text>
          <View style={[styles.debitWrapper, styles.debitWrapperFlexBox]}>
            <Text style={[styles.debit, styles.cashTypo]}>Debit</Text>
          </View>
        </View>
        <View style={[styles.order7Parent, styles.parentLayout1]}>
          <Text style={[styles.order2, styles.orderPosition]}>Order #7</Text>
          <Text style={[styles.idr24000, styles.orderPosition]}>
            IDR 35.000
          </Text>
          <Text style={styles.redVelvet}>Caramel Macchiato</Text>
          <View style={[styles.debitWrapper, styles.debitWrapperFlexBox]}>
            <Text style={[styles.debit, styles.cashTypo]}>Debit</Text>
          </View>
        </View>
        <View style={[styles.order1Parent, styles.parentLayout]}>
          <Text style={[styles.order2, styles.orderPosition]}>Order #1</Text>
          <Text style={[styles.idr24000, styles.orderPosition]}>
            IDR 57.000
          </Text>
          <Text style={styles.redVelvet}>{`Matcha Latte, caramel
Macchiato`}</Text>
          <View style={[styles.cashWrapper, styles.cashFlexBox]}>
            <Text style={[styles.cash, styles.cashTypo]}>Cash</Text>
          </View>
        </View>
        <View style={[styles.order4Parent, styles.parentLayout]}>
          <Text style={[styles.order2, styles.orderPosition]}>Order #4</Text>
          <Text style={[styles.idr24000, styles.orderPosition]}>
            IDR 57.000
          </Text>
          <Text style={styles.redVelvet}>{`Matcha Latte, caramel
Macchiato`}</Text>
          <View style={[styles.cashWrapper, styles.cashFlexBox]}>
            <Text style={[styles.cash, styles.cashTypo]}>Cash</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupChild10Layout]}>
        <View style={[styles.groupChild10, styles.groupChild10Layout]} />
        <Text style={[styles.text5, styles.textTypo2]}>
          -----------------------------------------------------------------------------------------------------------------------
        </Text>
        <Text style={[styles.text6, styles.textTypo2]}>
          -----------------------------------------------------------------------------------------------------------------------
        </Text>
        <Text style={[styles.text7, styles.textTypo2]}>
          -----------------------------------------------------------------------------------------------------------------------
        </Text>
        <Text style={[styles.text8, styles.textTypo2]}>
          -----------------------------------------------------------------------------------------------------------------------
        </Text>
        <Text style={[styles.text9, styles.textTypo2]}>
          -----------------------------------------------------------------------------------------------------------------------
        </Text>
        <Text style={[styles.text10, styles.textTypo2]}>
          -----------------------------------------------------------------------------------------------------------------------
        </Text>
        <Text style={styles.acceptedOrders}>Accepted orders</Text>
        <Text style={[styles.text11, styles.textLayout]}>500</Text>
        <Text style={[styles.text12, styles.textLayout]}>400</Text>
        <Text style={[styles.text13, styles.textLayout]}>300</Text>
        <Text style={[styles.text14, styles.textLayout]}>200</Text>
        <Text style={[styles.text15, styles.textLayout]}>100</Text>
        <Text style={[styles.text16, styles.textLayout]}>0</Text>
        <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
        <Text style={[styles.mon, styles.sunTypo]}>Mon</Text>
        <Text style={[styles.tue, styles.sunTypo]}>Tue</Text>
        <Text style={[styles.wed, styles.sunTypo]}>Wed</Text>
        <Text style={[styles.thu, styles.sunTypo]}>Thu</Text>
        <Text style={[styles.fri, styles.sunTypo]}>Fri</Text>
        <Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
        <View style={[styles.groupChild11, styles.groupChildLayout]} />
        <View style={[styles.groupChild12, styles.groupChildLayout]} />
        <View style={[styles.groupChild13, styles.groupChildLayout]} />
        <View style={[styles.groupChild14, styles.groupChildLayout]} />
        <View style={[styles.groupChild15, styles.groupChildLayout]} />
        <View style={[styles.groupChild16, styles.groupChildLayout]} />
        <View style={[styles.groupChild17, styles.groupChildLayout]} />
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild18, styles.groupLayout]} />
          <Text style={[styles.week, styles.cashTypo]}>Week</Text>
          <Image
            style={styles.maskGroupIcon2}
            contentFit="cover"
            source={require("../assets/mask-group41.png")}
          />
        </View>
      </View>
      <Text style={styles.todaysUpsale}>Today’s upsale</Text>
      <Text style={[styles.typeOfPayment1, styles.cashFramePosition]}>
        Type Of Payment
      </Text>
      <View style={[styles.seeAllParent, styles.icedMocha1Layout]}>
        <Text style={[styles.seeAll, styles.cashTypo]}>See All</Text>
        <View style={styles.groupChild19} />
      </View>
      <View style={[styles.groupParent1, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-3.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.groupParent2, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-311.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.groupParent3, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-321.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.groupParent4, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-331.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.groupParent5, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-341.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.groupParent6, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-351.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.groupParent7, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-361.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.groupParent8, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-371.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.groupParent9, styles.groupParentLayout]}>
        <View style={styles.groupChild20Position}>
          <View style={[styles.groupChild20, styles.groupChild20Position]} />
          <Image
            style={[
              styles.fafc801a5f2de37158c009a2c3RemIcon,
              styles.iconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/944744fafc801a5f2de37158c009a2c3removebgpreview-381.png")}
          />
        </View>
        <Text style={[styles.icedMocha1, styles.order80FlexBox]}>
          Iced Mocha
        </Text>
        <Text style={[styles.order80, styles.textLayout]}>Order : 80</Text>
      </View>
      <View style={[styles.cashFrame, styles.cashFramePosition]}>
        <Text style={[styles.cash, styles.cashTypo]}>Cash</Text>
      </View>
      <View style={[styles.debitWrapper2, styles.debitWrapperFlexBox]}>
        <Text style={[styles.debit, styles.cashTypo]}>Debit</Text>
      </View>
      <Text style={[styles.text17, styles.textTypo]}>180</Text>
      <Text style={[styles.text18, styles.textTypo]}>180</Text>
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
  groupIconPosition: {
    top: 12,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 154,
    width: 200,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  dashboardLayout: {
    height: 566,
    borderRadius: Border.br_3xs,
    width: 348,
    left: 819,
    position: "absolute",
  },
  paymentTypo: {
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
  },
  lineViewBorder: {
    borderColor: Color.colorGray_100,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  parentGroupLayout: {
    height: 45,
    width: 139,
    top: 138,
    position: "absolute",
  },
  groupChild3Layout: {
    width: 45,
    height: 45,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  textPosition: {
    left: 53,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
    top: 11,
    position: "absolute",
  },
  iconLayout: {
    width: 35,
    position: "absolute",
  },
  totalTypo: {
    fontSize: FontSize.size_xl,
    top: 234,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo3: {
    top: 192,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorGroupLayout: {
    height: 486,
    width: 641,
    position: "absolute",
  },
  orderPosition: {
    fontSize: FontSize.size_mini,
    top: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 34,
    width: 108,
    position: "absolute",
  },
  icedMocha1Layout: {
    height: 20,
    position: "absolute",
  },
  cashTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  parentLayout1: {
    height: 25,
    width: 506,
    left: 42,
    position: "absolute",
  },
  debitWrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 80,
    backgroundColor: Color.colorLightskyblue_200,
    height: 25,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  parentLayout: {
    height: 38,
    width: 506,
    left: 42,
    position: "absolute",
  },
  cashFlexBox: {
    backgroundColor: Color.colorAquamarine_300,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 80,
    height: 25,
    borderRadius: Border.br_xl,
  },
  groupChild10Layout: {
    height: 252,
    width: 641,
    position: "absolute",
  },
  textTypo2: {
    height: 11,
    width: 540,
    left: 64,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    height: 16,
    textAlign: "left",
    position: "absolute",
  },
  sunTypo: {
    top: 214,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  groupChildLayout: {
    width: 53,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_100,
  },
  groupLayout: {
    width: 77,
    height: 28,
    position: "absolute",
  },
  cashFramePosition: {
    left: 852,
    position: "absolute",
  },
  groupParentLayout: {
    width: 268,
    left: 859,
    height: 36,
    position: "absolute",
  },
  groupChild20Position: {
    width: 40,
    height: 36,
    left: 0,
    top: 0,
    position: "absolute",
  },
  order80FlexBox: {
    display: "flex",
    alignItems: "center",
    color: Color.colorWhite,
  },
  textTypo: {
    top: 733,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  vectorParent: {
    width: 87,
    left: 0,
    top: 0,
    position: "absolute",
    height: 834,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  maskGroup: {
    top: 753,
  },
  groupItem: {
    top: 698,
    left: 19,
    borderColor: Color.colorGray_600,
    width: 51,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupInner: {
    top: 267,
  },
  wrapper: {
    top: 183,
  },
  maskGroup1: {
    top: 101,
  },
  groupIcon: {
    left: 16,
    width: 55,
    height: 55,
  },
  rectangleView: {
    left: 0,
    top: 0,
  },
  groupChild1: {
    left: 220,
    top: 0,
  },
  groupChild2: {
    top: 1,
    left: 440,
  },
  rectangleParent: {
    width: 640,
    height: 155,
    left: 125,
    top: 123,
    position: "absolute",
  },
  dashboardChild: {
    top: 629,
    height: 179,
    width: 348,
    left: 819,
    position: "absolute",
  },
  dashboardItem: {
    top: 23,
  },
  dashboardInner: {
    top: 24,
  },
  dashbord: {
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 8,
    top: 0,
    position: "absolute",
  },
  tuesday27Nov: {
    top: 42,
    color: Color.colorGray_100,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 8,
    fontWeight: "300",
    position: "absolute",
  },
  dashboardTextChild: {
    top: 81,
    width: 651,
  },
  dashboardText: {
    left: 128,
    width: 650,
    height: 81,
  },
  groupChild3: {
    backgroundColor: "rgba(167, 154, 255, 0.15)",
    borderColor: Color.colorMediumpurple_100,
    width: 45,
    height: 45,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
  },
  text: {
    textAlign: "center",
    color: Color.colorAquamarine_100,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  maskGroupIcon: {
    top: 5,
    left: 5,
    height: 35,
  },
  groupChild4: {
    top: 13,
    left: 120,
    width: 19,
    height: 19,
    position: "absolute",
  },
  groupParent: {
    left: 141,
  },
  groupContainer: {
    left: 581,
  },
  text2: {
    color: Color.colorPalevioletred_100,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  parent: {
    left: 361,
  },
  totalReveneu: {
    left: 141,
  },
  totalOrdered: {
    left: 361,
  },
  totalCostumer: {
    left: 581,
  },
  idr10000000: {
    color: Color.colorAquamarine_100,
    left: 141,
  },
  text3: {
    color: Color.colorPalevioletred_100,
    left: 361,
  },
  text4: {
    left: 581,
    color: Color.colorAquamarine_100,
  },
  rectangleIcon: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  soldOrderReport: {
    fontSize: FontSize.size_5xl,
    left: 42,
    top: 20,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  lineView: {
    top: 28,
    width: 587,
  },
  order: {
    left: 15,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    color: Color.colorWhite,
  },
  menu: {
    left: 118,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    color: Color.colorWhite,
  },
  totalPayment: {
    left: 287,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    color: Color.colorWhite,
  },
  typeOfPayment: {
    left: 441,
    textAlign: "center",
    fontFamily: FontFamily.openSansLight,
    fontWeight: "300",
    color: Color.colorWhite,
  },
  lineParent: {
    top: 86,
    left: 27,
    width: 586,
    height: 28,
    position: "absolute",
  },
  groupChild9: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  maskGroupIcon1: {
    left: 10,
    width: 20,
    top: 7,
  },
  filterOrder: {
    top: 9,
    left: 37,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleGroup: {
    left: 488,
    top: 19,
  },
  order2: {
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorWhite,
    left: 0,
  },
  idr24000: {
    left: 272,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorWhite,
  },
  redVelvet: {
    left: 103,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  debit: {
    color: Color.colorLightskyblue_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  debitWrapper: {
    left: 426,
    top: 0,
  },
  order2Parent: {
    top: 198,
  },
  order3Parent: {
    top: 241,
  },
  order5Parent: {
    top: 340,
  },
  order6Parent: {
    top: 383,
  },
  order7Parent: {
    top: 426,
  },
  cash: {
    color: Color.colorAquamarine_200,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  cashWrapper: {
    left: 426,
    top: 0,
    position: "absolute",
  },
  order1Parent: {
    top: 142,
  },
  order4Parent: {
    top: 284,
  },
  vectorGroup: {
    top: 589,
    left: 125,
  },
  groupChild10: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_200,
    height: 252,
  },
  text5: {
    top: 190,
  },
  text6: {
    top: 166,
  },
  text7: {
    top: 142,
  },
  text8: {
    top: 118,
  },
  text9: {
    top: 94,
  },
  text10: {
    top: 70,
  },
  acceptedOrders: {
    top: 21,
    left: 33,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  text11: {
    top: 67,
    width: 25,
    height: 16,
    left: 33,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  text12: {
    top: 91,
    width: 25,
    height: 16,
    left: 33,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  text13: {
    top: 115,
    width: 25,
    height: 16,
    left: 33,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  text14: {
    top: 139,
    width: 25,
    height: 16,
    left: 33,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  text15: {
    top: 163,
    width: 25,
    height: 16,
    left: 33,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  text16: {
    top: 187,
    left: 50,
    width: 8,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  sun: {
    left: 90,
  },
  mon: {
    left: 161,
  },
  tue: {
    left: 237,
  },
  wed: {
    left: 307,
  },
  thu: {
    left: 383,
  },
  fri: {
    left: 459,
  },
  sat: {
    left: 531,
  },
  groupChild11: {
    top: 155,
    left: 77,
    height: 43,
  },
  groupChild12: {
    left: 150,
    height: 80,
    top: 118,
  },
  groupChild13: {
    left: 223,
    height: 107,
    top: 91,
  },
  groupChild14: {
    left: 296,
    height: 75,
    top: 123,
  },
  groupChild15: {
    top: 78,
    left: 369,
    height: 120,
  },
  groupChild16: {
    top: 107,
    left: 442,
    height: 91,
  },
  groupChild17: {
    left: 515,
    height: 59,
    top: 139,
  },
  groupChild18: {
    backgroundColor: "#353440",
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  week: {
    left: 9,
    fontSize: FontSize.size_3xs,
    top: 7,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  maskGroupIcon2: {
    top: 10,
    left: 59,
    width: 10,
    height: 10,
    position: "absolute",
  },
  groupView: {
    left: 527,
    top: 19,
  },
  rectangleContainer: {
    left: 123,
    top: 308,
  },
  todaysUpsale: {
    top: 55,
    left: 859,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  typeOfPayment1: {
    top: 653,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
  },
  seeAll: {
    fontSize: FontSize.size_mini,
    top: 0,
    position: "absolute",
    color: Color.colorGray_100,
    textAlign: "left",
    left: 0,
  },
  groupChild19: {
    width: 49,
    top: 20,
    borderColor: Color.colorGray_100,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  seeAllParent: {
    top: 58,
    left: 1079,
    width: 48,
  },
  groupChild20: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkslategray_100,
  },
  fafc801a5f2de37158c009a2c3RemIcon: {
    top: 2,
    left: 2,
    height: 32,
  },
  icedMocha1: {
    top: 8,
    left: 60,
    width: 89,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    height: 20,
    position: "absolute",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  order80: {
    left: 206,
    fontSize: FontSize.size_smi,
    width: 62,
    display: "flex",
    alignItems: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.openSansRegular,
    top: 11,
    height: 16,
  },
  groupParent1: {
    top: 111,
  },
  groupParent2: {
    top: 160,
  },
  groupParent3: {
    top: 209,
  },
  groupParent4: {
    top: 258,
  },
  groupParent5: {
    top: 308,
  },
  groupParent6: {
    top: 358,
  },
  groupParent7: {
    top: 408,
  },
  groupParent8: {
    top: 458,
  },
  groupParent9: {
    top: 508,
  },
  cashFrame: {
    top: 696,
    backgroundColor: Color.colorAquamarine_300,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 80,
    height: 25,
    borderRadius: Border.br_xl,
  },
  debitWrapper2: {
    top: 699,
    left: 1053,
  },
  text17: {
    left: 879,
  },
  text18: {
    left: 1080,
  },
  dashboard: {
    flex: 1,
    overflow: "hidden",
    height: 834,
    width: "100%",
    backgroundColor: Color.colorDarkslategray_100,
  },
});

export default Dashboard;
