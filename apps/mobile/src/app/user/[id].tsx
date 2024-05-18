import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function UserDetails() {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View>
      <Text>User Details: </Text>
      <Text>{id}</Text>
    </View>
  );
}
