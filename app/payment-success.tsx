import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, FONTS } from "../src/constant/uiConstants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaymentSuccess() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 16,
        paddingTop: 20,
      }}
    >
      
      <View style={{ flex: 1, alignItems: "center" }}>
        
        <View
  style={{
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#00390A1A",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  }}
>
  <Image
    source={require("../src/assets/payments/checkInIcon.png")}
    style={{ width: 40, height: 40 }}
    resizeMode="contain"
  />
</View>

        
        <Text
          style={{
            marginTop: 16,
            color: COLORS.textPrimary,
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          Check-in Successful
        </Text>

       
        <View
          style={{
            width: "100%",
            backgroundColor: COLORS.white,
            borderRadius: 14,
            padding: 16,
            marginTop: 22,
            elevation: 2,
          }}
        >
          <Text
            style={{
              color: "#8D8D8D",
              fontSize: 10,
              fontWeight: "600",
              letterSpacing: 1,
            }}
          >
            CURRENT CLASS
          </Text>

          <Text
            style={{
              color: COLORS.textPrimary,
              fontSize: 28,
              fontWeight: "700",
              marginTop: 4,
            }}
          >
            Advanced Physics
          </Text>

          <View
            style={{
              height: 1,
              backgroundColor: "#E8E8E8",
              marginVertical: 14,
            }}
          />

          
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View className= "rounded-full justify-center items-center p-3"
              style={{ 
                backgroundColor: COLORS.bg_light_gray,       
              }}
            >
               <Image
    source={require("../src/assets/payments/timeIcon.png")}
    style={{ width: 15, height: 15 }}
    resizeMode="contain"
  />
            </View>

            <Text
              style={{
                marginLeft: 10,
                color: COLORS.textSecondary,
                fontSize: 13,
              }}
            >
              08:45 AM
            </Text>
          </View>

         
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
           
              <View className= "rounded-full justify-center items-center p-3"
              style={{ 
                backgroundColor: COLORS.bg_light_gray,       
              }}
            >
               <Image
    source={require("../src/assets/payments/timeIcon.png")}
    style={{ width: 15, height: 15 }}
    resizeMode="contain"
  />
            
            </View>

            <Text
              style={{
                marginLeft: 10,
                color: COLORS.textSecondary,
                fontSize: 13,
              }}
            >
              Prof. Sarah Jenkins
            </Text>
          </View>
        </View>

        <View
  style={{
    marginTop: 18,
    backgroundColor: "#D9EEFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  }}
>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={require("../src/assets/payments/fireIcon.png")}
      style={{ width: 15, height: 15, marginRight: 6 }}
      resizeMode="contain"
    />

    <Text
      style={{
        color: COLORS.primary,
        fontSize: 12,
        fontWeight: "700",
      }}
    >
      12 Class Attendance Streak!
    </Text>
  </View>
</View>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          backgroundColor: COLORS.primary,
          paddingVertical: 15,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            textAlign: "center",
            fontSize: FONTS.subtitle,
            fontWeight: "700",
          }}
        >
          Done
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}