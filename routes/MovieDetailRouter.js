import { Image, StyleSheet } from "react-native";
import React from "react";
import MovieDetail from "../components/MovieDetail";
import PhotosScreen from "../components/PhotosScreen";
import VideosScreen from "../components/VideosScreen";
import CastScreen from "../components/CastScreen";
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
    <TouchableOpacity
      style={{ paddingHorizontal: 10 }}
      onPress={() => navigation.goBack()}
    >
      <MaterialCommunityIcons name="arrow-left" color={"#fff"} size={25} />
    </TouchableOpacity>
  );
};

const MovieDetailRouter = () => {
  const route = useRoute();
  const { id } = route.params;
  // const id = 496450;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 40,
          backgroundColor: "#0F1B2B",
        },
        headerTitleStyle: { color: "#fff" },
        headerRight: () => (
          <Link to={{ screen: "HomeRouter" }} style={{ paddingHorizontal: 10 }}>
            <MaterialCommunityIcons name="home" color={"#fff"} size={25} />
          </Link>
        ),
        headerLeft: () => <CustomBackButton />,
        // headerShadowVisible: false,
        statusBarHidden: false,
        initialParams: { id },
      }}
    >
      <Stack.Screen
        name="Detail"
        component={MovieDetail}
        options={{ title: "" }}
        initialParams={{ id }}
      ></Stack.Screen>
      <Stack.Screen
        name="Casts"
        component={CastScreen}
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
