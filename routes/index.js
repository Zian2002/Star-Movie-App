import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeRouter from "./HomeRouter";
import MovieDetailRouter from "./MovieDetailRouter";

const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name="HomeRouter"
        component={HomeRouter}
      ></RootStack.Screen>
      <RootStack.Screen
        name="MovieDetailRouter"
        component={MovieDetailRouter}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default Router;
