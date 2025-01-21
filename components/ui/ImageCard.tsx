import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import ClockIcon from "../../assets/icons/clock.svg";

function ImageCard() {
  return (
    <ImageBackground
      style={style.container}
      source={require("../../assets/images/bg.png")}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]}
        style={style.body}
      >
        <Image
          style={{
            width: 79,
            height: 29,
            position: "absolute",
            top: 15,
            left: 10,
          }}
          source={require("../../assets/images/sign.png")}
        />
        <Text style={style.headline}>
          Lorem Ipsum is a nickname for such a completely meaningless text -
          some
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={style.subText}>Lorem Ipsum is</Text>
          <View
            style={{
              height: 3,
              width: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              marginLeft: 5,
              marginTop: 3,
            }}
          />
          <Text style={style.smText}>4 minutes of reading</Text>
          <ClockIcon color={"#fff"} />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

export default ImageCard;
const style = StyleSheet.create({
  container: {
    height: 179,
    borderRadius: 12,
    overflow: "hidden",
  },
  body: {
    height: 179,
    width: "100%",
    justifyContent: "flex-end",
    padding: 15,
    position: "relative",
  },
  headline: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 23,
  },
  subText: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 26,
  },
  smText: {
    color: "#fff",
    fontSize: 12,
  },
});
