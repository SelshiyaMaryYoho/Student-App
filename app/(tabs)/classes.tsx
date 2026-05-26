import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function ClassesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold">
        Classes Screen
      </Text>
    </SafeAreaView>
  );
}