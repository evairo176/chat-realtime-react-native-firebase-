import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ChatList = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            Dicki
          </Text>
          <Text style={styles.time}>8:30</Text>
        </View>
        <Text numberOfLines={2} style={styles.chat}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic
          natus, praesentium, cupiditate incidunt assumenda obcaecati accusamus
          magni ducimus nobis nesciunt ipsam numquam voluptate, commodi
          molestias ipsum rerum exercitationem aut?
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
