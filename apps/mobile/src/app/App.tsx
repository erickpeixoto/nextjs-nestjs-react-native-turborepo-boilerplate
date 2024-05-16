import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../styles/global.css"

export default function App() {


  return (

      <View style={styles.container}>
        <Text className="text-red-500 container">Hey there hi</Text>
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
