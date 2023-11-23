import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Link } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import API from "../link";
import { ScrollView } from "react-native-web";

// Phần code giao diện chung chung cho Now Showing và Coming Soon
const MovieTab = (props) => {
  const [movies, setMovies] = useState([]);
  let page = 1;
  const getData = async () => {
    const response = await axios.get(`${API.DETAIL_API_URL}/${props.title}`, {
      params: {
        api_key: API.API_KEY,
        page: page,
      },
    });
    console.log(response);
    setMovies([...movies, ...response.data.results]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View
      style={{
        ...styles.flexRowCenter,
        justifyContent: "space-around",
        marginTop: 10,
        paddingBottom: 250,
        flexWrap: "wrap",
        overflow: "scroll",
        height: "100vh",
        columnGap: 5,
        alignItems: "stretch",
      }}
    >
      {movies.map((item, index) => {
        return (
          <Link
            key={index}
            to={{ screen: "MovieDetailRouter", params: { id: item.id } }}
            style={{
              width: "48%",
              marginBottom: 15,
              borderWidth: 1,
              borderColor: "#333",
              padding: 5,
              borderRadius: 10,
            }}
          >
            <View style={{ width: "100%" }}>
              <Image
                style={{
                  width: 165,
                  height: 230,
                  resizeMode: "contain",
                  borderRadius: 10,
                }}
                source={{ uri: `${API.ENDPOINT_IMG}${item.poster_path}` }}
              />
              <View style={{ padding: 10 }}>
                {/* rate */}
                <View style={{ ...styles.flexRowCenter, marginVertical: 5 }}>
                  <Text style={{ color: "#fff" }}>
                    {(item.vote_average / 2).toFixed(1)}
                  </Text>
                  <MaterialCommunityIcons
                    name="star"
                    color={"yellow"}
                    size={20}
                  ></MaterialCommunityIcons>
                  <Text style={{ color: "#fff", marginLeft: 5 }}>
                    ({item.vote_count})
                  </Text>
                </View>
                {/* name */}
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: 400,
                      flexShrink: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                {/* info */}
              </View>
            </View>
          </Link>
        );
      })}
      <TouchableOpacity
        style={{
          padding: 7,
          backgroundColor: "#E51937",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 10,
        }}
        onPress={() => {
          page++;
          getData();
        }}
      >
        <Text style={{ color: "#fff" }}>Load more</Text>
      </TouchableOpacity>
    </View>
  );
};

const NowShowingTab = () => <MovieTab title="now_playing" />;

const ComingSoonTab = () => <MovieTab title="upcoming" />;

const renderScene = SceneMap({
  first: NowShowingTab,
  second: ComingSoonTab,
});

const Header = () => {
  return (
    <View
      style={{
        ...styles.flexRowCenter,
        justifyContent: "space-between",
        padding: 15,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 38, height: 50, resizeMode: "contain" }}
        />
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>
          Star Movie
        </Text>
      </View>
      <Link to={{ screen: "SearchScreen" }}>
        <MaterialCommunityIcons name="magnify" size={30} color={"#fff"} />
      </Link>
    </View>
  );
};

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Now Showing" },
    { key: "second", title: "Coming Soon" },
  ]);

  return (
    <View style={styles.container}>
      <Header />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{}}
        renderTabBar={(props) => {
          return (
            <TabBar
              {...props}
              style={styles.tabBar}
              labelStyle={styles.labelStyle}
              indicatorStyle={styles.indicatorStyle}
              getLabelStyle={({ route, focused }) => ({
                color: focused ? "#fff" : "red", // Customize the text color of the selected tab
              })}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#0F1B2B",
    minHeight: "100vh",
  },
  tabOption: {
    width: "80%",
    marginHorizontal: "auto",
    borderRadius: 30,
  },
  tabBar: {
    backgroundColor: "#0F1B2B",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#333",
    height: 40,
    alignItems: "center",
  },
  labelStyle: {
    color: "#fff",
    fontSize: 13,
    marginTop: -10,
  },
  indicatorStyle: {
    backgroundColor: "red", // line
    height: "100%",
    borderRadius: 40,
  },
  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
