import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import link from "../link";
// import YouTube from "react-native-youtube";

const APi = "https://api.themoviedb.org/3/discover/movie";
const videoUrl = "https://image.tmdb.org/t/p/original";
const VideosScreen = () => {
  const [video, setVideo] = useState([]);

  const getData = async () => {
    const response = await axios.get(`${link.DETAIL_API_URL}/507089/videos`, {
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
    <View style={{ width: "100%", backgroundColor: "#0F1B2B" }}>
      {video.map((item, index) => {
        return (
          <View>
            {/* <Youtube
              videoId={item.key}
              play={playing}
              onChangeState={(e) => {
                if (e.state === "ended") {
                  setPlaying(false);
                }
              }}
            ></Youtube> */}
            {/* <YouTube
              videoId="KVZ-P-ZI6W4" // The YouTube video ID
              play // control playback of video with true/false
              fullscreen // control whether the video should play in fullscreen or inline
              loop // control whether the video should loop when ended
              onReady={(e) => this.setState({ isReady: true })}
              onChangeState={(e) => this.setState({ status: e.state })}
              onChangeQuality={(e) => this.setState({ quality: e.quality })}
              onError={(e) => this.setState({ error: e.error })}
              style={{ alignSelf: "stretch", height: 300 }}
            /> */}
          </View>
        );
      })}
    </View>
  );
};

export default VideosScreen;

const styles = StyleSheet.create({});
