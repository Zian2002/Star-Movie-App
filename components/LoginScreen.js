import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-web";
import Icon from "react-native-vector-icons/AntDesign";

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        backgroundColor: "#0F1B2B",
      }}
    >
      <Text
        style={{
          color: "#878d95",
          marginLeft: "-238px",
          fontSize: "15px",
          fontWeight: "bold",
          marginTop: "100px",
        }}
      >
        USER NAME
      </Text>
      <TouchableOpacity style={{ position: "relative", marginTop: "15px" }}>
        <Icon
          name="user"
          color="#959aa1"
          size={25}
          style={{ position: "absolute", top: "7px", left: "5px" }}
        ></Icon>
        <TextInput
          style={{
            backgroundColor: "#2b3543",
            width: "324px",
            height: "44px",
            borderRadius: "5px",
          }}
        ></TextInput>
      </TouchableOpacity>
      <Text
        style={{
          color: "#878d95",
          marginLeft: "-238px",
          fontSize: "15px",
          fontWeight: "bold",
          marginTop: "15px",
        }}
      >
        PASSWORD
      </Text>
      <TouchableOpacity style={{ position: "relative", marginTop: "15px" }}>
        <Icon
          name="lock"
          color="#959aa1"
          size={25}
          style={{ position: "absolute", top: "7px", left: "5px" }}
        ></Icon>
        <TextInput
          style={{
            backgroundColor: "#2b3543",
            width: "324px",
            height: "44px",
            borderRadius: "5px",
          }}
        ></TextInput>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
