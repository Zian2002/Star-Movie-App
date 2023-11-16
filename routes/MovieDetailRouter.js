import { StyleSheet } from "react-native";
import React from "react";
import MovieDetail from "../components/MovieDetail";
import PhotosScreen from "../components/PhotosScreen";
import VideosScreen from "../components/VideosScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Link, StackActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const MovieDetailRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 30 },
        headerRight: () => <Link to={{ screen: "HomeRouter" }}>Home</Link>,
      }}
    >
      <Stack.Screen
        name="Detail"
        component={MovieDetail}
        options={{}}
      ></Stack.Screen>
      <Stack.Screen name="Photos" component={PhotosScreen}></Stack.Screen>
      <Stack.Screen name="Videos" component={VideosScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MovieDetailRouter;

const styles = StyleSheet.create({});
