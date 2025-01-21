import GameCard from "@/components/ui/GameCard";
import ImageCard from "@/components/ui/ImageCard";
import NewsCard from "@/components/ui/NewsCard";
import SystemCard from "@/components/ui/SystemCard";
import React from "react";
import { ScrollView, View } from "react-native";

function News() {
  return (
    <ScrollView style={{ backgroundColor: "#FCFAFA" }}>
      <View style={{ gap: 15, paddingHorizontal: 20 }}>
        <View />
        <ImageCard />
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#EEEEEE" }}
        />
        <NewsCard />
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#EEEEEE" }}
        />
        <NewsCard />
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#EEEEEE" }}
        />
        <GameCard />
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#EEEEEE" }}
        />
        <NewsCard />
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#EEEEEE" }}
        />
        <GameCard />
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#EEEEEE" }}
        />
        <SystemCard />
        <View />
        <View />
      </View>
    </ScrollView>
  );
}

export default News;
