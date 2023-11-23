import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-web";
import Icon from "react-native-vector-icons/FontAwesome";

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
          style={{ position: "absolute", top: "9px", left: "10px" }}
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
          style={{ position: "absolute", top: "9px", left: "10px" }}
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
      <TouchableOpacity>
        <Text style={{ color: "#878d95", marginTop: "30px" }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#e51937",
          width: "324px",
          height: "44px",
          borderRadius: "5px",
          marginTop: "30px",
          display: "flex",
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "100px",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#1aa9e1",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="twitter" color="#fff" size={25} style={{}}></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#3b5a9a",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="facebook" color="#fff" size={25} style={{}}></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#cb3e2d",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="google-plus" color="#fff" size={25} style={{}}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
