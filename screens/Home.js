import React from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Home(params) {
    const navigation = params.navigation;
  return (
    <View
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "WhiteSmoke",
        flex: 1,
      }}
    >
        <ScrollView> 
            <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "orange",
          padding: 10,
          paddingTop: 50,
        }}
      >
          <TouchableOpacity onPress={() => {
          navigation.navigate("Login");
        }} >
        <FontAwesome name="arrow-circle-left" size={35}/>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginBottom: 5, color: "black", fontFamily:"Trebuchet MS", textAlign: "center", backgroundColor: "orange" }}>Home</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
        </View>
      </View>
      <View style={{
          flexDirection: "row",
          justifyContent: "space-around"
      }}
      >     
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 50,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://www.gizmochina.com/wp-content/uploads/2021/09/Galaxy-S22-render-1024x576.jpeg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Samsung Galaxy Edge s22</Text>
                <Text style={{ paddingBottom:10,fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHS 5,482.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "orange",
        }}
      >
        <Text style={{color: "white" }}>Add to cart</Text>
      </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 50,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://images.samsung.com/africa_en/smartphones/galaxy-s21/buy/galaxy-s21ultra-phantom-black.png",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Samsung Galaxy Ultra s21</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHS 6,693.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "orange",
        }}
      >
        <Text style={{color: "white" }}>Add to cart</Text>
      </TouchableOpacity>
            </View>
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around"
      }}
      >
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 20,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://i.gadgets360cdn.com/large/samsung_galaxy_s20_ultra_image_1582030200244.jpg?downsize=950:*",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Samsung Galaxy Ultra s20</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHS 7,270.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "orange",
        }}
      >
        <Text style={{color: "white" }}>Add to cart</Text>
      </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 20,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://cdn.movertix.com/media/catalog/product/cache/image/500x404/s/a/samsung-galaxy-s6-edge-plus-silver-32-gb-g928-8806086997409_1.jpg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Samsung Galaxy S6 Edge</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHS 2,750.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "orange",
        }}
      >
        <Text style={{color: "white" }}>Add to cart</Text>
      </TouchableOpacity>
            </View>
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around"
      }}
      >
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 20,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://reapp.com.gh/wp-content/uploads/2019/10/ytrd.jpeg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>iPhone X 256GB</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHS 2,809.00 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "orange",
        }}
      >
        <Text style={{color: "white" }}>Add to cart</Text>
      </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    width: 170,
                    alignItems: "center",
                    borderRadius: 30,
                    marginTop: 20,
                }}
            >
                <Image
                    style={{
                    borderRadius: 20,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 100,
                    height: 100,
                    }}
                    source={{
                    uri: "https://reapp.com.gh/wp-content/uploads/2019/09/11515701362718-e1567447129901.jpg",
                    }}
                />
                <Text style={{ fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>iPhone Xs Max 64GB</Text>
                <Text style={{ paddingBottom:10, fontSize: 15, color: "black", fontFamily:"Trebuchet MS" }}>Price: GHS 3,723.63 </Text>
                <TouchableOpacity
        onPress={() => {
          navigation.navigate("info");
        }}
        style={{
            marginBottom: 8,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "orange",
        }}
      >
        <Text style={{color: "white" }}>Add to cart</Text>
      </TouchableOpacity>
            </View>
        </View>
            </ScrollView>
    
    </View>
  );
}
