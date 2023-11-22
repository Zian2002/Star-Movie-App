import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import link from "../link";

const APi = "https://api.themoviedb.org/3/discover/movie";
const imageUrl = "https://image.tmdb.org/t/p/original";
const PhotosScreen = () => {
  const [images, setImages] = useState([]);

  const getData = async () => {
    const response = await axios.get(`${link.DETAIL_API_URL}/507089/images`, {
      params: {
        api_key: "3e00879c372fa95105031194f23c87d2",
      },
    });
    console.log(response);
    setImages(response.data.backdrops);
  };
  // getData();
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ width: "100%", backgroundColor: "#0F1B2B" }}>
      {images.map((item, index) => {
        return (
          <Image
            style={{
              width: "340px",
              height: "224px",
              marginLeft: "25px",
              marginTop: "15px",
              borderRadius: "5px",
            }}
            source={{
              uri: `${imageUrl}${item.file_path}`,
            }}
          />
        );
      })}
    </View>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({});
