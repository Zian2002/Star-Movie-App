import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { SceneMap } from "react-native-tab-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhotosScreen from "./PhotosScreen";
import VideosScreen from "./VideosScreen";
import { Link } from "@react-navigation/native";

const DetailTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
      <Link to={{ screen: "Photos" }}>Go to Photos</Link>
      <Link to={{ screen: "Videos" }}>Go to Videos</Link>
    </View>
  );
};

export default DetailTab;

const styles = StyleSheet.create({});
