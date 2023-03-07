import { View, Text, FlatList } from "react-native";
import React from "react";
import chats from "../.././assets/data/chats.json";
import ChatList from "../chat/ChatList";

const ChatScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatList chat={item} />}
    />
  );
};

export default ChatScreen;
