import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./routes";
import PhotosScreen from "./components/PhotosScreen";
import CastScreen from "./components/CastScreen";
import ReviewTab from "./components/ReviewTab";
import VideoScreen from "./components/VideosScreen";
import LoginScreen from "./components/LoginScreen";
import MovieDetailRouter from "./routes/MovieDetailRouter";

export default function App() {
  return (
    <NavigationContainer>
      <MovieDetailRouter />
      {/* <Router /> */}
    </NavigationContainer>
    // <PhotosScreen />
    // <CastScreen />
    // <ReviewTab />
    // <VideoScreen />
    // <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {},
});
