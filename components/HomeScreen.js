import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Link } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

// Phần code giao diện chung chung cho Now Showing và Coming Soon
const MovieTab = (props) => {
  return (
    <View>
      {props.title}
      <Link to={{ screen: "MovieDetailRouter", params: {} }}>detail</Link>
    </View>
  );
};

const NowShowingTab = () => {
  return (
    <View>
      <MovieTab title="NowShowing" />
    </View>
  );
};

const ComingSoonTab = () => <MovieTab title="ComingSoon" />;

const renderScene = SceneMap({
  first: NowShowingTab,
  second: ComingSoonTab,
});

const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Now Showing" },
    { key: "second", title: "Coming Soon" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
