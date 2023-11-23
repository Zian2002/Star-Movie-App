import {
  Image,
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
import ReactPlayer from "react-player";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import YouTube, { YouTubeStandaloneIOS } from "react-native-youtube";
// import Youtube from "react-native-youtube-iframe";

const Stack = createNativeStackNavigator();

const MovieDetail = ({ route }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Detail" },
    { key: "second", title: "Review" },
  ]);

  const { id } = route.params;

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

  const [movieDetail, setMovieDetail] = useState(null);
  const [trailer, setTrailer] = useState({});

  const getMovieDetail = async () => {
    //nho doi lai id
    const response = await axios.get(`${API.DETAIL_API_URL}/${id}`, {
      params: {
        api_key: API.API_KEY,
        append_to_response: "videos,genres",
      },
    });
    console.log("detail", response);
    setMovieDetail(response.data);
    setTrailer(
      response.data.videos.results.find(
        (item) =>
          item.name === "Final Trailer" ||
          item.name === "Official Trailer" ||
          item.name.includes("Trailer")
      )
    );
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  //alignSelf: "stretch"

  return (
    <View style={styles.container}>
      <View style={{}}>
        <View
          style={{
            width: "100%",
            height: 225,
          }}
        >
          <ReactPlayer
            width={"100%"}
            height={255}
            url={trailer && `https://www.youtube.com/watch?v=${trailer.key}`}
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 0, controls: 1 },
              },
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <Image
            style={{
              width: 125,
              height: 175,
              resizeMode: "contain",
              borderRadius: 20,
            }}
            source={
              movieDetail && {
                uri: `${API.ENDPOINT_IMG}${movieDetail.poster_path}`,
              }
            }
          />
          <View style={{ marginLeft: 15, display: "flex", rowGap: 5 }}>
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: 500 }}>
              {movieDetail && movieDetail.original_title}
            </Text>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              {movieDetail?.genres.length > 0 &&
                movieDetail.genres.map((item, index) => {
                  if (index === movieDetail.genres.length - 1) return item.name;
                  return item.name + ", ";
                })}
            </Text>

            <Text style={{ color: "#fff", fontSize: 16 }}>
              Release date : {movieDetail?.release_date}
            </Text>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Language :{" "}
              {movieDetail &&
                movieDetail.spoken_languages.length > 0 &&
                movieDetail.spoken_languages.map((item, index) => {
                  if (index === movieDetail.spoken_languages.length - 1)
                    return item.name;
                  return item.name + ", ";
                })}
            </Text>
            <View style={{ ...styles.flexRowCenter }}>
              <Text style={{ color: "#fff" }}>
                {movieDetail && (movieDetail.vote_average / 2).toFixed(1)}
              </Text>
              <MaterialCommunityIcons
                name="star"
                color={"yellow"}
                size={20}
              ></MaterialCommunityIcons>
              <Text style={{ color: "#fff", marginLeft: 5 }}>
                ({movieDetail && movieDetail.vote_count})
              </Text>
            </View>
          </View>
        </View>
      </View>
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
    position: "relative",
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
    borderColor: "#333",
    width: "60%",
    height: 30,
    marginHorizontal: "auto",
  },
  labelStyle: {
    color: "#fff",
    fontSize: 13,
    marginTop: -20,
  },
  indicatorStyle: {
    backgroundColor: "red", // line
    height: "100%",
    borderRadius: 40,
    width: "50%",
  },
  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
