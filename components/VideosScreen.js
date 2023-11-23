import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import link from "../link";

const APi = "https://api.themoviedb.org/3/discover/movie";
const videoUrl = "https://image.tmdb.org/t/p/original";
const VideosScreen = ({ route }) => {
  const { id } = route.params;
  const [video, setVideo] = useState([]);

  const getData = async () => {
    const response = await axios.get(`${link.DETAIL_API_URL}/${id}/videos`, {
      params: {
        api_key: "3e00879c372fa95105031194f23c87d2",
      },
    });
    console.log(response);
    setVideo(response.data.results);
  };
  // getData();
  useEffect(() => {
    getData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0F1B2B",
        minHeight: "auto",
      }}
    >
      {video.map((item, index) => {
        return (
          <View style={{ width: "300px", height: "250px", margin: "10px" }}>
            <YouTube
              videoId={item.key}
              style={
                {
                  // width: "300px",
                  // height: "100px",
                  // margin: "15px",
                  // borderRadius: "5px",
                  // margin: "20px",
                }
              }
              opts={{
                playerVars: {
                  // disablekb: 1,
                  // controls: 1,
                  // width: 100,
                  // height: 100,
                  // autoplay: 0,
                  // loop: 1,
                  height: "390px",
                  width: "640px",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 1,
                  },
                },
              }}
            ></YouTube>
          </View>
        );
      })}
    </View>
  );
};

export default VideosScreen;

const styles = StyleSheet.create({});
