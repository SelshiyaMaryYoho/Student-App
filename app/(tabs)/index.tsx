import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className=" bg-[#F5F7FB] p-5">
      
      <View className="bg-white p-5 rounded-3xl ">
        <Text className="text-lg font-semibold">
          Today's Classes
        </Text>
      </View>

    </SafeAreaView>
  );
}