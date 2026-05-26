import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function PaymentsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold">
        Payments Screen
      </Text>
    </SafeAreaView>
  );
}