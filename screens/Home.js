import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StatusBar } from "expo-status-bar";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import "react-native-gesture-handler";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import Logo from "../src/logo";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Btns from "../src/btn";
//GHINHO: DRAWERNAVIGATOR: KÉO THANH TỪ GÓC TRÁI MÀN HÌNH SANG PHẢI

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Trang Chủ" component={TrangChu} />
//       <Drawer.Screen name="Test" component={Test} />
//       <Drawer.Screen name="Test2" component={Test2} />
//     </Drawer.Navigator>
//   );
// }

//GHINHO: BOTTOMNTAB: THANH DƯỚI MÀN HÌNH

// const Tab = createBottomTabNavigator();
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

export default function HomeScreen({ navigation }) {
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo></Logo>
      </View>
      <View style={styles.middle}></View>
      <View style={styles.bottom}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    /* GHINHO: marginTop: StatusBar.currentHeight,  */
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 30,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "blue",
    margin: 20,
  },
  viewtop: {
    margin: 50,
  },
  viewtop1: {
    margin: 10,
  },
  btnback: {
    alignSelf: "flex-start",
    marginTop: 20,
  },
});
