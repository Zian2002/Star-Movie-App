import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import API from "../link";
import { TouchableOpacity } from "react-native-web";
import { Link } from "@react-navigation/native";

const SearchScreen = () => {
  const genresList = [
    { id: "28", name: "Action", selected: false },
    { id: "18", name: "Drama", selected: false },
    { id: "10751", name: "Family", selected: false },
    { id: "14", name: "Fantasy", selected: false },
    { id: "27", name: "Horror", selected: false },
    { id: "10749", name: "Romance", selected: false },
  ];
  const getData = async (valueSearch) => {
    let genresSearch = "";
    genres.forEach((item) => {
      if (item.selected) genresSearch += item.id + ",";
    });
    if (genresSearch.length > 0)
      genresSearch = genresSearch.substring(0, genresSearch.length - 1);
    console.log(genresSearch);

    //
    if (valueSearch && valueSearch.length > 0) {
      setGenres(genresList);

      const moviesResponse = await axios.get(API.SEARCH_API, {
        params: {
          api_key: API.API_KEY,
          query: valueSearch,
        },
      });

      setMovies(moviesResponse.data.results.slice(0, 18));

      console.log("Value", moviesResponse);
    } else if (genresSearch.length > 0) {
      const moviesResponse = await axios.get(API.DISCOVER_API_URL, {
        params: {
          api_key: API.API_KEY,
          with_genres: genresSearch,
        },
      });
      setMovies(moviesResponse.data.results.slice(0, 18));
      console.log("Gen", moviesResponse);
    } else {
      const moviesResponse = await axios.get(API.DISCOVER_API_URL, {
        params: {
          api_key: API.API_KEY,
          page: page,
        },
      });
      setMovies([...movies, ...moviesResponse.data.results.slice(0, 18)]);
      console.log("No", moviesResponse);
    }
  };

  useEffect(() => {
    getData(value);
  }, []);

  const [value, setValue] = useState("");
  const [genres, setGenres] = useState(genresList);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <View
      style={{
        padding: 15,
        backgroundColor: "#0F1B2B",
        minHeight: "100vh",
        display: "flex",
        width: "100%",
      }}
    >
      <Header />
      {/* Search */}
      <View
        style={{
          backgroundColor: "#000",
          width: "100%",
          height: 45,
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <MaterialCommunityIcons name="magnify" color={"#333"} size={25} />
        <TextInput
          style={{
            // borderWidth: 1,
            // borderColor: "#fff",
            width: "100%",
            height: 30,
            marginLeft: 10,
            outline: "none",
            color: "#fff",
          }}
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity
          style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}
          onPress={() => {
            getData(value);
          }}
        >
          <Text style={{ color: "#fff" }}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* genres */}
      <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        {genres.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                {
                  padding: 5,
                  borderRadius: 10,
                  marginLeft: 5,
                },
                item.selected
                  ? { backgroundColor: "#E51937" }
                  : { backgroundColor: "#501A2E" },
              ]}
              onPress={() => {
                const newObj = {
                  id: item.id,
                  name: item.name,
                  selected: !item.selected,
                };
                genres[index] = newObj;
                console.log(genres);
                setGenres([...genres]);
                // handleClick();
                setValue("");
                getData();
              }}
            >
              <Text
                style={
                  item.selected
                    ? { color: "#fff", marginTop: -3 }
                    : { color: "#A88D97", marginTop: -3 }
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* List */}
      <View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              width: 3,
              height: "100%",
              backgroundColor: "#E51937",
              borderRadius: 3,
              marginRight: 5,
            }}
          ></View>
          <Text style={{ fontSize: 17, color: "#fff" }}>Popular Searches</Text>
        </View>

        <View
          style={{
            ...styles.flexRowCenter,
            justifyContent: "space-around",
            marginTop: 10,
            paddingBottom: 300,
            flexWrap: "wrap",
            overflow: "scroll",
            columnGap: 5,
            alignItems: "stretch",
            height: "100vh",
          }}
        >
          {movies.map((item, index) => {
            return (
              <Link
                key={index}
                to={{ screen: "MovieDetailRouter", params: { id: item.id } }}
                style={{
                  width: "30%",
                  marginBottom: 10,
                  borderWidth: 1,
                  borderColor: "#333",
                  borderRadius: 10,
                }}
              >
                <View style={{ width: "100%" }}>
                  <Image
                    style={{
                      width: "100%",
                      height: 150,
                      resizeMode: "contain",
                      borderRadius: 10,
                    }}
                    source={{ uri: `${API.ENDPOINT_IMG}${item.poster_path}` }}
                  />
                  <View style={{ paddingHorizontal: 10, marginBottom: 5 }}>
                    {/* rate */}
                    <View
                      style={{ ...styles.flexRowCenter, marginVertical: 5 }}
                    >
                      <Text style={{ color: "#fff", fontSize: 10 }}>
                        {(item.vote_average / 2).toFixed(1)}
                      </Text>
                      <MaterialCommunityIcons
                        name="star"
                        color={"yellow"}
                        size={15}
                      ></MaterialCommunityIcons>
                      <Text
                        style={{ color: "#fff", marginLeft: 5, fontSize: 10 }}
                      >
                        ({item.vote_count})
                      </Text>
                    </View>
                    {/* name */}
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 10,
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
              setPage(page + 1);
              getData();
            }}
          >
            <Text style={{ color: "#fff" }}>Load more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  genres: {},
  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
