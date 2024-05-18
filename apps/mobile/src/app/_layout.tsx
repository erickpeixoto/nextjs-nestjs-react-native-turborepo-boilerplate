import "@/styles/global.css";
import { Stack } from "expo-router";
import { Provider } from "./providers";

export default function Layout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="profile/index"
          options={{
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="user/[id]"
          options={{
            title: "User Details",
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
}
