import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ClockIcon from "../../assets/icons/clock.svg";
import CommentIcon from "../../assets/icons/comment.svg";

function NewsCard() {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Text style={style.subText}>News</Text>
        <Text style={style.headline}>
          Lorem Ipsum is a term for a completely meaningless text - sometimes
          read
        </Text>
        <View style={[style.flex,{gap:7}]}>
          <View style={style.flex}>
            <ClockIcon height={14} width={14} color={"#145E94"} />
            <Text style={style.smText}>an hour ago</Text>
          </View>
          <View style={style.flex}>
            <CommentIcon height={14} width={14} color={"#145E94"} />
            <Text style={style.smText}>26 comments</Text>
          </View>
        </View>
      </View>
      <Image
        style={{
          height: 84,
          width: 103,
        }}
        source={require("../../assets/images/news.png")}
      />
    </View>
  );
}

export default NewsCard;
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
  },
  body: {
    flex: 1,
    gap: 2,
  },
  headline: {
    color: "#000",
    fontSize: 16,
    lineHeight: 19,
  },
  subText: {
    color: "#145E94",
    fontSize: 14,
  },
  smText: {
    color: "#B0AAAA",
    fontSize: 14,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
