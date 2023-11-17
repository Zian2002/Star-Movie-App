import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../components/HomeScreen";
import SearchScreen from "../components/SearchScreen";
import LoginScreen from "../components/LoginScreen";

const Tab = createBottomTabNavigator();

const HomeRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarActiveTintColor: "red",
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            const color = focused ? "#E51937" : "#fff";

            return (
              <MaterialCommunityIcons
                name="home"
                size={26}
                fontWeight={500}
                color={color}
              />
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => {
            const color = focused ? "#E51937" : "#fff";

            return (
              <MaterialCommunityIcons
                name="movie-search"
                size={26}
                color={color}
              />
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "User",
          tabBarIcon: ({ focused }) => {
            const color = focused ? "#E51937" : "#fff";

            return (
              <MaterialCommunityIcons name="account" size={26} color={color} />
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    backgroundColor: "#1F1F1F",
  },
  tabBarIcon: {
    color: "#fff",
    fontWeight: 500,
  },
});
