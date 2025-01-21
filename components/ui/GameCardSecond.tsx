import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ClockIcon from "../../assets/icons/clock.svg";
import CommentIcon from "../../assets/icons/comment.svg";
import CalenderIcon from "../../assets/icons/calender.svg";
import ShareIcon from "../../assets/icons/share.svg";
import Avatar2 from "../../assets/images/avater2.svg";
import Avatar3 from "../../assets/images/avater3.svg";
import Flag from "../../assets/images/flag.svg";
import C from "../../assets/icons/plus.svg";
import { LinearGradient } from "expo-linear-gradient";
import CloudIcon from "../../assets/icons/cloud.svg";
import PerIcon from "../../assets/icons/precip.svg";
import { router } from "expo-router";

function GameCardSecond() {
    
  return (
    <View style={style.container}>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 5 }}>
          <Text style={style.headline}>Yarkon Park, Tel Aviv | Court #1</Text>
          <View style={[style.flex, { gap: 7 }]}>
            <View style={style.flex}>
              <CalenderIcon height={14} width={14} color={"#145E94"} />
              <Text style={style.smText}>02/24/2023</Text>
            </View>
            <View style={style.flex}>
              <ClockIcon height={14} width={14} color={"#145E94"} />
              <Text style={style.smText}>14:00</Text>
            </View>
            <View style={style.flex}>
              <CommentIcon height={14} width={14} color={"#145E94"} />
              <Text style={style.smText}>26 messages</Text>
            </View>
          </View>
        </View>
        <ShareIcon color={"#145E94"} />
      </View>
      <View style={{ width: "100%", height: 1, backgroundColor: "#EEEEEE" }} />
      <View style={style.bottomBox}>
        <View style={{ alignItems: "center" }}>
          <View style={style.avatar}>
            <Avatar3 />
            <Flag style={{ position: "absolute", bottom: 0, right: -2 }} />
          </View>
          <Text style={[style.subText, { fontSize: 14 }]}>Mandler T.</Text>
          <Text style={[style.smText, { fontSize: 12 }]}>(PRO)</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={style.avatar}>
            <Avatar2 />
            <Flag style={{ position: "absolute", bottom: 0, right: -2 }} />
          </View>
          <Text style={[style.subText, { fontSize: 14 }]}>Oz Y.</Text>
          <Text style={[style.smText, { fontSize: 12 }]}>(The Wiz)</Text>
        </View>
        <View style={{ alignItems: "center", gap: 8 }}>
          <Text style={{ fontSize: 21, color: "#145E94" }}>VS.</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={[style.avatar, { borderStyle: "dashed" }]}>
            <C />
            <Flag style={{ position: "absolute", bottom: 0, right: -2 }} />
          </View>
          <Text style={[style.subText, { fontSize: 14 }]}>player </Text>
          <Text style={[style.smText, { fontSize: 12 }]}>(nickname)</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={[style.avatar, { borderStyle: "dashed" }]}>
            <C />
            <Flag style={{ position: "absolute", bottom: 0, right: -2 }} />
          </View>
          <Text style={[style.subText, { fontSize: 14 }]}>player</Text>
          <Text style={[style.smText, { fontSize: 12 }]}>(nickname)</Text>
        </View>
      </View>
      <View style={{ width: "100%", height: 1, backgroundColor: "#EEEEEE" }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ paddingHorizontal: 15, gap: 3, paddingVertical: 8 }}>
          <View style={style.flex}>
            <PerIcon />
            <Text style={style.smText}>25% Precipitation</Text>
          </View>
          <View style={style.flex}>
            <CloudIcon />
            <Text style={style.smText}>Weather - cloudy</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>router.push("/chat")}
          style={{
            height: "100%",
            width: 130,
            borderBottomRightRadius: 12,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            style={{
              height: "100%",
              width: 130,
              borderBottomRightRadius: 12,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#34506D", "#3498DB"]}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>
              Chat
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GameCardSecond;
const style = StyleSheet.create({
  container: {
    borderWidth: 1.2,
    borderColor: "#EEEEEE",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    gap: 2,
  },
  headline: {
    color: "#145E94",
    fontSize: 16,
  },
  subText: {
    color: "#000",
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
  avatar: {
    width: 59,
    height: 59,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#145E94",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  bottomBox: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  clip: {
    borderWidth: 1,
    borderColor: "#EEEEEE",
    height: 20,
    width: 48,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
