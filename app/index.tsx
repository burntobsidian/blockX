import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "../components/Themed";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 flex-row px-4"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <View>
        <View className="flex-1 border-l-2 border-red-500"></View>
      </View>
    </ScrollView>
  );
}
