import {
  Image,
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
    <View
      style={{
        flex: 1,
        backgroundColor: "#0F1B2B",
        paddingHorizontal: 20,
        marginTop: 20,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 18,
            color: "#ffff",
            fontWeight: 500,
            marginBottom: 15,
          }}
        >
          Overview
        </Text>
        <Text
          style={{
            color: "#fff",
            marginBottom: 20,
            lineHeight: 20,
            fontSize: 13,
          }}
        >
          {movieDetail?.overview}
        </Text>
      </View>

      <View>
        <View
          style={{
            ...styles.flexRowCenter,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>
            Cast & Crew
          </Text>
          <Link to={{ screen: "Casts" }}>
            <Text style={{ color: "#47CFFF" }}>View all</Text>
          </Link>
        </View>
        <View style={{ marginBottom: 15 }}>
          {movieDetail &&
            movieDetail.casts.cast.length > 0 &&
            movieDetail.casts.cast.slice(0, 4).map((item, index) => {
              return (
                <View
                  key={index}
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
                    <Text style={{ color: "#fff", fontSize: 14 }}>
                      {item.original_name}
                    </Text>
                    <Text
                      style={{
                        color: "#7b8087",
                        fontSize: 14,
                      }}
                    >
                      {item.character}
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>
        <View>
          <View
            style={{
              ...styles.flexRowCenter,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>
              Photo
            </Text>
            <Link to={{ screen: "Photos" }}>
              <Text style={{ color: "#47CFFF" }}>View all</Text>
            </Link>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
            }}
          >
            {movieDetail &&
              movieDetail.images.backdrops.length > 0 &&
              movieDetail.images.backdrops.slice(0, 4).map((item, index) => {
                return (
                  <Image
                    key={index}
                    style={{
                      width: 130,
                      height: 95,
                      resizeMode: "contain",
                      marginRight: 10,
                      borderRadius: 20,
                    }}
                    source={
                      item.file_path && {
                        uri: `${API.ENDPOINT_IMG}${item.file_path}`,
                      }
                    }
                  />
                );
              })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailTab;

const styles = StyleSheet.create({
  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
