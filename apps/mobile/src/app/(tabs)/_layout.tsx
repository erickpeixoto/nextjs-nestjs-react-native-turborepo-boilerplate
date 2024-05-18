import { Stack } from "expo-router";

export default function LayoutTabs() {
  return (
    <Stack>
      <Stack.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerShown: false
        }}
      />
    </Stack>

  );
}