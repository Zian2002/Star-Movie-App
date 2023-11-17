import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Link } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

// Phần code giao diện chung chung cho Now Showing và Coming Soon
const MovieTab = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Link to={{ screen: "MovieDetailRouter", params: {} }}>
        <Text>Detail</Text>
      </Link>
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
    <View style={styles.container}>
      <Text>jshdjkl</Text>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{}}
        // renderTabBar={(routes) => {
        //   return <TabBar title={routes.title}/>
        // }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tabOption: {
    width: "80%",
    marginHorizontal: "auto",
    borderRadius: 30,
  },
});
