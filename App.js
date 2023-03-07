import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Abc from "./src/component/chat/Abc";
import ChatList from "./src/component/chat/ChatList";

export default function App() {
  const chat = {
    id:"1",
    user:{
      image:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
      name:"Dicki Prasetya"
    },
    lastMessage:{
      text:"Hello, world",
      createdAt:"08:33"
    }
  }
  return (
    <View style={styles.container}>
      <ChatList chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
