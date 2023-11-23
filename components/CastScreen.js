import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import link from "../link";

const APi = "https://api.themoviedb.org/3/discover/movie";
const castUrl = "https://image.tmdb.org/t/p/original";
const CastScreen = ({ route }) => {
  const [cast, setCast] = useState([]);
  const { id } = route.params;

  const getData = async () => {
    const response = await axios.get(`${link.DETAIL_API_URL}/${id}/casts`, {
      params: {
        api_key: "3e00879c372fa95105031194f23c87d2",
      },
    });
    console.log(response);
    setCast(response.data.cast);
  };
  // getData();
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ width: "100%", backgroundColor: "#0F1B2B" }}>
      {cast.map((item, index) => {
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
                marginLeft: "4px",
                marginTop: "15px",
                borderRadius: "50%",
              }}
              source={{
                uri: `${castUrl}${item.profile_path}`,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                marginTop: "30px",
                marginLeft: "10px",
              }}
            >
              <Text style={{ color: "#fff", fontSize: "16px", width: "165px" }}>
                {item.original_name}
              </Text>
              <Text
                style={{
                  color: "#575f6b",
                  fontSize: "16px",
                  marginLeft: "20px",
                }}
              >
                •••
              </Text>
              <Text
                style={{
                  color: "#7b8087",
                  fontSize: "16px",
                  marginLeft: "20px",
                }}
              >
                {item.character}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CastScreen;

const styles = StyleSheet.create({});
