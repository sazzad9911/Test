import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ClockIcon from "../../assets/icons/clock.svg";
import CommentIcon from "../../assets/icons/comment.svg";
import ShareIcon from "../../assets/icons/share.svg";

function SystemCard() {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Text style={style.subText}>System message</Text>
        <Text style={style.headline}>
          Lorem Ipsum is a term for a completely common meaningless text -
          sometimes also called Lorem Ipsum!
        </Text>
        <View style={[style.flex, { gap: 7 }]}>
          <View style={style.flex}>
            <ClockIcon height={14} width={14} color={"#145E94"} />
            <Text style={style.smText}>an hour ago</Text>
          </View>
          
        </View>
      </View>
      <ShareIcon />
    </View>
  );
}

export default SystemCard;
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  body: {
    flex: 1,
    gap: 5,
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
