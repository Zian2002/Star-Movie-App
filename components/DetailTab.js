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
        append_to_response: "videos,images",
      },
    });
    console.log("response in DetailTab", response);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#0F1B2B" }}>
      <Link to={{ screen: "Photos" }}>
        <Text>Go to Photos</Text>
      </Link>
      <Link to={{ screen: "Videos" }}>
        <Text>Go to Videos</Text>
      </Link>
    </View>
  );
};

export default DetailTab;

const styles = StyleSheet.create({});
