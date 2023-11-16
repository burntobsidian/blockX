import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, paddingHorizontal: 16 }}>
      <Text>hello</Text>
    </View>
  );
}
