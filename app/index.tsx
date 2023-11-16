import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";
import { ScrollView, StyleSheet } from "react-native";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 flex-row px-4"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <View className="flex-1 border-l-2 border-red-500"></View>
    </ScrollView>
  );
}
