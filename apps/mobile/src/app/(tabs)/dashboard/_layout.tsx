import { Tabs } from "expo-router";

export default function DashboardLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Painel",
          
        }}
      />
    </Tabs>
  );
}
