import { Image, StyleSheet } from "react-native";
import React from "react";
import MovieDetail from "../components/MovieDetail";
import PhotosScreen from "../components/PhotosScreen";
import VideosScreen from "../components/VideosScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Link,
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const CustomBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {/* Replace the Image component with your custom back button icon */}
      <MaterialCommunityIcons name="arrow-left" color={"#fff"} size={30} />
    </TouchableOpacity>
  );
};

const MovieDetailRouter = () => {
  const route = useRoute();
  const { id } = route.params;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 30,
          backgroundColor: "#0F1B2B",
        },
        headerTitleStyle: { color: "#fff" },
        headerRight: () => <Link to={{ screen: "HomeRouter" }}>Home</Link>,
        headerLeft: () => <CustomBackButton />,
        // headerShadowVisible: false,
        statusBarHidden: false,
      }}
    >
      <Stack.Screen
        name="Detail"
        component={MovieDetail}
        options={{ title: "", headerShown: false }}
        initialParams={{ id }}
      ></Stack.Screen>
      <Stack.Screen
        name="Photos"
        component={PhotosScreen}
        initialParams={{ id }}
      ></Stack.Screen>
      <Stack.Screen
        name="Videos"
        component={VideosScreen}
        initialParams={{ id }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MovieDetailRouter;

const styles = StyleSheet.create({});
