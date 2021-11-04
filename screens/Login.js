import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "orange",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, color: "black", fontFamily:"Trebuchet MS" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>Panda Phones</Text>
      <Image
        style={{
          borderRadius: 20,
          marginTop: 40,
          marginBottom: 30,
          width: 300,
          height: 300,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
        }}
      />
    
    
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{color: "white" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}