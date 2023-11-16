import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhotosScreen from "./PhotosScreen";
import VideosScreen from "./VideosScreen";
import ReviewTab from "./ReviewTab";
import { SceneMap, TabView } from "react-native-tab-view";
import DetailTab from "./DetailTab";

const Stack = createNativeStackNavigator();
const renderScene = SceneMap({
  first: DetailTab,
  second: ReviewTab,
});

const MovieDetail = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Detail" },
    { key: "second", title: "Review" },
  ]);

  return (
    <View style={{ width: layout.width }}>
      <Text>Up content</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};
export default MovieDetail;

const styles = StyleSheet.create({});
