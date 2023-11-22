import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./routes";
import PhotosScreen from "./components/PhotosScreen";
import CastScreen from "./components/CastScreen";
import ReviewTab from "./components/ReviewTab";
import VideoScreen from "./components/VideosScreen";
import LoginScreen from "./components/LoginScreen";

export default function App() {
  return (
    // <NavigationContainer>
    //   <Router />
    // </NavigationContainer>
    // <PhotosScreen />
    // <CastScreen />
    <ReviewTab />
    // <VideoScreen />
    // <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {},
});
