import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "@/styles/global.css";
import { useEffect, useState } from "react";
import { User, apiClient, apiClientQuery } from "ts-contract";
import { Link } from "expo-router";

export default function App() {

  const [data, setData] = useState<User[]>();

  const { data: dataQuery, isLoading} = apiClientQuery.users.getAll.useQuery(['users']);
  console.log(dataQuery);

  useEffect(() => {
    apiClient.users.getAll().then((res) => setData(res.body) );
    
  }, []);

  return (
    <View style={styles.container}>
          <Text className="font-bold mt-3">List of users coming from Fetch API</Text>
          <Text className="p-3 bg-slate-600 text-slate-200 rounded mt-2">
          {JSON.stringify(data)}
      </Text>
      <Link href="/profile">Profile</Link>
      <Link href="/user/12552">Profile Details</Link>
      <Link href="/dashboard">Dashboard</Link>
      <StatusBar style="auto" />

      <Text className="font-bold mt-3">List of users coming from React Query </Text>
      <Text className="p-3 bg-slate-600 text-slate-200 rounded mt-2">
        {isLoading && "Loading..."}
        {JSON.stringify(dataQuery?.body)}
      </Text>
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
