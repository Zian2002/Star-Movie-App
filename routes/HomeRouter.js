import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreen";
import SearchScreen from "../components/SearchScreen";
import LoginScreen from "../components/LoginScreen";

const Tab = createBottomTabNavigator();

const HomeRouter = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="SearchScreen" component={SearchScreen}></Tab.Screen>
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{}}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({});
