import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import moment from "moment";

const ChatList = ({ chat }) => {
  console.log(chat?.user?.image);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chat?.user?.name}
          </Text>
          <Text style={styles.time}>
            {moment(chat?.lastMessage?.createdAt).fromNow()}
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.chat}>
          {chat?.lastMessage?.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  chat: {
    color: "gray",
  },
});

export default ChatList;
