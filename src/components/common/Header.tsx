import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  const handleMenu = () => {
    console.log("Open Menu");
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: 12,
          backgroundColor: "#FFFFFF",
        }}
      >
        
        <TouchableOpacity onPress={handleMenu}>
          <Image source={require("../../assets/mainImages/Button - Menubutton.png")}
          style={{ width: 40, height: 40, borderRadius: 20,}} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: "700", }} >
          Student
        </Text>

        <Image source={require("../../assets/mainImages/StudentProfilePhoto.png")}
          style={{ width: 40, height: 40, borderRadius: 20, }}/>
      </View>
    </SafeAreaView>
  );
}