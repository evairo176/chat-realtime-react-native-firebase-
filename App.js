import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Abc from "./src/component/chat/Abc";
import ChatList from "./src/component/chat/ChatList";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatList />
      <ChatList />
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
