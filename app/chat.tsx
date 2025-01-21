import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RightArrow from "../assets/icons/rightArrow.svg";
import ShareIcon from "../assets/icons/share.svg";
import Avatar1 from "../assets/images/avater2.svg";
import PlusIcon from "../assets/icons/plus.svg";
import SendIcon from "../assets/icons/send.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import ChatBubble from "@/components/ui/ChatBubble";

function Chat() {
  const inset = useSafeAreaInsets();
  const [text, setText] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hey guys, thanks a lot for the impressive game, it was fun!",
      isOwn: false,
      tail: false,
      isName: true,
    },
    {
      id: 2,
      message:
        "Certainly, it was fantastic to see how long each point lasted. It's always fun to play with players",
      isOwn: false,
      tail: true,
      isName: false,
    },
    {
      id: 3,
      message: "The dedication of the ball was stunning.",
      isOwn: false,
      tail: true,
      isName: true,
    },
    {
      id: 4,
      message: "The dedication of the ball was stunning.",
      isOwn: false,
      tail: true,
      isName: true,
    },
    {
      id: 5,
      message: "I'm crossing my fingers that the next game will be crazy!",
      isOwn: true,
      tail: true,
      isName: true,
    },
  ]);
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [text]);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
      <TouchableOpacity
        onPress={() => router.back()}
        style={[
          { marginTop: inset.top, justifyContent: "flex-end" },
          style.header,
        ]}
      >
        <Text style={style.headline}>
          Monday, February 23 | 14:00 - Tel Aviv
        </Text>
        <RightArrow />
      </TouchableOpacity>
      <View
        style={[
          style.header,
          {
            borderWidth: 1,
            borderColor: "#eeeeee",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <ShareIcon color={"#000"} height={25} width={25} />
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <View style={{ position: "relative" }}>
            <Avatar1 height={32} width={32} />
            <View style={style.act} />
          </View>
          <View style={{ position: "relative" }}>
            <Avatar1 height={32} width={32} />
            <View style={style.act} />
          </View>
          <View style={{ position: "relative" }}>
            <Avatar1 height={32} width={32} />
            <View style={style.act} />
          </View>
          <View style={{ position: "relative" }}>
            <Avatar1 height={32} width={32} />
            <View style={style.act} />
          </View>
        </View>
        <View />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1, paddingHorizontal: 20 }}
        >
          {messages?.map((doc, i) => (
            <ChatBubble
              key={i}
              isOwnMessage={doc.isOwn}
              bubbleColor={!doc.isOwn ? "#fff" : "#3498DB"}
              tailColor={!doc.isOwn ? "#fff" : "#3498DB"}
              withTail={doc.tail}
              maxWidth={200}
              onPress={() => console.log("Bubble Pressed!")}
            >
              {doc.isName && (
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: doc.isOwn ? "#fff" : "#000",
                  }}
                >
                  Penn N. (panther)
                </Text>
              )}
              <Text
                style={{ fontSize: 16, color: doc.isOwn ? "#fff" : "#000" }}
              >
                {doc.message}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: doc.isOwn ? "#fff" : "#000",
                  textAlign: "right",
                }}
              >
                20:00
              </Text>
            </ChatBubble>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <PlusIcon height={26} width={26} />
        <TextInput
          value={text}
          onChangeText={(e) => setText(e)}
          placeholder="Add a comment..."
          style={{ flex: 1 }}
        />
        <TouchableOpacity
          onPress={() => {
            setMessages((d) => [
              ...d,
              {
                id: d.length + 1,
                message: text,
                isOwn: true,
                tail: true,
                isName: true,
              },
            ]);
            setText("");
          }}
          style={style.button}
        >
          <SendIcon />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Chat;
const style = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headline: {
    fontSize: 18,
    color: "#145E94",
  },
  act: {
    backgroundColor: "#88EC65",
    height: 9,
    width: 9,
    borderRadius: 7,
    position: "absolute",
    bottom: 2,
    right: -1,
  },
  button: {
    backgroundColor: "#145E94",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  chatBubble: {
    padding: 10,
  },
  text: {
    color: "black",
  },
});
