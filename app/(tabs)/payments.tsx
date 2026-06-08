import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS } from "../../src/constant/uiConstants";

export default function PaymentsScreen() {

   const router = useRouter();
  return (
    <ScrollView
      className="flex-1 p-3"
      style={{ backgroundColor: COLORS.background }}
      showsVerticalScrollIndicator={false}
    >
     
      <Text
        style={{
          color: COLORS.textPrimary,
          fontSize: FONTS.title,
          fontWeight: "700",
        }}
      >
        Payments & Billing
      </Text>

      <Text
        style={{
          color: COLORS.textSecondary,
          fontSize: FONTS.small,
          marginTop: 4,
          marginBottom: 16,
        }}
      >
        Manage your tuition, fees, and payment methods.
      </Text>

      
      <View
        className="bg-white rounded-2xl p-4"
        style={{
          borderLeftWidth: 4,
          borderLeftColor: COLORS.primary,
        }}
      >
        <View className="flex-row justify-between items-center">
          <Text
            style={{
              color: COLORS.textSecondary,
              fontSize: 10,
              fontWeight: "600",
            }}
          >
            CURRENT BALANCE
          </Text>

         <View className="px-2 py-1 rounded-full flex-row items-center" style={{backgroundColor: COLORS.bg_red}}>
       <Image source={require("../../src/assets/payments/dueIcon.png")} style={{ width: 10, height: 10, marginRight: 4 }} resizeMode="contain" />

        <Text style={{ color: "#E53935", fontSize: 10, fontWeight: "600", }}>
          Due in 5 days
        </Text>
     </View>
        </View>

        <Text
          style={{
            color: "#0A1E80",
            fontSize: 34,
            fontWeight: "700",
            marginTop: 8,
          }}
        >
          $2,450.00
        </Text>

        <View className="flex-row justify-between mt-4">
          <Text
            style={{
              color: COLORS.textSecondary,
              fontSize: 12,
            }}
          >
            Fall Semester Tuition
          </Text>

          <Text
            style={{
              color: COLORS.textSecondary,
              fontSize: 12,
            }}
          >
            $5,000 Total
          </Text>
        </View>

        <View className="flex-row justify-end mt-2">
         
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            51% Paid
          </Text>
        </View>

      <TouchableOpacity className="rounded-xl py-4 mt-5 flex-row items-center justify-center"
          style={{ backgroundColor: COLORS.primary }}
          onPress={() => router.push("/payment-success")}>
     
      <Image source={require("../../src/assets/payments/paynowIcon.png")}
         style={{ width: 15, height: 15, marginRight: 8 }}
         resizeMode="contain"/>

  <Text
    style={{
      color: COLORS.white,
      textAlign: "center",
      fontSize: FONTS.subtitle,
      fontWeight: "700",
    }}
  >
    Pay Now
  </Text>
</TouchableOpacity>
      </View>

      
      <Text
        style={{
          color: COLORS.textPrimary,
          fontSize: FONTS.subtitle,
          fontWeight: "700",
          marginTop: 20,
          marginBottom: 12,
        }}
      >
         Payment Methods
      </Text>

      <View className="bg-white rounded-2xl p-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <View className="w-10 h-10  rounded-lg items-center justify-center" style={{ backgroundColor: COLORS.gray_bg }} >
                <Image source={require("../../src/assets/payments/visaIcon.png")}
         style={{ width: 15, height: 15}}
         resizeMode="contain"/>

            </View>

            <View className="ml-3">
              <Text
                style={{
                  color: COLORS.textPrimary,
                  fontWeight: "600",
                }}
              >
                Visa ending in 4242
              </Text>

              <Text
                style={{
                  color: COLORS.textSecondary,
                  fontSize: 11,
                }}
              >
                Expires 12/25 • Primary
              </Text>
            </View>
          </View>

          <Image source={require("../../src/assets/payments/threedot.png")}
         style={{ width: 15, height: 15}}
         resizeMode="contain"/>
        </View>

        <View className="flex-row justify-between items-center mt-4">
          <View className="flex-row items-center">
            <View className="w-10 h-10  rounded-lg items-center justify-center" style={{ backgroundColor: COLORS.black_bg }} >
                <Image source={require("../../src/assets/payments/digitalIcon.png")}
         style={{ width: 15, height: 15}}
         resizeMode="contain"/>

            </View>

            <View className="ml-3">
              <Text
                style={{
                  color: COLORS.textPrimary,
                  fontWeight: "600",
                }}
              >
                Digital Wallet
              </Text>

              <Text
                style={{
                  color: COLORS.textSecondary,
                  fontSize: 11,
                }}
              >
                Connected
              </Text>
            </View>
          </View>

            <Image source={require("../../src/assets/payments/threedot.png")}
         style={{ width: 15, height: 15}}
         resizeMode="contain"/>
        </View>

        <TouchableOpacity
          className="rounded-lg py-3 mt-4"
          style={{
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "#D0D0D0",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLORS.primary,
              fontWeight: "600",
            }}
          >
            + Add Payment Method
          </Text>
        </TouchableOpacity>
      </View>

  
      <View className="flex-row justify-between items-center mt-6 mb-3">
        <Text
          style={{
            color: COLORS.textPrimary,
            fontSize: FONTS.subtitle,
            fontWeight: "700",
          }}
        >
          Recent Payments
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>

      
      <View className="bg-white rounded-2xl p-4 mb-2 flex-row items-center">
        <View className="w-10 h-10 rounded-full bg-[#51B2FE33] items-center justify-center">
           <Image source={require("../../src/assets/payments/blueTickIcon.png")}
         style={{ width: 15, height: 15}}
         resizeMode="contain"/>
        </View>

        <View className="flex-1 ml-3">
          <Text
            style={{
              color: COLORS.textPrimary,
              fontWeight: "600",
            }}
          >
            Tuition Installment
          </Text>

          <Text
            style={{
              color: COLORS.textSecondary,
              fontSize: 11,
            }}
          >
            Oct 15, 2023 • Visa*4242
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: COLORS.textPrimary,
              fontWeight: "700",
            }}
          >
            -$1,250.00
          </Text>

       <View className="flex-row items-center">
  <Image
    source={require("../../src/assets/payments/receiptIcon.png")}
    style={{ width: 10, height: 10, marginRight: 4 }}
    resizeMode="contain"
  />

  <Text
    style={{
      color: COLORS.primary,
      fontSize: 11,
    }}
  >
    Receipt
  </Text>
</View>
        </View>
      </View>

    
      <View className="bg-white rounded-2xl p-4 mb-5 flex-row items-center">
        <View className="w-10 h-10 rounded-full bg-[#51B2FE33] items-center justify-center">
           <Image source={require("../../src/assets/payments/blueTickIcon.png")}
         style={{ width: 15, height: 15}}
         resizeMode="contain"/>
        </View>

        <View className="flex-1 ml-3">
          <Text
            style={{
              color: COLORS.textPrimary,
              fontWeight: "600",
            }}
          >
            Library Fee
          </Text>

          <Text
            style={{
              color: COLORS.textSecondary,
              fontSize: 11,
            }}
          >
            Sep 28, 2023 • u' allet
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: COLORS.textPrimary,
              fontWeight: "700",
            }}
          >
            -$45.00
          </Text>

         <View className="flex-row items-center">
  <Image
    source={require("../../src/assets/payments/receiptIcon.png")}
    style={{ width: 10, height: 10, marginRight: 4 }}
    resizeMode="contain"
  />

  <Text
    style={{
      color: COLORS.primary,
      fontSize: 11,
    }}
  >
    Receipt
  </Text>
</View>
        </View>
      </View>
    </ScrollView>
  );
}