import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import link from "../link";
import Icon from "react-native-vector-icons/FontAwesome";
const APi = "https://api.themoviedb.org/3/discover/movie";
const reviewUrl = "https://image.tmdb.org/t/p/original";
import API from "../link";

const ReviewTab = ({ id }) => {
  const [review, setReview] = useState([]);
  const [vote, setVote] = useState();

  const getData = async () => {
    const response = await axios.get(`${link.DETAIL_API_URL}/${id}`, {
      params: {
        // api_key: "3e00879c372fa95105031194f23c87d2",
        api_key: API.API_KEY,
        append_to_response: "reviews",
      },
    });
    console.log("review", response);
    setReview(response.data.reviews.results);
    console.log("vote", response);
    setVote(response.data.vote_average);
  };
  // getData();
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ width: "100%", backgroundColor: "#0F1B2B" }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              color: "#fff",
              fontSize: "24px",
              marginRight: "10px",
            }}
          >
            {(vote / 2).toFixed(1)}
          </Text>
          <Icon
            name="star"
            color="#f8c42f"
            size={20}
            style={{ marginTop: "8px" }}
          ></Icon>
        </View>
        <Text style={{ color: "#878d95" }}>{review.length} Reviews</Text>
      </View>
      {review.map((item, index) => {
        return (
          <View style={{ margin: "15px" }} key={index}>
            <View style={{ backgroundColor: "#2b3543", padding: "15px" }}>
              <Text></Text>
              <Icon name="star" color="#f8c42f" size={20}></Icon>
              <Text style={{ color: "#bfc2c7", marginTop: "5px" }}>
                {item.content.split(".")[0] +
                  (item.content.includes(".") ? "." : "")}
              </Text>
            </View>
            <View
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderTopWidth: 20,
                borderRightWidth: 10,
                borderBottomWidth: 0,
                borderLeftWidth: 10,
                borderTopColor: "#2b3543",
                borderRightColor: "transparent",
                borderBottomColor: "transparent",
                borderLeftColor: "transparent",
                marginLeft: "13px",
              }}
            ></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <Image
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                source={
                  item.author_details.avatar_path
                    ? {
                        uri: `${reviewUrl}${item.author_details.avatar_path}`,
                      }
                    : require("../assets/avatar.jpg")
                }
              />
              <View style={{ marginLeft: "15px" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    marginTop: "4px",
                    marginBottom: "5px",
                  }}
                >
                  {item.author_details.name}
                </Text>
                <Text style={{ color: "#878d95" }}>
                  {item.created_at.slice(0, 10)}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ReviewTab;

const styles = StyleSheet.create({});
