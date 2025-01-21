import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Img from "../assets/images/user.svg"

const Header: React.FC = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={[style.container, { marginTop: inset.top }]}>
      <StatusBar backgroundColor="#1F1B1B" style="light" />
      <View style={style.avatar}>
        <Img height={41} width={41}/>
      </View>
      <View>
        <Text style={style.headline}>Noam Penn (Panther)</Text>
        <Text style={style.subText}>a tennis player</Text>
      </View>
    </View>
  );
};

export default Header;
const style = StyleSheet.create({
  container: {
    backgroundColor: "#1F1B1B",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    gap:15,
    alignItems:"center"
  },
  avatar: {
    height: 45,
    width: 45,
    borderColor: "#4774AD",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  headline: {
    color: "#fff",
    fontSize: 14,
  },
  subText: {
    color: "#B0AAAA",
    fontSize: 12,
  },
});
