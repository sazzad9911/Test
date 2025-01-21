import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Link, usePathname, RelativePathString } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RegisterIcon from "../assets/icons/register.svg";
import GameIcon from "../assets/icons/game.svg";
import RankIcon from "../assets/icons/rank.svg";
import NewsIcon from "../assets/icons/news.svg";
const {width}=Dimensions.get("window")

const TABS = [
  {
    key: "register",
    name: "Register",
    Icon: RegisterIcon,
    disabled: true,
  },
  {
    key: "/",
    name: "Game board",
    Icon: GameIcon,
    disabled: false,
  },
  {
    key: "rank",
    name: "Rank",
    Icon: RankIcon,
    disabled: true,
  },
  {
    key: "/news",
    name: "News",
    Icon: NewsIcon,
    disabled: false,
  },
];

const TabBar: React.FC<BottomTabBarProps> = () => {
  const pathname = usePathname();

  return (
    <View style={style.container}>
      {TABS.map(({ key, name, Icon, disabled }, i) => {
        const isActive = pathname === key; // Check if the tab is active
        const iconColor = isActive ? "orange" : "white"; // Active tab color

        return (
          <Link
            href={key as RelativePathString}
            asChild
            key={i}
            disabled={disabled}
          >
            <TouchableOpacity
              style={style.button}
              disabled={disabled}
            >
              <Icon width={25} height={25} color={iconColor} />
              <Text style={[style.text, isActive && style.activeText]}>
                {name}
              </Text>
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
};

export default TabBar;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#1F1B1B",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection:"row"
  },
  text: {
    color: "#FFFF",
    fontSize: 14,
  },
  activeText: {
    color: "orange", // Highlight active tab text
  },
  button: {
   justifyContent:"center",
   alignItems:"center",
   width:width/4-10
  },
  
});
