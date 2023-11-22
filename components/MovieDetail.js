import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhotosScreen from "./PhotosScreen";
import VideosScreen from "./VideosScreen";
import ReviewTab from "./ReviewTab";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import DetailTab from "./DetailTab";
import axios from "axios";
import API from "../link";

const Stack = createNativeStackNavigator();
// const renderScene = SceneMap({
//   first: DetailTab,
//   second: ReviewTab,
// });

const MovieDetail = ({ route }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Detail" },
    { key: "second", title: "Review" },
  ]);

  const { id } = route.params;

  //chat
  const renderScene = ({ route }) => {
    const { key } = route;
    switch (key) {
      case "first":
        return <DetailTab id={id} />;
      case "second":
        return <ReviewTab id={id} />;
      default:
        return null;
    }
  }; //

  const [movieDetail, setMovieDetail] = useState({});

  const getMovieDetail = async () => {
    //nho doi lai id
    const response = await axios.get(`${API.DETAIL_API_URL}/${299054}`, {
      params: {
        api_key: API.API_KEY,
        append_to_response: "videos,genres",
      },
    });
    console.log("detail", response);
    setMovieDetail(response.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Up content</Text>
      <Link to={{screen : "HomeRouter"}}><Text>Home</Text></Link>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{}}
        renderTabBar={(props) => {
          console.log(props);
          return (
            <TabBar
              {...props}
              style={styles.tabBar}
              labelStyle={styles.labelStyle}
              indicatorStyle={styles.indicatorStyle}
              getLabelStyle={({ route, focused }) => ({
                color: focused ? "#fff" : "red",
              })}
            />
          );
        }}
      />
    </View>
  );
};
export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F1B2B",
    minHeight: "100vh",
  },
  tabOption: {
    width: "80%",
    marginHorizontal: "auto",
    borderRadius: 30,
  },
  tabBar: {
    backgroundColor: "#0F1B2B", // Customize the background color of the tab bar
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#eee",
  },
  labelStyle: {
    color: "#fff",
    fontSize: 15,
  },
  indicatorStyle: {
    backgroundColor: "red", // line
    height: "100%",
    borderRadius: 40,
    width: "50%",
  },
});
