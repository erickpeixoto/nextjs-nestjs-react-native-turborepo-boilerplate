import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { apiClient } from "../../../../packages/ts-contract/src/index";
import "@/styles/global.css";
import { useEffect, useState } from "react";
import { User } from "ts-contract";

export default function App() {

  const [data, setData] = useState<User[]>();

  useEffect(() => {
    apiClient.users.getAll().then((res) => setData(res.body) );
    
  }, []);

  return (
    <View style={styles.container}>
      <Text className="text-red-500 container">
          {JSON.stringify(data)}
      </Text>
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
