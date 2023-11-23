import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SceneMap } from "react-native-tab-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhotosScreen from "./PhotosScreen";
import VideosScreen from "./VideosScreen";
import { Link, useRoute } from "@react-navigation/native";
import axios from "axios";
import API from "../link";

const DetailTab = ({ id }) => {
  const getMovieDetail = async () => {
    const response = await axios.get(`${API.DETAIL_API_URL}/${id}`, {
      params: {
        api_key: API.API_KEY,
        append_to_response: "videos,images,casts",
      },
    });
    console.log("response in DetailTab", response);
    setMovieDetail(response.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  const [movieDetail, setMovieDetail] = useState(null);

  return (
    <View style={{ flex: 1, backgroundColor: "#0F1B2B" }}>
      <View>
        <Text>Overview</Text>
        <Text>{movieDetail?.overview}</Text>
      </View>

      <View>
        <View>
          <Text>Cast & Crew</Text>
          <Link to={{ screen: "Casts" }}>
            <Text>View more</Text>
          </Link>
        </View>
        <View>
          {movieDetail &&
            movieDetail.casts.cast.length > 0 &&
            movieDetail.casts.cast.map((item, index) => {
              return (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      width: "50px",
                      height: "50px",
                      marginLeft: "10px",
                      marginTop: "15px",
                      borderRadius: "50%",
                    }}
                    source={
                      item.profile_path
                        ? {
                            uri: `${API.ENDPOINT_IMG}${item.profile_path}`,
                          }
                        : require("../assets/avatar.jpg")
                    }
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      marginTop: "20px",
                      marginLeft: "20px",
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: "16px" }}>
                      {item.original_name}
                    </Text>
                    <Text
                      style={{
                        color: "#7b8087",
                        fontSize: "16px",
                      }}
                    >
                      {item.character}
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>
      </View>

      {/* <Link to={{ screen: "Photos" }}>
        <Text>Go to Photos</Text>
      </Link>
      <Link to={{ screen: "Videos" }}>
        <Text>Go to Videos</Text>
      </Link>
      <Link to={{ screen: "Casts" }}>
        <Text>Go to Cast</Text>
      </Link> */}
    </View>
  );
};

export default DetailTab;

const styles = StyleSheet.create({});
